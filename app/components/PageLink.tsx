"use client";

import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
  title?: string;
};

export default function PageLink({
  children,
  href,
  className = "",
  title,
}: Props) {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseOver = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferer"
      title={title}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={(isPaused ? "paused" : "") + " " + className}
    >
      {children}
    </a>
  );
}
