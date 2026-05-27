import type { ReactNode } from "react";

/* ===== 二分割 / 三分割の汎用レイアウト ===== */

export function TwoCol({
  left,
  right,
  ratio = "1fr 1fr",
  gap = 32,
}: {
  left: ReactNode;
  right: ReactNode;
  ratio?: string;
  gap?: number;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: ratio, gap, height: "100%" }}>
      <div style={{ minWidth: 0 }}>{left}</div>
      <div style={{ minWidth: 0 }}>{right}</div>
    </div>
  );
}

/* ===== カード ===== */

export function Card({
  title,
  body,
  tone = "surface",
}: {
  title?: string;
  body: ReactNode;
  tone?: "surface" | "surface-2" | "surface-3" | "dark";
}) {
  const bg =
    tone === "dark"
      ? "var(--color-text)"
      : tone === "surface-3"
      ? "var(--color-surface-3)"
      : tone === "surface-2"
      ? "var(--color-surface-2)"
      : "var(--color-surface)";
  const fg = tone === "dark" ? "var(--color-text-inverse)" : "var(--color-text)";
  return (
    <div
      style={{
        background: bg,
        color: fg,
        borderRadius: "var(--r)",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        height: "100%",
      }}
    >
      {title && (
        <p
          className="eyebrow"
          style={{
            margin: 0,
            color: tone === "dark" ? "rgba(243,241,238,.65)" : "var(--color-text-muted)",
          }}
        >
          {title}
        </p>
      )}
      <div style={{ fontSize: 14, lineHeight: 1.7 }}>{body}</div>
    </div>
  );
}

/* ===== タイトル付き定義行（label : value） ===== */

export function DefList({
  rows,
  labelWidth = 96,
  gap = 12,
  fontSize = 14,
}: {
  rows: Array<{ label: string; value: ReactNode }>;
  labelWidth?: number;
  gap?: number;
  fontSize?: number;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: `${labelWidth}px 1fr`, gap: 16, fontSize, lineHeight: 1.7 }}>
          <span style={{ color: "var(--color-text-muted)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", paddingTop: 4 }}>
            {r.label}
          </span>
          <span style={{ color: "var(--color-text)" }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

/* ===== マトリクス表（thead / tbody） ===== */

export type MatrixCell = ReactNode | { tag?: "dark" | "accent" | "default"; text: ReactNode };

export function Matrix({
  head,
  rows,
  fontSize = 13,
}: {
  head: string[];
  rows: MatrixCell[][];
  fontSize?: number;
}) {
  return (
    <table className="slide-table" style={{ fontSize }}>
      <thead>
        <tr>
          {head.map((h, i) => (
            <th key={i}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{renderCell(cell)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function renderCell(cell: MatrixCell): ReactNode {
  if (cell !== null && typeof cell === "object" && !Array.isArray(cell) && "text" in (cell as { text: ReactNode })) {
    const c = cell as { tag?: "dark" | "accent" | "default"; text: ReactNode };
    const cls = c.tag === "dark" ? "tag tag-dark" : c.tag === "accent" ? "tag tag-accent" : "tag";
    return <span className={cls}>{c.text}</span>;
  }
  return cell as ReactNode;
}

/* ===== 強弱インジケータ（強 / 中 / 弱） ===== */

export function Strength({ level }: { level: "強" | "中" | "弱" }) {
  const map = { 強: 3, 中: 2, 弱: 1 } as const;
  const dots = map[level];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          aria-hidden
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: i < dots ? "var(--color-text)" : "var(--color-surface-2)",
          }}
        />
      ))}
      <span style={{ marginLeft: 6, color: "var(--color-text-muted)", fontSize: 11 }}>{level}</span>
    </span>
  );
}

/* ===== 大きな数値 / KPI ===== */

export function BigStat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 300, lineHeight: 1, letterSpacing: "-0.02em" }}>
        {value}
      </span>
      <span style={{ fontSize: 14, color: "var(--color-text)" }}>{label}</span>
      {sub && <span style={{ fontSize: 11, color: "var(--color-text-muted)", letterSpacing: "0.04em" }}>{sub}</span>}
    </div>
  );
}

/* ===== ブランド略号バッジ ===== */

export function BrandBadge({ name, tone = "default" }: { name: string; tone?: "default" | "dark" | "accent" }) {
  const cls = tone === "dark" ? "tag tag-dark" : tone === "accent" ? "tag tag-accent" : "tag";
  return <span className={cls}>{name}</span>;
}
