import Container from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, Linkedin } from "react-feather";

export const metadata: Metadata = {
  title: "Benedict Umeozor | Resume",
};

type Props = {
  title: string;
  text: string;
};

function Section({ title, text }: Props) {
  return (
    <div className="mb-4 py-1">
      <div className="flex items-center gap-4">
        {/* <CheckCircle className="w-4 text-paragraph dark:text-paragraph_dark" /> */}
        <h3 className=" text-resume_title dark:text-resume_title_dark">
          {title}
        </h3>
        <div className="bg-work_heading dark:bg-work_heading_dark h-[1.5px] rounded-sm opacity-50 flex-1" />
      </div>
      <p className="mt-2 mb-3 text-[0.9rem] text-work_heading dark:text-work_heading_dark">
        {text}
      </p>
    </div>
  );
}

export default function Resume() {
  return (
    <section>
      <Container>
        <h2 className="text-work_heading dark:text-work_heading_dark mb-8 font-semibold">
          MY RESUME
        </h2>
        <div className="bg-card dark:bg-card_dark shadow-md rounded-sm p-4">
          <header className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Benedict Umeozor</h2>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/benedict-umeozor-014b70228/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs"
              >
                <Linkedin className="w-4 fill-paragraph dark:fill-paragraph_dark text-paragraph dark:text-paragraph_dark" />{" "}
                <span className="hidden md:block text-paragraph dark:text-paragraph_dark">
                  Linkedin
                </span>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs"
              >
                <Download className="w-4 text-paragraph dark:text-paragraph_dark" />{" "}
                <span className="hidden md:block text-paragraph dark:text-paragraph_dark">
                  Download
                </span>
              </a>
            </div>
          </header>
          <Section
            title="Frontend Web Developer"
            text="I'm a passionate frontend web developer who loves turning ideas
        into amazing digital experiences. I'm really good at creating
        smooth and user-friendly websites. I use the latest web tools and
        technologies to make websites that not only meet but surpass
        expectations. Let's work together to bring digital dreams to life!"
          />
          <Section
            title="Languages"
            text="HTML, CSS, JavaScript, TypeScript, PHP"
          />
          <Section
            title="Frameworks"
            text="Vue.js, Next.js, Laravel, Tailwind CSS, Material UI"
          />
          <Section
            title="Libraries"
            text="React.js, Redux Toolkit, Framer-motion, Axios, React-router, Node.js, Express, Mongoose."
          />
          <Section text="MySQL, Mongodb, Firebase" title="Databases" />
          <Section
            title="Familiar with"
            text="Git, SAAS, Best Practices, SEO"
          />
          <div className="mb-4">
            <div className="flex items-center gap-4">
              <h3 className=" text-resume_title dark:text-resume_title_dark">
                Experience
              </h3>
              <div className="bg-work_heading dark:bg-work_heading_dark h-[1.5px] rounded-sm opacity-50 flex-1" />
            </div>
            <div className="mt-2 text-[0.9rem] text-work_heading dark:text-work_heading_dark">
              <ul style={{ listStyleType: "disc" }} className="pl-8">
                <li>
                  <h4 className="text-paragraph dark:text-paragraph_dark italic mb-2">
                    Condueet Technologies - Frontend Developer
                  </h4>
                  <p className="mb-4 text-xs text-work_heading dark:text-work_heading_dark">
                    OCTOBER 2023 - PRESENT
                  </p>
                </li>
                <li>
                  <h4 className="text-paragraph dark:text-paragraph_dark italic mb-2">
                    EarlyBrite - Web Development Instructor
                  </h4>
                  <p className="mb-4 text-xs text-work_heading dark:text-work_heading_dark">
                    OCTOBER 2023 - PRESENT
                  </p>
                </li>
                <li>
                  <h4 className="text-paragraph dark:text-paragraph_dark italic mb-2">
                    Smarthub Academy - Web Development Instructor
                  </h4>
                  <p className="mb-4 text-xs text-work_heading dark:text-work_heading_dark">
                    NOVEMBER 2022 - OCTOBER 2023
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-4">
              <h3 className=" text-resume_title dark:text-resume_title_dark">
                Projects
              </h3>
              <div className="bg-work_heading dark:bg-work_heading_dark h-[1.5px] rounded-sm opacity-50 flex-1" />
            </div>
            <p className="mt-2 mb-3 text-[0.9rem] text-work_heading dark:text-work_heading_dark">
              See my projects{" "}
              <Link className="underline" href="/portfolio">
                here.
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
