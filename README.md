# my-website

Portfólio de **Christian Wyterlin Silveira**: Analista de TI na FastDrywall e consultor SAP Business One certificado pela Ramo.

🔗 https://wyterlin.github.io/my-website/

## Stack

HTML, CSS e JavaScript puros: sem framework, sem build, sem dependências de npm.
Publicado pelo GitHub Pages direto da branch `main`.

```
index.html        conteúdo completo (funciona sem JavaScript)
404.html          página de erro do GitHub Pages
css/
  fonts.css       @font-face das fontes próprias
  style.css       estilos (tokens no :root, mobile-first)
js/
  boot.js         marca <html class="js"> antes da pintura
  main.js         menu, scroll-spy, revelar, contadores, filtro, digitação
  contact.js      formulário → API REST do EmailJS
assets/           favicon e fontes (Montserrat, Open Sans — licença OFL)
design-system/    design system anterior (tokens, previews, protótipo)
DESIGN.md         spec de identidade visual
```

## Rodar localmente

```bash
python -m http.server 8000
# abra http://localhost:8000
```

Abrir o `index.html` direto do disco também funciona, mas o envio do formulário exige um servidor (o EmailJS valida a origem).

## Segurança

- **Content-Security-Policy** por `<meta>` (o Pages não permite cabeçalhos): só scripts, estilos e fontes do próprio domínio; a única conexão externa é `api.emailjs.com`.
- Nenhum script ou estilo inline; fontes servidas localmente (nada de requisição ao Google com o IP do visitante).
- Links externos com `rel="noopener noreferrer"`.
- Formulário: validação, honeypot, armadilha de tempo, intervalo mínimo entre envios e timeout. A proteção de verdade contra abuso fica no painel do EmailJS — veja o cabeçalho de `js/contact.js`.

Limites conhecidos do GitHub Pages: não dá para enviar `X-Frame-Options`, `frame-ancestors` nem HSTS próprio.
Se o site migrar para Cloudflare Pages ou Netlify, um arquivo `_headers` resolve.

## Atualizar conteúdo

Tudo está no `index.html`, em seções comentadas. Os anos de casa são calculados a partir de `data-since="2022-01"`; o total da stack é a contagem dos cartões.
