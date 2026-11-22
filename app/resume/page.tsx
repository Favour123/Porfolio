import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowGlyph, StackIconRow } from "@/components/Icons";
import {
  CORE_SKILL_GROUPS,
  EDUCATION_LIST,
  EXPERIENCES,
  LEADERSHIP_EXPERIENCES,
  OWNER,
} from "@/data/mockData";
import { formatDateRange } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resume: Onifade Ololade Favour, full-stack software engineer",
  description:
    "Full-stack engineering, software security (OWASP Top 10, CodeQL, Argon2id, RBAC), PostgreSQL, SQL, NestJS 11, Supabase, Firebase, Appwrite, and healthcare HR experience at Seventh-day Adventist Hospital.",
};

export default function ResumePage() {
  return (
    <>
      <Navigation current="resume" />

      <main id="top">
        <section
          className="hero hero--split"
          data-enter=""
          aria-labelledby="resume-h"
        >
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="hero__text span-5">
                <p className="hero__kicker">
                  <span className="dot" aria-hidden="true" />
                  B.Sc. Computer Science · Adeleke University (2025)
                </p>
                <h1 id="resume-h">Resume for Onifade Ololade Favour</h1>
                <p className="hero__lead">
                  Full-Stack Software Engineer in Maryland, Ikeja, Lagos
                  building healthcare HR systems in NestJS 11, React,
                  PostgreSQL, SQL, MongoDB, Supabase, Firebase, and Appwrite
                  with OWASP Top 10 security.
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
                  src="/projects/cms-about.jpg"
                  srcSet="/projects/cms-about-sm.jpg 640w, /projects/cms-about.jpg 1200w"
                  sizes="(max-width: 639px) 342px, 1200px"
                  alt="Complaint Management System deployed web interface showing university mission layout"
                  width={1200}
                  height={900}
                  style={{ ["--ly-pos" as string]: "50% 0%" }}
                  fetchPriority="high"
                  data-source="client"
                  data-subject="CMS deployed web interface"
                />
                <div className="ly-float">
                  <div className="ly-float__row">
                    <span className="ly-live">PDF available</span>
                    <span>2026</span>
                  </div>
                  <div className="ly-float__title">Onifade Ololade.pdf</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Skills & Software Security Matrix */}
        <section
          className="section flow-section ground-surface"
          id="skills"
          aria-labelledby="skills-h"
        >
          <div className="wrap stack-6">
            <div className="section-head">
              <h2 id="skills-h">Core engineering and security skills</h2>
              <p>
                Full-stack web frameworks, relational and document databases,
                BaaS platforms, OWASP Top 10 security testing, and AI operations.
              </p>
            </div>

            <StackIconRow />

            <div className="skill-grid">
              {CORE_SKILL_GROUPS.map((group) => (
                <div key={group.id} className="skill-card">
                  <h3>{group.category}</h3>
                  <p>{group.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Engineering & AI Experience (6 roles) */}
        <section
          className="section flow-section"
          id="roles"
          aria-labelledby="roles-h"
        >
          <div className="wrap grid grid--top">
            <div className="span-4">
              <div className="section-head">
                <h2 id="roles-h">Software engineering and AI experience</h2>
                <p>
                  End-to-end Healthcare HR architecture at Seventh-day Adventist
                  Hospital, 10x image optimization at Medicx, AI engineering at
                  FlyRank AI, and payment-backed APIs for 100+ students at HSC
                  Consult.
                </p>
              </div>
              <p>
                <a className="link" href={OWNER.resumePdf} download>
                  Download resume PDF
                </a>
              </p>
            </div>

            <div className="role-list span-7 start-6">
              {EXPERIENCES.map((exp) => (
                <article key={exp.id} className="role-item">
                  <div className="role-head">
                    <h3>
                      {exp.position} · {exp.company}
                    </h3>
                    <span className="t-small muted">
                      {formatDateRange(exp.startDate, exp.endDate)} ·{" "}
                      {exp.location}
                    </span>
                  </div>
                  <ul className="role-bullets">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Administrative, Leadership, Virtual Assistance & Education */}
        <section
          className="section flow-section ground-surface"
          id="education"
          aria-labelledby="education-h"
        >
          <div className="wrap grid grid--top">
            <div className="span-5 stack-6">
              <div className="section-head">
                <h2 id="education-h">Education and certifications</h2>
                <p>
                  Computer Science degree from Adeleke University alongside
                  technical, AI fluency, and executive operations credentials.
                </p>
              </div>
              <ul className="rows">
                {EDUCATION_LIST.map((edu) => (
                  <li key={edu.id}>
                    <span className="rows__name">
                      {edu.degree}
                      <small>
                        {edu.institution}
                        {edu.location ? ` · ${edu.location}` : ""}
                      </small>
                    </span>
                    <span className="rows__value">
                      {edu.startDate === edu.endDate
                        ? edu.endDate
                        : formatDateRange(edu.startDate, edu.endDate)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="role-list span-6 start-7">
              <div className="section-head" style={{ marginBottom: 0 }}>
                <h3>Administrative, leadership and virtual operations</h3>
              </div>
              {LEADERSHIP_EXPERIENCES.map((exp) => (
                <article key={exp.id} className="role-item">
                  <div className="role-head">
                    <h3>
                      {exp.position} · {exp.company}
                    </h3>
                    <span className="t-small muted">
                      {formatDateRange(exp.startDate, exp.endDate)} ·{" "}
                      {exp.location}
                    </span>
                  </div>
                  <ul className="role-bullets">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer ctaHref="/contact/" />
    </>
  );
}
