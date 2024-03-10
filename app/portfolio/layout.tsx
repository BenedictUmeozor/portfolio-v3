import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benedict Umeozor | Portfolio",
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
