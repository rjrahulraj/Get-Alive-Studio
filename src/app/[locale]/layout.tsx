import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const isRTL = locale === "ar";

  return (
    <div className={`${inter.className} ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <FloatingWhatsApp />
    </div>
  );
}
