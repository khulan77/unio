import type { Language } from "./i18n";
export const addons: {
  id: string;
  startingPrice: number | null;
  name: Record<Language, string>;
  scope: Record<Language, string>;
}[] = [
  {
    id: "extra-page",
    startingPrice: null,
    name: { mn: "Нэмэлт хуудас", en: "Additional page" },
    scope: {
      mn: "Шинэ хуудасны бүтэц, responsive загвар, одоо байгаа сайттай холбох.",
      en: "A new page structure, responsive layout and integration into the existing website.",
    },
  },
  {
    id: "content-admin",
    startingPrice: null,
    name: { mn: "Контент удирдах админ", en: "Content management admin" },
    scope: {
      mn: "Текст, зураг, үйлчилгээ эсвэл бүтээгдэхүүнээ засах удирдлагын хэсэг.",
      en: "An admin area to edit copy, images, services or products.",
    },
  },
  {
    id: "accounts",
    startingPrice: null,
    name: {
      mn: "Бүртгэл, нэвтрэлт, эрхийн тохиргоо",
      en: "Accounts, login and permissions",
    },
    scope: {
      mn: "Хэрэглэгчийн бүртгэл, нэвтрэлт болон тохиролцсон хэрэглэгчийн дүрүүд.",
      en: "Customer registration, login and agreed user roles.",
    },
  },
  {
    id: "payments",
    startingPrice: null,
    name: { mn: "Онлайн төлбөрийн холболт", en: "Online payment integration" },
    scope: {
      mn: "Сонгосон төлбөрийн үйлчилгээтэй холбож, төлбөрийн төлөвийг боловсруулах. Үйлчилгээ үзүүлэгчийн шимтгэл тусдаа.",
      en: "Connect a selected payment provider and handle payment status. Provider transaction fees are separate.",
    },
  },
  {
    id: "notifications",
    startingPrice: null,
    name: { mn: "SMS / имэйл мэдэгдэл", en: "SMS / email notifications" },
    scope: {
      mn: "Захиалга, сануулга зэрэг тохиролцсон үйл явдлын мэдэгдэл. Илгээлтийн үйлчилгээний төлбөр тусдаа.",
      en: "Notifications for agreed events such as bookings and reminders. Messaging provider fees are separate.",
    },
  },
  {
    id: "language",
    startingPrice: null,
    name: { mn: "Нэмэлт хэл", en: "Additional language" },
    scope: {
      mn: "Хэл солих боломж, орчуулсан агуулгын бүтэц. Орчуулга бэлтгэх ажлыг тусад нь тохиролцоно.",
      en: "Language switching and translated content structure. Translation work is agreed separately.",
    },
  },
  {
    id: "reports",
    startingPrice: null,
    name: {
      mn: "Тайлан, шүүлтүүр, экспорт",
      en: "Reports, filters and export",
    },
    scope: {
      mn: "Тохиролцсон үзүүлэлтийн тайлан, огнооны шүүлтүүр, CSV / Excel экспорт.",
      en: "Reports for agreed metrics, date filters and CSV / Excel exports.",
    },
  },
  {
    id: "integration",
    startingPrice: null,
    name: {
      mn: "API холболт / автоматжуулалт",
      en: "API integration / automation",
    },
    scope: {
      mn: "Өөр системтэй мэдээлэл солилцох эсвэл давтагддаг ажлыг автоматжуулах.",
      en: "Exchange data with another system or automate a repetitive workflow.",
    },
  },
];
export const scopeCopy = {
  mn: {
    title: "Хэрэглэгчид хялбар. Танд удирдах боломж.",
    intro:
      "Хэрэглэгчийн тал нь үйлчлүүлэгчийн үзэж, ашиглах хэсэг. Админ тал нь бизнесийн мэдээлэл, захиалга, өдөр тутмын ажлаа удирдах хэсэг юм.",
    customer: "Хэрэглэгчийн тал",
    admin: "Админ тал",
    example: "ЦАГ ЗАХИАЛГЫН СИСТЕМИЙН ЖИШЭЭ",
    customerFeatures: [
      "Үйлчилгээ, үнэ, мэдээллийг ойлгомжтой үзэх",
      "Үйлчилгээ, ажилтан, боломжит өдрөө сонгох",
      "Сул цаг сонгож, холбоо барих мэдээллээ оруулах",
      "Захиалгын баталгаажуулалт, төлөвөө харах",
    ],
    adminFeatures: [
      "Админ эрхээр нэвтэрч удирдах",
      "Захиалгыг харах, төлөв өөрчлөх",
      "Ажилтан, үйлчилгээ, цагийн хуваарь тохируулах",
      "Үйлчлүүлэгчийн мэдээллийг удирдах",
    ],
    exampleNote:
      "Дээрх нь системийн ажлын хүрээг ярилцах жишээ. Нэвтрэлт, төлбөр, мэдэгдэл, тайлан болон эрхийн түвшнийг хэрэгцээнд тань тохируулж үнийн саналд баталгаажуулна.",
    comparisonTitle: "Аль багцад ямар тал багтах вэ?",
    package: "Багц",
    rows: [
      [
        "Танилцуулга, үйлчилгээ, холбоо барих мэдээлэл",
        "Контент засах админыг нэмэлтээр тохиролцоно",
      ],
      [
        "Олон хуудас, брэндийн дизайн, харилцан үйлдэл",
        "Контент засах админыг нэмэлтээр тохиролцоно",
      ],
      [
        "Үйлчилгээ, өдөр, цаг сонгон захиалах",
        "Захиалга, ажилтан, хуваарь, үйлчилгээ, үйлчлүүлэгч",
      ],
      [
        "Бизнесийн шаардлагад тохирсон хэрэглэгчийн орчин",
        "Олон салбар, ажлын урсгал, тохиролцсон админ хэрэгслүүд",
      ],
    ],
    addonTitle: "Дараагийн боломжоо нэмээрэй.",
    addonIntro:
      "Анхны ажлын хүрээнээс гадуурх нэмэлт хөгжүүлэлт. Одоо сонгосон багцад багтсан ажлыг давхар тооцохгүй.",
    work: "Нэмэлт ажил",
    scope: "Хийх ажлын хүрээ",
    price: "Хөгжүүлэлтийн үнэ",
    quote: "Үнийн санал авна",
    request: "Санал авах",
    from: "-с",
    addonNote:
      "Нэмэлт ажлын эцсийн үнэ нь одоо байгаа систем, ажлын хэмжээ, холболтын шаардлагаас хамаарна. Сарын үйлчилгээтэй бол тухайн ажил сарын тохиролцсон хүрээнд багтах эсэхийг эхлээд шалгана.",
    selectedAddon: "Сонирхож буй нэмэлт ажил",
  },
  en: {
    title: "Simple for customers. Manageable for you.",
    intro:
      "The customer side is what visitors see and use. The admin side is where you manage business information, bookings and daily operations.",
    customer: "Customer side",
    admin: "Admin side",
    example: "A BOOKING SYSTEM EXAMPLE",
    customerFeatures: [
      "Browse services, prices and business information",
      "Choose a service, staff member and available day",
      "Select an available time and enter contact details",
      "View booking confirmation and status",
    ],
    adminFeatures: [
      "Sign in with admin access",
      "Review bookings and update their status",
      "Manage staff, services and schedules",
      "Manage customer information",
    ],
    exampleNote:
      "This example helps define the scope of your system. Login, payments, notifications, reports and permission levels are confirmed in the proposal to match your needs.",
    comparisonTitle: "Which sides are included in each package?",
    package: "Package",
    rows: [
      [
        "Business information, services and contact details",
        "Content editing admin is an optional addition",
      ],
      [
        "Multiple pages, custom branding and interactions",
        "Content editing admin is an optional addition",
      ],
      [
        "Book a service, date and available time",
        "Bookings, staff, schedules, services and customers",
      ],
      [
        "A customer experience matched to your requirements",
        "Multiple branches, workflows and agreed admin tools",
      ],
    ],
    addonTitle: "Add your next capability.",
    addonIntro:
      "Additional development beyond the initial scope. Work already included in your chosen package is not charged twice.",
    work: "Additional work",
    scope: "Scope of work",
    price: "Development price",
    quote: "Request a quote",
    request: "Get a quote",
    from: " and up",
    addonNote:
      "Final add-on pricing depends on the existing system, scope and integration requirements. For monthly services, we first check whether the work is covered by your agreed monthly scope.",
    selectedAddon: "Requested addition",
  },
};
