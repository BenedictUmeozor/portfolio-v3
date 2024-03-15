import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={"max-w-7xl px-4 mx-auto " + (className && className)}>
      {children}
    </div>
  );
}
