import { OWNER } from "@/data/mockData";
import { ArrowGlyph, BrandMark } from "./Icons";

interface FooterProps {
  ctaHref?: string;
  hideCloseCta?: boolean;
}

export default function Footer({
  ctaHref = "#enquiry",
  hideCloseCta = false,
}: FooterProps) {
  return (
    <footer
      className="footer closing footer--dark ground-inverse"
      id="contact"
      aria-labelledby="close-h"
    >
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">
              {hideCloseCta
                ? "Download the engineering resume"
                : "Start your next web build"}
            </h2>
            <p>
              React, Next.js, NestJS 11, PostgreSQL, and OWASP security
              engineering for remote product teams.
            </p>
          </div>
          {hideCloseCta ? (
            <a
              className="btn btn--primary btn--xl"
              href={OWNER.resumePdf}
              download
            >
              Download resume
              <ArrowGlyph />
            </a>
          ) : (
            <a className="btn btn--primary btn--xl" href={ctaHref}>
              Send a message
              <ArrowGlyph />
            </a>
          )}
        </div>

        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="footer__mark" href="#top">
                <BrandMark />
                {OWNER.shortName}
              </a>
              <p className="footer__lede">
                Full-stack developer, Lagos · Remote.
              </p>
            </div>
            <div className="span-2 footer__col">
              <h3>Work</h3>
              <ul>
                <li>
                  <a href="/portfolio/">All five apps</a>
                </li>
                <li>
                  <a href="/portfolio/#hope-foundation">Hope Foundation</a>
                </li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="/#services">Web engineering</a>
                </li>
                <li>
                  <a href="/#process">Build process</a>
                </li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Resume</h3>
              <ul>
                <li>
                  <a href="/resume/">Work history</a>
                </li>
                <li>
                  <a href={OWNER.resumePdf} download>
                    Resume PDF
                  </a>
                </li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Connect</h3>
              <ul>
                <li>
                  <a href="/contact/">Project inquiry</a>
                </li>
                <li>
                  <a
                    href="https://github.com/Favour123"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__legal">
            <span>&copy; 2026 {OWNER.fullName}</span>
            <div className="socials">
              <a
                href="https://github.com/Favour123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <span
                  className="icon-mono"
                  aria-hidden="true"
                  style={{
                    WebkitMaskImage: "url(/assets/icons/github.svg)",
                    maskImage: "url(/assets/icons/github.svg)",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/onifade-ololade-favour-feranmi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <span
                  className="icon-mono"
                  aria-hidden="true"
                  style={{
                    WebkitMaskImage: "url(/assets/icons/linkedin.svg)",
                    maskImage: "url(/assets/icons/linkedin.svg)",
                  }}
                />
              </a>
            </div>
            <p className="credits">
              Product names and logos are trademarks of their owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
