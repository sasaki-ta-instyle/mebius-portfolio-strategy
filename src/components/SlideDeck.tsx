"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Slide } from "./Slide";
import type { SlideData } from "@/lib/slides";

const SLIDE_W = 1366;
const SLIDE_H = 900;

/**
 * プレゼン全体の章構成（タイムライン用）。
 * range は 1 始まりの [start, end] スライド番号。
 */
type Chapter = { label: string; range: [number, number] };
const CHAPTERS: Chapter[] = [
  { label: "INTRO", range: [1, 3] },
  { label: "STRUCTURE", range: [4, 6] },
  { label: "BRANDS", range: [7, 11] },
  { label: "EC DESIGN", range: [12, 13] },
  { label: "RISK / DECISIONS", range: [14, 15] },
  { label: "POLICY", range: [16, 17] },
  { label: "WHY REBRAND", range: [18, 24] },
  { label: "EXECUTION", range: [25, 30] },
  { label: "EC / ROADMAP", range: [31, 32] },
  { label: "SUMMARY", range: [33, 33] },
];

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
  const slideNo = index + 1;
  const total = deck.length;
  const activeChapter = useMemo(
    () => CHAPTERS.findIndex((c) => slideNo >= c.range[0] && slideNo <= c.range[1]),
    [slideNo],
  );

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
      {/* 章タイムライン（スケール対象外、画面実寸で常駐） */}
      <nav
        aria-label="章タイムライン"
        className="deck-timeline"
        style={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "stretch",
          gap: 6,
          background: "rgba(243,241,238,0.94)",
          borderRadius: "var(--r-pill)",
          padding: "10px 16px",
          maxWidth: "calc(100vw - 40px)",
          zIndex: 10,
        }}
      >
        {CHAPTERS.map((ch, ci) => {
          const span = ch.range[1] - ch.range[0] + 1;
          const isActive = ci === activeChapter;
          const isPast = ci < activeChapter;
          return (
            <button
              key={ch.label}
              type="button"
              onClick={() => setIndex(ch.range[0] - 1)}
              aria-label={`${ch.label} へ移動`}
              aria-current={isActive ? "step" : undefined}
              style={{
                background: "transparent",
                border: "none",
                padding: "2px 4px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                gap: 4,
                minWidth: Math.max(28, span * 10),
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.08em",
                  textAlign: "left",
                  color: isActive
                    ? "var(--color-text)"
                    : isPast
                    ? "var(--color-text-muted)"
                    : "var(--color-text-light)",
                  whiteSpace: "nowrap",
                }}
              >
                {ch.label}
              </span>
              <span
                aria-hidden
                style={{
                  display: "flex",
                  gap: 2,
                  height: 4,
                }}
              >
                {Array.from({ length: span }).map((_, si) => {
                  const slideIdx = ch.range[0] + si;
                  const filled = slideIdx <= slideNo;
                  const onCurrent = slideIdx === slideNo;
                  return (
                    <span
                      key={si}
                      style={{
                        flex: 1,
                        background: onCurrent
                          ? "var(--color-text)"
                          : filled
                          ? "var(--color-text-muted)"
                          : "var(--color-surface-3, #d8d3c8)",
                        borderRadius: 2,
                        transform: onCurrent ? "scaleY(1.4)" : "scaleY(1)",
                        transformOrigin: "center",
                        transition: "background 0.2s, transform 0.2s",
                      }}
                    />
                  );
                })}
              </span>
            </button>
          );
        })}
      </nav>

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
