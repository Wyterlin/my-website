# DESIGN.md — ChristianWS

Spec de identidade visual do site. Toda decisão visual passa por aqui antes do código.
Os tokens moram em `css/style.css` (`:root`); o histórico do design system está em `design-system/`.

## 1. Essência
Um analista que escreve código para o ERP: precisão de engenharia com um toque de autoria.
O site deve parecer **uma ferramenta bem feita**, não um template de portfólio.

## 2. Paleta
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#05070d` | Fundo principal |
| `--bg-alt` | `#080b14` | Seções alternadas |
| `--surface` | `#0d1117` | Cartões e formulário |
| `--blue` | `#4169e1` | Ação, links ativos, marca `</>` |
| `--blue-soft` | `#8aa4f5` | Texto azul sobre fundo escuro (contraste AA) |
| `--gold` | `#c9a84c` | Autoria e destaque: SAP, Ramo, eyebrow. **Nunca** em botão de ação |
| `--muted` | `#9aa4b6` | Texto secundário (7,6:1 sobre `--bg`) |

Regra: azul = "dá para clicar"; dourado = "isto é importante sobre mim".

## 3. Tipografia
- **Montserrat 900/700**, CAIXA ALTA: títulos, nomes, números.
- **Open Sans 400/600**: corpo e interface.
- **Monoespaçada do sistema**: código, tags de tecnologia.
- Fontes servidas pelo próprio site (`assets/fonts`), sem Google Fonts.

## 4. Espaçamento
Base de 8 px; `--pad` fluido (`clamp(1.25rem, 4vw, 3rem)`); seções com `clamp(4.5rem, 10vw, 8rem)` de respiro vertical.
Largura máxima do conteúdo: 1200 px.

## 5. Movimento
Curva única `cubic-bezier(.2,.8,.2,1)`, 200–700 ms. Revelar ao rolar (escalonado), contadores, cursor piscando.
Tudo desliga com `prefers-reduced-motion`.

## 6. Voz e texto
pt-BR, primeira pessoa, direto. Fala do problema resolvido ("tiro o trabalho repetitivo do caminho"), não de adjetivos.
Sem emoji. A marca `</> ChristianW$` é a única brincadeira tipográfica.

## 7. Elemento-assinatura
O **editor que se escreve**: o cartão de código do hero digita o objeto `developer` ao entrar na tela.
É o único lugar com ousadia; o resto fica quieto.

## 8. Anti-patterns
- Fundo creme + serifa + terracota; preto + um único verde-ácido; layout de jornal sem raio.
- Barras de "nível de habilidade" em porcentagem (não medem nada).
- Dourado em botões, ou mais de um acento por componente.
- Estado visual sem sinal real (ex.: "enviado" sem resposta 2xx da API).

## 9. Quality floor
Responsivo do 320 px ao 1440 px+, foco visível (`outline` dourado), alvo de toque ≥ 44 px, contraste WCAG AA,
`reduced-motion` e `forced-colors` respeitados, conteúdo completo sem JavaScript, nenhum script ou estilo inline (CSP).
