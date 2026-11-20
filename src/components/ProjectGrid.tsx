import { useLayoutEffect, useRef, type ReactNode } from 'react';

export default function ProjectGrid({ children }: { children: ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.children).filter(
      (card): card is HTMLElement => card instanceof HTMLElement,
    );

    const updateRows = (changedCards: HTMLElement[]) => {
      const gap = parseFloat(getComputedStyle(grid).columnGap);
      // Desktop uses 1px grid rows, with the gap included in each card's span.
      const measurements = changedCards.map((card) => ({
        card,
        span: Math.ceil(card.getBoundingClientRect().height + gap),
      }));

      for (const { card, span } of measurements) {
        card.style.setProperty('--project-row-span', String(span));
      }
    };

    updateRows(cards);

    const observer = new ResizeObserver((entries) => {
      updateRows(entries.map(({ target }) => target as HTMLElement));
    });
    cards.forEach((card) => observer.observe(card, { box: 'border-box' }));

    return () => observer.disconnect();
  }, [children]);

  return <div className="project-grid" ref={gridRef}>{children}</div>;
}
