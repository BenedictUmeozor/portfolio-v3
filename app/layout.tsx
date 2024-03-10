import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image from "@/assets/boy1.jpeg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benedict Umeozor | Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={
          inter.className +
          " bg-body dark:bg-body_dark text-text dark:text-text_dark"
        }
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          backgroundColor: "#000",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
