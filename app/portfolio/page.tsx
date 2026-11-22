import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowGlyph } from "@/components/Icons";
import { OWNER, PROJECTS } from "@/data/mockData";

export const metadata: Metadata = {
  title: "Work: five shipped web applications by Onifade Ololade",
  description:
    "Live Next.js, React, TypeScript, Node.js, Express, MongoDB, and Supabase web applications built and deployed to Vercel by Onifade Ololade Favour.",
};

const ANCHOR_MAP: Record<string, string> = {
  anettcom: "hope-foundation",
  "greenacy-clone": "greenacy",
  "study-timer3": "complaint-system",
  "study-timer": "vogue-vault",
  "study-timer2": "flowhub",
};

const DISPLAY_TITLES: Record<string, string> = {
  anettcom: "Hope Foundation NGO platform",
  "greenacy-clone": "Greenacy climate web app",
  "study-timer3": "Complaint Management web portal",
  "study-timer": "Vogue Vault fashion storefront",
  "study-timer2": "Flowhub rewards web app",
};

export default function PortfolioPage() {
  const featured = PROJECTS.filter((p) => p.featured);
  const additional = PROJECTS.filter((p) => !p.featured);

  return (
    <>
      <Navigation current="work" />

      <main id="top">
        <section
          className="hero hero--split"
          data-enter=""
          aria-labelledby="portfolio-h"
        >
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="hero__text span-5">
                <p className="hero__kicker">
                  <span className="dot" aria-hidden="true" />5 live deployments
                  on Vercel
                </p>
                <h1 id="portfolio-h">Five shipped web applications</h1>
                <p className="hero__lead">
                  Full-stack and frontend builds covering NGO rewards, climate
                  education events, student complaint routing, fashion commerce,
                  and daily habit tracking.
                </p>
                <div className="btn-row">
                  <a className="btn btn--primary" href="/contact/">
                    Send a message
                    <ArrowGlyph />
                  </a>
                  <a
                    className="btn btn--secondary"
                    href={OWNER.resumePdf}
                    download
                  >
                    Download resume
                  </a>
                </div>
              </div>

              <div className="hero__media span-6 start-7">
                <img
                  src="/projects/ngo-platform.jpg"
                  srcSet="/projects/ngo-platform-sm.jpg 640w, /projects/ngo-platform.jpg 1200w"
                  sizes="(max-width: 639px) 342px, 1200px"
                  alt="Hope Foundation web application showing navigation, hero headline, volunteer buttons, and impact numbers"
                  width={1200}
                  height={900}
                  style={{ ["--ly-pos" as string]: "50% 0%" }}
                  fetchPriority="high"
                  data-source="client"
                  data-subject="Hope Foundation web application"
                />
                <div className="ly-float">
                  <div className="ly-float__row">
                    <span className="ly-live">Live on Vercel</span>
                    <span>5 builds</span>
                  </div>
                  <div className="ly-float__title">
                    React, Next.js, NestJS, MongoDB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section flow-section ground-inverse"
          id="all-projects"
          aria-labelledby="featured-h"
        >
          <div className="wrap">
            <div className="section-head">
              <h2 id="featured-h">Primary full-stack and Next.js builds</h2>
              <p>
                Three production web applications built with Next.js 16, React,
                TypeScript, Express.js, and MongoDB.
              </p>
            </div>

            <div className="grid">
              {featured.map((project, idx) => (
                <a
                  key={project.id}
                  id={ANCHOR_MAP[project.id]}
                  className="tile span-4"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="tile__media">
                    <img
                      src={project.image}
                      srcSet={`${project.imageSm} 640w, ${project.image} 1200w`}
                      sizes={
                        idx === 2
                          ? "(max-width: 639px) 342px, (max-width: 1023px) 724px, 410px"
                          : "(max-width: 639px) 342px, (max-width: 1023px) 360px, 410px"
                      }
                      alt={project.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      data-source="client"
                      data-subject={project.title}
                    />
                  </div>
                  <div className="tile__head">
                    <h3>{DISPLAY_TITLES[project.id] || project.title}</h3>
                    <span className="tile__price t-small muted">Open app</span>
                  </div>
                  <p className="tile__facts">
                    {project.technologies.slice(0, 4).join(" · ")}
                  </p>
                  <p>{project.summary}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section flow-section"
          id="more-projects"
          aria-labelledby="more-h"
        >
          <div className="wrap">
            <div className="section-head section-head--row">
              <div>
                <h2 id="more-h">E-commerce and rewards applications</h2>
                <p>
                  Authenticated React and TypeScript storefronts and
                  session-backed rewards tools backed by Express, MongoDB, and
                  Supabase.
                </p>
              </div>
              <a
                className="link"
                href="https://github.com/Favour123"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse GitHub repositories
              </a>
            </div>

            <div className="grid">
              {additional.map((project) => (
                <a
                  key={project.id}
                  id={ANCHOR_MAP[project.id]}
                  className="tile span-6"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="tile__media">
                    <img
                      src={project.image}
                      srcSet={`${project.imageSm} 640w, ${project.image} 1200w`}
                      sizes="(max-width: 639px) 342px, 1200px"
                      alt={project.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      data-source="client"
                      data-subject={project.title}
                    />
                  </div>
                  <div className="tile__head">
                    <h3>{DISPLAY_TITLES[project.id] || project.title}</h3>
                    <span className="tile__price t-small muted">Open app</span>
                  </div>
                  <p className="tile__facts">
                    {project.technologies.join(" · ")}
                  </p>
                  <p>{project.summary}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer ctaHref="/contact/" />
    </>
  );
}
