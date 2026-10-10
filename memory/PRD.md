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
