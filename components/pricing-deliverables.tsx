"use client";

import { useLanguage } from "./language-provider";
import { Icon } from "./ui";

export function PricingDeliverables() {
  const { language } = useLanguage();
  const mn = language === "mn";
  const items = mn ? [
    ["web", "Бэлэн сайт, систем", "Сонгосон багц, тохирсон ажлын хүрээгээр танай бизнест зориулж хөгжүүлнэ."],
    ["grid", "Төслийн эх код", "Төслийн эх кодыг танд өгнө. Цаашид өөрчлөх, хөгжүүлэх боломжтой."],
    ["settings", "Удирдах хандалт", "Багцад багтсан админ, домэйн, хостингийн хандалт болон ашиглах зааврыг тохиролцоно."],
    ["check", "30 хоногийн дэмжлэг", "Хүлээлгэн өгснөөс хойш 30 хоног алдаа болон жижиг засварыг үнэгүй хийнэ."],
  ] : [
    ["web", "A website or system ready to use", "Built for your business within the selected package and agreed scope."],
    ["grid", "Your project’s source code", "We hand over your project’s source code so it can be modified and developed further."],
    ["settings", "Management access & handover", "We agree on included admin, domain and hosting access, along with usage guidance."],
    ["check", "30 days of free fixes", "Bug fixes and minor adjustments are free for 30 days after handover."],
  ];
  return <div className="pricing-deliverables">
    <div className="deliverables-heading"><p>{mn ? "ХҮЛЭЭЛГЭН ӨГӨХ & ДЭМЖЛЭГ" : "HANDOVER & SUPPORT"}</p><h3>{mn ? "Танд юу хүлээлгэж өгөх вэ?" : "What will you receive?"}</h3></div>
    <div className="deliverables-grid">{items.map(([icon, title, description]) => <div key={title}><Icon name={icon} /><h4>{title}</h4><p>{description}</p></div>)}</div>
    <div className="deliverables-terms">
      <p><strong>{mn ? "Хостинг" : "Hosting"}</strong><span>{mn ? "Төлбөрийг захиалагч өөрөө төлнө." : "Paid separately by the client."}</span></p>
      <p><strong>{mn ? "Цаашдын хөгжүүлэлт" : "Ongoing development"}</strong><span>{mn ? "Шинэ боломж, нэмэлт хөгжүүлэлт, 30 хоногийн дараах засвар тусдаа үнэтэй. Ажлын хүрээ, үнийг урьдчилан тохирно." : "New features, additional development and fixes after 30 days are priced separately. Scope and price are agreed in advance."}</span></p>
    </div>
  </div>;
}
