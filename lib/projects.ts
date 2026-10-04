import type { Language } from "./i18n";
export type Project = {
  id: string;
  image?: string;
  highlights: Record<Language, string[]>;
  name: string;
  url: string;
  category: Record<Language, string>;
  description: Record<Language, string>;
  status: "demo" | "project" | "experiment";
  video: { src: string; duration: string };
};
export const projects: Project[] = [
  {
    id: "salon",
    highlights: {
      mn: ["Үйлчилгээ сонгох", "Мастер, салбар", "Цаг захиалах"],
      en: ["Choose a service", "Specialists & branches", "Book a visit"],
    },
    video: { src: "/projects/videos/usertal.mp4", duration: "0:42" },
    name: "Lumière Salon",
    url: "https://salon-ecru-seven.vercel.app/",
    category: {
      mn: "ГОО САЙХАН / ЦАГ ЗАХИАЛГА",
      en: "BEAUTY / BOOKING SYSTEM",
    },
    description: {
      mn: "Үйлчлүүлэгч үйлчилгээ, мастер, салбараа сонгоод онлайнаар цаг захиалах салоны вэбсайт.",
      en: "A salon experience that brings services, specialists, branch information and appointment booking together.",
    },
    status: "project",
  },
  {
    id: "dental",
    highlights: {
      mn: ["Эмнэлгийн танилцуулга", "Цаг захиалгын демо"],
      en: ["Clinic introduction", "Booking demo"],
    },
    image: "/projects/dental-3ef26a8e.png",
    video: { src: "/projects/videos/dental.mp4", duration: "0:12" },
    name: "Dental Clinic",
    url: "https://dental-clinic77-green.vercel.app/",
    category: {
      mn: "ЭРҮҮЛ МЭНД / ВЭБ ПЛАТФОРМ",
      en: "HEALTHCARE / WEB PLATFORM",
    },
    description: {
      mn: "Эмнэлгийн цаг захиалгын платформын танилцуулга, үйлчлүүлэгчийн хуудас болон демо орчин.",
      en: "A clear introduction to a dental booking platform, with a customer-facing experience and an explorable demo.",
    },
    status: "demo",
  },
  {
    id: "store",
    highlights: {
      mn: ["Бүтээгдэхүүн", "Хайлт", "Сагс"],
      en: ["Products", "Search", "Shopping bag"],
    },
    video: { src: "/projects/videos/store.mp4", duration: "0:12" },
    name: "The Everyday Store",
    url: "https://store-virid-delta-66.vercel.app/",
    category: { mn: "ОНЛАЙН ДЭЛГҮҮР / ДЕМО", en: "E-COMMERCE / DEMO" },
    description: {
      mn: "Бүтээгдэхүүний каталог, хайлт, сагс бүхий хувцасны дэлгүүрийн демо. Албан ёсны Dickies дэлгүүр биш.",
      en: "An apparel storefront demo with product browsing, search and a shopping bag. Not an official Dickies store.",
    },
    status: "demo",
  },
  {
    id: "coffee",
    highlights: {
      mn: ["Ундааны цэс", "Онцлох бүтээгдэхүүн", "Брэндийн дизайн"],
      en: ["Drinks menu", "Featured products", "Brand design"],
    },
    image: "/projects/coffee-56d21a35.png",
    video: { src: "/projects/videos/coffee.mp4", duration: "0:12" },
    name: "Afterglow Coffee",
    url: "https://coffee-shop-zeta-seven.vercel.app/",
    category: { mn: "ХООЛ ҮЙЛЧИЛГЭЭ / ВЭБСАЙТ", en: "HOSPITALITY / WEBSITE" },
    description: {
      mn: "Кофены газрын цэс, онцлох ундааг танилцуулах, брэндийн өнгө төрхийг илэрхийлсэн вэбсайт.",
      en: "An expressive coffee web experience with a featured drink, menu categories and product presentation.",
    },
    status: "demo",
  },
  {
    id: "education",
    highlights: {
      mn: ["Анги сонгох", "Сонсоод бичих", "Дадлага"],
      en: ["Grade selection", "Dictation", "Practice"],
    },
    video: { src: "/projects/videos/education.mp4", duration: "0:12" },
    name: "Зөв бичгийн баатар",
    url: "https://bagiin-project-last-nykf.vercel.app/",
    category: { mn: "БОЛОВСРОЛ / ПЛАТФОРМ", en: "EDUCATION / PLATFORM" },
    description: {
      mn: "Сонсоод бичих дадал, анги сонгох боломж бүхий Монгол хэлний цээж бичгийн платформ.",
      en: "A Mongolian dictation platform with listening and writing practice, organized by school grade.",
    },
    status: "demo",
  },
  {
    id: "astrology",
    highlights: {
      mn: ["Эрхэсийн зураглал", "Ордууд", "Хувийн зурхай"],
      en: ["Birth charts", "Zodiac signs", "Personal horoscopes"],
    },
    video: { src: "/projects/videos/astrology.mp4", duration: "0:12" },
    name: "Одон Орон",
    url: "https://astrology-alpha-five.vercel.app/",
    category: {
      mn: "АСТРОЛОГИ / ВЭБ ПЛАТФОРМ",
      en: "ASTROLOGY / WEB PLATFORM",
    },
    description: {
      mn: "Эрхэсийн зураглал, ордууд болон хувийн зурхайн боломжуудыг танилцуулсан Монгол хэл дээрх астрологийн вэб туршлага.",
      en: "A Mongolian astrology web experience presenting birth-chart visuals, zodiac signs and personal horoscope features.",
    },
    status: "project",
  },
  {
    id: "movie",
    highlights: {
      mn: ["Кино танилцах", "Вэб апп", "Туршилтын төсөл"],
      en: ["Movie discovery", "Web app", "Experiment"],
    },
    video: { src: "/projects/videos/movie.mp4", duration: "0:12" },
    name: "Movie App",
    url: "https://movie-app-1ari.vercel.app/",
    category: { mn: "ВЭБ АПП / ТУРШИЛТ", en: "WEB APPLICATION / EXPERIMENT" },
    description: {
      mn: "Киноны ертөнцийг судлахад зориулсан фронтэнд хөгжүүлэлтийн туршилтын төсөл.",
      en: "A frontend experiment exploring a movie discovery experience.",
    },
    status: "experiment",
  },
];
export const portfolioUrl = "https://portfolio77-eight.vercel.app/";

export const organicCareUrl = "https://organic-caresalon.vercel.app/";
