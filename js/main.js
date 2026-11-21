/* ==========================================================================
   Interações do site. Tudo aqui é melhoria progressiva: o conteúdo está no
   HTML e continua legível se este arquivo não carregar.
   ========================================================================== */
(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasIO = 'IntersectionObserver' in window;

  /* ---------- Ano do rodapé ---------- */
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Anos de casa: calculados a partir da data de entrada ----------
     data-since="AAAA-MM". Assim o número vira sozinho no aniversário de
     empresa, sem ninguém precisar editar o HTML. */
  $$('[data-since]').forEach((el) => {
    const [y, m] = el.dataset.since.split('-').map(Number);
    if (!y || !m) return;
    const now = new Date();
    let years = now.getFullYear() - y;
    if (now.getMonth() + 1 < m) years -= 1;
    el.textContent = String(Math.max(0, years));
  });

  /* ---------- Total da stack = quantos cartões existem ---------- */
  const stackCards = $$('.stack-card');
  const total = $('#total-stack');
  if (total && stackCards.length) total.textContent = String(stackCards.length);

  /* ---------- Menu do celular ---------- */
  const toggle = $('.nav-toggle');
  const menu = $('#nav-menu');
  const setMenu = (open) => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    $('.sr-only', toggle).textContent = open ? 'Fechar menu' : 'Abrir menu';
    menu.classList.toggle('is-open', open);
  };
  if (toggle && menu) {
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('is-open') && !e.target.closest('.nav')) setMenu(false);
    });
  }

  /* ---------- Barra de progresso + botão "topo" (um único listener, com rAF) ---------- */
  const progress = $('.scroll-progress span');
  const backToTop = $('.back-to-top');
  let ticking = false;
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    if (progress) progress.style.setProperty('--progress', ratio.toFixed(4));
    if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ---------- Seção ativa no menu (scroll-spy) ---------- */
  const navLinks = $$('.nav-menu a[href^="#"]');
  if (hasIO && navLinks.length) {
    const byId = new Map(navLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
        const link = byId.get(entry.target.id);
        if (link) { link.classList.add('is-active'); link.setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-45% 0px -50% 0px' }); // a "linha" de leitura fica no meio da tela
    byId.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- Revelar ao rolar, com escalonamento entre irmãos ---------- */
  const reveals = $$('.reveal');
  if (!hasIO || reduceMotion) {
    reveals.forEach((el) => el.classList.add('is-visible'));
  } else {
    const groups = new Map();
    reveals.forEach((el) => {
      const list = groups.get(el.parentElement) || [];
      list.push(el); groups.set(el.parentElement, list);
    });
    groups.forEach((list) => list.forEach((el, i) => el.style.setProperty('--delay', `${Math.min(i, 8) * 60}ms`)));
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
  }

  /* ---------- Contadores dos números ---------- */
  const counters = $$('[data-count]');
  const runCounter = (el) => {
    const target = parseInt(el.textContent, 10);
    if (!Number.isFinite(target) || reduceMotion) return;
    const start = performance.now();
    const dur = 1100;
    const step = (t) => {
      const p = Math.min((t - start) / dur, 1);
      el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3)))); // ease-out cúbico
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (hasIO) {
    const cio = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => { if (e.isIntersecting) { runCounter(e.target); obs.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- Filtro da stack ---------- */
  const filters = $('.filters');
  const status = $('#stack-status');
  if (filters && stackCards.length) {
    filters.hidden = false; // só aparece quando o JS pode fazê-lo funcionar
    const buttons = $$('.filter', filters);
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter');
      if (!btn) return;
      const area = btn.dataset.filter;
      buttons.forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      $('#stack-grid').classList.toggle('is-filtered', area !== 'all');
      let shown = 0;
      stackCards.forEach((card) => {
        const match = area === 'all' || card.dataset.area === area;
        card.classList.toggle('is-hidden', !match);
        if (match) { shown += 1; card.classList.add('is-visible'); }
      });
      if (status) status.textContent = `${shown} tecnologias exibidas.`;
    });
  }

  /* ---------- Luz que segue o cursor nos cartões (só mouse/caneta) ---------- */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
    $$('.stack-card, .project, .edu-card, .code-card').forEach((card) => {
      card.classList.add('spot');
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }

  /* ---------- Elemento-assinatura: o código se digita ----------
     O HTML já traz o código pronto (leitores de tela e quem desliga
     animações recebem o texto inteiro). Aqui ele é desmontado em pedaços
     {classe, texto} e remontado caractere a caractere. */
  const code = $('#code-body code');
  if (code && !reduceMotion && hasIO) {
    const parts = [];
    code.childNodes.forEach((n) => {
      if (n.nodeType === Node.TEXT_NODE) parts.push({ cls: null, text: n.textContent });
      else if (n.nodeType === Node.ELEMENT_NODE) parts.push({ cls: n.className, text: n.textContent });
    });
    const totalChars = parts.reduce((s, p) => s + p.text.length, 0);
    const pre = code.parentElement;
    const minH = pre.offsetHeight;          // trava a altura: nada pula durante a digitação
    pre.style.minHeight = `${minH}px`;
    code.textContent = '';
    pre.setAttribute('aria-busy', 'true');

    const type = () => {
      let part = 0;
      let idx = 0;
      let node = null;
      const perFrame = Math.max(1, Math.round(totalChars / 140)); // ~2,3 s a 60 fps
      const tick = () => {
        for (let k = 0; k < perFrame && part < parts.length; k += 1) {
          const p = parts[part];
          if (!node) {
            if (p.cls) { node = document.createElement('span'); node.className = p.cls; code.appendChild(node); }
            else { node = document.createTextNode(''); code.appendChild(node); }
          }
          const ch = p.text[idx];
          node.textContent += ch;
          idx += 1;
          if (idx >= p.text.length) { part += 1; idx = 0; node = null; }
        }
        if (part < parts.length) requestAnimationFrame(tick);
        else pre.removeAttribute('aria-busy');
      };
      requestAnimationFrame(tick);
    };
    const cio2 = new IntersectionObserver((entries, obs) => {
      if (entries.some((e) => e.isIntersecting)) { obs.disconnect(); setTimeout(type, 350); }
    }, { threshold: 0.3 });
    cio2.observe(pre);
  }
})();
