import React from "react";

// Soft, slowly drifting colour light behind the grid-paper sections.
// Pure radial gradients + transform animation, so it stays cheap to render.
const AmbientBackground = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div
      className="aurora-blob -left-[15vmax] top-[10vh] h-[55vmax] w-[55vmax] opacity-50"
      style={{ background: "radial-gradient(circle, rgba(10,132,255,0.22), transparent 62%)" }}
    />
    <div
      className="aurora-blob -right-[18vmax] top-[35vh] h-[60vmax] w-[60vmax] opacity-50"
      style={{
        background: "radial-gradient(circle, rgba(191,90,242,0.2), transparent 62%)",
        animationDelay: "-8s",
        animationDuration: "30s",
      }}
    />
    <div
      className="aurora-blob bottom-[-25vmax] left-[25vw] h-[50vmax] w-[50vmax] opacity-45"
      style={{
        background: "radial-gradient(circle, rgba(255,159,10,0.18), transparent 62%)",
        animationDelay: "-16s",
        animationDuration: "34s",
      }}
    />
  </div>
);

export default AmbientBackground;
