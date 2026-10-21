import type { CSSProperties } from "react";
import type { Service } from "@/lib/site";

export function MenuList({ title, items, delay = 0 }: { title: string; items: Service[]; delay?: number }) {
  return (
    <div className="menu reveal" style={{ ["--d" as string]: delay } as CSSProperties}>
      <h3>{title}</h3>
      <ul>
        {items.map((s) => (
          <li key={s.name}>
            <span className="item">
              <b>{s.name}</b>
              <small>{s.time}</small>
            </span>
            <span className="leader" aria-hidden="true" />
            <span className="price">
              {s.from ? <span className="sr-only">from </span> : null}${s.price}
              {s.from ? <sup aria-hidden="true">+</sup> : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
