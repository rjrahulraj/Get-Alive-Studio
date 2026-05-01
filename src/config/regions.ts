// Configuration for multi-language and region-specific support

export const SUPPORTED_LANGUAGES = {
  en: "English",
  es: "Español",
  pt: "Português",
  hi: "हिन्दी",
  id: "Bahasa Indonesia",
  tr: "Türkçe",
  ar: "العربية",
};

export const SUPPORTED_REGIONS = [
  {
    id: "global",
    name: "Global",
    slug: "global",
    description: "Global markets",
    currency: "USD",
    languages: ["en"],
  },
  {
    id: "latam",
    name: "Latin America",
    slug: "latin-america",
    description: "Mexico, Brazil, Colombia, Argentina",
    currency: "USD",
    languages: ["es", "pt"],
  },
  {
    id: "india",
    name: "South Asia",
    slug: "south-asia",
    description: "India, Pakistan, Bangladesh",
    currency: "INR",
    languages: ["en", "hi"],
  },
  {
    id: "sea",
    name: "Southeast Asia",
    slug: "southeast-asia",
    description: "Indonesia, Thailand, Vietnam, Philippines",
    currency: "USD",
    languages: ["en", "id"],
  },
  {
    id: "mena",
    name: "MENA",
    slug: "middle-east-africa",
    description: "Middle East & North Africa",
    currency: "USD",
    languages: ["en", "ar"],
  },
  {
    id: "turkey",
    name: "Turkey",
    slug: "turkey",
    description: "Turkey & Central Asia",
    currency: "TRY",
    languages: ["tr", "en"],
  },
];

export const REGION_CONTACT_INFO: Record<string, any> = {
  global: {
    email: "hello@getalive.studio",
    whatsapp: "+1234567890",
    telegram: "@getalive_studio",
  },
  latam: {
    email: "latam@getalive.studio",
    whatsapp: "+55111234567", // Brazil
    telegram: "@getalive_latam",
  },
  india: {
    email: "india@getalive.studio",
    whatsapp: "+919876543210",
    telegram: "@getalive_india",
  },
  sea: {
    email: "asia@getalive.studio",
    whatsapp: "+6281234567890", // Indonesia
    telegram: "@getalive_asia",
  },
  mena: {
    email: "mena@getalive.studio",
    whatsapp: "+966501234567", // Saudi Arabia
    telegram: "@getalive_mena",
  },
  turkey: {
    email: "turkey@getalive.studio",
    whatsapp: "+905551234567",
    telegram: "@getalive_turkey",
  },
};

export const REGION_PAYMENT_METHODS: Record<string, string[]> = {
  global: ["credit_card", "bank_transfer", "paypal"],
  latam: ["credit_card", "boleto", "pix", "mercado_pago"],
  india: ["upi", "bank_transfer", "razorpay", "paytm"],
  sea: ["credit_card", "bank_transfer", "gcash", "dana", "ovo"],
  mena: ["credit_card", "bank_transfer", "apple_pay"],
  turkey: ["credit_card", "bank_transfer", "iyzico"],
};

export const TIMEZONE_BY_REGION: Record<string, string> = {
  global: "UTC",
  latam: "America/Sao_Paulo",
  india: "Asia/Kolkata",
  sea: "Asia/Jakarta",
  mena: "Asia/Riyadh",
  turkey: "Europe/Istanbul",
};
