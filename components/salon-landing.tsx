"use client";

import Link from "next/link";
import { PricingDeliverables } from "./pricing-deliverables";
import { useRef, useState, type FormEvent } from "react";
import { plans, formatPrice, pricingCopy, SALE_END_DATE } from "@/lib/pricing";
import { projects } from "@/lib/projects";
import { contactPhone, contactPhoneHref } from "@/lib/contact";
import { useLanguage } from "./language-provider";
import { useSaleActive } from "./sale";
import { Arrow, Icon, ExternalLink } from "./ui";

export function SalonLanding() {
  const { language } = useLanguage();
  const mn = language === "mn";
  const text = (a: string, b: string) => mn ? a : b;
  const sale = useSaleActive();
  const plan = plans.find((item) => item.id === "booking")!;
  const project = projects.find((item) => item.id === "salon")!;
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const sending = useRef(false);
  const cta = text("10 минутын демо товлох", "Request a 10-minute demo");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    sending.current = true;
    setState("sending");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("instagram"), company: data.get("instagram"),
          contact: data.get("contact"), website: data.get("website"),
          service: "Салоны систем — 10 минутын демо",
          package: pricingCopy[language].names[2],
          message: `Эх сурвалж: /salon\nInstagram: ${data.get("instagram")}\nХолбогдох боломжтой цаг: ${data.get("preferredTime")}\nНэмэлт мэдээлэл: ${data.get("message") || "—"}`,
        }),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok || !(await response.json()).ok) throw new Error("send");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    } finally {
      sending.current = false;
    }
  }
  return (
    <div className="salon-page">
      <section className="container salon-hero">
        <div>
          <p className="eyebrow">UNIO / {text("САЛОНД ЗОРИУЛАВ", "FOR SALONS")}</p>
          <h1>{text("Танай салоны", "Your salon’s")}<br />{text("цаг захиалга", "appointments.")}<br /><span>{text("нэг дор.", "All together.")}</span></h1>
          <p className="salon-lead">{text("Үйлчлүүлэгч үйлчилгээ, мастераа сонгоод онлайнаар цаг захиална. Танай баг захиалга, хуваариа нэг самбараас удирдана.", "Clients choose a service, a specialist and a time online. Your team manages appointments and schedules in one place.")}</p>
          <div className="salon-actions"><a className="button" href="#salon-demo">{cta}<Arrow /></a><a className="text-link" href="#salon-video">{text("Бичлэг үзэх", "Watch the walkthrough")}<Arrow down /></a></div>
          <p className="salon-note">{text("Үнэгүй танилцуулга · Танай хэрэгцээг хамт ярилцана", "Free introduction · Built around your needs")}</p>
        </div>
        <aside className="salon-flow" aria-label={text("Захиалгын дараалал", "Booking journey")}>
          <div className="salon-flow-top"><span>UNIO / BOOKING</span><Icon name="calendar" /></div>
          <p className="salon-flow-title">{text("Bio дахь нэг линкээс", "From one link in your bio")}</p>
          <ol>{[
            [text("Үйлчилгээгээ сонгоно", "Choose a service"), text("Үйлчилгээний мэдээлэл, үнэ", "Service details and prices")],
            [text("Мастер, цагаа сонгоно", "Choose a specialist & time"), text("Өөрт тохирох салбар, хуваарь", "The right branch and schedule")],
            [text("Захиалгаа илгээнэ", "Submit the booking"), text("Салон админ самбартаа харна", "Your salon sees it in the dashboard")],
          ].map(([title, detail], i) => <li key={title}><span className="salon-step">0{i + 1}</span><div><strong>{title}</strong><p>{detail}</p></div></li>)}</ol>
          <p className="salon-flow-bottom">{text("Үйлчлүүлэгчийн хуудас + Салоны удирдлага", "Client experience + Salon management")}</p>
        </aside>
      </section>

      <section id="salon-video" className="salon-video-section">
        <div className="container">
          <div className="salon-section-heading"><div><p className="eyebrow">01 / {text("БОДИТОЙГООР ХАРЪЯ", "SEE THE EXPERIENCE")}</p><h2>{text("Захиалга өгөхөд", "A booking,")}<br />{text("ямар харагдах вэ?", "from your client’s side.")}</h2></div><p>{text("Lumière Salon жишээн дээр үйлчилгээ, мастер, цаг сонгох урсгалтай танилцаарай.", "Explore the service, specialist and time selection flow in our Lumière Salon example.")}</p></div>
          <div className="salon-video-frame"><div className="salon-video-bar"><span>Lumière Salon / {text("Үзүүлэн", "Example")}</span><span>{project.video.duration}</span></div><video controls playsInline preload="metadata" aria-label={text("Салоны цаг захиалах урсгалын бичлэг", "Salon booking walkthrough")} src={project.video.src} /></div>
          <div className="salon-video-caption"><p>{text("Жишээ загвар. Танай салоны нэр, өнгө төрх, үйлчилгээнд тохируулна.", "An example design, adapted to your salon’s identity and services.")}</p><ExternalLink className="text-link" href={project.url}>{text("Жишээг өөрөө турших", "Explore the example")}<Arrow diagonal /></ExternalLink></div>
          <div className="salon-admin-video">
            <div className="salon-section-heading">
              <div>
                <p className="eyebrow">{text("АДМИН ТАЛ", "ADMIN EXPERIENCE")}</p>
                <h2>{text("Салоны удирдлага", "Salon management,")}<br />{text("ямар харагдах вэ?", "behind the scenes.")}</h2>
              </div>
              <p>{text("Үйлчлүүлэгчийн захиалгын дараа танай багийн ашиглах админ самбартай танилцаарай.", "Explore the admin dashboard your team uses on the other side of a client booking.")}</p>
            </div>
            <div className="salon-video-frame">
              <div className="salon-video-bar"><span>UNIO / {text("Салоны админ самбар", "Salon admin dashboard")}</span></div>
              <video controls playsInline preload="metadata" aria-label={text("Салоны админ талын бичлэг", "Salon admin walkthrough")} src="/projects/videos/admin.mp4" />
            </div>
          </div>
        </div>
      </section>

      <section className="container salon-section">
        <p className="eyebrow">02 / {text("ХОЁР ТАЛД ХЭРЭГТЭЙ", "FOR CLIENTS & YOUR TEAM")}</p>
        <h2>{text("Захиалахад ойлгомжтой.", "Easy to book.")}<br /><span>{text("Удирдахад эмх цэгцтэй.", "Clear to manage.")}</span></h2>
        <div className="salon-features">{[
          ["calendar", text("Үйлчлүүлэгчид", "For your clients"), text("Үйлчилгээ, мастер, салбараа сонгоно. Боломжтой цагаас захиалж, өөрийн захиалгаа харна.", "Choose a service, specialist and branch. Book an available time and view appointments.")],
          ["grid", text("Ресепшн, менежерт", "For reception & managers"), text("Онлайн захиалгаа харна. Утсаар болон биечлэн ирсэн захиалгыг админ самбарт нэмнэ.", "View online bookings and add appointments received by phone or in person.")],
          ["people", text("Мастер, ажилтанд", "For your specialists"), text("Өөрийн цагийн хуваарийг харна. Менежер, ресепшн, мастерт тусдаа эрхээр хандана.", "View individual schedules with separate access for managers, reception and specialists.")],
        ].map(([icon, title, body]) => <article key={title}><Icon name={icon} /><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section id="salon-price" className="container salon-price-section">
        <div className="salon-price-intro"><p className="eyebrow">03 / {text("ҮНЭ, АЖЛЫН ХҮРЭЭ", "PRICE & SCOPE")}</p><h2>{text("Танай салонд", "Made for")}<br />{text("тохируулж эхэлье.", "your salon.")}</h2><p>{text("Эхлээд салбар, мастер, үйлчилгээ болон одоогийн захиалгын арга барилыг ярилцана. Дараа нь яг багтах ажил, хугацаа, эцсийн үнийг тохирно.", "We start with your branches, specialists, services and current booking process. Then we agree on scope, timing and the final price.")}</p><Link className="text-link" href="/pricing">{text("Бүх багцыг харьцуулах", "Compare all packages")}<Arrow /></Link></div>
        <div className="salon-price-card"><p className="eyebrow">{text("ЦАГ ЗАХИАЛГЫН СИСТЕМ", "BOOKING SYSTEM")}</p>{sale && <p className="salon-offer">{text("Нээлтийн үнэ", "Launch price")} · {SALE_END_DATE} {text("хүртэл", "inclusive")}</p>}<div className="salon-price">{sale && <s>{formatPrice(plan.originalPrice)}</s>}<strong>{formatPrice(sale ? plan.salePrice : plan.originalPrice)}</strong><span>{text("-өөс / төслийн эхлэх үнэ", "starting project price")}</span></div><ul>{pricingCopy[language].features[2].slice(0, 6).map(item => <li key={item}><Icon name="check" /><span>{item}</span></li>)}</ul><a className="button" href="#salon-demo">{cta}<Arrow /></a><p className="salon-note">{text("Хостингийн төлбөрийг захиалагч төлнө. Домэйн, SMS, төлбөрийн холболтын зардлыг үнийн саналд тусад нь тодорхойлно.", "Hosting is paid by the client. Domain, SMS and payment integration costs are specified separately in your proposal.")}</p></div>
      </section>

      <div className="container"><PricingDeliverables /></div>

      <section className="container salon-section salon-next"><p className="eyebrow">04 / {text("ХЭРХЭН ЭХЛЭХ ВЭ?", "GETTING STARTED")}</p><h2>{text("Эхлээд 10 минут ярилцъя.", "Let’s start with 10 minutes.")}</h2><ol>{[
        [text("Хүсэлтээ үлдээнэ", "Leave a request"), text("Салоны Instagram хаяг, утас, холбогдоход тохиромжтой цагаа бичээрэй.", "Share your salon’s Instagram, phone number and a convenient time.")],
        [text("Демогоо хамт үзнэ", "Walk through the demo"), text("Бид эргэн холбогдож цагаа тохироод, захиалга болон удирдлагын урсгалыг үзүүлнэ.", "We contact you to agree on a time and walk through booking and management.")],
        [text("Саналаа тохирно", "Agree on a proposal"), text("Тохирвол ажлын хүрээ, хугацаа, төлбөр, дэмжлэгээ бичгээр тодорхойлж эхэлнэ.", "If it fits, we outline scope, timing, payment and support in writing before starting.")],
      ].map(([title, body], i) => <li key={title}><span className="salon-step">0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></section>

      <section id="contact" className="salon-demo-section"><div id="salon-demo" className="container salon-demo-grid"><div><p className="eyebrow">05 / {text("ТАНАЙ САЛОНЫ ТУХАЙ", "YOUR SALON")}</p><h2>{text("Танайд хэрхэн", "See how it works")}<br /><span>{text("ажиллахыг харъя.", "for your salon.")}</span></h2><p>{text("10 минутын үнэгүй танилцуулга хүсээрэй. Танай одоогийн захиалгын арга, хэрэгцээнд тохирох эсэхийг хамт харна.", "Request a free 10-minute introduction. We’ll explore whether it fits your booking process and needs.")}</p><p className="salon-note">{text("Форм илгээснээр уулзалтын цаг шууд батлагдахгүй. Бид тантай холбогдож цагийг тохирно.", "Submitting this form does not confirm an appointment. We’ll contact you to arrange a time.")}</p><a className="text-link" href={contactPhoneHref}>{text("Шууд холбогдох", "Call us")} · {contactPhone}<Arrow diagonal /></a></div>
          <form className="salon-demo-form" onSubmit={submit} aria-label={text("Демо хүсэх", "Request a demo")}>
            <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
            <label htmlFor="salon-instagram">{text("Салоны Instagram хаяг", "Salon Instagram")}</label><input id="salon-instagram" name="instagram" type="text" autoCapitalize="none" spellCheck={false} maxLength={100} required placeholder="@your_salon / instagram.com/your_salon" />
            <label htmlFor="salon-phone">{text("Утасны дугаар", "Phone number")}</label><input id="salon-phone" name="contact" type="tel" inputMode="numeric" autoComplete="tel" pattern="[0-9]{8}" maxLength={8} required placeholder="99112233" title={text("8 оронтой утасны дугаар", "8-digit phone number")} onInput={e => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 8); }} />
            <label htmlFor="salon-time">{text("Хэзээ холбогдоход тохиромжтой вэ?", "When is a good time to contact you?")}</label><input id="salon-time" name="preferredTime" maxLength={200} required placeholder={text("Жишээ: Ажлын өдөр 14:00–17:00", "e.g. Weekdays, 14:00–17:00")} />
            <label htmlFor="salon-message">{text("Нэмэлт мэдээлэл (заавал биш)", "Anything else? (optional)")}</label><textarea id="salon-message" name="message" maxLength={1500} rows={3} placeholder={text("Хэдэн мастер, салбартай вэ? Одоо захиалгаа яаж авдаг вэ?", "How many specialists or branches? How do you take bookings today?")} />
            <button type="submit" className="button" disabled={state === "sending" || state === "sent"} aria-busy={state === "sending"}>{state === "sending" ? text("Илгээж байна…", "Sending…") : state === "sent" ? text("Хүсэлт илгээгдлээ", "Request sent") : text("Демо хүсэлт илгээх", "Send demo request")}<Arrow /></button>
            <div role="status" aria-live="polite" className={`salon-form-status ${state}`}>{state === "sent" && text("Баярлалаа! Хүсэлтийг хүлээн авлаа. Бид тантай холбогдож демоны цагийг тохирно.", "Thank you! We received your request and will contact you to arrange the demo.")}{state === "error" && text("Илгээгдсэн нь баталгаажаагүй. Дахин оролдох эсвэл 85563793 дугаарт холбогдоорой.", "Sending could not be confirmed. Please try again or call 85563793.")}</div>
            <p className="salon-note">{text("Таны мэдээллийг зөвхөн хүсэлтэд хариу өгөх зорилгоор имэйлээр дамжуулна.", "Your details are sent by email solely to respond to this request.")}</p>
          </form>
        </div></section>
    </div>
  );
}
