import type { SlideData } from "@/lib/slides";

/**
 * 1 スライド = 1366×900 固定。
 * フラット DS。背景色の段差で構造を作り、ボーダーは使わない。
 */
export function Slide({ data, index, total }: { data: SlideData; index?: number; total?: number }) {
  const variant = data.variant ?? "default";
  const isCover = variant === "cover";
  const isChapter = variant === "chapter";
  const lead = Array.isArray(data.lead) ? data.lead : data.lead ? [data.lead] : [];

  const bg = isCover
    ? "var(--color-text)"
    : isChapter
    ? "var(--color-surface-2)"
    : "var(--color-bg)";
  const fg = isCover ? "var(--color-text-inverse)" : "var(--color-text)";

  return (
    <article
      className="slide"
      data-variant={variant}
      style={{
        width: 1366,
        height: 900,
        position: "relative",
        overflow: "hidden",
        background: bg,
        color: fg,
        padding: isCover ? "120px 112px" : "72px 96px",
        display: "flex",
        flexDirection: "column",
        gap: isCover ? 32 : 28,
      }}
    >
      {/* ページ番号（cover では出さない） */}
      {!isCover && typeof index === "number" && typeof total === "number" && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: 32,
            right: 40,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "var(--color-text-light)",
          }}
        >
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      )}

      {data.eyebrow && (
        <p
          className="eyebrow"
          style={{
            margin: 0,
            color: isCover ? "rgba(243,241,238,.6)" : "var(--color-text-muted)",
          }}
        >
          {data.eyebrow}
        </p>
      )}

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: isCover ? 300 : 400,
          letterSpacing: "-0.02em",
          fontSize: isCover ? 64 : 40,
          lineHeight: 1.15,
          color: fg,
          margin: 0,
          maxWidth: isCover ? "100%" : 1180,
          whiteSpace: "pre-line",
        }}
      >
        {data.title}
      </h1>

      {lead.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 1080,
          }}
        >
          {lead.map((line, i) => (
            <p
              key={i}
              style={{
                fontSize: isCover ? 18 : 16,
                lineHeight: 1.8,
                color: isCover ? "rgba(243,241,238,.82)" : "var(--color-text-muted)",
                margin: 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      )}

      {data.children && (
        <div style={{ flex: "1 1 auto", minHeight: 0, overflow: "hidden" }}>
          {data.children}
        </div>
      )}

      {data.footnote && (
        <p
          style={{
            position: "absolute",
            bottom: 70,
            left: 96,
            right: 96,
            fontSize: 11,
            lineHeight: 1.6,
            color: isCover ? "rgba(243,241,238,.55)" : "var(--color-text-light)",
            margin: 0,
            letterSpacing: "0.04em",
          }}
        >
          {data.footnote}
        </p>
      )}
    </article>
  );
}
