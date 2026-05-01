"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { i18nConfig } from "@/config/i18n.config";

interface NavbarProps {
  locale?: string;
  includeLocalePrefix?: boolean;
}

export default function Navbar({ locale = "en", includeLocalePrefix = true }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect if current route has locale prefix
  const hasLocalePrefix = i18nConfig.locales.some((lang) => pathname?.startsWith(`/${lang}`));
  const shouldUseLocalePrefix = includeLocalePrefix && hasLocalePrefix;

  const getLocalizedLink = (path: string) => {
    if (shouldUseLocalePrefix) {
      return `/${locale}${path}`;
    }
    return path;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Insights" },
    { href: "/team", label: "Team" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={getLocalizedLink("/")} className="flex items-center space-x-2 font-bold text-2xl">
          <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-brand-800 rounded-lg"></div>
          <span className="hidden sm:inline text-gray-900">Alive Studio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getLocalizedLink(link.href)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link href={getLocalizedLink("/contact")} className="btn-primary">
            Get Started
          </Link>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Globe size={18} />
              <span className="text-sm font-medium uppercase">{locale}</span>
            </button>
            {showLanguages && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                {i18nConfig.locales.map((lang) => {
                  let href = "/";
                  if (shouldUseLocalePrefix) {
                    // Remove old locale and add new one
                    const pathWithoutLocale = pathname?.replace(/^\/[a-z]{2}/, "") || "/";
                    href = `/${lang}${pathWithoutLocale}`;
                  } else {
                    // Stay on root URL (no locale prefix)
                    const pathWithoutLocale = pathname?.replace(/^\/[a-z]{2}/, "") || "/";
                    href = pathWithoutLocale;
                  }
                  return (
                    <Link
                      key={lang}
                      href={href}
                      className={`block px-4 py-2 hover:bg-gray-50 transition ${
                        locale === lang ? "bg-brand-50 text-brand-600 font-medium" : "text-gray-700"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getLocalizedLink(link.href)}
                className="block text-gray-600 hover:text-gray-900 transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={getLocalizedLink("/contact")}
              className="btn-primary block text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
