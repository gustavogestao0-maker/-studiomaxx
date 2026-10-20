# PRD — Studio Max Tattoo & Piercing

## Problema original
Desenvolver um site completo para o Studio Max Tattoo & Piercing (tatuador Sérgio Pereira, Sinop–MT) — não um site convencional de estúdio, mas uma experiência digital autoral com qualidade de estúdio criativo premiado: dark art editorial × tattoo culture × digital craft, galeria dominante, motion design refinado e conversão direta para WhatsApp.

## Dados confirmados (integridade)
- Studio Max Tattoo & Piercing — Sérgio Pereira, tatuador.
- Sinop — MT. Rua das Pitangueiras, 668-A, Centro.
- WhatsApp Tatuagem: (66) 9 9711-1547 → https://wa.me/556699711547
- WhatsApp Piercing: (66) 9 9988-1881 → https://wa.me/5566999881881
- Agendamento: modal "O QUE VAMOS MARCAR?" (BookingModal) oferece TATUAGEM e PIERCING, cada um abrindo o WhatsApp correspondente com mensagem pré-preenchida.
- Google Reviews: 4,6 / 5.0 — 9 avaliações (3 comentários reais exibidos).
- Nada inventado: sem preços, prêmios, anos de experiência, biografia ou sistema de reservas online.

## Arquitetura
- Frontend React (CRA + craco), Tailwind, framer-motion, Lenis (smooth scroll), sem backend novo (site institucional; agendamento via WhatsApp).
- Componentes: Navbar, Hero, Marquee, Gallery + Lightbox, Styles, Artist, Piercing, Reviews, Contact, Cursor, ScrollProgress, Motion helpers.
- Conteúdo centralizado em src/data/content.js. Imagens locais em public/img/ (fotos de banco como referência temporária, marcadas "IMAGEM DE REFERÊNCIA — SUBSTITUIR").
- Favicon SVG autoral (marca "M" laranja). SEO básico + Open Graph em index.html (lang pt-BR).

## Requisitos core (implementados 2026-10-09)
1. Hero cinematográfico 100svh com reveal mascarado linha a linha, parallax sutil, labels técnicos, detalhe laranja, CTAs (scroll para works + WhatsApp).
2. Marquee horizontal contínuo "STUDIO MAX — TATTOO — PIERCING — SINOP —" (para em prefers-reduced-motion).
3. Galeria masonry assimétrica 9 imagens, hover zoom + overlay + label + cursor VIEW, lightbox premium (prev/next, Escape/setas, scroll lock, aria-modal).
4. Estilos como interface tipográfica (6 linhas, hover revela imagem sticky no desktop; tap expande no mobile).
5. Seção do artista (foto 55–65%, nome gigante, "CADA PELE, UMA HISTÓRIA.").
6. Módulo piercing distinto ("BEYOND THE INK.") com CTA WhatsApp.
7. Prova social editorial (4,6/5.0, 9 avaliações, 3 depoimentos reais, sem cards).
8. Bloco de conversão final + localização com botão Google Maps (busca pelo endereço, sem coordenadas inventadas).
9. Navbar transparente→blur on scroll, menu mobile animado com ARIA, fecha ao navegar, Escape fecha.
10. Scroll progress, cursor customizado desktop-only, grain editorial, foco visível, reduced-motion respeitado.

## Bugs resolvidos durante o build
- IntersectionObserver nunca disparava reveals em elementos totalmente recortados (clip-path/overflow mask reportam ratio 0 no Chrome). Corrigido observando wrappers não-recortados e animando o conteúdo interno via variants.
- Imagens externas do Unsplash bloqueadas no preview (Cloudflare) → baixadas para /public/img (mais rápido e estável).

## Repaginada visual (2026-10-10)
- Tipografia fantasma gigante (outline 13% ash) ao fundo das seções: STUDIO MAX (hero), WORKS (galeria), STYLES, SÉRGIO (artista), PIERCING, 4,6/5 (avaliações).
- Fotografia em preto e branco que ganha cor no hover (galeria e artista); hero sempre P&B cinematográfico com contraste.
- Marquee transformado em fitas cruzadas inclinadas: fita laranja -2° (Anton preto) sobre fita grafite +1,5° em direção oposta.
- Seção de estilos: linhas gigantes (text-7xl) e preview de imagem que SEGUE O CURSOR no desktop (spring, some no touch/reduced-motion, com fallback de painel sticky).
- Artista: seção grafite com moldura deslocada, rótulo vertical, citação em Instrument Serif itálico grande e barra laranja.
- Piercing: headline em serif itálico ("BEYOND THE INK.") com "INK." em laranja, linhas em bronze e marca d'água fantasma.
- Avaliações: nota 4,6 gigante em Anton laranja, aspas decorativas enormes em bronze, citação principal em text-6xl serif.
- Escala tipográfica mais agressiva, paddings py-40, grain reforçado. Funcionalidades (lightbox, booking modal, lenis, cursor, menu mobile) preservadas e retestadas.

## Limpeza profunda / revisão crítica (2026-10-10)
- Galeria reduzida de 9 para 6 imagens (g1–g6), mantendo as mais variadas: sessão P&B, blackwork, old school colorida, minimalista, oriental e flash; layout final em 7/5 + 4/4/4 + 12 (flash em tela cheia). Estrutura pronta para receber as fotos reais (g1..g6 + variantes -600).
- Marquee removido (faixa animada com palavras repetidas); tipografias fantasma de fundo removidas de todas as seções; rótulos verticais decorativos removidos.
- Todos os títulos em português: "TRABALHOS DO ESTÚDIO.", "ESTILOS E SERVIÇOS.", "PIERCING." (serif itálico), "O QUE DIZEM OS CLIENTES.", "SEU PRÓXIMO PROJETO."; navegação em PT (TRABALHOS. ESTILOS. ARTISTA. CONTATO.); "SCROLL" → "ROLE".
- Hover da galeria simplificado (apenas marcador de referência + REF); manteve interação assinatura (preview que segue cursor nos estilos), P&B→cor, moldura deslocada do artista, lightbox e booking modal.
- Revalidado em 1440 e 390: sem rolagem horizontal, lightbox (03/06), navegação PT funcional, todos os CTAs intactos.

## Seção de Reels do Instagram (2026-10-10)
- Nova seção "STUDIO EM MOVIMENTO." ("Um pouco do trabalho de perto.") entre avaliações e contato, com os 3 Reels oficiais incorporados via iframe oficial do Instagram (embed URLs, sem script extra), carregamento lazy e moldura editorial escura (borda grafite, leve zoom que esconde o chrome branco do Instagram).
- Desktop: 3 vídeos lado a lado com o do meio deslocado para baixo (assimetria editorial). Mobile: sequência horizontal com scroll-snap (como o Instagram), cards de 80vw.
- Cada card tem rótulo "REEL 0X" e link "ABRIR NO INSTAGRAM ↗" (fallback elegante caso o embed não carregue). Links preservados exatamente como fornecidos.
- Arquivo: Reels.jsx + REELS em content.js. Validado: 3 iframes carregam com vídeo real, sem rolagem horizontal da página.
- Player próprio de vídeo (2026-10-10): cada card reproduz /videos/reel-1..3.mp4 com autoplay MUDO em loop (playsInline) e botão "ATIVAR SOM" (clique alterna o som) — sem nenhuma barra do Instagram. Se o MP4 falhar, cai no embed oficial (fallback).
- MP4s EXTRAÍDOS e hospedados localmente (2026-10-10): reel-1.mp4 (2,5MB), reel-2.mp4 (7,5MB), reel-3.mp4 (2,5MB) baixados dos próprios Reels públicos do estúdio com yt-dlp — nenhum link externo de vídeo.
- Carrossel estilo Brutus (2026-10-10): um reel por vez em moldura 9/16 (max-w 380px), botões ‹ › no desktop, pontos de navegação (ativo laranja largo), selo "VER NO INSTAGRAM ↗" fixo no rodapé do vídeo, transição fade entre slides. Replicado do site de referência brutus-sorriso.
- Troca automática a cada 8s (2026-10-10): o carrossel avança sozinho para o próximo vídeo; navegação manual reinicia a contagem; desativado em prefers-reduced-motion. Testado (vídeo 1 → 2 após 8s).
- Nota de verificação: o navegador headless do sandbox não tem codec H.264 (confirmado via canPlayType) e exibe o fallback; navegadores reais (Chrome/Safari/Firefox, Android/iPhone/desktop) suportam H.264 e reproduzem os vídeos locais sem chrome.
- Chrome do Instagram escondido (2026-10-10): iframe do embed com scale 1.32 — cabeçalho superior e barra branca "Watch on Instagram" ficam fora do enquadramento; apenas o vídeo aparece. Limitação: extras do player do IG podem variar conforme mudanças do Instagram; solução definitiva continua sendo os MP4s locais.

## Fotos reais do estúdio (2026-10-10)
- 3 trabalhos reais do Sérgio integrados na galeria e nos estilos: árvore com rosto (BLACKWORK), mulher com flores (OLD SCHOOL), espada cravada na pedra (FINE LINE) — arquivos real-blackwork.jpg, real-oldschool.jpg, real-finline.jpg (+ variantes -600), com flag `real: true`.
- Marcador "IMAGEM DE REFERÊNCIA" agora é condicional: fotos reais mostram "STUDIO MAX" / "TATUAGEM REAL"; as 3 restantes (sessão P&B g1, oriental g5, flash g6) + piercing seguem como referência.
- Proporção das fotos reais: aspect-[2/3] (crop leve, preserva a obra).

## Galeria 100% real + endereço oculto (2026-10-20)
- Cliente enviou 10 fotos reais; selecionadas as 7 mais variadas para a galeria (leão fine line, oriental nas costas, rosa old school, borboleta azul, lettering + árvore + espada). Arquivos real-leao/oriental/rosa/borboleta/lettering.jpg (+ -600), todos com real: true.
- Layout final: 7 (4/3) + 5 (2/3) / 4+4+4 (2/3) / 6+6 (4/5). Estilos ORIENTAL atualizado com foto real.
- "IMAGEM DE REFERÊNCIA" restante APENAS em COVER-UP e PIERCING na seção de estilos (sem fotos reais desses ainda).
- ENDEREÇO REMOVIDO do site a pedido do cliente ("por agora"): módulo de localização (Rua das Pitangueiras + botão Maps) fora do ar; dados preservados no content.js/PRD para retorno fácil. Contato segue por WhatsApp + telefones.

## Foto real do artista (2026-10-10)
- Seção do artista usa a FOTO REAL HD do Sérgio Pereira (941×1672) em /img/artist-sergio-2.jpg + variante -800 no srcSet (nomes novos para vencer cache de navegador; versões antigas removidas).
- Foto exibida INTEIRA (proporção natural 9/16, h-auto, sem crop) a pedido do cliente — parallax removido desta seção; moldura deslocada e barra laranja mantidas.
- Marcador "IMAGEM DE REFERÊNCIA" removido desta seção; alt atualizado ("Sérgio Pereira, tatuador do Studio Max"). Enquadramento object-[50%_30%] preserva o quadro com o crânio de chamas ao fundo.
- Tratamento P&B→cor no hover mantido. Galeria e piercing continuam com imagens de referência aguardando as fotos reais.

## Arte MAX no hero (2026-10-10)
- Fundo da abertura agora é a ARTE PANORÂMICA oficial (emblema MAX TATTOO em estúdio sombrio, 1672×941) em /img/hero-bg-wide.jpg — tela cheia (full-bleed) atrás da tipografia, em cores, com gradient de proteção para leitura e parallax sutil.
- og:image do compartilhamento aponta para a arte oficial.
- Versões antigas (hero.jpg, hero-800.jpg, hero-max.jpg) removidas do projeto.

## Otimização mobile (2026-10-10)
- Primeira dobra: hero com imagem 52svh, espaçamentos compactos no mobile — botões "EXPLORAR TRABALHOS" e "AGENDAR SESSÃO" visíveis sem rolagem em 360/390/430.
- Galeria em coluna única no mobile (todas as imagens largas, sem miniaturas), 12-col assimétrico a partir de md.
- srcSet responsivo: variantes -600px das 9 imagens da galeria + hero-800/artist-800 carregadas em telas pequenas (menos peso no 4G).
- Botões com área de toque ≥44px, toggle do menu 44px, safe-area (notch iPhone) no menu mobile.
- Correções: logo do nav com nowrap (não quebra linha em 768px), gap dos links reduzido no tablet (logo não sobrepõe WORKS), rótulos do hero com fundo escuro (legibilidade sobre áreas claras da foto).
- Validado sem rolagem horizontal em 360, 390, 430, 768, 1024 e 1440.

## Personas
- Cliente final (25–45): quer ver trabalhos, sentir o nível do estúdio e agendar pelo WhatsApp em 2 toques.
- Dono do estúdio (Sérgio): quer um portfólio sob medida, fácil de manter (imagens substituíveis) e que converta.

## Backlog priorizado
- P0: Substituir as imagens de referência pelas fotos reais do estúdio (substituir arquivos em public/img pelos mesmos nomes).
- P1: Seção de estilos com filtro cruzado na galeria; mini biografia real do artista quando fornecida.
- P1: SEO local (sitemap.xml, Google Business link direto, JSON-LD LocalBusiness com dados confirmados).
- P2: Página/rota 404 autoral; analytics de cliques no WhatsApp.

## Próximos passos
- Troca das imagens reais assim que o cliente enviar.
- Publicar (Deploy) — o preview atual já contém tudo.
