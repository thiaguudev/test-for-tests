import { Signika as FontSans, Outfit as FontMono } from "next/font/google";

export const fontSans = FontSans({ subsets: ["latin"] });

export const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
