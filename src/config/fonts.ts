import { Outfit as FontSans, Outfit as FontMono } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
