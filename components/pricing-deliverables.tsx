"use client";

import { useLanguage } from "./language-provider";
import { Icon } from "./ui";

export function PricingDeliverables() {
  const { language } = useLanguage();
  const mn = language === "mn";
  const items = mn ? [
    ["web", "Ашиглахад бэлэн сайт, систем", "Сонгосон багц, тохирсон ажлын хүрээгээр танай бизнест зориулж хөгжүүлнэ."],
    ["grid", "Эх код, эрхийн шилжүүлэлт", "Танд шилжүүлэх эх код, ашиглах болон өөрчлөх эрхийг үнийн саналд тодорхой тусгана."],
    ["settings", "Удирдах хандалт, хүлээлгэн өгөх", "Багцад багтсан админ, домэйн, хостингийн хандалт болон ашиглах зааврыг тохиролцоно."],
  ] : [
    ["web", "A website or system ready to use", "Built for your business within the selected package and agreed scope."],
    ["grid", "Source code & rights transfer", "Your proposal specifies the source code and rights to use and modify it that will be transferred."],
    ["settings", "Management access & handover", "We agree on included admin, domain and hosting access, along with usage guidance."],
  ];
  return <div className="pricing-deliverables">
    <div className="deliverables-heading"><p>{mn ? "ЗӨВХӨН ҮНЭ БИШ, АВАХ ЗҮЙЛЭЭ ХАРЬЦУУЛААРАЙ" : "COMPARE WHAT YOU RECEIVE"}</p><h3>{mn ? "Танд юу хүлээлгэж өгөх вэ?" : "What will you receive?"}</h3></div>
    <div className="deliverables-grid">{items.map(([icon, title, description]) => <div key={title}><Icon name={icon} /><h4>{title}</h4><p>{description}</p></div>)}</div>
    <p className="deliverables-note">{mn ? "Эх код, эрх, хандалтын шилжүүлэлт нь сонгосон төлбөрийн хэлбэр, ажлын хүрээнээс хамаарна. Сарын үйлчилгээ болон гуравдагч талын үйлчилгээний нөхцөлийг тусад нь тохирно." : "Code, rights and access handover depend on the payment model and scope. Monthly service and third-party service terms are agreed separately."}</p>
  </div>;
}
