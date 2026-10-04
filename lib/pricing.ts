export const plans = [
  { id: "website", price: 690000, serviceIndex: 0 },
  { id: "business-website", price: 1290000, serviceIndex: 0 },
  { id: "booking", price: 1990000, serviceIndex: 1 },
  { id: "custom", price: 2990000, serviceIndex: 2 },
] as const;
export type PlanId = (typeof plans)[number]["id"];
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
    included: "Багцад багтах ажлууд",
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
    features: [
      [
        "Гар утас, таблет, компьютерт тохирсон загвар",
        "Бизнесийн танилцуулга",
        "Үйлчилгээ / бүтээгдэхүүний мэдээлэл",
        "Холбоо барих мэдээлэл, газрын зураг",
        "Сайтыг байршуулж нэвтрүүлэх",
      ],
      [
        "Брэндэд тохирсон UI/UX дизайн",
        "Олон хуудасны бүтэц",
        "Хөдөлгөөн, хэрэглэгчийн харилцан үйлдэл",
        "Агуулгын зохион байгуулалт",
        "SEO-ийн суурь тохиргоо",
        "Responsive загвар, нэвтрүүлэлт",
      ],
      [
        "Үйлчлүүлэгчийн онлайн цаг захиалга",
        "Админ удирдлагын самбар",
        "Ажилтны мэдээлэл, удирдлага",
        "Цагийн хуваарь",
        "Үйлчилгээний тохиргоо",
        "Үйлчлүүлэгчийн мэдээлэл",
      ],
      [
        "Олон салбарын ажиллагаа",
        "Бизнесийн онцлогт тохирсон ажлын урсгал",
        "Админ хэрэгслүүд",
        "Давтагддаг ажлын автоматжуулалт",
        "Бусад системтэй холболт",
        "Шаардлагад тохирсон бүтцийн төлөвлөлт",
      ],
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
    included: "What’s included",
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
    features: [
      [
        "Mobile, tablet and desktop layouts",
        "Business information",
        "Service / product information",
        "Contact details and map",
        "Deployment and launch",
      ],
      [
        "Custom UI/UX design",
        "Multiple-page structure",
        "Motion and interactions",
        "Content structure",
        "Basic SEO setup",
        "Responsive layouts and launch",
      ],
      [
        "Online customer booking",
        "Admin dashboard",
        "Employee management",
        "Appointment schedule",
        "Service configuration",
        "Customer information",
      ],
      [
        "Multi-branch operations",
        "Custom business workflows",
        "Admin tools",
        "Workflow automation",
        "System integrations",
        "Architecture matched to your requirements",
      ],
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
    audience: [
      "Үйлчилгээгээ онлайнаар танилцуулахад",
      "Олон хуудастай, брэндийн вэбсайт хэрэгтэй бол",
      "Цаг захиалга, ажилтны хуваариа удирдахад",
      "Өөрийн үйл ажиллагаанд тохирсон систем хэрэгтэй бол",
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
    audience: [
      "For introducing your services online",
      "For a branded website with multiple pages",
      "For managing appointments and staff schedules",
      "For software tailored to your own operations",
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
