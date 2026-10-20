const uns = (id, w = 1200, h = null) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=80`;

const img = (file) => `/img/${file}`;

const wa = (number, text) => `https://wa.me/${number}?text=` + encodeURIComponent(text);

export const LINKS = {
  whatsapp: wa("556699711547", "Olá! Quero agendar uma sessão de tatuagem no Studio Max."),
  whatsappPiercing: wa("5566999881881", "Olá! Quero agendar um piercing no Studio Max."),
  maps:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Rua das Pitangueiras, 668-A, Centro, Sinop - MT"),
  phoneTattoo: "(66) 9 9711-1547",
  phonePiercing: "(66) 9 9988-1881",
};

export const NAV = [
  { label: "TRABALHOS", href: "#works" },
  { label: "ESTILOS", href: "#styles" },
  { label: "ARTISTA", href: "#artist" },
  { label: "CONTATO", href: "#contact" },
];

export const HERO_IMAGE = img("hero-bg-wide.jpg");

export const GALLERY = [
  {
    file: "real-leao.jpg",
    w: 966,
    h: 1050,
    cls: "col-span-2 md:col-span-7",
    ratio: "aspect-[4/3]",
    real: true,
    tag: "FINE LINE",
    alt: "Tatuagem fine line de leão com flores em preto e cinza — Studio Max",
  },
  {
    file: "real-oriental.jpg",
    w: 597,
    h: 1080,
    cls: "col-span-2 md:col-span-5",
    ratio: "aspect-[2/3]",
    real: true,
    tag: "ORIENTAL",
    alt: "Tatuagem oriental colorida cobrindo costas e braço — Studio Max",
  },
  {
    file: "real-blackwork.jpg",
    w: 975,
    h: 1613,
    cls: "col-span-2 md:col-span-4",
    ratio: "aspect-[2/3]",
    real: true,
    tag: "BLACKWORK",
    alt: "Tatuagem blackwork de árvore com rosto na perna — Studio Max",
  },
  {
    file: "real-rosa.jpg",
    w: 720,
    h: 1600,
    cls: "col-span-2 md:col-span-4",
    ratio: "aspect-[2/3]",
    real: true,
    tag: "OLD SCHOOL",
    alt: "Tatuagem old school de rosa com cálice — Studio Max",
  },
  {
    file: "real-finline.jpg",
    w: 971,
    h: 1619,
    cls: "col-span-2 md:col-span-4",
    ratio: "aspect-[2/3]",
    real: true,
    tag: "FINE LINE",
    alt: "Tatuagem fine line de espada cravada na pedra — Studio Max",
  },
  {
    file: "real-borboleta.jpg",
    w: 1086,
    h: 1600,
    cls: "col-span-2 md:col-span-6",
    ratio: "aspect-[4/5]",
    real: true,
    tag: "COLORIDA",
    alt: "Tatuagem de borboleta azul com flores nas costas — Studio Max",
  },
  {
    file: "real-lettering.jpg",
    w: 1200,
    h: 1600,
    cls: "col-span-2 md:col-span-6",
    ratio: "aspect-[4/5]",
    real: true,
    tag: "LETTERING",
    alt: "Tatuagem de lettering com coração no antebraço — Studio Max",
  },
].map((item, i) => ({
  ...item,
  src: img(item.file),
  small: img(item.file.replace(".jpg", "-600.jpg")),
  full: img(item.file),
  ref: String(i + 1).padStart(2, "0"),
}));

export const STYLES = [
  { n: "01", name: "OLD SCHOOL", img: img("real-oldschool.jpg"), real: true, alt: "Old school — tatuagem real do Studio Max" },
  { n: "02", name: "BLACKWORK", img: img("real-blackwork.jpg"), real: true, alt: "Blackwork — tatuagem real do Studio Max" },
  { n: "03", name: "ORIENTAL", img: img("real-oriental.jpg"), real: true, alt: "Oriental — tatuagem real do Studio Max" },
  { n: "04", name: "MINIMALISTA", img: img("real-finline.jpg"), real: true, alt: "Minimalista — tatuagem real do Studio Max" },
  { n: "05", name: "COVER-UP", img: img("style-coverup.jpg"), alt: "Cover-up — imagem de referência" },
  { n: "06", name: "PIERCING", img: img("piercing.jpg"), alt: "Piercing — imagem de referência" },
];

export const PIERCING_IMAGES = [
  { src: img("piercing.jpg"), alt: "Piercing de orelha — imagem de referência" },
  { src: img("piercing2.jpg"), alt: "Piercing e tatuagem no pescoço — imagem de referência" },
];

export const CTA_BACKGROUND = img("cta-bg.jpg");

export const REELS = [
  { id: "DaGuvLaKNns", url: "https://www.instagram.com/reel/DaGuvLaKNns/" },
  { id: "DFLsAlZvXYs", url: "https://www.instagram.com/reel/DFLsAlZvXYs/" },
  { id: "DFdj4Q5PFEa", url: "https://www.instagram.com/reel/DFdj4Q5PFEa/" },
].map((r, i) => ({
  ...r,
  embed: `https://www.instagram.com/reel/${r.id}/embed`,
  n: String(i + 1).padStart(2, "0"),
}));

export const REVIEWS = {
  rating: "4,6",
  scale: "5.0",
  source: "GOOGLE REVIEWS",
  count: "9 AVALIAÇÕES",
  quotes: [
    "Foi uma ótima experiência, o atendimento foi excelente e fiquei muito satisfeita com o resultado das minhas tatuagens.",
    "Foi a minha primeira tatuagem e eu não poderia ter escolhido um lugar melhor!",
    "Perfeito.",
  ],
};

export const ADDRESS = {
  lines: ["STUDIO MAX TATTOO & PIERCING", "RUA DAS PITANGUEIRAS, 668-A", "CENTRO — SINOP / MT"],
};
