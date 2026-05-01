"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-50 flex items-center">
      <div className="container-custom py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-brand-600 font-semibold text-lg">Welcome to Alive Studio</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Build Your Product, <span className="text-brand-600">Get Global</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                We help startups and enterprises build world-class digital products. From web apps to mobile solutions, we deliver innovation your users will love.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="btn-primary flex items-center gap-2">
                Start Your Project <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">Trusted by startups in 15+ countries</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">50+ Products Built</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-brand-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl p-12 text-white">
                <div className="space-y-6">
                  <div className="h-4 w-48 bg-white/20 rounded"></div>
                  <div className="space-y-3">
                    <div className="h-3 w-full bg-white/10 rounded"></div>
                    <div className="h-3 w-5/6 bg-white/10 rounded"></div>
                    <div className="h-3 w-4/5 bg-white/10 rounded"></div>
                  </div>
                  <div className="pt-6 space-y-2">
                    <div className="h-2 w-32 bg-white/20 rounded"></div>
                    <div className="h-2 w-40 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
