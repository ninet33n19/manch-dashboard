import { Inter } from "next/font/google";
import { Fraunces } from "next/font/google";
import { EB_Garamond } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});