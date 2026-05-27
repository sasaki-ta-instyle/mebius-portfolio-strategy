"use client";

import { useEffect, useRef, useState } from "react";
import { Slide } from "./Slide";
import type { SlideData } from "@/lib/slides";

const SLIDE_W = 1366;
const SLIDE_H = 900;

export function SlideDeck({ deck }: { deck: SlideData[] }) {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const recompute = () => {
      const w = stageRef.current?.clientWidth ?? window.innerWidth;
      const h = stageRef.current?.clientHeight ?? window.innerHeight;
      const s = Math.min(w / SLIDE_W, h / SLIDE_H, 1);
      setScale(Math.max(s, 0.2));
    };
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        setIndex((i) => Math.min(i + 1, deck.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Home") {
        setIndex(0);
      } else if (e.key === "End") {
        setIndex(deck.length - 1);
      } else if (e.key === "p" || e.key === "P") {
        e.preventDefault();
        window.print();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deck.length]);

  const current = deck[index];

  return (
    <main
      className="deck-stage"
      ref={stageRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="deck-stage-screen"
        style={{
          width: SLIDE_W,
          height: SLIDE_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {current && <Slide data={current} index={index} total={deck.length} />}
      </div>

      <div className="deck-print">
        {deck.map((s, i) => (
          <div className="deck-print-page" key={s.id}>
            <Slide data={s} index={i} total={deck.length} />
          </div>
        ))}
      </div>

      <nav
        className="deck-nav"
        aria-label="スライドナビ"
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 11,
          letterSpacing: "0.06em",
          color: "var(--color-text-muted)",
          background: "var(--color-surface)",
          borderRadius: "var(--r-pill)",
          padding: "8px 16px",
        }}
      >
        <button
          type="button"
          onClick={() => setIndex(Math.max(index - 1, 0))}
          aria-label="前へ"
          disabled={index === 0}
          style={{
            background: "transparent",
            border: "none",
            color: "inherit",
            opacity: index === 0 ? 0.3 : 1,
            cursor: index === 0 ? "default" : "pointer",
            fontSize: 14,
            padding: "0 4px",
          }}
        >
          ←
        </button>
        <span style={{ fontFamily: "var(--font-mono)" }}>
          {String(index + 1).padStart(2, "0")} / {String(deck.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={() => setIndex(Math.min(index + 1, deck.length - 1))}
          aria-label="次へ"
          disabled={index === deck.length - 1}
          style={{
            background: "transparent",
            border: "none",
            color: "inherit",
            opacity: index === deck.length - 1 ? 0.3 : 1,
            cursor: index === deck.length - 1 ? "default" : "pointer",
            fontSize: 14,
            padding: "0 4px",
          }}
        >
          →
        </button>
        <span aria-hidden style={{ opacity: 0.4 }}>·</span>
        <span aria-hidden style={{ opacity: 0.7 }}>P で印刷 / F で全画面</span>
      </nav>
    </main>
  );
}
