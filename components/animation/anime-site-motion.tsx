"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, stagger } from "animejs";

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";

function isHTMLElement(element: Element): element is HTMLElement {
  return element instanceof HTMLElement;
}

export function AnimeSiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(reduceMotionQuery).matches;

    if (reduceMotion) {
      document.documentElement.classList.add("anime-motion-ready");
      return;
    }

    document.documentElement.classList.add("anime-motion-ready");

    const cleanupHandlers: Array<() => void> = [];
    const animatedElements = new WeakSet<Element>();
    const revealTargets = Array.from(
      document.querySelectorAll(
        "main section, main article, main details, main .root-style-card, main .image-depth-card",
      ),
    ).filter(isHTMLElement);

    revealTargets.forEach((element) => {
      if (element.dataset.animeObserved === "true") {
        return;
      }

      element.dataset.animeObserved = "true";
      element.classList.add("anime-reveal-target");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleElements = entries
          .filter((entry) => entry.isIntersecting && !animatedElements.has(entry.target))
          .map((entry) => entry.target)
          .filter(isHTMLElement);

        if (!visibleElements.length) {
          return;
        }

        visibleElements.forEach((element) => {
          animatedElements.add(element);
          element.classList.add("anime-revealed");
        });

        animate(visibleElements, {
          opacity: [0, 1],
          y: [26, 0],
          scale: [0.985, 1],
          filter: ["blur(10px)", "blur(0px)"],
          duration: 760,
          delay: stagger(45),
          ease: "outCubic",
        });

        visibleElements.forEach((element) => observer.unobserve(element));
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    revealTargets.forEach((element) => observer.observe(element));

    const cards = Array.from(document.querySelectorAll(".root-style-card")).filter(isHTMLElement);

    cards.forEach((card) => {
      const onPointerMove = (event: PointerEvent) => {
        if (event.pointerType === "touch") {
          return;
        }

        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        animate(card, {
          rotateX: y * -3,
          rotateY: x * 3,
          translateY: -6,
          scale: 1.01,
          duration: 360,
          ease: "outCubic",
        });
      };

      const onPointerLeave = () => {
        animate(card, {
          rotateX: 0,
          rotateY: 0,
          translateY: 0,
          scale: 1,
          duration: 520,
          ease: "outCubic",
        });
      };

      card.addEventListener("pointermove", onPointerMove);
      card.addEventListener("pointerleave", onPointerLeave);

      cleanupHandlers.push(() => {
        card.removeEventListener("pointermove", onPointerMove);
        card.removeEventListener("pointerleave", onPointerLeave);
      });
    });

    const magneticButtons = Array.from(
      document.querySelectorAll(".magnetic-cta, .premium-secondary-cta"),
    ).filter(isHTMLElement);

    magneticButtons.forEach((button) => {
      const onPointerMove = (event: PointerEvent) => {
        if (event.pointerType === "touch") {
          return;
        }

        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        animate(button, {
          translateX: x * 8,
          translateY: y * 6 - 2,
          scale: 1.025,
          duration: 280,
          ease: "outCubic",
        });
      };

      const onPointerLeave = () => {
        animate(button, {
          translateX: 0,
          translateY: 0,
          scale: 1,
          duration: 420,
          ease: "outCubic",
        });
      };

      button.addEventListener("pointermove", onPointerMove);
      button.addEventListener("pointerleave", onPointerLeave);

      cleanupHandlers.push(() => {
        button.removeEventListener("pointermove", onPointerMove);
        button.removeEventListener("pointerleave", onPointerLeave);
      });
    });

    const backgroundShapes = Array.from(
      document.querySelectorAll(".premium-orb, .floating-geo"),
    ).filter(isHTMLElement);

    if (backgroundShapes.length) {
      animate(backgroundShapes, {
        translateY: [0, -12, 0],
        translateX: [0, 8, 0],
        duration: 5200,
        delay: stagger(180),
        loop: true,
        ease: "inOutSine",
      });
    }

    return () => {
      observer.disconnect();
      cleanupHandlers.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}
