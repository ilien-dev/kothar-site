// Every word on the page, in English and Spanish. The copy follows the README of
// ilien-dev/kothar (README.md and README.es.md): change it there first, then here.

export type Lang = 'en' | 'es';

const repo = 'https://github.com/ilien-dev/kothar';

export const dict = {
  en: {
    lang: 'en' as Lang,
    locale: 'en_US',
    home: '/',
    other: { href: '/es/', label: 'Español', short: 'ES', name: 'English' },
    title: 'Kothar: a logo and a brand for your project',
    description:
      'A skill for your AI agent that draws your logo from your references, checks it at the size of a tab, and builds a brand book you can send anyone.',
    ogAlt: 'The kothar logo: three ink tiles and an orange disc beside the name kothar.',
    skip: 'Skip to content',
    nav: {
      label: 'Sections',
      how: 'How it works',
      behind: 'Before you see it',
      get: 'What you get',
      install: 'Install',
      open: 'Open source',
    },
    theme: { label: 'Theme', light: 'Light', dark: 'Dark', system: 'System' },
    hero: {
      side: 'Logo · Identity · Brand book',
      eyebrow: 'A skill for your AI agent · Claude Code · Codex · Gemini',
      title: 'A logo and a brand for your project',
      lead: 'Kothar asks what you like, draws several logo proposals from your references, and builds the one you pick into a brand book you can send anyone.',
      card: 'Install · Claude Code',
      lines: '2 lines',
      then: 'Then ask your agent for a logo, or type',
      others: 'Codex, Gemini and other agents:',
    },
    copy: { label: 'Copy', done: 'Copied', aria: 'Copy the commands' },
    how: {
      title: 'How it works',
      intro: 'Everything happens in the chat, through questions with options to pick from.',
      step: 'Step',
      steps: [
        { title: 'What it is for', body: 'Your agent reads your repository, or asks what the product is.' },
        {
          title: 'Your references',
          body: 'Images of logos, websites or anything with the look you want, or a description of brands you admire. They steer the design the most.',
        },
        {
          title: 'The proposals',
          body: 'A report opens in your browser with each logo, its idea, its colours and a few mockups. You choose in the chat.',
        },
        {
          title: 'The brand book',
          body: 'Your agent builds everything into <code>assets/brand/</code> and opens the brand book. Ask for changes in the chat.',
        },
      ],
      note: 'Before each report it asks whether you want it in your language or in English.',
    },
    behind: {
      title: 'The step you never see.',
      body: 'Before a logo reaches you, your agent writes many ideas, keeps the few that differ, and redraws each one until it holds up both large and in a browser tab.',
      ideas: [
        { n: '01', t: 'tongs closing on a disc', kept: true },
        { n: '02', t: 'an oxhide ingot', kept: false },
        { n: '03', t: 'a K of cuneiform wedges', kept: false },
        { n: '05', t: 'three tiles, the top one lit', kept: true },
        { n: '06', t: 'the o of the name as a dial', kept: true },
        { n: '07', t: 'four crop marks', kept: false },
        { n: '11', t: 'a spark between two bars', kept: false },
      ],
      ideasMore: '… up to 16',
      ideasCaption: 'Sixteen ideas for this very logo, three kept.',
      passesCaption: 'The idea kept is redrawn, pass after pass.',
      tabCaption: 'Checked at the size of a tab before you see it.',
      passes: 'Passes',
      tabOk: 'Passes at 16 px',
    },
    get: {
      title: 'What you get',
      rows: [
        {
          title: 'Always',
          body: 'The symbol and a cut for small sizes, the logo with the name side by side and stacked, colour and one-colour versions, the palette with its contrast, free fonts, favicon, app icons and a link-preview image.',
        },
        {
          title: 'Social images',
          body: 'For the networks you choose: GitHub, X, LinkedIn, Instagram, TikTok, YouTube, Discord, Bluesky and more, each at its own size.',
        },
        { title: 'Stationery', body: 'If you want it: letterhead, a contract layout, business card, email signature, invoice and a slide.' },
        { title: 'An animated logo', body: 'If you want one.' },
        {
          title: 'The brand book',
          body: 'One HTML file with the idea, the logo at every size, colours and fonts, how to use it and how not to, and mockups. It prints to PDF.',
        },
      ],
    },
    install: {
      title: 'Install it in your agent.',
      tip: 'To export PNG files and set the name in outlines, your agent uses Chrome, Edge, Brave or Chromium if you have one, without opening a window. Without one, you still get the SVG files and the brand book.',
      claude: 'Claude Code · as a plugin',
      claudeThen: 'Then ask your agent for a logo, or type',
      others: 'Codex, Gemini and other agents · from your project’s folder',
      othersNote:
        'The installer finds the agents you have and lets you choose where to install it. Add <code>-g</code> to have it in every project. It needs Node 22.20 or later.',
    },
    open: {
      dev: 'Development',
      devBody: `The skill is Markdown plus two HTML files, with no build step. How to test a change: <a href="${repo}/blob/main/docs/development.md">docs/development.md</a>.`,
      contrib: 'Contributing',
      contribBody: `Read <a href="${repo}/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a> before opening an issue or a pull request. Report vulnerabilities privately as in <a href="${repo}/blob/main/SECURITY.md">SECURITY.md</a>.`,
      licence: 'Licence',
      licenceBody: `MIT. The full text is in <a href="${repo}/blob/main/LICENSE">LICENSE</a>.`,
      tagline: 'A logo and a brand for your project, forged in conversation.',
    },
    notFound: { title: 'Page not found', body: 'This page does not exist. The whole site is one page.', back: 'Back to kothar' },
  },
  es: {
    lang: 'es' as Lang,
    locale: 'es_ES',
    home: '/es/',
    other: { href: '/', label: 'English', short: 'EN', name: 'Español' },
    title: 'Kothar: un logo y una marca para tu proyecto',
    description:
      'Una skill para tu agente de IA que dibuja tu logo a partir de tus referencias, lo comprueba al tamaño de una pestaña y construye un brand book que puedes enviar a cualquiera.',
    ogAlt: 'El logo de kothar: tres piezas en tinta y un disco naranja junto al nombre kothar.',
    skip: 'Saltar al contenido',
    nav: {
      label: 'Secciones',
      how: 'Cómo funciona',
      behind: 'Antes de que lo veas',
      get: 'Qué obtienes',
      install: 'Instalación',
      open: 'Código abierto',
    },
    theme: { label: 'Tema', light: 'Claro', dark: 'Oscuro', system: 'Sistema' },
    hero: {
      side: 'Logo · Identidad · Brand book',
      eyebrow: 'Una skill para tu agente de IA · Claude Code · Codex · Gemini',
      title: 'Un logo y una marca para tu proyecto',
      lead: 'Kothar te pregunta qué te gusta, dibuja varias propuestas de logo a partir de tus referencias y convierte la que eliges en un brand book que puedes enviar a cualquiera.',
      card: 'Instalación · Claude Code',
      lines: '2 líneas',
      then: 'Después pídele a tu agente un logo, o escribe',
      others: 'Codex, Gemini y otros agentes:',
    },
    copy: { label: 'Copiar', done: 'Copiado', aria: 'Copiar los comandos' },
    how: {
      title: 'Cómo funciona',
      intro: 'Todo ocurre en el chat, con preguntas y opciones para elegir.',
      step: 'Paso',
      steps: [
        { title: 'Para qué es', body: 'Tu agente lee tu repositorio, o te pregunta qué es el producto.' },
        {
          title: 'Tus referencias',
          body: 'Imágenes de logos, webs o cualquier cosa con el aspecto que buscas, o una descripción de marcas que admiras. Son lo que más guía el diseño.',
        },
        {
          title: 'Las propuestas',
          body: 'Se abre un informe en tu navegador con cada logo, su idea, sus colores y algunas maquetas. Eliges en el chat.',
        },
        {
          title: 'El brand book',
          body: 'Tu agente lo construye todo en <code>assets/brand/</code> y abre el brand book. Pides cambios en el chat.',
        },
      ],
      note: 'Antes de cada informe te pregunta si lo quieres en tu idioma o en inglés.',
    },
    behind: {
      title: 'El paso que nunca ves.',
      body: 'Antes de que te llegue un logo, tu agente escribe muchas ideas, se queda con las pocas que son distintas y redibuja cada una hasta que funciona en grande y en una pestaña del navegador.',
      ideas: [
        { n: '01', t: 'unas tenazas que cierran sobre un disco', kept: true },
        { n: '02', t: 'un lingote de piel de buey', kept: false },
        { n: '03', t: 'una K de cuñas cuneiformes', kept: false },
        { n: '05', t: 'tres piezas, la de arriba encendida', kept: true },
        { n: '06', t: 'la o del nombre como un dial', kept: true },
        { n: '07', t: 'cuatro marcas de corte', kept: false },
        { n: '11', t: 'una chispa entre dos barras', kept: false },
      ],
      ideasMore: '… hasta 16',
      ideasCaption: 'Dieciséis ideas para este mismo logo; se quedaron tres.',
      passesCaption: 'La idea elegida se redibuja, pasada tras pasada.',
      tabCaption: 'Comprobado al tamaño de una pestaña antes de que lo veas.',
      passes: 'Pasadas',
      tabOk: 'Funciona a 16 px',
    },
    get: {
      title: 'Qué obtienes',
      rows: [
        {
          title: 'Siempre',
          body: 'El símbolo y una versión para tamaños pequeños, el logo con el nombre en horizontal y en vertical, versiones en color y a una tinta, la paleta con su contraste, tipografías gratuitas, favicon, iconos de app y una imagen para compartir enlaces.',
        },
        {
          title: 'Imágenes para redes',
          body: 'Las que elijas: GitHub, X, LinkedIn, Instagram, TikTok, YouTube, Discord, Bluesky y más, cada una a su tamaño.',
        },
        { title: 'Papelería', body: 'Si la quieres: membrete, la maqueta de un contrato, tarjeta de visita, firma de correo, factura y una diapositiva.' },
        { title: 'Un logo animado', body: 'Si quieres uno.' },
        {
          title: 'El brand book',
          body: 'Un único archivo HTML con la idea, el logo en todos los tamaños, colores y tipografías, cómo usarlo y cómo no, y maquetas. Se imprime en PDF.',
        },
      ],
    },
    install: {
      title: 'Instálala en tu agente.',
      tip: 'Para exportar archivos PNG y pasar el nombre a contornos, tu agente usa Chrome, Edge, Brave o Chromium si tienes alguno, sin abrir ninguna ventana. Sin ellos, igualmente recibes los archivos SVG y el brand book.',
      claude: 'Claude Code · como plugin',
      claudeThen: 'Después pídele a tu agente un logo, o escribe',
      others: 'Codex, Gemini y otros agentes · desde la carpeta de tu proyecto',
      othersNote:
        'El instalador encuentra los agentes que tienes y te deja elegir dónde instalarla. Añade <code>-g</code> para tenerla en todos tus proyectos. Necesita Node 22.20 o posterior.',
    },
    open: {
      dev: 'Desarrollo',
      devBody: `La skill es Markdown más dos archivos HTML, sin paso de compilación. Cómo probar un cambio: <a href="${repo}/blob/main/docs/development.md">docs/development.md</a>.`,
      contrib: 'Contribuir',
      contribBody: `Lee <a href="${repo}/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a> antes de abrir un issue o un pull request. Informa de vulnerabilidades en privado como se describe en <a href="${repo}/blob/main/SECURITY.md">SECURITY.md</a>.`,
      licence: 'Licencia',
      licenceBody: `MIT. El texto completo está en <a href="${repo}/blob/main/LICENSE">LICENSE</a>.`,
      tagline: 'Un logo y una marca para tu proyecto, forjados en una conversación.',
    },
    notFound: { title: 'Página no encontrada', body: 'Esta página no existe. Todo el sitio es una sola página.', back: 'Volver a kothar' },
  },
};

export type Dict = (typeof dict)['en'];
export const repoUrl = repo;
