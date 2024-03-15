"use client";

import Link from "next/link";
import Container from "./Container";
import { v4 as uuidV4 } from "uuid";
import { usePathname } from "next/navigation";
import { AtSign, Moon, Sun } from "react-feather";
import Nav from "./Nav";
import { useState } from "react";

export const links = [
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
  const [open, setOpen] = useState(false);

  const toggleNav = () => setOpen((prev) => !prev);
  const closeNav = () => setOpen(false);

  return (
    <header>
      <Container className="flex items-center justify-between py-8">
        <a
          href="mailto:benedictumeozor@gmail.com"
          className="hidden md:flex items-center gap-1 z-10 text-highlight dark:text-highlight_dark hover:text-paragraph dark:hover:text-paragraph_dark"
        >
          <AtSign className="w-4" />
          <span className="block">benedictumeozor@gmail.com</span>
        </a>

        <Link
          href="/"
          className="md:hidden flex items-center gap-1 z-10 text-highlight dark:text-highlight_dark hover:text-paragraph dark:hover:text-paragraph_dark"
        >
          <AtSign className="w-4" />

          <span>Benedict</span>
        </Link>

        <button
          className={"md:hidden menu-bar " + (open ? "opened" : "")}
          onClick={toggleNav}
        >
          <div className="line-one"></div>
          <div className="line-two"></div>
        </button>

        <nav className="hidden md:block">
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
      {open && <Nav action={closeNav} />}
    </header>
  );
}
