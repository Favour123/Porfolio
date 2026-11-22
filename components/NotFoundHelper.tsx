"use client";

import { useEffect, useState } from "react";
import { ArrowGlyph } from "./Icons";

interface RouteCandidate {
  href: string;
  label: string;
  description: string;
  aliases: string[];
}

const ROUTES: RouteCandidate[] = [
  {
    href: "/portfolio/",
    label: "Work & live apps",
    description: "Five shipped web applications deployed on Vercel.",
    aliases: [
      "portfolio",
      "porfolio",
      "portflio",
      "portfollio",
      "protfolio",
      "work",
      "works",
      "project",
      "projects",
      "apps",
      "builds",
      "deployments",
    ],
  },
  {
    href: "/resume/",
    label: "Engineering resume",
    description: "Work history, software security skills, and education.",
    aliases: [
      "resume",
      "resum",
      "resumes",
      "cv",
      "experience",
      "experiences",
      "skills",
      "education",
      "about",
      "bio",
    ],
  },
  {
    href: "/contact/",
    label: "Contact form",
    description: "Send a project or role inquiry via Formspree.",
    aliases: [
      "contact",
      "contacts",
      "contac",
      "cotact",
      "hire",
      "enquiry",
      "inquiry",
      "inquire",
      "message",
      "email",
      "mail",
    ],
  },
  {
    href: "/#services",
    label: "Web & security services",
    description: "Frontend, NestJS, PostgreSQL, and OWASP security scope.",
    aliases: ["service", "services", "security", "stack", "process"],
  },
  {
    href: "/",
    label: "Home",
    description: "Full-stack engineering overview and featured work.",
    aliases: ["home", "index", "main", "start"],
  },
];

function editDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array<number>(n + 1).fill(0)
  );
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

function findClosestRoute(pathname: string): RouteCandidate | null {
  const segment = pathname
    .toLowerCase()
    .replace(/^\/+|\/+$/g, "")
    .split("/")[0];
  if (!segment) return null;

  for (const route of ROUTES) {
    if (route.aliases.includes(segment)) return route;
  }

  let best: { route: RouteCandidate; dist: number } | null = null;
  for (const route of ROUTES) {
    for (const alias of route.aliases) {
      const dist = editDistance(segment, alias);
      const maxDist = alias.length <= 4 ? 1 : alias.length <= 7 ? 2 : 3;
      if (dist <= maxDist && (!best || dist < best.dist)) {
        best = { route, dist };
      }
    }
  }
  return best ? best.route : null;
}

export default function NotFoundHelper() {
  const [pathname, setPathname] = useState<string>("");
  const [suggestion, setSuggestion] = useState<RouteCandidate | null>(null);

  useEffect(() => {
    const rawPath = window.location.pathname || "";
    const isDirect404 = /^\/404(?:\.html)?\/?$/i.test(rawPath);
    setPathname(isDirect404 ? "" : rawPath);
    setSuggestion(isDirect404 ? null : findClosestRoute(rawPath));
  }, []);

  return (
    <>
      <p className="hero__lead">
        {pathname ? (
          <>
            No page exists at <span className="mono">{pathname}</span>.{" "}
            {suggestion
              ? `If that URL was misspelled, you likely meant ${suggestion.label.toLowerCase()}.`
              : "Check the address for typos or pick a destination from the route list."}
          </>
        ) : (
          "The address you opened does not match a page on this portfolio. Check for typos or pick a destination from the route list."
        )}
      </p>

      <div className="btn-row">
        {suggestion ? (
          <>
            <a className="btn btn--primary" href={suggestion.href}>
              Go to {suggestion.label}
              <ArrowGlyph />
            </a>
            <a className="btn btn--secondary" href="/">
              Back to home
            </a>
          </>
        ) : (
          <>
            <a className="btn btn--primary" href="/">
              Back to home
              <ArrowGlyph />
            </a>
            <a className="btn btn--secondary" href="/portfolio/">
              See all 5 apps
            </a>
          </>
        )}
      </div>
    </>
  );
}
