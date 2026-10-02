"use client";
import { useLanguage } from "./language-provider";
import { Arrow, Icon, Logo } from "./ui";
export function SystemVisual() {
  const { t } = useLanguage();
  const u = t.ui;
  return (
    <div
      className="system-visual"
      role="img"
      aria-label={`${t.tagline} — ${u.sample}`}
    >
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-cross cross-one">+</div>
      <div className="visual-cross cross-two">+</div>
      <div className="dashboard">
        <div className="window-bar">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>unio.workspace</span>
          <Icon name="grid" />
        </div>
        <div className="dashboard-inner">
          <div className="dashboard-sidebar">
            <Logo compact />
            <div className="side-active">
              <Icon name="grid" />
              {u.overview}
            </div>
            <div>
              <Icon name="calendar" />
              {u.bookings}
            </div>
            <div>
              <Icon name="people" />
              {u.customers}
            </div>
            <div className="side-settings">
              <Icon name="settings" />
              {u.settings}
            </div>
          </div>
          <div className="dashboard-content">
            <div className="dashboard-heading">
              <div>
                <small>{u.system}</small>
                <h3>{u.today}</h3>
              </div>
              <span className="tiny-avatar">K</span>
            </div>
            <div className="calendar-month">
              <span>{u.date}</span>
              <span>‹ &nbsp; ›</span>
            </div>
            <div className="week-row">
              {u.week.map((day, i) => (
                <div key={i} className={i === 3 ? "selected-day" : ""}>
                  <span>{day}</span>
                  <b>{i + 12}</b>
                </div>
              ))}
            </div>
            <div className="schedule">
              <div className="schedule-row">
                <span>09:00</span>
                <div className="appointment">
                  <i />
                  <div>
                    <b>{u.service}</b>
                    <small>09:00 – 10:00</small>
                  </div>
                  <span>↗</span>
                </div>
              </div>
              <div className="schedule-row">
                <span>10:00</span>
                <div className="schedule-empty" />
              </div>
              <div className="schedule-row">
                <span>11:00</span>
                <div className="appointment appointment-light">
                  <i />
                  <div>
                    <b>{u.online}</b>
                    <small>11:00 – 11:30</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="website-float">
        <div className="mini-browser">
          <span />
          <span />
          <span />
        </div>
        <div className="mini-site">
          <span>STUDIO®</span>
          <b>{u.websiteLine}</b>
          <span className="mini-site-button">
            {u.website}
            <Arrow />
          </span>
          <div className="mini-sculpture">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="booking-float">
        <span className="booking-icon">
          <Icon name="calendar" />
        </span>
        <div>
          <b>{u.newBooking}</b>
          <small>
            {u.confirmed} <span>✓</span>
          </small>
        </div>
        <span className="notification-dot" />
      </div>
      <div className="sync-float">
        <span className="sync-check">
          <Icon name="check" />
        </span>
        <div>
          <b>{u.synced}</b>
          <small>{u.connected}</small>
        </div>
        <span className="sync-line">⌁</span>
      </div>
      <div className="visual-caption">
        <span className="blue-dot" />
        {u.sample}
      </div>
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
