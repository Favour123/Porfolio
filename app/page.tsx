import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ArrowGlyph, StackIconRow } from "@/components/Icons";
import { EXPERIENCES, OWNER, PROJECTS, SERVICES } from "@/data/mockData";
import { formatDateRange } from "@/lib/utils";

/*
  type: service (site-kind: other)
  deal: hero split, palette stone-blueprint (chosen over sky-sand and swap-pastels because their pastel blue/magenta tones clash with Favour's warm-cream, forest-green, and deep-navy live web apps), type schibsted (Schibsted Grotesk), nav nav-centre, footer footer-dark, close close-type, rhythm dark-band, buttons solid, mark arc
  moments: word-highlight (#approach), pinned-chapters (#process)
*/

const HOME_PROJECT_TITLES: Record<string, string> = {
  anettcom: "Hope Foundation NGO web app",
  "greenacy-clone": "Greenacy climate web app",
  "study-timer3": "Complaint Management web portal",
};

export default function HomePage() {
  const coreServices = SERVICES.filter((s) => !s.resumeOnly);
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const homeRoles = EXPERIENCES.slice(0, 3);

  return (
    <>
      <Navigation current="home" />

      <main id="top">
        {/* Screen 1: Hero (dealt: split) */}
        <section
          className="hero hero--split"
          data-enter=""
          aria-labelledby="hero-h"
        >
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="hero__text span-5">
                <p className="hero__kicker">
                  <span className="dot" aria-hidden="true" />
                  Lagos, Nigeria · Remote · Full-Stack &amp; Security
                </p>
                <h1 id="hero-h">Full-stack developer for web teams</h1>
                <p className="hero__lead">
                  I ship React, Next.js, NestJS 11, PostgreSQL, SQL, MongoDB,
                  Supabase, Firebase, and Appwrite apps backed by OWASP Top 10
                  security, Argon2id, and RBAC.
                </p>
                <div className="btn-row">
                  <a className="btn btn--primary" href="#enquiry">
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
                  src="/projects/hero-greenacy.jpg"
                  srcSet="/projects/hero-greenacy-sm.jpg 600w, /projects/hero-greenacy.jpg 960w"
                  sizes="(max-width: 639px) 342px, (max-width: 1023px) 724px, 628px"
                  alt="Greenacy climate education web platform built with React, TypeScript, Node.js, and MongoDB"
                  width={960}
                  height={1080}
                  style={{ ["--ly-pos" as string]: "50% 35%" }}
                  fetchPriority="high"
                  data-source="client"
                  data-subject="Greenacy web application hero"
                />
                <div className="ly-float">
                  <div className="ly-float__row">
                    <span className="ly-live">Active roles</span>
                    <span>Nigeria · Remote</span>
                  </div>
                  <div className="ly-float__title">
                    Seventh-day Adventist Hospital &amp; Medicx
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screen 2: Engineering Services, Databases & Security */}
        <section className="section" id="services" aria-labelledby="services-h">
          <div className="wrap grid grid--top">
            <div className="span-5 stack-4">
              <div className="section-head">
                <h2 id="services-h">Web development and security services</h2>
              </div>
              <ul className="rows">
                {coreServices.map((service) => (
                  <li key={service.id}>
                    <span className="rows__name">{service.title}</span>
                    <p>{service.description}</p>
                    <span className="rows__value">{service.tag}</span>
                  </li>
                ))}
              </ul>
              <StackIconRow
                ids={[
                  "react",
                  "nextjs",
                  "nestjs",
                  "postgres",
                  "sql",
                  "supabase",
                  "firebase",
                  "appwrite",
                ]}
              />
              <p>
                <a className="link" href="/resume/#skills">
                  See full skill matrix
                </a>
              </p>
            </div>

            <figure className="frame frame--photo split-media span-6 start-7">
              <img
                className="frame__img"
                src="/projects/vogue-vault.jpg"
                srcSet="/projects/vogue-vault-sm.jpg 640w, /projects/vogue-vault.jpg 1200w"
                sizes="(max-width: 639px) 342px, 1200px"
                alt="Vogue Vault full-stack fashion storefront interface showing top category navigation and member login"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                data-source="client"
                data-subject="Vogue Vault web application"
              />
            </figure>
          </div>
        </section>

        {/* Screen 3: Selected Work (dealt dark-band) */}
        <section
          className="section ground-inverse"
          id="work"
          aria-labelledby="work-h"
        >
          <div className="wrap">
            <div className="section-head section-head--row">
              <div>
                <h2 id="work-h">Shipped web applications</h2>
                <p>
                  Three live deployments on Vercel, from NGO portals to
                  full-stack Node.js and MongoDB platforms.
                </p>
              </div>
              <a className="link" href="/portfolio/">
                See all 5 projects
              </a>
            </div>

            <div className="grid">
              {featuredProjects.map((project, idx) => (
                <a
                  key={project.id}
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
                    <h3>{HOME_PROJECT_TITLES[project.id] || project.title}</h3>
                    <span className="tile__price t-small muted">Live</span>
                  </div>
                  <p className="tile__facts">
                    {project.technologies.slice(0, 3).join(" · ")}
                  </p>
                  <p>{project.summary}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Screen 4: Dealt Moment #2 (word-highlight statement) */}
        <section
          className="section statement"
          id="approach"
          data-moment="word-highlight"
          aria-label="Software security standard"
        >
          <div className="wrap approach-wrap">
            <div className="approach-body">
              <p className="t-label muted">Software security &amp; caching</p>
              <p className="mo-wh__text">
                Production platforms run on{" "}
                <strong>OWASP Top 10 defenses</strong> and tested server code:
                Argon2id hashes, HttpOnly sessions, CodeQL scans, IDOR file
                checks, MongoSafetyPipe injection filters, and TTL request
                deduplication.
              </p>
            </div>

            <dl className="approach-facts">
              <div>
                <dt>Security testing</dt>
                <dd>
                  OWASP Top 10, vulnerability reproduction, CodeQL, and
                  AI-generated patch evaluation.
                </dd>
              </div>
              <div>
                <dt>Data &amp; BaaS stack</dt>
                <dd>
                  PostgreSQL, SQL, MongoDB, Redis, Supabase, Firebase, and
                  Appwrite on NestJS 11 and Node.js.
                </dd>
              </div>
              <div>
                <dt>Auth &amp; file protection</dt>
                <dd>
                  RBAC, Argon2id hashing, HttpOnly sessions, MIME checks, IDOR
                  authorization, and rate limits.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Screens 5-6: Dealt Moment #1 (pinned-chapters, 2 screens) */}
        <section
          className="section ground-surface"
          id="process"
          style={{ ["--h" as string]: 2 }}
          data-moment="pinned-chapters"
          aria-labelledby="process-h"
        >
          <div className="wrap mo-pc__grid">
            <div className="mo-pc__text">
              <h2 id="process-h">Three-step web build process</h2>
              <ol className="mo-pc__steps">
                <li className="mo-pc__step">
                  <h3>Frontend React and Next.js routes</h3>
                  <p>
                    Interfaces ship in React, Next.js, TypeScript, and Tailwind
                    CSS with Cloudinary image optimization cutting load times up
                    to 10x.
                  </p>
                  <figure className="mo-pc__visual">
                    <img
                      src="/projects/greenacy.jpg"
                      srcSet="/projects/greenacy-sm.jpg 640w, /projects/greenacy.jpg 1200w"
                      sizes="(max-width: 639px) 342px, 1200px"
                      alt="Greenacy about view showing structured three-column mission cards on deep green"
                      width={1200}
                      height={900}
                      data-source="client"
                      data-subject="Greenacy mission layout"
                    />
                  </figure>
                </li>
                <li className="mo-pc__step">
                  <h3>NestJS APIs, databases, and TTL caching</h3>
                  <p>
                    Backend services pair NestJS 11 or Express with PostgreSQL,
                    SQL, MongoDB, Supabase, Firebase, Appwrite, and in-memory
                    TTL caches with deduplication.
                  </p>
                  <figure className="mo-pc__visual">
                    <img
                      src="/projects/ngo-about.jpg"
                      srcSet="/projects/ngo-about-sm.jpg 640w, /projects/ngo-about.jpg 1200w"
                      sizes="(max-width: 639px) 342px, 1200px"
                      alt="Hope Foundation about view showing mission and vision layout cards on warm cream"
                      width={1200}
                      height={900}
                      data-source="client"
                      data-subject="Hope Foundation about page"
                    />
                  </figure>
                </li>
                <li className="mo-pc__step">
                  <h3>OWASP security checks and Jest tests</h3>
                  <p>
                    Every release enforces RBAC, Argon2id, HttpOnly sessions,
                    IDOR file checks, CodeQL scans, Jest unit tests, ESLint, and
                    Prettier before deployment.
                  </p>
                  <figure className="mo-pc__visual">
                    <img
                      src="/projects/ngo-involved.jpg"
                      srcSet="/projects/ngo-involved-sm.jpg 640w, /projects/ngo-involved.jpg 1200w"
                      sizes="(max-width: 639px) 342px, 1200px"
                      alt="Hope Foundation get-involved page showing donation and volunteer action cards"
                      width={1200}
                      height={900}
                      data-source="client"
                      data-subject="Hope Foundation involvement page"
                    />
                  </figure>
                </li>
              </ol>
              <p>
                <a className="link" href="/portfolio/">
                  Browse live deployments
                </a>
              </p>
            </div>
            <div className="mo-pc__visuals frame" />
          </div>
        </section>

        {/* Screen 7: Experience Snapshot */}
        <section
          className="section"
          id="experience"
          aria-labelledby="experience-h"
        >
          <div className="wrap grid grid--top">
            <div className="span-5 stack-4">
              <div className="section-head">
                <h2 id="experience-h">Web engineering work history</h2>
              </div>
              <ul className="rows">
                {homeRoles.map((exp) => (
                  <li key={exp.id}>
                    <span className="rows__name">
                      {exp.company}
                      <small>{exp.position}</small>
                    </span>
                    <p>{exp.summary}</p>
                    <span className="rows__value">
                      {formatDateRange(exp.startDate, exp.endDate)}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                <a className="link" href="/resume/">
                  Read full resume (6 roles)
                </a>
              </p>
            </div>

            <figure className="frame frame--photo split-media span-6 start-7">
              <img
                className="frame__img"
                src="/projects/cms-about.jpg"
                srcSet="/projects/cms-about-sm.jpg 640w, /projects/cms-about.jpg 1200w"
                sizes="(max-width: 639px) 342px, 1200px"
                alt="Complaint Management System about view showing university header and mission summary"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                data-source="client"
                data-subject="CMS about view"
              />
            </figure>
          </div>
        </section>

        {/* Screen 8: Live Formspree Project Inquiry (booking-form) */}
        <section className="section" id="enquiry" aria-labelledby="enquiry-h">
          <div className="wrap grid grid--top">
            <div className="span-5 stack-4">
              <div className="section-head">
                <h2 id="enquiry-h">Contact for web projects</h2>
                <p>
                  Share an engineering role, security review, or full-stack
                  scope. Messages post straight to Formspree.
                </p>
              </div>
              <div className="enquiry-panel">
                <ContactForm idPrefix="home" />
              </div>
            </div>

            <figure className="frame frame--photo split-media span-6 start-7">
              <img
                className="frame__img"
                src="/projects/cms-portal.jpg"
                srcSet="/projects/cms-portal-sm.jpg 640w, /projects/cms-portal.jpg 1200w"
                sizes="(max-width: 639px) 342px, 1200px"
                alt="Complaint Management System portal sign-in form interface built with Express and MongoDB"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                data-source="client"
                data-subject="CMS portal interface"
              />
            </figure>
          </div>
        </section>
      </main>

      <Footer ctaHref="#enquiry" />
    </>
  );
}
