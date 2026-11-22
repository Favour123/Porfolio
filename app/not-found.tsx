import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotFoundHelper from "@/components/NotFoundHelper";
import { OWNER } from "@/data/mockData";

export const metadata: Metadata = {
  title: "404: Page not found · Onifade Ololade Favour",
  description:
    "The requested portfolio route could not be found. Browse live web apps, engineering resume, or contact Onifade Ololade Favour.",
};

export default function NotFound() {
  return (
    <>
      <Navigation current="none" />

      <main id="top">
        <section
          className="hero hero--split flow-section"
          data-enter=""
          aria-labelledby="not-found-h"
        >
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="hero__text span-5">
                <p className="hero__kicker">
                  <span className="dot" aria-hidden="true" />
                  404 · Page not found
                </p>
                <h1 id="not-found-h">This route does not exist</h1>
                <NotFoundHelper />
              </div>

              <div
                className="enquiry-panel span-6 start-7"
                style={{ alignSelf: "start" }}
              >
                <div className="section-head" style={{ marginBottom: "var(--s-4)" }}>
                  <p className="t-label muted">Available routes</p>
                </div>
                <ul className="rows">
                  <li>
                    <span className="rows__name">
                      Home overview
                      <small>Security stack, featured work, and process</small>
                    </span>
                    <span className="rows__value">
                      <a className="link" href="/">
                        Home
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="rows__name">
                      Shipped apps
                      <small>All five live Vercel web applications</small>
                    </span>
                    <span className="rows__value">
                      <a className="link" href="/portfolio/">
                        Portfolio
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="rows__name">
                      Engineering history
                      <small>
                        Seventh-day Adventist Hospital, Medicx, skills &amp; security
                      </small>
                    </span>
                    <span className="rows__value">
                      <a className="link" href="/resume/">
                        Resume
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="rows__name">
                      Project inquiry
                      <small>Send a role or project message via Formspree</small>
                    </span>
                    <span className="rows__value">
                      <a className="link" href="/contact/">
                        Contact
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="rows__name">
                      Resume file
                      <small>Direct downloadable PDF copy</small>
                    </span>
                    <span className="rows__value">
                      <a className="link" href={OWNER.resumePdf} download>
                        PDF
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer ctaHref="/contact/" />
    </>
  );
}
