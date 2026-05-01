"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MessageCircle, Send } from "lucide-react";
import { i18nConfig } from "@/config/i18n.config";

interface FooterProps {
  locale?: string;
  includeLocalePrefix?: boolean;
}

export default function Footer({ locale = "en", includeLocalePrefix = true }: FooterProps) {
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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-bold text-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg"></div>
              <span>Alive Studio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building world-class digital products for global teams and startups.
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href={getLocalizedLink("/services")} className="hover:text-white transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href={getLocalizedLink("/services")} className="hover:text-white transition">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href={getLocalizedLink("/services")} className="hover:text-white transition">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href={getLocalizedLink("/services")} className="hover:text-white transition">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href={getLocalizedLink("/")} className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href={getLocalizedLink("/team")} className="hover:text-white transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href={getLocalizedLink("/blog")} className="hover:text-white transition">
                  Insights
                </Link>
              </li>
              <li>
                <Link href={getLocalizedLink("/certifications")} className="hover:text-white transition">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href={getLocalizedLink("/case-studies")} className="hover:text-white transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href={getLocalizedLink("/contact")} className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@getalive.studio"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <Mail size={18} />
                <span className="text-sm break-all">hello@getalive.studio</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm"
              >
                <Send size={18} />
                Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2026 Alive Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href={getLocalizedLink("/privacy")} className="hover:text-white transition">
              Privacy
            </Link>
            <Link href={getLocalizedLink("/terms")} className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
