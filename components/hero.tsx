"use client";
import { useLanguage } from "./language-provider";
import { Arrow, Icon, Logo } from "./ui";
export function SystemVisual() {
  const { language } = useLanguage();
  const mn = language === "mn";
  return (
    <div
      className="product-composition"
      role="img"
      aria-label={
        mn
          ? "Бүх төрлийн вэбсайт, апп: танилцуулга, онлайн дэлгүүр, захиалга, сургалт болон бизнесийн системийн загвар дүрслэл"
          : "Concept designs for a website, mobile app and admin system"
      }
    >
      <div className="product-composition-label">
        {mn ? "ВЭБСАЙТ · АПП · СИСТЕМ" : "WEBSITES · APPS · SOFTWARE"}
      </div>
      <div className="product-web" aria-hidden="true">
        <div className="product-browser">
          <span>● ● ●</span>
          <span>your-brand.mn</span>
          <Arrow diagonal />
        </div>
        <div className="product-web-body">
          <Logo compact />
          <small>01 / {mn ? "ВЭБСАЙТ" : "WEBSITE"}</small>
          <h3>
            {mn ? (
              <>
                Бүх төрлийн
                <br />
                вэбсайт, апп.
              </>
            ) : (
              <>
                Every kind of
                <br />
                website & app.
              </>
            )}
          </h3>
          <p className="product-brand-promise">
            {mn ? "Таны бизнесийн шийдэл. Таны орон зай." : "Your business solution. Your own space."}
          </p>
          <p>
            {mn
              ? "Танилцуулга · Дэлгүүр · Захиалга · Сургалт"
              : "Brand sites · Stores · Booking · Learning"}
          </p>
          <div className="product-web-line">
            <span>{mn ? "Таны хэрэгцээнд тохируулна" : "Built around your needs"}</span>
            <Arrow />
          </div>
          <div className="product-swatches">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="product-phone" aria-hidden="true">
        <div className="product-phone-camera" />
        <div className="product-phone-body">
          <small>02 / {mn ? "АПП" : "APP"}</small>
          <h3>
            {mn ? (
              <>
                Таны бизнест
                <br />
                зориулсан шийдэл.
              </>
            ) : (
              <>
                A solution for
                <br />
                your business.
              </>
            )}
          </h3>
          <div className="product-app-icon">
            <Icon name="grid" />
          </div>
          <div className="product-app-row">
            <Icon name="calendar" />
            <span>{mn ? "Миний захиалга" : "My bookings"}</span>
          </div>
          <div className="product-app-row">
            <Icon name="people" />
            <span>{mn ? "Миний бүртгэл" : "My account"}</span>
          </div>
          <div className="product-phone-nav">
            <Icon name="web" />
            <Icon name="grid" />
            <Icon name="people" />
          </div>
        </div>
      </div>
      <div className="product-admin" aria-hidden="true">
        <div>
          <small>03 / {mn ? "УДИРДЛАГА" : "ADMIN"}</small>
          <h3>{mn ? "Бизнесээ нэг дороос." : "Your business, connected."}</h3>
          <p>
            {mn
              ? "Хэрэглэгч · Төлбөр · Тайлан"
              : "Customers · Payments · Reports"}
          </p>
        </div>
        <div className="product-chart">
          {[35, 58, 46, 76, 65, 95].map((height, i) => (
            <i key={i} style={{ height: height + "%" }} />
          ))}
        </div>
      </div>
      <p className="product-composition-caption">
        {mn
          ? "Дизайн → Хөгжүүлэлт → Нэвтрүүлэлт"
          : "Design → Development → Launch"}
      </p>
    </div>
  );
}
export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero container">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="blue-dot" />
            {t.studio}
          </p>
          <h1>
            {t.hero[0]}
            <br />
            <span>{t.hero[1]}</span>
            <br />
            {t.hero[2]}
          </h1>
          <p className="hero-description">{t.intro}</p>
          <div className="hero-actions">
            <a className="button" href="#contact">
              {t.primary}
              <Arrow />
            </a>
            <a className="text-link" href="#work">
              {t.view}
              <Arrow down />
            </a>
          </div>
          <div className="hero-pills">
            {t.pills.map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>
        </div>
        <SystemVisual />
      </div>
      <div className="hero-bottom">
        <span>
          <Icon name="globe" />
          {t.location}
        </span>
        <span>
          {t.tagline}
          <span className="small-spark">✳</span>
        </span>
      </div>
      <div className="trust-strip">
        {t.trust.map((item) => (
          <span key={item}>
            <Icon name="check" />
            {item}
          </span>
        ))}
        <span className="trust-signature">
          UNIFY + ONE = <b>UNIO</b>
        </span>
      </div>
    </section>
  );
}
