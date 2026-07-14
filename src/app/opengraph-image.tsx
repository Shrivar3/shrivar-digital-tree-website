import { ImageResponse } from "next/og";

export const alt = "Shrivar Singh — statistics, AI and better decisions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const branches = [
    { top: 92, rotate: -26, width: 260, color: "#73d8e7" },
    { top: 176, rotate: -10, width: 300, color: "#73d8e7" },
    { top: 270, rotate: 8, width: 290, color: "#73d8e7" },
    { top: 356, rotate: 25, width: 250, color: "#d29b52" }
  ];
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#03080e", color: "#f1f1ec", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", background: "radial-gradient(circle at 76% 43%, rgba(66,163,181,.18), transparent 34%), linear-gradient(90deg, rgba(210,155,82,.06), transparent 45%)" }} />
      <div style={{ width: "62%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 0 64px 76px", borderLeft: "1px solid rgba(115,216,231,.35)", marginLeft: 38 }}>
        <div style={{ display: "flex", fontSize: 24, marginBottom: 50 }}>Shrivar Singh</div>
        <div style={{ display: "flex", maxWidth: 650, fontSize: 59, lineHeight: 1.05, letterSpacing: "-2.5px" }}>I work on problems where the answer is not obvious yet.</div>
        <div style={{ display: "flex", color: "#9aabb3", fontSize: 22, marginTop: 34 }}>Statistics · software · AI · uncertainty</div>
      </div>
      <div style={{ width: "38%", display: "flex", position: "relative", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", left: 130, top: 76, width: 3, height: 464, background: "linear-gradient(#73d8e7, #73d8e7 67%, #d29b52)", boxShadow: "0 0 28px rgba(115,216,231,.34)" }} />
        {branches.map((branch, index) => <div key={index} style={{ position: "absolute", left: 130, top: branch.top, width: branch.width, height: 1, background: branch.color, transform: "rotate(" + branch.rotate + "deg)", transformOrigin: "left" }} />)}
        {Array.from({ length: 34 }, (_, index) => <div key={index} style={{ position: "absolute", left: 150 + ((index * 67) % 250), top: 58 + ((index * 43) % 490), width: index % 7 === 0 ? 6 : 3, height: index % 7 === 0 ? 6 : 3, borderRadius: 99, background: index % 5 === 0 ? "#d29b52" : "#73d8e7", opacity: .64 }} />)}
      </div>
    </div>,
    size
  );
}
