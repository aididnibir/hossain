import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLElement>();
  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
