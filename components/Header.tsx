"use client";

import Link from "next/link";
import Container from "./Container";
import { v4 as uuidV4 } from "uuid";
import { usePathname } from "next/navigation";
import { AtSign } from "react-feather";

const links = [
  {
    id: uuidV4(),
    name: "home",
    path: "/",
  },
  {
    id: uuidV4(),
    name: "portfolio",
    path: "/portfolio",
  },
  {
    id: uuidV4(),
    name: "resume",
    path: "/resume",
  },
  {
    id: uuidV4(),
    name: "contact",
    path: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <header>
      <Container className="flex items-center justify-between py-8">
        <a
          href="mailto:benedictumeozor@gmail.com"
          className="flex items-center gap-1 text-highlight dark:text-highlight_dark hover:text-paragraph dark:hover:text-paragraph_dark"
        >
          <AtSign className="w-4" />
          benedictumeozor@gmail.com
        </a>

        <nav>
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={
                    "text-[0.9rem] capitalize block  hover:text-highlight dark:hover:text-highlight_dark transform hover:-translate-y-1 " +
                    (pathname !== link.path
                      ? "text-paragraph dark:text-paragraph_dark"
                      : "text-highlight dark:text-highlight_dark")
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
