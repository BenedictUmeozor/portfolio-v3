import Container from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Benedict Umeozor | Contact",
};

export default function Contact() {
  return (
    <div className="h-full">
      <Container className="py-4 w-full grid grid-cols-2 gap-8 max-md:grid-cols-1">
        <div>
          <h2 className="text-highlight dark:text-highlight_dark text-3xl">
            Love to hear from you <br />
            Get in touch 👋
          </h2>
        </div>
        <div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full h-[50px] bg-transparent text-[0.9rem]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Your Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-[50px] bg-transparent text-[0.9rem]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Your Message*
              </label>

              <textarea
                name="message"
                id="message"
                rows={7}
                className="w-full bg-transparent text-[0.9rem]"
              ></textarea>
            </div>
            <button className="w-full h-[50px] bg-transparent text-[0.9rem] hover:shadow-xl">
              Send Message
            </button>
          </form>
        </div>
      </Container>
      <Container>
        <div className="md:hidden flex items-center justify-center gap-4 mt-8">
          <Link
            href="/portfolio"
            className="text-[0.9rem] bg-btn dark:bg-btn_dark px-4 py-2 rounded text-paragraph dark:text-paragraph_dark hover:scale-95"
          >
            Portfolio
          </Link>
          <Link
            href="/resume"
            className="text-[0.9rem] bg-btn dark:bg-btn_dark px-4 py-2 rounded text-paragraph dark:text-paragraph_dark hover:scale-95"
          >
            Resume
          </Link>
        </div>
      </Container>
    </div>
  );
}
