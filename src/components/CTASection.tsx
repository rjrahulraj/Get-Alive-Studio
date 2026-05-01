"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { i18nConfig } from "@/config/i18n.config";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  variant?: "primary" | "secondary";
  locale?: string;
  includeLocalePrefix?: boolean;
}

export default function CTASection({
  title,
  description,
  primaryText = "Start Your Project",
  secondaryText = "Chat on WhatsApp",
  variant = "primary",
  locale = "en",
  includeLocalePrefix = true,
}: CTASectionProps) {
  const pathname = usePathname();

  // Detect if current route has locale prefix
  const hasLocalePrefix = i18nConfig.locales.some((lang) => pathname?.startsWith(`/${lang}`));
  const shouldUseLocalePrefix = includeLocalePrefix && hasLocalePrefix;

  const getLocalizedLink = (path: string) => {
    if (shouldUseLocalePrefix) {
      return `/${locale}${path}`;
    }
    return path;
  };
  const bgClass =
    variant === "primary"
      ? "bg-gradient-to-br from-brand-600 to-brand-800 text-white"
      : "bg-gray-100 text-gray-900";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`py-16 rounded-2xl ${bgClass}`}
    >
      <div className="container-custom text-center space-y-8">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
          {description && <p className={variant === "primary" ? "text-brand-100" : "text-gray-600"}>{description}</p>}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={getLocalizedLink("/contact")}
            className={
              variant === "primary"
                ? "bg-white text-brand-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
                : "btn-primary"
            }
          >
            {primaryText}
          </Link>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={
              variant === "primary"
                ? "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center gap-2"
                : "btn-outline flex items-center gap-2"
            }
          >
            <MessageCircle size={20} /> {secondaryText}
          </a>
        </div>
      </div>
    </motion.section>
  );
}
