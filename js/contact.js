/* ==========================================================================
   Formulário de contato → EmailJS (API REST, sem SDK).

   Por que estas chaves podem ficar no front: a "public key" do EmailJS é
   pública por definição; ela identifica a conta, não autoriza nada sozinha.
   O que protege a conta de abuso fica no painel do EmailJS:
     1. Account → Security → "Allowed origins": só wyterlin.github.io
     2. Limite de envios por período (rate limit) ligado
     3. No template, usar {{name}} (escapado) e nunca {{{name}}} (HTML cru)
   Do lado do cliente: validação, honeypot, armadilha de tempo, intervalo
   mínimo entre envios e timeout — reduzem spam, mas não substituem o painel.
   ========================================================================== */
(() => {
  'use strict';

  const CONFIG = Object.freeze({
    endpoint: 'https://api.emailjs.com/api/v1.0/email/send',
    serviceId: 'service_hzobohx',
    templateId: 'template_21tek65',
    publicKey: 'glNOe31YNICw5j-nB',
    minFillMs: 3000,        // humano não preenche 3 campos em menos de 3 s
    cooldownMs: 60_000,     // 1 envio por minuto neste navegador
    maxPerHour: 3,
    timeoutMs: 12_000,
  });
  const LIMITS = { name: [2, 80], email: [6, 120], message: [10, 2000] };
  const STORAGE_KEY = 'cws:contact-sends';

  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: form.elements.namedItem('name'),
    email: form.elements.namedItem('email'),
    message: form.elements.namedItem('message'),
  };
  const honeypot = form.elements.namedItem('website');
  const submit = form.querySelector('.btn-submit');
  const label = submit.querySelector('.btn-label');
  const statusEl = document.getElementById('form-status');
  const counter = document.getElementById('f-message-count');
  const openedAt = Date.now();

  /* ---------- Utilidades ---------- */
  // Remove caracteres de controle (menos quebra de linha/tab) e espaços nas pontas.
  const clean = (v) => String(v || '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();
  const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

  const setStatus = (msg, kind) => {
    statusEl.textContent = msg;
    statusEl.classList.toggle('is-ok', kind === 'ok');
    statusEl.classList.toggle('is-error', kind === 'error');
  };
  const setFieldError = (name, msg) => {
    const input = fields[name];
    const err = document.getElementById(`${input.id}-error`);
    input.closest('.field').classList.toggle('has-error', Boolean(msg));
    input.setAttribute('aria-invalid', String(Boolean(msg)));
    if (msg) input.setAttribute('aria-describedby', err.id); else input.removeAttribute('aria-describedby');
    err.textContent = msg || '';
  };

  // localStorage pode estar bloqueado (modo privado, política do navegador): nunca quebrar por isso.
  const readSends = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]').filter((t) => Number.isFinite(t)); }
    catch { return []; }
  };
  const writeSends = (list) => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch { /* sem persistência */ } };

  /* ---------- Validação ---------- */
  const validators = {
    name(v) {
      if (!v) return 'Informe seu nome.';
      if (v.length < LIMITS.name[0]) return 'Nome muito curto.';
      if (v.length > LIMITS.name[1]) return `Use até ${LIMITS.name[1]} caracteres.`;
      return '';
    },
    email(v) {
      if (!v) return 'Informe seu e-mail.';
      if (v.length > LIMITS.email[1] || !EMAIL_RE.test(v)) return 'E-mail inválido.';
      return '';
    },
    message(v) {
      if (!v) return 'Escreva sua mensagem.';
      if (v.length < LIMITS.message[0]) return `Escreva pelo menos ${LIMITS.message[0]} caracteres.`;
      if (v.length > LIMITS.message[1]) return `Use até ${LIMITS.message[1]} caracteres.`;
      return '';
    },
  };
  const validate = () => {
    let firstInvalid = null;
    Object.keys(fields).forEach((name) => {
      const msg = validators[name](clean(fields[name].value));
      setFieldError(name, msg);
      if (msg && !firstInvalid) firstInvalid = fields[name];
    });
    return firstInvalid;
  };

  // Valida o campo ao sair dele; ao digitar, só limpa o erro que já foi corrigido.
  Object.keys(fields).forEach((name) => {
    const input = fields[name];
    input.addEventListener('blur', () => { if (input.value) setFieldError(name, validators[name](clean(input.value))); });
    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('has-error') && !validators[name](clean(input.value))) setFieldError(name, '');
    });
  });

  fields.message.addEventListener('input', () => {
    const n = fields.message.value.length;
    counter.textContent = `${n}/${LIMITS.message[1]}`;
    counter.classList.toggle('is-near', n > LIMITS.message[1] * 0.9);
  });

  /* ---------- Envio ---------- */
  const setBusy = (busy) => {
    submit.setAttribute('aria-busy', String(busy));
    label.textContent = busy ? 'Enviando' : 'Enviar mensagem';
    Object.values(fields).forEach((f) => { f.readOnly = busy; });
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submit.getAttribute('aria-busy') === 'true') return;
    setStatus('', null);

    // Robô preencheu o campo invisível: descarta sem chamar a API.
    // Mostrar "enviado" aqui só engana o robô — uma pessoa nunca vê este campo.
    if (honeypot && honeypot.value) { form.reset(); setStatus('Mensagem enviada. Obrigado!', 'ok'); return; }

    const invalid = validate();
    if (invalid) { invalid.focus(); setStatus('Revise os campos destacados.', 'error'); return; }

    if (Date.now() - openedAt < CONFIG.minFillMs) {
      setStatus('Calma! Aguarde alguns segundos e envie de novo.', 'error');
      return;
    }

    const now = Date.now();
    const sends = readSends().filter((t) => now - t < 3_600_000);
    const last = sends[sends.length - 1];
    if (last && now - last < CONFIG.cooldownMs) {
      const s = Math.ceil((CONFIG.cooldownMs - (now - last)) / 1000);
      setStatus(`Você acabou de enviar uma mensagem. Tente de novo em ${s} s.`, 'error');
      return;
    }
    if (sends.length >= CONFIG.maxPerHour) {
      setStatus('Limite de mensagens por hora atingido. Me chame pelo LinkedIn.', 'error');
      return;
    }

    const payload = {
      service_id: CONFIG.serviceId,
      template_id: CONFIG.templateId,
      user_id: CONFIG.publicKey,
      template_params: {
        name: clean(fields.name.value),
        email: clean(fields.email.value),
        message: clean(fields.message.value),
        current_year: new Date().getFullYear(),
      },
    };

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), CONFIG.timeoutMs);
    setBusy(true);
    try {
      const res = await fetch(CONFIG.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
        credentials: 'omit',
        referrerPolicy: 'strict-origin-when-cross-origin',
      });
      // Só conta como enviado com resposta 2xx real da API (nada de sucesso presumido).
      if (!res.ok) {
        const err = new Error(`HTTP ${res.status}`);
        err.status = res.status;
        throw err;
      }
      sends.push(Date.now());
      writeSends(sends);
      form.reset();
      counter.textContent = `0/${LIMITS.message[1]}`;
      setStatus('Mensagem enviada. Obrigado! Respondo em breve.', 'ok');
    } catch (err) {
      let msg = 'Não foi possível enviar agora. Tente mais tarde ou me chame pelo LinkedIn.';
      if (err.name === 'AbortError') msg = 'O envio demorou demais. Verifique sua conexão e tente de novo.';
      else if (err.status === 429) msg = 'Muitas mensagens em pouco tempo. Tente de novo em alguns minutos.';
      else if (!navigator.onLine) msg = 'Você está sem internet. Conecte-se e tente de novo.';
      setStatus(msg, 'error');
    } finally {
      clearTimeout(timer);
      setBusy(false);
    }
  });
})();
