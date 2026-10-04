import type { Language } from "./i18n";
export type Project = {
  id: string;
  image?: string;
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
    video: { src: "/projects/videos/usertal.mp4", duration: "0:42" },
    name: "Lumière Salon",
    url: "https://salon-ecru-seven.vercel.app/",
    category: {
      mn: "ГОО САЙХАН / ЦАГ ЗАХИАЛГА",
      en: "BEAUTY / BOOKING SYSTEM",
    },
    description: {
      mn: "Үйлчилгээ, мастер, салбарын мэдээллийг цаг захиалгын үйл явцтай нэгтгэсэн салоны дижитал туршлага.",
      en: "A salon experience that brings services, specialists, branch information and appointment booking together.",
    },
    status: "project",
  },
  {
    id: "dental",
    image: "/projects/dental-3ef26a8e.webp",
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
    image: "/projects/coffee-56d21a35.webp",
    video: { src: "/projects/videos/coffee.mp4", duration: "0:12" },
    name: "Afterglow Coffee",
    url: "https://coffee-shop-zeta-seven.vercel.app/",
    category: { mn: "ХООЛ ҮЙЛЧИЛГЭЭ / ВЭБСАЙТ", en: "HOSPITALITY / WEBSITE" },
    description: {
      mn: "Онцлох ундаа, цэс болон бүтээгдэхүүнийг тодотгосон кофены брэндийн вэб туршлага.",
      en: "An expressive coffee web experience with a featured drink, menu categories and product presentation.",
    },
    status: "demo",
  },
  {
    id: "education",
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
