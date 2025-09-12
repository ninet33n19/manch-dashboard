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
    <div className={`${inter.className} bg-[#F3F2F1]`}>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
