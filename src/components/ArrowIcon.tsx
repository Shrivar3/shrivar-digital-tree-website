export function ArrowIcon({ direction = "right" }: { direction?: "right" | "down" | "up" }) {
  const rotation = direction === "down" ? 90 : direction === "up" ? -90 : 0;

  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      aria-hidden="true"
      style={{ transform: "rotate(" + rotation + "deg)" }}
    >
      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
    </svg>
  );
}
