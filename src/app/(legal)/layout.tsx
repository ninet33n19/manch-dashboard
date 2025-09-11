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
    <div className={inter.className}>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
