# Design — DentStudio

Direção visual da landing page do Dr. Thomás Silva Vilas Boas e do Dr. Gabriel
Medeiros. Este arquivo é a autoridade sobre decisões visuais duráveis; o
`PRODUCT.md` é a autoridade sobre a verdade do produto.

---

## Tese

**"Índice"** — o mundo é o da ourivesaria e da relojoaria, não o do SaaS clínico.
Fundo quase-preto derivado do azul exato da marca, champanhe usado apenas como
linha gravada, e uma tipografia que opõe uma didone de alto contraste a uma
geométrica fina.

O trabalho da página é um só: fazer o visitante escolher **um dos dois** dentistas
e abrir a conversa certa no WhatsApp. Todo o sistema visual existe para servir
essa escolha.

## Momento focal

O **par**. No primeiro viewport, os dois dentistas aparecem como um díptico que
sangra até a borda direita da tela e sobe por trás do cabeçalho, separado por um
único filete champanhe. Passar o ponteiro (ou o foco de teclado) em qualquer um
dos dois — na foto ou na linha do índice — **apaga o outro para 30% de opacidade**.
A escolha que a página pede é dramatizada antes de ser explicada.

O CTA final é o segundo pico: o mesmo par, agora como ação, com o mesmo
vocabulário levado ao volume máximo.

---

## Cor

Valor de marca **#233B56**, extraído por pixel de
`src/assets/clinic_logo/blueWthite.png` (47.628 amostras, cor dominante absoluta).
Em HSL: `hsl(212, 42%, 24%)`. Toda a escala escura nasce desse matiz — nunca de
preto neutro.

| Token | Valor | Papel |
| --- | --- | --- |
| `--ground-abyss` | `#06090E` | Hero, CTA final, rodapé — os picos |
| `--ground` | `#0B1119` | Fundo padrão das seções |
| `--ground-raised` | `#101A25` | Seções intercaladas |
| `--brand` | `#233B56` | Acento secundário, parada de gradiente |
| `--gold` | `#D2B583` | Champanhe quente, dessaturado |
| `--text-hi` | `#F2EFEA` | Títulos (off-white morno, não branco chapado) |
| `--text` | `#A9B7C6` | Corpo (cinza tintado pelo matiz da marca) |
| `--text-mute` | `#7A8B9F` | Rótulos e apoio |

**Regra inegociável: o dourado nunca preenche superfície. Ele desenha linha.**
Bordas, filetes, rótulos, contorno de numeral e estados de hover. Não existe
botão dourado, bloco dourado ou glow na página.

Contraste medido sobre `--ground`: dourado 9,7:1 · corpo 9,3:1 · apoio 5,5:1 —
todos acima de AA.

**Ritmo de fundo:** abyss (hero) → ground (Dr. Thomás) → raised (Dr. Gabriel) →
ground (serviços) → raised (clínica) → ground (localização) → abyss (CTA e
rodapé). O tom mais escuro é reservado aos dois momentos de maior impacto.

## Tipografia

- **Display — Bodoni Moda.** Didone de alto contraste: a letra das casas de joia
  e de relojoaria. Usada em títulos, nos numerais gravados e nos números de índice.
- **Texto — Jost.** Geométrica fina, parente tipográfico direto do letreiro real
  DentStudio (que é uma geométrica de traço fino em caixa alta espaçada). A
  escolha não é estilística: é a fonte que a marca já usa.

Escala em tokens: `--fs-display / heading / title / lead / body / label / caption`
mais `--fs-numeral`. Rótulos em caixa alta com `--track-label: .28em`.

## Sistema

**Ornamento único: o losango de quatro pontas** (`--sparkle`), levantado do próprio
letreiro da marca, entre "DENT" e "STUDIO". É o único enfeite do sistema e aparece
como separador de etiqueta, marca de hover na lista de serviços e divisor no
rodapé. **Não existe emoji na página.**

**Numeração gravada.** Os números dos blocos de serviço e das placas do CTA são
vazados, não preenchidos: `-webkit-text-stroke: 1px` com fill transparente, dentro
de `@supports` e com um fill esmaecido como reserva. É metal gravado, não um
número grande.

**O filete que atravessa.** Nas seções de perfil, uma linha champanhe de 1px sai
da borda da tela, some por trás do retrato e morre antes da ficha — a figura
parece apoiada nela. Substitui a moldura de card.

**Retrato.** As fotos são jpg com o fundo real da recepção. Em vez de entrarem num
card, são rebaixadas (`saturate .6 / brightness .76`), tingidas com o azul da marca
e dissolvidas na base por um gradiente cuja última parada é a cor exata da seção.
A base some; o topo e as laterais mantêm aresta definida.

**Hover, uma linguagem só.** Filete acende para champanhe, deslocamento de 2px,
seta desliza 4px. Repetida em botão, placa, item de lista e navegação. Só
`transform` e `opacity` são animados — nunca `width`, `height`, `padding` ou
`margin`.

**Revelação ao rolar.** O conteúdo nasce visível no CSS; a classe `is-armed` é
aplicada só por JS. Sem JavaScript ou com `prefers-reduced-motion: reduce`, a
página inteira aparece completa.

---

## Regras de conteúdo

- **Serviços são da clínica, nunca de um dentista.** A seção é única, dividida em
  três blocos numerados, e não menciona nome de profissional em lugar nenhum
  (verificado automaticamente). Os perfis individuais carregam apenas
  credenciais e formação.
- **Cada CTA de perfil aponta para o WhatsApp daquele dentista.** São 10 links
  `wa.me` na página, todos conferidos contra o nome que os acompanha.
- **Nada inventado.** Sem depoimento, preço, anos de experiência, número de
  pacientes ou case. A faixa embaixo do hero carrega fatos reais (disciplina,
  endereço, cidade) no lugar onde um template poria métricas fabricadas.

## Responsividade

Mobile-first, porque a maior parte do público chega por link de Instagram ou
WhatsApp. Testado sem transbordo horizontal em 360, 390, 768, 1024, 1280, 1440 e
1920.

O díptico do hero sobrevive ao mobile: os dois retratos continuam lado a lado,
porque é isso que comunica "dois dentistas" em menos de três segundos.

**Conversão no mobile:** são dois números, então um botão flutuante único seria
ambíguo. A barra fixa inferior é dividida ao meio e cada lado carrega o nome do
dentista — é impossível abrir a conversa errada.

## Assets

- `clinic_logo/blueWthite.png` — o nome do arquivo tem um typo real
  (`blueWthite`, não `blueWhite`). Fonte do valor de marca.
- `clinic_logo/whiteTransparent.png` — variante usada no cabeçalho, na seção da
  clínica e no rodapé. É a que lê melhor sobre fundo escuro.
- `dr's/*.jpg` — os originais, masters das fotos.
- `dr's/optimized/*.jpg` — re-comprimidos em JPEG q80 na mesma resolução:
  1,71 MB → 182 KB. São estes que a página importa. Ao trocar as fotos, regerar
  esta pasta a partir dos originais.
- `public/favicon.svg` — dente da marca em champanhe sobre o azul #233B56.

## Pendências antes de publicar

1. **Lista de serviços** (`src/data/services.ts`) — é o escopo típico das áreas de
   atuação dos dois. Confirmar item a item com o Dr. Thomás e o Dr. Gabriel e
   remover o que a clínica não oferece.
2. **CRO do Dr. Thomás** (`src/data/doctors.ts`) — está como `CRO-PB 9999`,
   placeholder. Trocar pelo número real ou remover a linha.
3. **Foto da clínica** — a seção "A clínica" funciona hoje como colofão
   tipográfico do letreiro. Quando a foto real do consultório chegar, ela entra
   no lugar de `.clinic__mark`; o layout já está dimensionado para recebê-la.
