import { Navbar } from "@/components/landing/Navbar";
import Footer from "@/components/ui/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "Legal documents including privacy policy, terms of service, and code of conduct",
};

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} bg-[#F3F2F1] min-h-screen`}>
      <main>
        <Navbar />
        {children}
        <Footer footerText="Offering online arbitration & mediation services to parties who wish to have their disputes resolved outside of the courtroom" />
      </main>
    </div>
  );
}
