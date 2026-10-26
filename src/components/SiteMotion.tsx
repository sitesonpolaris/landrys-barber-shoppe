"use client";

import { useEffect } from "react";

/**
 * Client-only motion layer: header state, mobile dock, today's hours row,
 * scroll reveals, hero video play/pause, and transform-only layered parallax.
 * Elements opt in with data attributes (data-speed, data-fade) and classes (.reveal).
 * Everything respects prefers-reduced-motion.
 */
export function SiteMotion() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const header = document.querySelector<HTMLElement>(".site-header");
    const dock = document.querySelector<HTMLElement>(".dock");
    const hero = document.querySelector<HTMLElement>(".hero");

    const today = new Date().getDay();
    document.querySelectorAll<HTMLElement>("[data-days]").forEach((row) => {
      if ((row.dataset.days || "").split(",").map(Number).includes(today)) row.classList.add("is-today");
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const video = document.querySelector<HTMLVideoElement>(".hero-video");
    const toggle = document.querySelector<HTMLButtonElement>(".hero-toggle");
    // Visitor-controlled pause (WCAG 2.2.2). Starts paused under reduced motion.
    let userPaused = reduce.matches;
    const syncToggle = () => toggle?.setAttribute("aria-pressed", String(userPaused));
    syncToggle();
    const tryPlay = () => {
      if (!video || reduce.matches || userPaused) return;
      video.muted = true;
      video.play()?.catch(() => {});
    };
    if (video && reduce.matches) {
      video.removeAttribute("autoplay");
      video.pause();
    }
    const vio = new IntersectionObserver(([e]) => {
      if (!video) return;
      if (e.isIntersecting) tryPlay();
      else video.pause();
    });
    if (video) vio.observe(video);
    const onToggle = () => {
      if (!video) return;
      userPaused = !userPaused;
      syncToggle();
      if (userPaused) video.pause();
      else {
        video.muted = true;
        video.play()?.catch(() => {});
      }
    };
    toggle?.addEventListener("click", onToggle);

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-speed]")).map((el) => ({
      el,
      speed: parseFloat(el.dataset.speed || "0"),
      fade: el.dataset.fade === "1",
      anchor: (el.closest("section") as HTMLElement) || el,
    }));
    let ticking = false;
    const frame = () => {
      ticking = false;
      const y = window.scrollY;
      header?.classList.toggle("is-solid", y > 40);
      if (dock && hero) dock.classList.toggle("is-on", y > hero.offsetHeight * 0.6);
      if (reduce.matches) return;
      const h = window.innerHeight;
      const k = window.innerWidth < 860 ? 0.55 : 1;
      for (const l of layers) {
        const r = l.anchor.getBoundingClientRect();
        if (r.bottom < -200 || r.top > h + 200) continue;
        const isHero = l.anchor === hero;
        const delta = isHero ? r.top : r.top + r.height / 2 - h / 2;
        l.el.style.transform = `translate3d(0, ${(-delta * l.speed * (isHero ? 1 : k)).toFixed(1)}px, 0)`;
        if (l.fade) {
          const p = Math.min(Math.max(-r.top / (r.height * 0.75), 0), 1);
          l.el.style.opacity = String(1 - p);
        }
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    };
    frame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const onReduce = () => {
      if (reduce.matches) {
        userPaused = true;
        syncToggle();
        layers.forEach((l) => {
          l.el.style.transform = "";
          l.el.style.opacity = "";
        });
        video?.pause();
      } else {
        tryPlay();
        frame();
      }
    };
    reduce.addEventListener("change", onReduce);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduce.removeEventListener("change", onReduce);
      toggle?.removeEventListener("click", onToggle);
      io.disconnect();
      vio.disconnect();
    };
  }, []);
  return null;
}
