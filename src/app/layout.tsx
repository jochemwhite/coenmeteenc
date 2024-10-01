import type { Metadata } from "next";
import { Inter, Play, Josefin_Sans } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModalProvider } from "@/providers/modal-provider";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });
const play = Play({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-play" });
const josefin = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin" });

export const metadata: Metadata = {
  title: "CoenMetEenC | Home",
  description: "Audiovisueel specialist en 2D-animator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${play.variable} ${josefin.variable} `}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ModalProvider>
            <Header />
            {children}
            <Footer />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
