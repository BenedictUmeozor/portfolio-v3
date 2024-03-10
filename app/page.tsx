import Container from "@/components/Container";
import {
  AtSign,
  ExternalLink,
  Facebook,
  GitHub,
  Linkedin,
  Twitter,
} from "react-feather";

export default function Home() {
  return (
    <div className=" flex items-center justify-center h-full">
      <Container className="py-4">
        <div className="w-[80%]">
          <h3 className=" text-paragraph dark:text-paragraph_dark">
            Hello there 👋 I am
          </h3>
          <h2 className="text-highlight dark:text-highlight_dark my-6 text-5xl font-bold">
            Benedict Umeozor
          </h2>
          <p className=" text-[0.9rem] text-paragraph dark:text-paragraph_dark">
            I&apos;m a{" "}
            <span className="text-highlight dark:text-highlight_dark">
              frontend web developer
            </span>{" "}
            who loves transforming concepts into{" "}
            <span className="text-highlight dark:text-highlight_dark">
              user-friendly web apps
            </span>
            . I thrive on utilizing cutting-edge{" "}
            <span className="text-highlight dark:text-highlight_dark">
              web tools, tech, and languages
            </span>{" "}
            to craft{" "}
            <span className="text-highlight dark:text-highlight_dark">
              exceptional user experiences
            </span>
            , whether for clients&apos; visions or{" "}
            <span className="text-highlight dark:text-highlight_dark">
              everyday solutions
            </span>
          </p>
          <div className="icons flex items-center gap-4 mt-4">
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
          </div>
        </div>
      </Container>
    </div>
  );
}
