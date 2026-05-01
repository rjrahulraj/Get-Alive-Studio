"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Zap,
  Palette,
  Search,
  Globe,
  Brain,
  Wrench,
} from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

const services = [
  {
    title: "Web Development",
    description: "Modern, fast, and scalable web applications built with latest technologies.",
    icon: <Code2 size={32} />,
    features: ["React & Next.js", "Responsive Design", "High Performance", "SEO Optimized"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions for iOS and Android.",
    icon: <Smartphone size={32} />,
    features: ["React Native", "Native Development", "App Store Ready", "Offline Support"],
  },
  {
    title: "SaaS Development",
    description: "Build scalable SaaS platforms with modern architecture and best practices.",
    icon: <Zap size={32} />,
    features: ["Cloud Ready", "Multi-tenant", "Payment Integration", "Analytics"],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces that users love to interact with.",
    icon: <Palette size={32} />,
    features: ["Figma Design", "Prototyping", "Accessibility", "Design System"],
  },
  {
    title: "SEO Services",
    description: "Optimize your online presence to rank higher and attract more customers.",
    icon: <Search size={32} />,
    features: ["Keyword Research", "Technical SEO", "Content Strategy", "Monitoring"],
  },
  {
    title: "Localization",
    description: "Expand globally with localized content and multi-language support.",
    icon: <Globe size={32} />,
    features: ["Translation", "Cultural Adaptation", "Multi-language CMS", "Regional SEO"],
  },
  {
    title: "AI Integration",
    description: "Leverage AI to automate and enhance your product capabilities.",
    icon: <Brain size={32} />,
    features: ["ChatGPT Integration", "Machine Learning", "Computer Vision", "NLP"],
  },
  {
    title: "Maintenance & Support",
    description: "Keep your product running smoothly with dedicated support and updates.",
    icon: <Wrench size={32} />,
    features: ["24/7 Monitoring", "Bug Fixes", "Performance Tuning", "Security Updates"],
  },
];

const caseStudies = [
  {
    slug: "fintech-platform",
    title: "FinTech Platform for Asia",
    challenge: "Build a secure payment platform for emerging markets with legacy banking systems",
    result: "Processed $2M+ in transactions, 95% uptime, 50k+ users",
    region: "Southeast Asia",
    industry: "FinTech",
  },
  {
    slug: "ecommerce-brazil",
    title: "E-Commerce Platform Brazil",
    challenge: "Create a localized marketplace for Brazilian sellers with local payment methods",
    result: "3x sales growth, 100k+ monthly visitors",
    region: "Brazil",
    industry: "E-Commerce",
  },
  {
    slug: "saas-india",
    title: "HR SaaS for India",
    challenge: "Develop HR management tool with local compliance and tax features",
    result: "500+ companies, 100k+ employees managed",
    region: "India",
    industry: "HR Tech",
  },
];

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Founder & CEO",
    company: "TechVenture",
    content: "Alive Studio turned our vision into a beautiful, functional product. Their understanding of global markets is exceptional.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Product Manager",
    company: "StartupXYZ",
    content: "The team's attention to detail and commitment to quality is unmatched. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "IndiaStack",
    content: "Working with Alive Studio was the best decision for our product. They really understand our market.",
    rating: 5,
  },
];

interface HomeContentProps {
  locale: string;
}

export default function HomeContent({ locale }: HomeContentProps) {
  return (
    <>
      <Hero />

      {/* What We Do Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="section-heading mb-4">What We Do</h2>
            <p className="section-subheading">
              We help startups and enterprises build world-class digital products that drive growth and create lasting impact in emerging markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900">For Founders</h3>
              <p className="text-gray-600 leading-relaxed">
                Turn your idea into a market-ready product. We handle design, development, and deployment so you can focus on growth.
              </p>
              <ul className="space-y-2">
                {["MVP Development", "Product Strategy", "Market Expansion"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900">For Enterprises</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale your digital presence globally. We deliver enterprise-grade solutions with local market expertise.
              </p>
              <ul className="space-y-2">
                {["Custom Development", "System Integration", "Global Expansion"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="section-heading mb-4">Our Services</h2>
            <p className="section-subheading">
              Comprehensive digital solutions to build, launch, and scale your product
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Global Markets Matter */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="section-heading mb-4">Global Markets Are Different</h2>
                <p className="section-subheading">
                  Success in emerging markets requires more than just translation. It requires deep understanding of local culture, payment systems, regulations, and user behavior.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Support for local payment methods",
                  "Multi-currency and multi-language support",
                  "Compliance with local regulations",
                  "Optimized for slower internet",
                  "Cultural adaptation of design and UX",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-600">50+</p>
                    <p className="text-sm text-gray-600">Projects Delivered</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-600">7</p>
                    <p className="text-sm text-gray-600">Languages</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-600">15+</p>
                    <p className="text-sm text-gray-600">Countries</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-brand-600">100%</p>
                    <p className="text-sm text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="section-heading mb-4">Our Impact</h2>
            <p className="section-subheading">
              Real results from real projects in emerging markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} {...study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="section-heading mb-4">What Our Clients Say</h2>
            <p className="section-subheading">
              Trusted by founders and enterprises across emerging markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection locale={locale} />
    </>
  );
}
