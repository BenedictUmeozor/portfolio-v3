"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface MousePosition {
  x: number;
  y: number;
}

const MousePositionContext = createContext<MousePosition>({ x: 0, y: 0 });

export const useMousePosition = (): MousePosition =>
  useContext(MousePositionContext);

export const MousePositionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MousePositionContext.Provider value={mousePosition}>
      {children}
    </MousePositionContext.Provider>
  );
};