import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { OWNER } from "@/data/mockData";

export const metadata: Metadata = {
  title: "Contact: send a message to Onifade Ololade Favour",
  description:
    "Send a software engineering role or project inquiry to Onifade Ololade Favour in Lagos, Nigeria via Formspree.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation current="contact" />

      <main id="top">
        <section
          className="hero hero--split flow-section"
          data-enter=""
          aria-labelledby="contact-h"
        >
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="hero__text span-5">
                <p className="hero__kicker">
                  <span className="dot" aria-hidden="true" />
                  Lagos, Nigeria · Remote
                </p>
                <h1 id="contact-h">Send a message about a role or project</h1>
                <p className="hero__lead">
                  Available for remote frontend, backend, full-stack, and
                  application security work across React, Next.js, NestJS 11,
                  PostgreSQL, MongoDB, Supabase, Firebase, and Appwrite.
                </p>
                <ul className="rows" style={{ marginTop: "var(--s-6)" }}>
                  <li>
                    <span className="rows__name">Resume PDF</span>
                    <span className="rows__value">
                      <a className="link" href={OWNER.resumePdf} download>
                        Download PDF
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="rows__name">GitHub</span>
                    <span className="rows__value">
                      <a
                        className="link"
                        href="https://github.com/Favour123"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Favour123
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="rows__name">LinkedIn</span>
                    <span className="rows__value">
                      <a
                        className="link"
                        href="https://www.linkedin.com/in/onifade-ololade-favour-feranmi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View profile
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              <div
                className="enquiry-panel span-6 start-7"
                style={{ alignSelf: "start" }}
              >
                <ContactForm idPrefix="contact" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer hideCloseCta />
    </>
  );
}