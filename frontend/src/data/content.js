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

export const HERO_IMAGE = img("hero.jpg");

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
    id: "photo-1607943917700-18ec6ff5a4c2",
    w: 1000,
    h: 1333,
    cls: "col-span-2 md:col-span-5",
    ratio: "aspect-[3/4]",
    tag: "BLACKWORK",
    alt: "Tatuagem preta cobrindo torso e braços — imagem de referência",
  },
  {
    id: "photo-1775135544885-e468e7a36841",
    w: 1000,
    h: 1333,
    cls: "col-span-2 md:col-span-4",
    ratio: "aspect-[3/4]",
    tag: "OLD SCHOOL",
    alt: "Tatuagem old school colorida — imagem de referência",
  },
  {
    id: "photo-1547754145-ef9ff306e3f3",
    w: 1000,
    h: 1000,
    cls: "col-span-2 md:col-span-4",
    ratio: "aspect-square",
    tag: "MINIMALISTA",
    alt: "Tatuagem minimalista fina no braço — imagem de referência",
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
  src: img(`g${i + 1}.jpg`),
  small: img(`g${i + 1}-600.jpg`),
  full: img(`g${i + 1}.jpg`),
  ref: String(i + 1).padStart(2, "0"),
}));

export const STYLES = [
  { n: "01", name: "OLD SCHOOL", img: img("style-oldschool.jpg"), alt: "Flash old school — imagem de referência" },
  { n: "02", name: "BLACKWORK", img: img("style-blackwork.jpg"), alt: "Blackwork — imagem de referência" },
  { n: "03", name: "ORIENTAL", img: img("style-oriental.jpg"), alt: "Oriental — imagem de referência" },
  { n: "04", name: "MINIMALISTA", img: img("style-minimal.jpg"), alt: "Minimalista — imagem de referência" },
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
