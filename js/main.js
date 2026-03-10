const menuBtn = document.getElementById('menuBtn');
const siteNav = document.getElementById('siteNav');

if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
    });
  });
}

const I18N_STORAGE_KEY = 'site_lang';
const SUPPORTED_LANGS = ['en', 'es', 'pt'];

const I18N = {
  en: {
    common: {
      menu_button: 'Menu', menu_aria: 'Open menu', nav_about: 'About us', nav_agent: 'Be our Agent', nav_partner: 'Be our Partner',
      lang_selector_aria: 'Language selector', contact_aria: 'Quick contact channels', open_telegram: 'Open Telegram', open_whatsapp: 'Open WhatsApp',
      telegram: 'Telegram', whatsapp: 'WhatsApp', start_now: 'Start Now!', footer: 'Copyright \u00a9 2026. All rights reserved.',
      day_one: 'day', day_many: 'days', fill_required: 'Please fill in all required fields.', contact_telegram_label: 'Telegram Username',
      contact_telegram_placeholder: '@username', contact_whatsapp_label: 'WhatsApp Number', contact_whatsapp_placeholder: '+ CountryCode Number',
      contact_phone_label: 'Phone Number', contact_phone_placeholder: '+ CountryCode Number',
    },
    index: {
      title: '1XBET LATAM | TeamCash Partners', description: 'Join the TeamCash network of 1XBET LATAM, launch as an agent, and grow your earnings with VIP support.',
      badge: 'Official LATAM Partner Program', hero_title_html: 'MULTIPLY YOUR INCOME: <br /><span>EARN MONEY EVERY DAY</span>',
      hero_desc: 'Forget about waiting until the end of the month. Become an Official 1XBET LATAM Agent and generate immediate liquidity by processing withdrawals and deposits. A turnkey, profitable business ready to scale.',
      hero_cta: 'Apply as an Agent', hero_help: '', hero_subbrand: 'TeamCash Partners', external_platform_cta: 'Go to Platform',
      metric_deposit: 'Net Profit per Deposit', metric_withdrawal: 'Net Profit per Withdrawal', metric_support: 'Exclusive VIP Consulting', metric_window: 'Proven Profitability',
      calc_title_html: 'Project Your <span>Financial Freedom</span>', calc_desc: 'Discover how much you can make a month with just a small daily transaction volume.',
      calc_volume_label: 'Transaction Volume ($)', calc_days_label: 'Operational Days', calc_title: 'Your Estimated Earnings', calc_sub: 'USD MONTHLY TO YOUR POCKET',
      benefits_title: 'The Most Profitable Ecosystem', benefits_desc: 'You don\'t start from scratch. We provide an optimized conversion system to bill from week one.',
      b1_title: 'Immediate Operation', b1_desc: 'No bureaucracy. Direct access to our platforms to start processing and earning in record time.',
      b2_title: 'Conversion Arsenal', b2_desc: 'Sales scripts and high-conversion marketing materials to attract frequent players to your network.',
      b3_title: 'Total Money Control', b3_desc: 'Zero holds. You manage the cash flow through your favorite local payment methods.',
      b4_title: '1-on-1 Mentoring', b4_desc: 'A strategist from our team will guide you with exact tactics to explode your sales metrics.',
      sport_band: 'ABSOLUTE AUTHORITY', sport_quote: '80% of the sale is already done. Players are looking for 1XBET, you just give them access.',
      sport_desc: 'By partnering with us, sales friction disappears. Brand trust already exists.',
      sponsors_title: 'THE BRAND THAT SELLS ITSELF WORLDWIDE.', sponsors_q: 'What does this mean for your billing?',
      sponsors_desc: 'Zero effort convincing. Users already trust the brand blindly before even contacting you. For you, this means automatic conversions and recurring clients.',
      register_title: 'Apply to join TeamCash', register_desc: 'Spots are limited to guarantee high profitability for our agents. Contact a Strategist now and secure your position.',
      manager_title: 'Strategic Advisor', register_open_telegram: 'Open Telegram', register_open_whatsapp: 'Open WhatsApp', chat_register_aria: 'Apply to TeamCash',
      roadmap_title: 'Your Path to <span style="color: #00d2ff;">Success</span>', roadmap_sub: 'Three simple steps to become a highly profitable agent with TeamCash.',
      step1_title: 'Get VIP Access', step1_desc: 'Talk to one of our managers. We will give you direct access to the platform and set up your dashboard with no paperwork.',
      step2_title: 'Activate the Sales Arsenal', step2_desc: 'Receive our marketing kit, persuasive scripts, and exact strategies to attract your first active players in record time.',
      step3_title: 'Process and Multiply', step3_desc: 'Start operations. Make your first deposit, manage withdrawals, and receive your liquid commission directly to your local account.',
      eco_title: 'How the <span style="color: #00d2ff;">Ecosystem</span> Works', eco_sub: 'Become the financial provider in your country. Connect players to the platform and monetize every movement.',
      eco_player: 'Player', eco_app: 'TeamCash App', eco_agent: 'YOU (Agent)',
      eco_arr1: '⬅️ Withdrawals', eco_arr2: 'Deposits ➡️', eco_arr3: '⬅️ Pay Withdrawal', eco_arr4: 'Send Balance ➡️', eco_comm: '⬇️ Automatic Commission (8% & 2%) ⬇️',
      eco_li1: '✅ Provide deposit and withdrawal services in your region.', eco_li2: '✅ Work directly with our company app.', eco_li3: '✅ Start your business with low capital.',
      faq_title: 'Frequently Asked <span style="color: #00d2ff;">Questions</span>',
      faq_q1: 'Do I need prior experience in betting or finance?', faq_a1: 'Not at all. As a TeamCash Agent, your role is purely transactional. We give you the system, step-by-step guides, and direct support so you can process operations from day one.',
      faq_q2: 'How and when do I receive my earnings?', faq_a2: 'You have total control of your money. Deposit (8%) and withdrawal (2%) commissions are generated immediately. Since you handle local payment methods, you ensure fast cash flow.',
      faq_q3: 'What support do I get if there is an issue?', faq_a3: 'You will never be alone. You have a 24/7 direct line to your personal Strategist. They will resolve any operational doubt in record time.',
      faq_q4: 'How do I get my first clients?', faq_a4: '1XBET is a legendary brand players already look for. Plus, we give you access to our "Conversion Arsenal" to attract players from your region quickly.',
      reg_alert: '🔥 ALERT: Only 3 spots left for 1-on-1 mentoring this month.', bonus_btn: 'CLAIM YOUR BONUS!',
      bonus_modal_title: '🎉 Congratulations! 🎉', bonus_modal_desc: 'Your secret promo code has been generated. Send it to your manager to activate exclusive TeamCash benefits.',
      bonus_modal_btn: 'Copy and Contact a Manager', bonus_modal_close: 'Close',
    }
  },
  es: {
    common: {
      menu_button: 'Menú', menu_aria: 'Abrir menú', nav_about: 'Inicio', nav_agent: 'Ser Agente', nav_partner: 'Ser Socio',
      lang_selector_aria: 'Selector de idioma', contact_aria: 'Canales de contacto rápido', open_telegram: 'Abrir Telegram', open_whatsapp: 'Abrir WhatsApp',
      telegram: 'Telegram', whatsapp: 'WhatsApp', start_now: 'Postularme Ahora', footer: 'Copyright \u00a9 2026. Todos los derechos reservados.',
      day_one: 'día', day_many: 'días', fill_required: 'Completa todos los campos obligatorios.', contact_telegram_label: 'Usuario de Telegram',
      contact_telegram_placeholder: '@usuario', contact_whatsapp_label: 'Número de WhatsApp', contact_whatsapp_placeholder: '+ CodigoPais Numero',
      contact_phone_label: 'Número de teléfono', contact_phone_placeholder: '+ CodigoPais Numero',
    },
    index: {
      title: '1XBET LATAM | Únete a TeamCash', description: 'Únete a la red TeamCash de 1XBET LATAM, lanza como agente y haz crecer tus ganancias con nuestro soporte VIP.',
      badge: 'Programa oficial LATAM de socios', hero_title_html: 'MULTIPLICA TUS INGRESOS: <br /><span>GANA DINERO TODOS LOS DÍAS</span>',
      hero_desc: 'Olvídate de esperar a fin de mes. Conviértete en Agente Oficial de 1XBET LATAM y genera liquidez inmediata procesando retiros y depósitos. Un negocio llave en mano, rentable y listo para escalar.',
      hero_cta: 'Postularme como Agente', hero_help: '', hero_subbrand: 'TeamCash Partners', external_platform_cta: 'Ir a la Plataforma',
      metric_deposit: 'Ganancia Neta por Depósito', metric_withdrawal: 'Ganancia Neta por Retiro', metric_support: 'Asesoría VIP Exclusiva', metric_window: 'Rentabilidad Comprobada',
      calc_title_html: 'Proyecta tu <span>Libertad Financiera</span>', calc_desc: 'Descubre cuánto puedes facturar al mes con solo un pequeño volumen de transacciones al día.',
      calc_volume_label: 'Volumen de Transacciones ($)', calc_days_label: 'Días Operativos', calc_title: 'Tus Ganancias Estimadas', calc_sub: 'USD MENSUALES AL BOLSILLO',
      benefits_title: 'El Ecosistema Más Rentable', benefits_desc: 'No empiezas desde cero. Te entregamos un sistema de conversión optimizado para facturar desde la primera semana.',
      b1_title: 'Operatividad Inmediata', b1_desc: 'Sin burocracia. Acceso directo a nuestras plataformas para que empieces a procesar y ganar en tiempo récord.',
      b2_title: 'Arsenal de Conversión', b2_desc: 'Guiones de venta y material de marketing de alta conversión para atraer jugadores frecuentes a tu red.',
      b3_title: 'Control Total del Dinero', b3_desc: 'Cero retenciones. Tú manejas el flujo de caja a través de tus métodos de pago locales favoritos.',
      b4_title: 'Mentoría 1 a 1', b4_desc: 'Un estratega de nuestro equipo te guiará con tácticas exactas para reventar tus métricas de ventas.',
      sport_band: 'AUTORIDAD ABSOLUTA', sport_quote: 'El 80% de la venta ya está hecha. Los jugadores buscan 1XBET, tú solo les das el acceso.',
      sport_desc: 'Al asociarte con nosotros, la fricción de venta desaparece. La confianza en la marca ya existe.',
      sponsors_title: 'LA MARCA QUE SE VENDE SOLA EN TODO EL MUNDO.', sponsors_q: '¿Qué significa esto para tu facturación?',
      sponsors_desc: 'Cero esfuerzo en convencer. Los usuarios ya confían ciegamente en la marca antes de siquiera contactarte. Para ti, esto significa conversiones automáticas y clientes recurrentes.',
      register_title: 'Aplica para unirte a TeamCash', register_desc: 'Los cupos son limitados para garantizar la alta rentabilidad de nuestros agentes. Contacta a un Estratega ahora y asegura tu posición.',
      manager_title: 'Asesor Estratégico', register_open_telegram: 'Abrir Telegram', register_open_whatsapp: 'Abrir WhatsApp', chat_register_aria: 'Aplicar a TeamCash',
      roadmap_title: 'Tu Camino al <span style="color: #00d2ff;">Éxito</span>', roadmap_sub: 'Tres simples pasos para convertirte en un agente altamente rentable con TeamCash.',
      step1_title: 'Obtén tu Acceso VIP', step1_desc: 'Habla con uno de nuestros mánagers. Te daremos acceso directo a la plataforma y configuraremos tu panel de control sin papeleos innecesarios.',
      step2_title: 'Activa el Arsenal de Ventas', step2_desc: 'Recibe nuestro kit de marketing, guiones persuasivos y estrategias exactas para atraer a tus primeros jugadores activos en tiempo récord.',
      step3_title: 'Procesa y Multiplica', step3_desc: 'Inicia operaciones. Realiza tu primer depósito, gestiona retiros y recibe tu comisión líquida directamente en tu cuenta local. Escala sin límites.',
      eco_title: 'Cómo Funciona el <span style="color: #00d2ff;">Ecosistema</span>', eco_sub: 'Conviértete en el proveedor financiero de tu país. Conecta a los jugadores con la plataforma y monetiza cada movimiento.',
      eco_player: 'Jugador', eco_app: 'App TeamCash', eco_agent: 'TÚ (Agente)',
      eco_arr1: '⬅️ Retiros', eco_arr2: 'Depósitos ➡️', eco_arr3: '⬅️ Paga Retiro', eco_arr4: 'Envía Saldo ➡️', eco_comm: '⬇️ Comisión Automática (8% y 2%) ⬇️',
      eco_li1: '✅ Provee servicios de depósito y retiro en tu región.', eco_li2: '✅ Trabaja directamente con la app de nuestra compañía.', eco_li3: '✅ Inicia tu negocio con bajo capital.',
      faq_title: 'Preguntas <span style="color: #00d2ff;">Frecuentes</span>',
      faq_q1: '¿Necesito experiencia previa en apuestas o finanzas?', faq_a1: 'En absoluto. Como Agente de TeamCash, tu función es puramente transaccional. Nosotros te entregamos el sistema, las guías paso a paso y el soporte directo para que proceses operaciones desde el primer día sin complicaciones técnicas.',
      faq_q2: '¿Cómo y cuándo recibo mis ganancias?', faq_a2: 'Tienes control total de tu dinero. Las comisiones por depósito (8%) y retiro (2%) las generas inmediatamente. Al ser tú quien maneja los métodos de pago locales, aseguras un flujo de caja rápido y constante.',
      faq_q3: '¿Qué soporte recibo si hay un problema con un cliente?', faq_a3: 'Nunca estarás solo. Tienes una línea directa 24/7 con tu Estratega personal. Ellos resolverán cualquier duda operativa o incidencia en tiempo récord para que no pierdas ninguna transacción.',
      faq_q4: '¿Cómo consigo mis primeros clientes?', faq_a4: '1XBET es una marca legendaria que los jugadores ya buscan. Además, te damos acceso a nuestro "Arsenal de Conversión": material de marketing y tácticas probadas por TeamCash para atraer jugadores de tu región rápidamente.',
      reg_alert: '🔥 ALERTA: Solo quedan 3 cupos para mentoría 1 a 1 este mes.', bonus_btn: '¡RECLAMA TU BONO!',
      bonus_modal_title: '🎉 ¡Felicidades! 🎉', bonus_modal_desc: 'Tu código promocional secreto ha sido generado. Envíalo a tu mánager para activar beneficios exclusivos de TeamCash.',
      bonus_modal_btn: 'Copiar y Hablar con un Mánager', bonus_modal_close: 'Cerrar',
    }
  },
  pt: {
    common: {
      menu_button: 'Menu', menu_aria: 'Abrir menu', nav_about: 'Início', nav_agent: 'Seja Agente', nav_partner: 'Seja Parceiro',
      lang_selector_aria: 'Seletor de idioma', contact_aria: 'Canais de contato rápido', open_telegram: 'Abrir Telegram', open_whatsapp: 'Abrir WhatsApp',
      telegram: 'Telegram', whatsapp: 'WhatsApp', start_now: 'Candidatar-me Agora', footer: 'Copyright \u00a9 2026. Todos os direitos reservados.',
      day_one: 'dia', day_many: 'dias', fill_required: 'Preencha todos os campos obrigatórios.', contact_telegram_label: 'Usuário do Telegram',
      contact_telegram_placeholder: '@usuario', contact_whatsapp_label: 'Número do WhatsApp', contact_whatsapp_placeholder: '+ CodigoPais Numero',
      contact_phone_label: 'Número de telefone', contact_phone_placeholder: '+ CodigoPais Numero',
    },
    index: {
      title: '1XBET LATAM | TeamCash Partners', description: 'Junte-se à rede TeamCash da 1XBET LATAM, inicie como agente e aumente seus ganhos com suporte VIP.',
      badge: 'Programa oficial LATAM de parceiros', hero_title_html: 'MULTIPLIQUE SUA RENDA: <br /><span>GANHE DINHEIRO TODOS OS DIAS</span>',
      hero_desc: 'Esqueça esperar até o fim do mês. Torne-se um Agente Oficial da 1XBET LATAM e gere liquidez imediata processando saques e depósitos. Um negócio rentável pronto para escalar.',
      hero_cta: 'Candidatar-me a Agente', hero_help: '', hero_subbrand: 'TeamCash Partners', external_platform_cta: 'Acessar a Plataforma',
      metric_deposit: 'Lucro Líquido por Depósito', metric_withdrawal: 'Lucro Líquido por Saque', metric_support: 'Consultoria VIP Exclusiva', metric_window: 'Rentabilidade Comprovada',
      calc_title_html: 'Projete sua <span>Liberdade Financeira</span>', calc_desc: 'Descubra quanto pode faturar por mês com um pequeno volume de transações.',
      calc_volume_label: 'Volume de Transações ($)', calc_days_label: 'Dias Operacionais', calc_title: 'Seus Ganhos Estimados', calc_sub: 'USD MENSAIS NO SEU BOLSO',
      benefits_title: 'O Ecossistema Mais Rentável', benefits_desc: 'Você não começa do zero. Entregamos um sistema de conversão otimizado para faturar desde a primeira semana.',
      b1_title: 'Operação Imediata', b1_desc: 'Sem burocracia. Acesso direto às nossas plataformas para começar a processar e ganhar em tempo recorde.',
      b2_title: 'Arsenal de Conversão', b2_desc: 'Scripts de vendas e material de marketing de alta conversão para atrair jogadores à sua rede.',
      b3_title: 'Controle Total do Dinheiro', b3_desc: 'Sem retenções. Você gerencia o fluxo de caixa através de seus métodos de pagamento locais favoritos.',
      b4_title: 'Mentoria 1 a 1', b4_desc: 'Um estrategista da nossa equipe irá guiá-lo com táticas exatas para explodir suas métricas de vendas.',
      sport_band: 'AUTORIDADE ABSOLUTA', sport_quote: '80% da venda já está feita. Os jogadores procuram a 1XBET, você só dá o acesso.',
      sport_desc: 'Ao associar-se a nós, a fricção de venda desaparece. A confiança na marca já existe.',
      sponsors_title: 'A MARCA QUE SE VENDE SOZINHA NO MUNDO.', sponsors_q: 'O que isso significa para o seu faturamento?',
      sponsors_desc: 'Zero esforço para convencer. Os usuários confiam cegamente na marca antes de contatar você. Isso significa conversões automáticas.',
      register_title: 'Aplique para a TeamCash', register_desc: 'As vagas são limitadas para garantir a rentabilidade dos nossos agentes. Contate um Estrategista agora.',
      manager_title: 'Assessor Estratégico', register_open_telegram: 'Abrir Telegram', register_open_whatsapp: 'Abrir WhatsApp', chat_register_aria: 'Aplicar para TeamCash',
      roadmap_title: 'Seu Caminho para o <span style="color: #00d2ff;">Sucesso</span>', roadmap_sub: 'Três passos simples para se tornar um agente altamente lucrativo com a TeamCash.',
      step1_title: 'Obtenha Acesso VIP', step1_desc: 'Fale com um dos nossos gerentes. Daremos acesso direto à plataforma e configuraremos seu painel sem burocracia.',
      step2_title: 'Ative o Arsenal de Vendas', step2_desc: 'Receba nosso kit de marketing, scripts persuasivos e estratégias exatas para atrair seus primeiros jogadores ativos.',
      step3_title: 'Processe e Multiplique', step3_desc: 'Inicie as operações. Faça seu primeiro depósito, gerencie saques e receba sua comissão líquida diretamente.',
      eco_title: 'Como Funciona o <span style="color: #00d2ff;">Ecossistema</span>', eco_sub: 'Torne-se o provedor financeiro do seu país. Conecte jogadores à plataforma e monetize.',
      eco_player: 'Jogador', eco_app: 'App TeamCash', eco_agent: 'VOCÊ (Agente)',
      eco_arr1: '⬅️ Saques', eco_arr2: 'Depósitos ➡️', eco_arr3: '⬅️ Pagar Saque', eco_arr4: 'Enviar Saldo ➡️', eco_comm: '⬇️ Comissão Automática (8% e 2%) ⬇️',
      eco_li1: '✅ Forneça serviços de depósito e saque na sua região.', eco_li2: '✅ Trabalhe diretamente com o app da nossa empresa.', eco_li3: '✅ Inicie seu negócio com baixo capital.',
      faq_title: 'Perguntas <span style="color: #00d2ff;">Frequentes</span>',
      faq_q1: 'Preciso de experiência prévia em apostas ou finanças?', faq_a1: 'De forma alguma. Como Agente TeamCash, sua função é transacional. Nós entregamos o sistema e guias para você.',
      faq_q2: 'Como e quando recebo meus ganhos?', faq_a2: 'Você tem controle total do seu dinheiro. As comissões por depósito (8%) e saque (2%) são geradas imediatamente.',
      faq_q3: 'Que suporte recebo se houver problema?', faq_a3: 'Você nunca estará sozinho. Tem uma linha direta 24/7 com o seu Estrategista pessoal. Eles resolverão qualquer dúvida.',
      faq_q4: 'Como consigo meus primeiros clientes?', faq_a4: 'A 1XBET é uma marca lendária que os jogadores procuram. Damos-lhe acesso ao nosso "Arsenal de Conversão" para atraí-los.',
      reg_alert: '🔥 ALERTA: Restam apenas 3 vagas para mentoria 1 a 1 este mês.', bonus_btn: 'RESGATAR BÔNUS!',
      bonus_modal_title: '🎉 Parabéns! 🎉', bonus_modal_desc: 'O seu código promocional secreto foi gerado. Envie-o ao seu gerente para ativar benefícios da TeamCash.',
      bonus_modal_btn: 'Copiar e Falar com um Gerente', bonus_modal_close: 'Fechar',
    }
  }
};

const pageType = 'index'; // Centralizamos en index para esta landing
const getBrowserLang = () => {
  const locale = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(locale) ? locale : 'en';
};

let currentLang = localStorage.getItem(I18N_STORAGE_KEY);
if (!SUPPORTED_LANGS.includes(currentLang)) { currentLang = getBrowserLang(); }

const tr = (scope, key) => {
  const value = I18N[currentLang]?.[scope]?.[key];
  if (value !== undefined) return value;
  return I18N.en?.[scope]?.[key] ?? '';
};

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el && value) el.textContent = value;
};

const setHTML = (selector, value) => {
  const el = document.querySelector(selector);
  if (el && value) el.innerHTML = value;
};

const setAttr = (selector, attr, value) => {
  const el = document.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
};

let updateCalculator = null;

const applyTranslations = () => {
  document.documentElement.lang = currentLang;
  if (tr(pageType, 'title')) document.title = tr(pageType, 'title');
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', tr(pageType, 'description'));

  setText('.menu-btn', tr('common', 'menu_button'));
  setText('.nav a:nth-child(1)', tr('common', 'nav_about'));
  setText('.nav a:nth-child(2)', tr('common', 'nav_agent'));
  setText('.nav a:nth-child(3)', tr('common', 'nav_partner'));
  setText('.footer', tr('common', 'footer'));

  // Hero & Metrics
  setHTML('.tc-hero-copy h1', tr('index', 'hero_title_html'));
  setText('.tc-hero-copy > p', tr('index', 'hero_desc'));
  setText('.tc-hero-copy .cta', tr('index', 'hero_cta'));
  setText('.hero-subbrand', tr('index', 'hero_subbrand'));
  setText('.external-platform-btn', tr('index', 'external_platform_cta'));
  setText('.tc-metrics article:nth-child(1) span', tr('index', 'metric_deposit'));
  setText('.tc-metrics article:nth-child(2) span', tr('index', 'metric_withdrawal'));
  setText('.tc-metrics article:nth-child(3) span', tr('index', 'metric_support'));
  setText('.tc-metrics article:nth-child(4) span', tr('index', 'metric_window'));

  // Calculator
  setHTML('.tc-calc-head h2', tr('index', 'calc_title_html'));
  setText('.tc-calc-head p', tr('index', 'calc_desc'));
  setText('label[for="calc-volume"]', tr('index', 'calc_volume_label'));
  setText('label[for="calc-days"]', tr('index', 'calc_days_label'));
  setText('.tc-calc-title', tr('index', 'calc_title'));
  setText('.tc-calc-sub', tr('index', 'calc_sub'));

  // Benefits
  setText('#benefits .tc-head h2', tr('index', 'benefits_title'));
  setText('#benefits .tc-head p', tr('index', 'benefits_desc'));
  setText('#benefits .tc-card:nth-child(1) h3', tr('index', 'b1_title'));
  setText('#benefits .tc-card:nth-child(1) p', tr('index', 'b1_desc'));
  setText('#benefits .tc-card:nth-child(2) h3', tr('index', 'b2_title'));
  setText('#benefits .tc-card:nth-child(2) p', tr('index', 'b2_desc'));
  setText('#benefits .tc-card:nth-child(3) h3', tr('index', 'b3_title'));
  setText('#benefits .tc-card:nth-child(3) p', tr('index', 'b3_desc'));
  setText('#benefits .tc-card:nth-child(4) h3', tr('index', 'b4_title'));
  setText('#benefits .tc-card:nth-child(4) p', tr('index', 'b4_desc'));

  // Roadmap
  setHTML('.tc-roadmap h2', tr('index', 'roadmap_title'));
  setText('.tc-roadmap > div > p', tr('index', 'roadmap_sub'));
  const rH3 = document.querySelectorAll('.tc-roadmap h3');
  const rP = document.querySelectorAll('.tc-roadmap h3 + p');
  if(rH3.length >= 3) {
    rH3[0].textContent = tr('index', 'step1_title'); rP[0].textContent = tr('index', 'step1_desc');
    rH3[1].textContent = tr('index', 'step2_title'); rP[1].textContent = tr('index', 'step2_desc');
    rH3[2].textContent = tr('index', 'step3_title'); rP[2].textContent = tr('index', 'step3_desc');
  }

  // Ecosystem
  setHTML('.eco-wrapper h2', tr('index', 'eco_title'));
  setText('.eco-wrapper > div > p', tr('index', 'eco_sub'));
  setText('.eco-circle.player .eco-title', tr('index', 'eco_player'));
  setText('.eco-circle.app .eco-title', tr('index', 'eco_app'));
  setText('.eco-circle.agent .eco-title', tr('index', 'eco_agent'));
  const eArr = document.querySelectorAll('.eco-arrows span');
  if(eArr.length >= 4) {
    eArr[0].textContent = tr('index', 'eco_arr1'); eArr[1].textContent = tr('index', 'eco_arr2');
    eArr[2].textContent = tr('index', 'eco_arr3'); eArr[3].textContent = tr('index', 'eco_arr4');
  }
  setText('.eco-wrapper div[style*="color: #00ff88;"] span', tr('index', 'eco_comm'));
  const eLis = document.querySelectorAll('.eco-wrapper ul li');
  if(eLis.length >= 3) {
    eLis[0].textContent = tr('index', 'eco_li1'); eLis[1].textContent = tr('index', 'eco_li2'); eLis[2].textContent = tr('index', 'eco_li3');
  }

  // Sports & Sponsors
  setText('.sports-story .feature-band', tr('index', 'sport_band'));
  setText('.sports-story-grid blockquote', tr('index', 'sport_quote'));
  setText('.sports-story-grid p', tr('index', 'sport_desc'));
  setText('.sponsors-panel > h2', tr('index', 'sponsors_title'));
  setText('.sponsors-box h3', tr('index', 'sponsors_q'));
  setText('.sponsors-box div > p', tr('index', 'sponsors_desc'));
  setText('.sponsors-box .cta', tr('common', 'start_now'));

  // FAQ
  setHTML('.faq-title', tr('index', 'faq_title'));
  const fSum = document.querySelectorAll('.faq-item summary');
  const fP = document.querySelectorAll('.faq-item p');
  if(fSum.length >= 4) {
    fSum[0].textContent = tr('index', 'faq_q1'); fP[0].textContent = tr('index', 'faq_a1');
    fSum[1].textContent = tr('index', 'faq_q2'); fP[1].textContent = tr('index', 'faq_a2');
    fSum[2].textContent = tr('index', 'faq_q3'); fP[2].textContent = tr('index', 'faq_a3');
    fSum[3].textContent = tr('index', 'faq_q4'); fP[3].textContent = tr('index', 'faq_a4');
  }

  // Register & Managers
  setText('#register .tc-head-row h2', tr('index', 'register_title'));
  setText('#register .tc-head-row p', tr('index', 'register_desc'));
  setText('.tc-register-box .tc-head-row div div', tr('index', 'reg_alert'));
  document.querySelectorAll('#register .tc-manager-card h3 + p').forEach(p => p.textContent = tr('index', 'manager_title'));
  document.querySelectorAll('#register .tc-manager-btn.is-telegram').forEach(b => b.textContent = tr('common', 'telegram'));
  document.querySelectorAll('#register .tc-manager-btn.is-whatsapp').forEach(b => b.textContent = tr('common', 'whatsapp'));

  // Bonus
  setText('.floating-bonus span:nth-child(2)', tr('index', 'bonus_btn'));
  setText('.bonus-modal h2', tr('index', 'bonus_modal_title'));
  setText('.bonus-modal > p', tr('index', 'bonus_modal_desc'));
  setText('.bonus-modal button:nth-of-type(1)', tr('index', 'bonus_modal_btn'));
  setText('.bonus-close', tr('index', 'bonus_modal_close'));

  // Language Buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === currentLang);
  });

  if (typeof updateCalculator === 'function') updateCalculator();
};

const langButtons = document.querySelectorAll('.lang-btn');
if (langButtons.length) {
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextLang = btn.dataset.lang;
      if (!SUPPORTED_LANGS.includes(nextLang) || nextLang === currentLang) return;
      currentLang = nextLang;
      localStorage.setItem(I18N_STORAGE_KEY, currentLang);
      applyTranslations();
    });
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });
reveals.forEach((item) => observer.observe(item));

const heroMotion = document.querySelector('.hero-motion');
const floatInnerItems = heroMotion ? heroMotion.querySelectorAll('.float-inner') : [];
if (heroMotion && floatInnerItems.length && window.matchMedia('(pointer: fine)').matches) {
  const maxOffset = 16;
  const depthByType = (item) => {
    if (item.closest('.coin')) return 0.45;
    if (item.closest('.ball')) return 1;
    if (item.closest('.mma-glove')) return 0.85;
    if (item.closest('.football')) return 0.75;
    return 0.7;
  };
  heroMotion.addEventListener('mousemove', (event) => {
    const rect = heroMotion.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    floatInnerItems.forEach((item) => {
      const depth = depthByType(item);
      item.style.transform = `translate(${(nx * maxOffset * depth).toFixed(2)}px, ${(ny * maxOffset * depth).toFixed(2)}px)`;
    });
  });
  heroMotion.addEventListener('mouseleave', () => {
    floatInnerItems.forEach((item) => { item.style.transform = 'translate(0px, 0px)'; });
  });
}

const calcVolume = document.getElementById('calc-volume');
const calcDays = document.getElementById('calc-days');
const calcVolumeValue = document.getElementById('calc-volume-value');
const calcDaysValue = document.getElementById('calc-days-value');
const calcResult = document.getElementById('calc-result');

if (calcVolume && calcDays && calcVolumeValue && calcDaysValue && calcResult) {
  const formatMoney = (value) => `$${Math.round(value).toLocaleString('en-US')}`;
  const commissionRate = 0.1;
  updateCalculator = () => {
    const volume = Number(calcVolume.value) || 0;
    const days = Number(calcDays.value) || 0;
    calcVolumeValue.textContent = formatMoney(volume);
    calcDaysValue.textContent = `${days} ${days === 1 ? tr('common', 'day_one') : tr('common', 'day_many')}`;
    calcResult.textContent = formatMoney(volume * days * commissionRate);
  };
  calcVolume.addEventListener('input', updateCalculator);
  calcDays.addEventListener('input', updateCalculator);
}

// Init
applyTranslations();