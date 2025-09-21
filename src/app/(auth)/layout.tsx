import { Navbar } from "@/components/landing/Navbar";
import Footer from "@/components/ui/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} bg-[#F6F5F4]`}>
      <main>
        <Navbar />
        {children}
        <Footer footerText="Offering online arbitration & mediation services to parties who wish to have their disputes resolved outside of the courtroom" />
      </main>
    </div>
  );
}
