"use client";

import { useMousePosition } from "@/contexts/MousePosition";

export default function MouseTracker() {
  const { x, y } = useMousePosition();

  const style: React.CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    position: "fixed",
    left: x - 100,
    top: y - 100,
    width: 200,
    height: 200,
    borderRadius: "50%",
    pointerEvents: "none",
  };

  return <div style={style} />;
}
