import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image from "@/assets/boy1.jpeg";
import AnimatedCursor from "react-animated-cursor";
import { MousePositionProvider } from "@/contexts/MousePosition";
import MouseTracker from "@/components/MouseTracker";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const style = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${image.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    backgroundColor: "#000",
    zIndex: 1,
    width: "100%",
    backgroundAttachment: "fixed",
  };

  return (
    <html lang="en" className="dark">
      <body
        className={
          inter.className +
          " bg-body dark:bg-body_dark text-text dark:text-text_dark"
        }
        style={style}
      >
        <MousePositionProvider>
          <AnimatedCursor
            innerSize={7}
            outerSize={50}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "var(--cursor-color)",
            }}
            outerStyle={{
              border: "1px solid var(--cursor-color)",
            }}
          />
          <MouseTracker />
          <div className="body">
            <Header />
            <main className="pb-4">{children}</main>
            <Footer />
          </div>
        </MousePositionProvider>
      </body>
    </html>
  );
}
