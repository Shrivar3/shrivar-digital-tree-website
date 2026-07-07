import type { WritingItem } from "@/data/writing";

type WritingCardProps = {
  item: WritingItem;
};

export function WritingCard({ item }: WritingCardProps) {
  return (
    <article className="glass-line rounded-lg p-5 transition hover:-translate-y-1 hover:border-gold/35 hover:shadow-gold">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{item.category}</p>
      <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {item.status}
      </p>
    </article>
  );
}
