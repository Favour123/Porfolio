import { STACK_TOOLS } from "@/data/mockData";

export function ArrowGlyph() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

export function BrandMark() {
  return <span className="mark" data-mark="arc" aria-hidden="true" />;
}

export function StackIconRow({ ids, limit }: { ids?: string[]; limit?: number }) {
  const base = ids
    ? STACK_TOOLS.filter((t) => ids.includes(t.id))
    : STACK_TOOLS;
  const items = limit ? base.slice(0, limit) : base;

  return (
    <ul className="stack-icons" aria-label="Core technologies">
      {items.map((tool) => (
        <li key={tool.id} className="ic-chip">
          {tool.icon ? (
            <img
              src={tool.icon}
              alt=""
              width={20}
              height={20}
              loading="lazy"
              className={tool.ink ? "ic-ink" : undefined}
            />
          ) : null}
          <span>{tool.name}</span>
        </li>
      ))}
    </ul>
  );
}
