import Container from "@/components/Container";
import { projects } from "./projects";
import { ExternalLink, GitHub } from "react-feather";

export default function Portfolio() {
  return (
    <div>
      <Container>
        <h2 className="text-work_heading dark:text-work_heading_dark mb-8 font-semibold">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={
                "flex flex-col bg-card dark:bg-card_dark shadow-md rounded-sm project " +
                ((index + 1) % 2 === 0 ? "md:mt-12" : "md:mb-12")
              }
            >
              <h2 className="text-lg text-card_header dark:text-card_header_dark p-4">
                {project.title}
              </h2>
              <p className="flex-grow text-[0.9rem] text-card_description dark:caret-card_description_dark p-4">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 p-4">
                {project.tools.map((tool) => (
                  <div
                    key={tool}
                    className="text-xs text-work_heading dark:text-work_heading_dark"
                  >
                    {tool}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 p-4">
                <a
                  href={project.codeRepository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <GitHub className="w-4 text-card_stack dark:text-card_stack_dark" />
                  <span className="text-xs text-card_stack dark:text-card_stack_dark">
                    code
                  </span>
                </a>
                <a
                  href={project.liveUrl ?? "/portfolio"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="w-4 text-card_stack dark:text-card_stack_dark" />
                  <span className="text-xs text-card_stack dark:text-card_stack_dark">
                    live
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
