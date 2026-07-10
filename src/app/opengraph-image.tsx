import { ImageResponse } from "next/og";

export const alt = "Shrivar Singh — quantitative systems for better decisions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#020711",
        color: "#f2f7fb",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(circle at 78% 42%, rgba(92,140,255,.22), transparent 34%), radial-gradient(circle at 76% 86%, rgba(231,184,95,.12), transparent 25%)"
        }}
      />
      <div
        style={{
          width: "62%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px 0 70px 78px"
        }}
      >
        <div style={{ display: "flex", color: "#78f4df", fontSize: 23, marginBottom: 34 }}>
          Shrivar Singh — quantitative founder-builder
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 700,
            fontSize: 64,
            lineHeight: 1.04,
            letterSpacing: "-3px"
          }}
        >
          Quantitative systems for better decisions.
        </div>
        <div style={{ display: "flex", color: "#a2b1c0", fontSize: 24, marginTop: 32 }}>
          Statistics · AI · Analytics · Finance
        </div>
      </div>
      <div
        style={{
          width: "38%",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 8,
            height: 390,
            borderRadius: 99,
            background: "linear-gradient(#73e9ff, #74a6ff 58%, #e7b85f)",
            transform: "rotate(4deg)",
            boxShadow: "0 0 34px rgba(115,233,255,.5)"
          }}
        />
        {[[-112, -120], [98, -150], [-140, 15], [118, 6], [-86, 142], [88, 132]].map(
          ([x, y], index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: 218 + x,
                top: 315 + y,
                width: 22,
                height: 22,
                border: `3px solid ${index % 3 === 0 ? "#78f4df" : index % 2 ? "#74a6ff" : "#e7b85f"}`,
                borderRadius: 99,
                boxShadow: "0 0 18px rgba(115,233,255,.35)"
              }}
            />
          )
        )}
      </div>
    </div>,
    size
  );
}
