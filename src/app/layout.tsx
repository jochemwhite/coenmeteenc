import type { Metadata } from "next";
import { Inter, Play } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const play = Play({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-play" });

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
      <body className={`${inter.className} ${play.variable} `}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
