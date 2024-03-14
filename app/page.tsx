import type { Metadata } from "next";
import Container from "@/components/Container";
import { AtSign, Facebook, GitHub, Linkedin, Twitter } from "react-feather";
import PageLink from "./components/PageLink";

export const metadata: Metadata = {
  title: "Benedict Umeozor | Home",
};

export default function Home() {
  return (
    <div className=" flex items-center justify-center h-full max-md:text-center">
      <Container className="py-4">
        <div className="w-[80%] max-md:w-full">
          <h3 className=" text-paragraph dark:text-paragraph_dark">
            Hello there 👋 I am
          </h3>
          <h2 className="text-highlight dark:text-highlight_dark my-6 text-5xl font-bold max-md:text-3xl">
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
          <div className="icons flex items-center max-md:justify-center gap-4 mt-8">
            <PageLink href="" title="twitter">
              <Twitter className="w-4" />
            </PageLink>
            <PageLink href="" title="facebook">
              <Facebook className="w-4" />
            </PageLink>
            <PageLink href="" title="linkedin">
              <Linkedin className="w-4" />
            </PageLink>
            <PageLink href="" title="github">
              <GitHub className="w-4" />
            </PageLink>
            <PageLink href="mailto:benedictumeozor@gmail.com" title="email">
              <AtSign className="w-4 at-sign" />
            </PageLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
