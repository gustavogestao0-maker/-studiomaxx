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
    id: "photo-1565058379802-bbe93b2f703a",
    w: 1200,
    h: 900,
    cls: "col-span-2 md:col-span-7",
    ratio: "aspect-[4/3]",
    tag: "PRETO & CINZA",
    alt: "Sessão de tatuagem em preto e cinza em andamento — imagem de referência",
  },
  {
    file: "real-blackwork.jpg",
    w: 975,
    h: 1613,
    cls: "col-span-2 md:col-span-5",
    ratio: "aspect-[2/3]",
    real: true,
    tag: "BLACKWORK",
    alt: "Tatuagem blackwork de árvore com rosto na perna — Studio Max",
  },
  {
    file: "real-oldschool.jpg",
    w: 959,
    h: 1641,
    cls: "col-span-2 md:col-span-4",
    ratio: "aspect-[2/3]",
    real: true,
    tag: "OLD SCHOOL",
    alt: "Tatuagem old school colorida de mulher com flores na perna — Studio Max",
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
    id: "photo-1770112035323-b8da0cdefa00",
    w: 1000,
    h: 1333,
    cls: "col-span-2 md:col-span-4",
    ratio: "aspect-[3/4]",
    tag: "ORIENTAL",
    alt: "Tatuagem oriental em preto e vermelho — imagem de referência",
  },
  {
    id: "photo-1601653228228-c7941734a8f7",
    w: 1200,
    h: 900,
    cls: "col-span-2 md:col-span-12",
    ratio: "aspect-[16/7]",
    tag: "FLASH OLD SCHOOL",
    alt: "Artes de flash old school — imagem de referência",
  },
].map((item, i) => ({
  ...item,
  src: img(item.file ?? `g${i + 1}.jpg`),
  small: img(item.file ? item.file.replace(".jpg", "-600.jpg") : `g${i + 1}-600.jpg`),
  full: img(item.file ?? `g${i + 1}.jpg`),
  ref: String(i + 1).padStart(2, "0"),
}));

export const STYLES = [
  { n: "01", name: "OLD SCHOOL", img: img("real-oldschool.jpg"), real: true, alt: "Old school — tatuagem real do Studio Max" },
  { n: "02", name: "BLACKWORK", img: img("real-blackwork.jpg"), real: true, alt: "Blackwork — tatuagem real do Studio Max" },
  { n: "03", name: "ORIENTAL", img: img("style-oriental.jpg"), alt: "Oriental — imagem de referência" },
  { n: "04", name: "MINIMALISTA", img: img("real-finline.jpg"), real: true, alt: "Minimalista — tatuagem real do Studio Max" },
  { n: "05", name: "COVER-UP", img: img("style-coverup.jpg"), alt: "Cover-up — imagem de referência" },
  { n: "06", name: "PIERCING", img: img("piercing.jpg"), alt: "Piercing — imagem de referência" },
];

export const PIERCING_IMAGES = [
  { src: img("piercing.jpg"), alt: "Piercing de orelha — imagem de referência" },
  { src: img("piercing2.jpg"), alt: "Piercing e tatuagem no pescoço — imagem de referência" },
];

export const CTA_BACKGROUND = img("cta-bg.jpg");

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
