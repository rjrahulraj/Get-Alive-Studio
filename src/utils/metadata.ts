import { Metadata } from 'next';

type Locale = 'en' | 'es' | 'pt' | 'hi' | 'id' | 'tr' | 'ar';

const metadata: Record<Locale, Metadata> = {
  en: {
    title: "Get Alive Studio | Global Digital Studio for Startups",
    description:
      "Award-winning digital studio building products for startups and enterprises worldwide. Web development, mobile apps, SaaS, UI/UX design, and AI integration.",
    keywords:
      "digital studio, web development, mobile apps, SaaS, design, AI, startup",
  },
  es: {
    title: "Get Alive Studio | Estudio Digital Global",
    description:
      "Estudio digital ganador de premios que construye productos para startups y empresas en todo el mundo.",
    keywords:
      "estudio digital, desarrollo web, aplicaciones móviles, SaaS, diseño, IA, startup",
  },
  pt: {
    title: "Get Alive Studio | Estúdio Digital Global",
    description:
      "Estúdio digital premiado construindo produtos para startups e empresas em todo o mundo.",
    keywords:
      "estúdio digital, desenvolvimento web, aplicativos móveis, SaaS, design, IA, startup",
  },
  hi: {
    title: "Get Alive Studio | वैश्विक डिजिटल स्टूडियो",
    description:
      "पुरस्कार विजेता डिजिटल स्टूडियो जो दुनिया भर में स्टार्टअप और एंटरप्राइज के लिए उत्पाद बनाता है।",
    keywords:
      "डिजिटल स्टूडियो, वेब विकास, मोबाइल ऐप्स, SaaS, डिज़ाइन, AI, स्टार्टअप",
  },
  id: {
    title: "Get Alive Studio | Studio Digital Global",
    description:
      "Studio digital pemenang penghargaan yang membangun produk untuk startup dan perusahaan di seluruh dunia.",
    keywords:
      "studio digital, pengembangan web, aplikasi mobile, SaaS, desain, AI, startup",
  },
  tr: {
    title: "Get Alive Studio | Küresel Dijital Stüdyo",
    description:
      "Dünya çapında startuplar ve işletmeler için ürün oluşturan ödül kazanan dijital stüdyo.",
    keywords:
      "dijital stüdyo, web geliştirme, mobil uygulamalar, SaaS, tasarım, AI, startup",
  },
  ar: {
    title: "Get Alive Studio | استوديو رقمي عالمي",
    description:
      "استوديو رقمي حائز على جوائز يبني منتجات للشركات الناشئة والمؤسسات في جميع أنحاء العالم.",
    keywords:
      "استوديو رقمي, تطوير ويب, تطبيقات محمولة, SaaS, تصميم, AI, startup",
  },
};

export const getMetadata = (locale: Locale): Metadata => {
  return {
    ...metadata[locale],
    authors: [{ name: "Get Alive Studio" }],
    openGraph: {
      type: "website",
      locale: locale === 'ar' ? 'ar_AR' : `${locale}_${locale.toUpperCase()}`,
      url: "https://getalive.studio",
      title: metadata[locale].title,
      description: metadata[locale].description,
      images: [
        {
          url: "https://getalive.studio/og-image.png",
          width: 1200,
          height: 630,
          alt: "Get Alive Studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Get Alive Studio",
      description: "Global Digital Studio for Startups & Enterprises",
    },
  };
};
