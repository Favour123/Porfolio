"use client";

import { useEffect } from "react";

export default function KitRuntime() {
  useEffect(() => {
    const html = document.documentElement;
    const hero = document.querySelector<HTMLElement>(
      '.hero[data-enter]:not([data-enter="off"])'
    );
    const shouldAnimateHero =
      Boolean(hero) &&
      !hero?.classList.contains("is-entered") &&
      !hero?.classList.contains("is-entering") &&
      (hero?.getBoundingClientRect().bottom ?? 0) > 0;

    if (shouldAnimateHero) {
      html.classList.remove("m-enter-done");
    }
    html.classList.add("m-enter", "mo-js");

    const doneTimer = window.setTimeout(() => {
      html.classList.add("m-enter-done");
    }, 900);
    const safeTimer = window.setTimeout(() => {
      html.classList.add("mo-safe");
    }, 2500);

    const loadModule = (src: string) =>
      new Promise<void>((resolve) => {
        if (document.querySelector(`script[data-kit="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.type = "module";
        s.src = src;
        s.dataset.kit = src;
        s.onload = () => resolve();
        s.onerror = () => resolve();
        document.body.appendChild(s);
      });

    (async () => {
      await loadModule("/assets/motion/motion.js");
      await loadModule("/assets/system.js");
      await loadModule("/assets/layout/layout.js");
    })();

    return () => {
      window.clearTimeout(doneTimer);
      window.clearTimeout(safeTimer);
    };
  }, []);

  return null;
}

