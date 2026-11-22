import type { Metadata, Viewport } from "next";
import KitRuntime from "@/components/KitRuntime";

export const metadata: Metadata = {
  metadataBase: new URL("https://onifadeololade.vercel.app"),
  title: "Onifade Ololade: full-stack developer for web teams",
  description:
    "Full-stack and software security engineering portfolio of Onifade Ololade Favour in Lagos, Nigeria: React, Next.js, NestJS 11, PostgreSQL, SQL, MongoDB, Supabase, Firebase, Appwrite, and OWASP security.",
  openGraph: {
    type: "website",
    title: "Onifade Ololade: full-stack developer for web teams",
    description:
      "React, Next.js, NestJS 11, PostgreSQL, SQL, MongoDB, Supabase, Firebase, Appwrite, and OWASP security engineering from Lagos, Nigeria.",
    images: [
      {
        url: "/share.jpg",
        width: 1440,
        height: 900,
        alt: "Onifade Ololade full-stack web developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onifade Ololade: full-stack developer for web teams",
    description:
      "React, Next.js, NestJS 11, PostgreSQL, SQL, MongoDB, Supabase, Firebase, Appwrite, and OWASP security engineering from Lagos, Nigeria.",
    images: ["/share.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#dfdedb",
};

const DEAL_TOKENS_AND_PAGE_CSS = `
:root {
  --p-bg: #dfdedb; --p-surface: #d3d2ce; --p-ink: #26251e; --p-muted: #5a5850;
  --p-accent: #2456d6; --p-accent-ink: #ffffff; --p-action: #2456d6; --p-action-ink: #ffffff;
  --p-inv-bg: #26251e; --p-inv-surface: #313029; --p-inv-ink: #dfdedb; --p-inv-muted: #9e9d99;
  --p-inv-accent: #dfdedb; --p-inv-accent-ink: #26251e; --p-inv-action: #dfdedb; --p-inv-action-ink: #26251e;
  --font-display: "Schibsted Grotesk", system-ui, sans-serif;
  --font-text: "Schibsted Grotesk", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.035em;
  --display-tracking-xl: -0.042em;
  --ly-scale: 0.98;
}

/* Page CSS: visual framing, stack chips, form panel, and responsive rhythm */
.rows .rows__name small { display: block; font-weight: 400; color: var(--muted); font-size: var(--t-small); margin-top: 2px; }
.stack-icons { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--s-2); margin-top: var(--s-2); }
.stack-icons .ic-chip { width: 100%; justify-content: flex-start; height: 32px; padding: 0 var(--s-2); font-size: var(--t-small); background: var(--surface); border: 1px solid var(--line); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.stack-icons .ic-chip img { width: 16px; height: 16px; object-fit: contain; flex: none; }

.approach-wrap { gap: var(--s-7); justify-content: flex-start; }
.approach-body { display: grid; gap: var(--s-4); align-content: start; }
.approach-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); column-gap: var(--gutter); row-gap: var(--s-5); margin: 0; border-top: 0; padding-top: 0; }
.approach-facts > div { display: grid; gap: var(--s-2); align-content: start; }
.approach-facts dt { font-size: var(--t-small); font-weight: 500; color: var(--muted); }
.approach-facts dd { margin: 0; font-size: var(--t-body); line-height: 1.5; color: var(--ink); }

.enquiry-panel { background: var(--surface); border: 1px solid var(--line); border-radius: var(--r-lg); padding: var(--s-5); align-self: start; }
.enquiry-panel .form { gap: var(--s-3); }
.enquiry-panel .field :is(input, select, textarea) { background: var(--bg); }
.enquiry-panel textarea { min-height: 84px; }

/* Keep pinned-chapters sticky stage at 100svh on 1024-1279 so flex: 1 0 auto in system.css never stretches it */
main > [data-moment="pinned-chapters"].is-live > .mo-pc__grid { flex: 0 0 auto; height: 100svh; }

.split-media { position: relative; border-radius: var(--r-lg); overflow: hidden; aspect-ratio: auto; height: 520px; align-self: start; }
@media (min-width: 1280px) { .split-media { height: 560px; } }
.split-media > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 0%; }
.tile__media > img { object-position: 50% 0%; }
.mo-pc__visual > img { object-position: 50% 0%; }

/* Tighter tile ratios on work/portfolio rows so titles and descriptions never clip or bleed into the next section */
#work .tile, #all-projects .tile { --tile-ratio: 16 / 10; }
#more-projects .tile { --tile-ratio: 16 / 9; }
#work .section-head, #all-projects .section-head, #more-projects .section-head { margin-bottom: var(--s-5); }

/* Keep footer CTA and directory cleanly separated even on compact laptop screens */
footer.closing > .wrap { row-gap: var(--s-6); }
footer.closing .closing__cta { gap: var(--s-4); }
footer.closing .closing__links { gap: var(--s-5); }
footer.closing .closing__cta .section-head { gap: var(--s-3); }

/* Sub-page long content sections (Resume & Portfolio) flow naturally so multi-role records never clip */
main > section.flow-section { height: auto; min-height: 100svh; }
.role-list { display: grid; gap: var(--s-6); }
.role-item { padding-bottom: var(--s-5); border-bottom: 1px solid var(--line); display: grid; gap: var(--s-3); }
.role-item:last-child { border-bottom: 0; padding-bottom: 0; }
.role-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: var(--s-2) var(--s-5); }
.role-head h3 { font-family: var(--font-text); font-weight: 500; font-size: var(--t-card); line-height: 1.3; letter-spacing: -0.01em; }
.role-bullets { display: grid; gap: var(--s-2); padding-left: var(--s-5); list-style: disc; }
.role-bullets li { color: var(--ink); max-width: 66ch; }
.skill-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--s-5) var(--gutter); }
.skill-card { padding-top: var(--s-4); border-top: 1px solid var(--line); display: grid; gap: var(--s-2); align-content: start; }
.skill-card h3 { font-family: var(--font-text); font-weight: 500; font-size: var(--t-card); line-height: 1.3; }
.skill-card p { color: var(--ink); font-size: var(--t-body); line-height: 1.5; }

/* Compact vertical spacing inside dense 1-screen homepage split sections */
#services .section-head, #experience .section-head, #enquiry .section-head { margin-bottom: var(--s-3); }
#services .rows > li, #experience .rows > li, #enquiry .rows > li { padding-block: var(--s-3); }
#services .rows > li:first-child, #experience .rows > li:first-child, #enquiry .rows > li:first-child { padding-top: 0; }

/* Short laptop browser windows (<740px tall): expand sections naturally so CTA/cards never overlap neighbours */
@media (max-height: 740px) {
  main > section:not(.hero), footer.closing { height: auto; min-height: calc(var(--h, 1) * 100svh); }
  footer.closing > .wrap { grid-template-rows: auto auto; }
}

/* Tablet (640-1023): every section fits strictly on its 1-screen grid (1024px / 1180px), clean 40px split gap, full-width XL button */
@media (min-width: 640px) and (max-width: 1023px) {
  main > section > .wrap.grid { row-gap: 40px; }
  .split-media { aspect-ratio: auto; height: clamp(295px, 30svh, 355px); }
  .enquiry-panel { padding: var(--s-4) var(--s-5); }
  .closing__cta.close--type > .btn--xl:not(.btn--wide) { width: 100%; }
  #work .section-head { margin-bottom: var(--s-4); }
  #work .tile:nth-child(3) { --tile-ratio: 5 / 2; }
  #process:not(.is-live) .mo-pc__text { gap: var(--s-4); }
  #process:not(.is-live) .mo-pc__steps { gap: var(--s-4); }
  #process:not(.is-live) .mo-pc__step { padding-top: var(--s-4); }
  #process:not(.is-live) .mo-pc__visual > img { max-height: 18svh; aspect-ratio: 16 / 10; }
}

/* Phone (<640): compact 1-screen sections (844px) and exact 2-screen pinned-chapters (1688px) */
@media (max-width: 639px) {
  main > section > .wrap.grid { row-gap: 32px; }
  .stack-icons { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .stack-icons .ic-chip { height: 28px; padding: 0 var(--s-2); font-size: var(--t-label); }
  .approach-wrap { gap: var(--s-5); }
  .approach-facts, .skill-grid { grid-template-columns: minmax(0, 1fr); gap: var(--s-3); }
  .enquiry-panel { padding: var(--s-4); }
  .enquiry-panel .form { gap: var(--s-2); }
  .enquiry-panel textarea { min-height: 68px; }
  .split-media { aspect-ratio: auto; height: 205px; }
  #services .rows > li, #experience .rows > li { padding-block: var(--s-2); }
  #services .stack-4, #experience .stack-4, #enquiry .stack-4 { gap: var(--s-3); }
  #work .section-head { margin-bottom: var(--s-4); }
  #work .tile { gap: var(--s-2); --tile-ratio: 16 / 10; }
  #work .tile:nth-child(3) { --tile-ratio: 16 / 9; }
  #work .tile__facts { margin-top: 0; }
  main > #process[data-moment="pinned-chapters"]:not(.is-live) { min-height: 200lvh; }
  footer.closing > .wrap { row-gap: var(--s-5); }
  footer.closing .closing__cta { gap: var(--s-3); }
  footer.closing .closing__links { gap: var(--s-4); }
  footer.closing .closing__links > .grid { row-gap: var(--s-4); }
}
`;

const HEAD_GUARDS = `document.documentElement.classList.add('m-enter');setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);document.documentElement.classList.add('mo-js');setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500);`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-type="service"
      data-radius="soft"
      data-buttons="solid"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <meta name="site-kind" content="other" />
        <meta name="page-type" content="service" />
        {/* <link rel="canonical" href="https://onifadeololade.vercel.app/" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <style dangerouslySetInnerHTML={{ __html: DEAL_TOKENS_AND_PAGE_CSS }} />
        <script dangerouslySetInnerHTML={{ __html: HEAD_GUARDS }} />
        <link rel="modulepreload" href="/assets/system.js" />
        <link rel="modulepreload" href="/assets/motion/motion.js" />
        <link rel="modulepreload" href="/assets/layout/layout.js" />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link
          rel="modulepreload"
          href="/assets/moments/word-highlight/moment.js"
        />
        <link
          rel="modulepreload"
          href="/assets/moments/pinned-chapters/moment.js"
        />
      </head>
      <body>
        {children}
        <KitRuntime />
      </body>
    </html>
  );
}
