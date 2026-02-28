"use client"

export default function ScrollGradient() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-black" />
      {/* Glow sutil top-left */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 15% 10%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />
      {/* Glow sutil center-right */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 85% 50%, rgba(255,255,255,0.025) 0%, transparent 70%)",
        }}
      />
      {/* Glow sutil bottom-left */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 55% 45% at 20% 90%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}
