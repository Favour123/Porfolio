import { BrandMark } from "./Icons";

interface NavigationProps {
  current?: "home" | "work" | "resume" | "contact" | "none";
}

export default function Navigation({ current = "home" }: NavigationProps) {
  const isHome = current === "home";
  const ctaHref = isHome ? "#enquiry" : "/contact/";

  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <a className="nav__logo" href={isHome ? "#top" : "/"}>
          <BrandMark />
          Onifade
        </a>
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item">
            <a
              className="nav__link"
              href="/portfolio/"
              aria-current={current === "work" ? "page" : undefined}
            >
              Work{" "}
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="M3 4.5l3 3 3-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Shipped apps</p>
                  <a href="/portfolio/#hope-foundation">
                    Hope Foundation
                    <span>Next.js 16 NGO platform</span>
                  </a>
                  <a href="/portfolio/#greenacy">
                    Greenacy
                    <span>React, Node.js, MongoDB site</span>
                  </a>
                  <a href="/portfolio/#complaint-system">
                    Complaint System
                    <span>Express.js student portal</span>
                  </a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">More builds</p>
                  <a href="/portfolio/#vogue-vault">
                    Vogue Vault
                    <span>Full-stack fashion store</span>
                  </a>
                  <a href="/portfolio/#flowhub">
                    Flowhub
                    <span>Zustand and Supabase app</span>
                  </a>
                  <a href="/portfolio/">
                    All five projects
                    <span>Full stack and live URLs</span>
                  </a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Engineering</p>
                  <a href={isHome ? "#services" : "/#services"}>
                    Services
                    <span>Frontend and backend scope</span>
                  </a>
                  <a href={isHome ? "#process" : "/#process"}>
                    Process
                    <span>Three stages from UI to deploy</span>
                  </a>
                  <a href="/resume/">
                    Resume
                    <span>Seventh-day Adventist Hospital, Medicx, FlyRank AI</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav__item">
            <a className="nav__link" href={isHome ? "#services" : "/#services"}>
              Services
            </a>
          </div>
          <div className="nav__item">
            <a
              className="nav__link"
              href="/resume/"
              aria-current={current === "resume" ? "page" : undefined}
            >
              Resume
            </a>
          </div>
          <div className="nav__item">
            <a
              className="nav__link"
              href="/contact/"
              aria-current={current === "contact" ? "page" : undefined}
            >
              Contact
            </a>
          </div>
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={ctaHref}>
            Send a message
          </a>
        </div>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded="false"
          aria-label="Menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M2 5h14M2 13h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
