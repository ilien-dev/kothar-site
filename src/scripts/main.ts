const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));

/* ---------- theme: light, dark or follow the system ---------- */
type Choice = 'light' | 'dark' | 'system';
const PAPER = '#ECEEF0';
const INK = '#141619';
const sysLight = window.matchMedia('(prefers-color-scheme: light)');
const root = document.documentElement;
const tsw = $('#tsw');
const tswBtns = $$<HTMLButtonElement>('[data-theme-choice]');
const tmBtn = $<HTMLButtonElement>('#tm-btn');

function setMenu(open: boolean, focusBtn = false) {
  if (!tsw || !tmBtn) return;
  tsw.dataset.menu = open ? 'open' : 'closed';
  tmBtn.setAttribute('aria-expanded', String(open));
  if (open) (tswBtns.find((b) => b.getAttribute('aria-checked') === 'true') ?? tswBtns[0])?.focus();
  else if (focusBtn) tmBtn.focus();
}
tmBtn?.addEventListener('click', () => setMenu(tsw?.dataset.menu !== 'open'));
document.addEventListener('click', (e) => {
  if (tsw?.dataset.menu === 'open' && !tsw.contains(e.target as Node)) setMenu(false);
});
tsw?.addEventListener('keydown', (e) => {
  if (tsw.dataset.menu !== 'open') return;
  const i = tswBtns.indexOf(document.activeElement as HTMLButtonElement);
  const n = tswBtns.length;
  if (e.key === 'Escape') {
    e.preventDefault();
    setMenu(false, true);
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    tswBtns[(i + (e.key === 'ArrowDown' ? 1 : n - 1) + n) % n]?.focus();
  } else if (e.key === 'Home' || e.key === 'End') {
    e.preventDefault();
    tswBtns[e.key === 'Home' ? 0 : n - 1]?.focus();
  } else if (e.key === 'Tab') {
    setMenu(false);
  }
});

const choice = (): Choice => (root.dataset.theme === 'light' || root.dataset.theme === 'dark' ? root.dataset.theme : 'system');
function applyTheme() {
  const c = choice();
  const t = c === 'system' ? (sysLight.matches ? 'light' : 'dark') : c;
  if (tsw) tsw.dataset.choice = c;
  const name = tswBtns.find((b) => b.dataset.themeChoice === c)?.textContent?.trim() ?? c;
  tmBtn?.setAttribute('aria-label', `${tmBtn.dataset.label ?? 'Theme'}: ${name}`);
  for (const b of tswBtns) b.setAttribute('aria-checked', String(b.dataset.themeChoice === c));
  for (const m of $$<HTMLMetaElement>('meta[name="theme-color"]')) {
    // With no choice, each meta keeps its own media query; a choice pins both.
    m.content = c === 'system' ? (m.media.includes('light') ? PAPER : INK) : t === 'light' ? PAPER : INK;
  }
}
for (const b of tswBtns) {
  b.addEventListener('click', () => {
    const c = (b.dataset.themeChoice ?? 'system') as Choice;
    if (c === 'system') delete root.dataset.theme;
    else root.dataset.theme = c;
    try {
      if (c === 'system') localStorage.removeItem('theme');
      else localStorage.setItem('theme', c);
    } catch {}
    applyTheme();
    setMenu(false, true);
  });
}
sysLight.addEventListener('change', applyTheme);
applyTheme();

/* ---------- copy buttons ---------- */
const live = $('#live');
for (const btn of $$<HTMLButtonElement>('button[data-copy]')) {
  const label = $('.copy-label', btn);
  const idle = label?.textContent ?? '';
  let timer = 0;
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy ?? '';
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      // Older browsers or a denied permission: select a hidden textarea and copy it.
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.append(ta);
      ta.select();
      try {
        ok = document.execCommand('copy');
      } catch {}
      ta.remove();
    }
    if (!ok || !label) return;
    label.textContent = btn.dataset.done ?? idle;
    btn.dataset.state = 'done';
    if (live) live.textContent = btn.dataset.done ?? '';
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      label.textContent = idle;
      delete btn.dataset.state;
      if (live) live.textContent = '';
    }, 1800);
  });
}

/* ---------- the section link that is on screen ---------- */
const navLinks = $$<HTMLAnchorElement>('.nav-links a[href^="#"]');
const sections = navLinks.map((a) => document.getElementById(a.hash.slice(1))).filter((s): s is HTMLElement => !!s);
if ('IntersectionObserver' in window && sections.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        for (const a of navLinks) {
          if (a.hash === `#${e.target.id}`) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        }
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  for (const s of sections) io.observe(s);
  // Back at the top, no section is current.
  const hero = $('.hero');
  if (hero) io.observe(hero);
}
