import Link from "next/link";
import { AtSign, Facebook, GitHub, Linkedin, Twitter } from "react-feather";
import { links } from "./Header";
import { usePathname } from "next/navigation";

type Props = {
  action: () => void;
};

export default function Nav({ action }: Props) {
  const pathname = usePathname();

  return (
    <nav
      className={
        "md:hidden z-[6] bg-btn_bg dark:bg-btn_dark absolute top-0 left-0 w-full h-screen mobile-nav "
      }
    >
      <ul className="pt-[7rem] mb-4">
        {links.map((link) => (
          <li key={link.id} className="block text-center my-6">
            <Link
              href={link.path}
              onClick={action}
              className={
                " text-base capitalize inline-block hover:text-highlight dark:hover:text-highlight_dark transform hover:-translate-y-1 " +
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
      <div className="mb-4">
        <h3 className="text-center mb-4 font-semibold text-xl">
          Connect with me
        </h3>
        <div className="icons flex items-center justify-center gap-4 mt-4">
          <a href="" target="_blank" rel="noopener noreferer">
            <Twitter className="w-4" />
          </a>
          <a href="" target="_blank" rel="noopener noreferer">
            <Facebook className="w-4" />
          </a>
          <a href="" target="_blank" rel="noopener noreferer">
            <Linkedin className="w-4" />
          </a>
          <a href="" target="_blank" rel="noopener noreferer">
            <GitHub className="w-4" />
          </a>
          <a
            href="mailto:benedictumeozor@gmail.com"
            target="_blank"
            rel="noopener noreferer"
          >
            <AtSign className="w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
