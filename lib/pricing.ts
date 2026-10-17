// Flip SALE_ACTIVE to false to end the launch sale everywhere.
export const SALE_ACTIVE = true;
// The sale runs through the end of this day (Ulaanbaatar time).
export const SALE_END_DATE = "2026-11-01";
export const saleEndsAt = new Date(`${SALE_END_DATE}T23:59:59+08:00`).getTime();
export const isSaleActive = (now = Date.now()) =>
  SALE_ACTIVE && now <= saleEndsAt;

export const plans = [
  { id: "website", originalPrice: 690000, salePrice: 349000, serviceIndex: 0, example: { name: "Afterglow Coffee", url: "https://coffee-shop-zeta-seven.vercel.app/" } },
  {
    id: "business-website",
    originalPrice: 1290000,
    salePrice: 649000,
    serviceIndex: 0,
    example: { name: "Dental Clinic", url: "https://dental-clinic77-green.vercel.app/" },
  },
  { id: "booking", originalPrice: 1990000, salePrice: 990000, serviceIndex: 1, featured: true, example: { name: "Lumière Salon", url: "https://salon-ecru-seven.vercel.app/" } },
  { id: "custom", originalPrice: 2990000, salePrice: 1490000, serviceIndex: 2, example: { name: "Organic Care", url: "https://organic-caresalon.vercel.app/" } },
] as const;
export type Plan = (typeof plans)[number];
export type PlanId = Plan["id"];
export const formatPrice = (value: number) =>
  `${new Intl.NumberFormat("en-US").format(value)}₮`;
export const saleCopy = {
  mn: {
    badge: "−50%",
    banner: "Нээлтийн хямдрал — бүх багц 50% хямд. 11-р сарын 1 хүртэл.",
    endsIn: "Хямдрал дуусахад",
    days: "хоног",
    left: "үлдлээ",
    was: "Хуучин үнэ",
  },
  en: {
    badge: "−50%",
    banner: "Launch sale — 50% off every package. Until November 1.",
    endsIn: "Sale ends in",
    days: "days",
    left: "",
    was: "Original price",
  },
};
export type PaymentPreference = "project" | "monthly" | "subscription";
export type PricingInquiry = {
  plan: PlanId;
  payment: PaymentPreference;
  addon?: string;
};
export const pricingCopy = {
  mn: {
    label: "ҮНЭ & ХАМТРАН АЖИЛЛАХ",
    title: "Таны хэрэгцээнд. Тодорхой үнэ.",
    intro:
      "Жижиг эхлэлээс бизнесийн систем хүртэл. Хэрэгтэй багцаа сонгоод, хамтдаа ажлын хүрээг тодорхойлъё.",
    project: "Төслийн үнээр",
    monthly: "Хэсэгчлэн төлөх",
    subscription: "Сарын үйлчилгээ",
    subscriptionPrice: "Үнийн санал авна",
    subscriptionNote:
      "Хөгжүүлэлт, хостинг, тогтмол арчилгааг сарын үйлчилгээгээр авна. Сарын үнэ, хөгжүүлэлтийн ажлын хэмжээ, хостингийн хүчин чадал, арчилгааны хүрээ болон үйлчилгээний хугацааг тусгай саналд тодорхойлно.",
    subscriptionFeatures: [
      "Тохиролцсон хүрээний хөгжүүлэлт",
      "Тохирсон хүчин чадлын хостинг",
      "Тогтмол арчилгаа, техникийн дэмжлэг",
    ],
    subscriptionScope:
      "Домэйн, төлбөртэй API / SMS болон нэмэлт үйлчилгээний зардал, хостингийн хязгаар, сар бүрийн ажлын хэмжээ, өөрчлөлтийн хүсэлт болон үйлчилгээ дуусах үеийн хүлээлгэн өгөх нөхцөлийг үнийн саналд тусгана.",
    from: "Эхлэх үнэ",
    suffix: "-с",
    choose: "Энэ багцыг ярилцах",
    monthlyQuote: "Сарын төлбөрийг тохиролцоно",
    total: "Төслийн нийт үнэ",
    monthlyNote:
      "Сар бүр төлөх хүсэлтээ илгээгээрэй. Сарын дүн, хугацаа, эхний төлбөр болон нийт үнийг ажил эхлэхээс өмнө үнийн саналд тодорхойлно.",
    priceNote:
      "Эцсийн үнэ нь хуудасны тоо, боломжууд, холболт болон төслийн шаардлагаас хамаарна.",
    names: [
      "Вэбсайт",
      "Бизнесийн вэбсайт",
      "Цаг захиалгын систем",
      "Тусгай систем",
    ],
    descriptions: [
      "Бизнесээ онлайнаар ойлгомжтой танилцуулах эхлэл.",
      "Брэнддээ тохирсон дизайн, олон хуудастай вэбсайт.",
      "Үйлчлүүлэгчийн захиалгаас өдөр тутмын удирдлага хүртэл.",
      "Таны бизнесийн ажиллагаанд тохируулсан программ.",
    ],
    fitLabel: "Хэнд тохирох",
    fit: [
      "Бизнесээ онлайнаар танилцуулах энгийн сайт хэрэгтэй бол",
      "Брэндээ мэргэжлийн түвшинд харуулж, сайтаа өөрөө засах бол",
      "Үйлчлүүлэгч цагаа өөрөө онлайнаар захиалдаг болох бол",
      "Захиалгаас гадна онлайн төлбөр, автомат сануулга, системийн холболт хэрэгтэй бол",
    ],
    examples: [
      "Жишээ: кофе шоп, жижиг дэлгүүр, хувь хүний үйлчилгээ",
      "Жишээ: эмнэлэг, сургалтын төв, компани",
      "Жишээ: салон, шүдний эмнэлэг, массаж, фитнес",
      "Жишээ: сүлжээ салон, клиник, гишүүнчлэлтэй фитнес",
    ],
    ladder: [
      "Багтсан зүйлс",
      "Вэбсайт багцын бүх зүйл, нэмээд:",
      "Бизнесийн вэбсайт багцын бүх зүйл, нэмээд:",
      "Цаг захиалгын системийн бүх зүйл, нэмээд:",
    ],
    features: [
      [
        "Нэг хуудас танилцуулга сайт",
        "Үйлчилгээ, үнийн мэдээлэл",
        "Утас, хаяг, газрын зураг",
        "Утас, компьютерт зөв харагдана",
      ],
      [
        "Бизнесээ онцолсон нүүр хуудас (landing page)",
        "Олон хуудас (Бидний тухай, Үйлчилгээ, Галерей, Холбоо барих)",
        "Хэдэн ч салбарын хаяг, байршил, газрын зураг",
        "Бодит үр дүн, ажлын жишээ, сэтгэгдэл харуулах хэсэг",
        "Сайтаа өөрөө засах админ хэсэг",
        "Брэндэд тусгайлан зурсан, хөдөлгөөнт дизайн",
        "Google хайлтад гарах суурь тохиргоо",
      ],
      [
        "Үйлчлүүлэгч мастер, цагаа өөрөө сонгож онлайнаар захиална",
        "Утсаар болон биечлэн ирсэн захиалгыг ресепшн, админ шууд нэмнэ",
        "Бүх салбарын захиалга, ажилтныг удирдах админ самбар",
        "Үйлчлүүлэгч бүртгүүлж, өөрийн захиалгаа харна",
        "Менежер, ресепшн, мастер бүрт тусдаа эрх",
        "Ажилчид өөрийн цагийн хуваарийг өөрсдөө харна",
        "Админ тайлан",
        "Бараа бүтээгдэхүүний бүртгэл",
      ],
      [
        "Үйлчлүүлэгчээс онлайнаар урьдчилгаа, төлбөр авна",
        "Захиалгын сануулга SMS, имэйлээр автоматаар очно",
        "Тайлангаа Excel-ээр татаж авна",
        "Касс, нягтлан зэрэг бусад системтэй холбоно",
        "Таны ажлын урсгалд тохируулж бүтээнэ",
      ],
    ],
    highlights: [null, null, "Салонд тохиромжтой", null],
    seeExample: "Жишээ үзэх",
    helperTitle: "Аль нь танд тохирох вэ?",
    helper: [
      "Бизнесээ зөвхөн танилцуулах уу?",
      "Олон хуудастай, брэндийн сайт хэрэгтэй юу?",
      "Цаг захиалгаар ажилладаг уу?",
      "Онлайн төлбөр, SMS сануулга, системийн холболт хэрэгтэй юу?",
    ],
    scopeTitle: "Нэмэлт зүйлсийг эхнээс нь тодорхой болгоно.",
    scopeText:
      "Домэйн, хостинг, төлбөртэй API / SMS, контент бэлтгэл, нэмэлт боломж болон нэвтрүүлсний дараах арчилгааны хэрэгцээ, зардлыг үнийн саналд тусад нь тодорхойлно.",
    nextTitle: "Эхлэхийн тулд юу хийх вэ?",
    steps: [
      [
        "Хэрэгцээгээ хуваалцах",
        "Бизнесийн чиглэл, хүссэн боломж, таалагдсан жишээ сайт, төсөв болон хугацаагаа хэлээрэй. Бүгдийг бэлдсэн байх албагүй.",
      ],
      [
        "Үнийн саналаа авах",
        "Хийх ажлын жагсаалт, багтах болон нэмэлт зүйлс, хугацаа, нийт үнэ, төлбөрийн хуваарийг тодорхойлно.",
      ],
      [
        "Тохиролцоод эхлэх",
        "Ажлын хүрээг баталгаажуулж, лого, текст, зураг болон шаардлагатай хандалтаа бэлдэнэ. Дизайн, хөгжүүлэлтийг эхлүүлнэ.",
      ],
    ],
    faqTitle: "Түгээмэл асуултууд",
    faq: [
      [
        "Хэсэгчлэн төлөх, сарын үйлчилгээ хоёр юугаараа ялгаатай вэ?",
        "Хэсэгчлэн төлөх нь нэг төслийн нийт үнийг тохирсон хуваариар төлөх хэлбэр. Сарын үйлчилгээ нь хөгжүүлэлт, хостинг, тогтмол арчилгааг тохирсон хүрээнд үргэлжлүүлэн авах үйлчилгээ юм.",
      ],
      [
        "Эхлэх үнэд бүх боломж багтах уу?",
        "Багц дээрх ажлууд нь эхний хүрээг харуулна. Яг хэдэн хуудас, ямар боломж болон холболт хийхийг таны хэрэгцээнд тулгуурлан эцсийн үнийн саналд жагсаана.",
      ],
      [
        "Сарын төлбөр хэд байх вэ?",
        "Сарын дүн, хэдэн сарын хугацаа болон эхний төлбөр тогтоогдоогүй. Сонгосон багц, ажлын хүрээнд тохирсон санал авна. Маягтаас сарын төлбөрийн хүсэлтээ сонгож болно.",
      ],
      [
        "Текст, зураг, лого бэлэн байх ёстой юу?",
        "Бэлэн материал байвал хуваалцаарай. Байхгүй бол шаардлагатай агуулгын жагсаалтыг гаргаж, бэлтгэх ажил багтах эсэхийг үнийн саналд тохиролцоно.",
      ],
      [
        "Дараа нь өөрчлөлт, арчилгаа хийлгэж болох уу?",
        "Шинэ боломж, агуулгын өөрчлөлт болон тогтмол арчилгааг тусад нь ярилцаж болно. Хамрах ажил, хугацаа, үнийг эхлэхээс өмнө тохиролцоно.",
      ],
    ],
    inquiryLabel: "Сонгосон багц",
    paymentLabel: "Төлбөрийн хүсэлт",
    clear: "Сонголтыг арилгах",
  },
  en: {
    label: "PRICING & WORKING TOGETHER",
    title: "Your needs. Clear starting points.",
    intro:
      "From a first website to a business system. Choose a starting point and we’ll define the scope together.",
    project: "Project pricing",
    monthly: "Installments",
    subscription: "Monthly service",
    subscriptionPrice: "Request a quote",
    subscriptionNote:
      "Get development, hosting and ongoing maintenance as a monthly service. Your proposal defines the monthly fee, development capacity, hosting resources, maintenance scope and service term.",
    subscriptionFeatures: [
      "Development within the agreed scope",
      "Hosting with agreed resources",
      "Ongoing maintenance and technical support",
    ],
    subscriptionScope:
      "Your proposal specifies domain and paid API / SMS costs, additional services, hosting limits, monthly work capacity, change requests and handover arrangements when the service ends.",
    from: "Starting from",
    suffix: "",
    choose: "Discuss this package",
    monthlyQuote: "Monthly amount by agreement",
    total: "Total project price",
    monthlyNote:
      "Request monthly payments. The monthly amount, term, initial payment and total price will be specified in your quote before work begins.",
    priceNote:
      "Final pricing depends on page count, features, integrations and project requirements.",
    names: ["Website", "Business website", "Booking system", "Custom system"],
    descriptions: [
      "A clear first home for your business online.",
      "A tailored brand experience with multiple pages.",
      "From customer appointments to everyday administration.",
      "Software designed around the way your business works.",
    ],
    fitLabel: "Who it’s for",
    fit: [
      "You need a simple site that introduces your business online",
      "You want a professional brand site you can edit yourself",
      "You want customers to book their own appointments online",
      "Beyond booking, you need online payments, automatic reminders and integrations",
    ],
    examples: [
      "e.g. a coffee shop, small store, independent service",
      "e.g. a clinic, training center, company",
      "e.g. a salon, dental clinic, massage studio, gym",
      "e.g. a salon chain, a clinic, a membership gym",
    ],
    ladder: [
      "What’s included",
      "Everything in Website, plus:",
      "Everything in Business website, plus:",
      "Everything in Booking system, plus:",
    ],
    features: [
      [
        "A one-page introduction site",
        "Your services and prices",
        "Phone, address and map",
        "Looks right on phones and computers",
      ],
      [
        "A landing page that showcases your business",
        "Multiple pages (About, Services, Gallery, Contact)",
        "Addresses, locations and maps for every branch",
        "A section for real results, work examples and reviews",
        "An admin area to edit your own site",
        "A custom design for your brand, with motion",
        "Basic setup to show up in Google search",
      ],
      [
        "Customers pick their specialist and time online",
        "Reception and admins add phone and walk-in bookings directly",
        "An admin dashboard for bookings and staff at every branch",
        "Customer accounts to view their own bookings",
        "Separate permissions for managers, reception and staff",
        "Staff see their own schedules",
        "Admin reports",
        "Product inventory",
      ],
      [
        "Take deposits and payments online",
        "Automatic booking reminders by SMS and email",
        "Download your reports as Excel",
        "Connections to your POS, accounting and other systems",
        "Built around the way you work",
      ],
    ],
    highlights: [null, null, "Great for salons", null],
    seeExample: "See an example",
    helperTitle: "Which one fits you?",
    helper: [
      "Just want to introduce your business?",
      "Need a multi-page, branded site?",
      "Do you work by appointment?",
      "Need online payments, SMS reminders or system integrations?",
    ],
    scopeTitle: "Define the extras from the start.",
    scopeText:
      "Domain, hosting, paid APIs / SMS, content creation, additional features and post-launch maintenance requirements and costs are itemized separately in your quote.",
    nextTitle: "What happens next?",
    steps: [
      [
        "Share what you need",
        "Tell us about your business, desired features, reference sites, budget and timeline. You don’t need to have everything ready.",
      ],
      [
        "Get a clear proposal",
        "Review the deliverables, inclusions, extras, timeline, total price and payment schedule.",
      ],
      [
        "Agree and get started",
        "Confirm the scope and prepare your logo, copy, images and any required access. Then design and development begin.",
      ],
    ],
    faqTitle: "A few useful answers",
    faq: [
      [
        "How do installments differ from a monthly service?",
        "Installments spread a single project’s total price over an agreed schedule. A monthly service provides development, hosting and ongoing maintenance within an agreed scope.",
      ],
      [
        "Does the starting price cover every feature?",
        "Each package outlines an initial scope. The exact number of pages, features and integrations is listed in your final proposal based on your needs.",
      ],
      [
        "How much are monthly payments?",
        "Monthly amounts, terms and initial payments are not fixed yet. Request a proposal for your package and scope. You can indicate your monthly payment preference in the inquiry form.",
      ],
      [
        "Do I need copy, images and a logo ready?",
        "Share any materials you already have. Otherwise, we’ll identify what’s needed and agree in the proposal whether content preparation is included.",
      ],
      [
        "Can I request updates and maintenance later?",
        "New features, content updates and ongoing maintenance can be discussed separately. Scope, timing and pricing are agreed before that work begins.",
      ],
    ],
    inquiryLabel: "Selected package",
    paymentLabel: "Payment preference",
    clear: "Clear selection",
  },
};

export const planGuide = {
  mn: {
    labels: [
      "Энгийн эхлэл",
      "Брэндийн танилцуулга",
      "Захиалга ба удирдлага",
      "Танд зориулсан шийдэл",
    ],
    payments: [
      "Тохирсон ажлын хүрээнд нийт үнийг гаргана.",
      "Төслийн нийт төлбөрийг тохирсон хугацаанд хуваана.",
      "Хөгжүүлэлт, хостинг, арчилгааг сарын үйлчилгээгээр авна.",
    ],
    details: "Багцад юу багтах вэ?",
    paymentTitle: "Төлбөрөө хэрхэн хийх вэ?",
  },
  en: {
    labels: [
      "A simple start",
      "Your brand online",
      "Booking & management",
      "Built around you",
    ],
    payments: [
      "A total quote based on an agreed project scope.",
      "Split the project total over an agreed schedule.",
      "Development, hosting and maintenance as a monthly service.",
    ],
    details: "Explore what's included",
    paymentTitle: "How would you like to pay?",
  },
};
