"use client";

import { useState } from "react";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Zap,
  Palette,
  Search,
  Globe,
  Brain,
  Wrench,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const servicesDetail = [
  {
    title: "Web Development",
    description: "Modern, fast, and scalable web applications built with latest technologies.",
    icon: <Code2 size={32} />,
    features: [
      "React & Next.js development",
      "Responsive and mobile-friendly",
      "High performance optimization",
      "SEO-friendly architecture",
      "API integration",
      "Database design",
    ],
    outcomes: [
      "30-50% faster page loads",
      "Improved SEO rankings",
      "Better user engagement",
      "Easier maintenance & updates",
    ],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions for iOS and Android.",
    icon: <Smartphone size={32} />,
    features: [
      "React Native development",
      "Native iOS (Swift) development",
      "Native Android (Kotlin) development",
      "App Store & Play Store deployment",
      "Push notifications",
      "Offline functionality",
    ],
    outcomes: [
      "Available on both platforms",
      "Better performance",
      "Native app experience",
      "Easy updates and maintenance",
    ],
  },
  {
    title: "SaaS Development",
    description: "Build scalable SaaS platforms with modern architecture and best practices.",
    icon: <Zap size={32} />,
    features: [
      "Multi-tenant architecture",
      "Scalable infrastructure",
      "Payment processing",
      "User authentication",
      "Analytics & reporting",
      "API-first design",
    ],
    outcomes: [
      "Recurring revenue model",
      "Scales with users",
      "Professional platform",
      "Easy integrations",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces that users love to interact with.",
    icon: <Palette size={32} />,
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "High-fidelity mockups",
      "Design systems",
      "Accessibility (WCAG)",
      "Usability testing",
    ],
    outcomes: [
      "Better user engagement",
      "Higher conversion rates",
      "Reduced support tickets",
      "Consistent branding",
    ],
  },
  {
    title: "SEO Services",
    description: "Optimize your online presence to rank higher and attract more customers.",
    icon: <Search size={32} />,
    features: [
      "Technical SEO audit",
      "Keyword research & strategy",
      "Content optimization",
      "Link building",
      "Performance optimization",
      "Monthly reporting",
    ],
    outcomes: [
      "Higher search rankings",
      "More organic traffic",
      "Better visibility",
      "Qualified leads",
    ],
  },
  {
    title: "Localization & Translation",
    description: "Expand globally with localized content and multi-language support.",
    icon: <Globe size={32} />,
    features: [
      "Professional translation",
      "Cultural adaptation",
      "Multi-language CMS",
      "Regional SEO",
      "Payment localization",
      "Regional compliance",
    ],
    outcomes: [
      "Access new markets",
      "Local user experience",
      "Increased revenue",
      "Better compliance",
    ],
  },
  {
    title: "AI Integration",
    description: "Leverage AI to automate and enhance your product capabilities.",
    icon: <Brain size={32} />,
    features: [
      "ChatGPT & LLM integration",
      "Machine learning models",
      "Computer vision",
      "Natural language processing",
      "Predictive analytics",
      "Automation workflows",
    ],
    outcomes: [
      "Automated tasks",
      "Better insights",
      "Personalization",
      "Competitive advantage",
    ],
  },
  {
    title: "Maintenance & Support",
    description: "Keep your product running smoothly with dedicated support and updates.",
    icon: <Wrench size={32} />,
    features: [
      "24/7 monitoring",
      "Bug fixes & patches",
      "Performance optimization",
      "Security updates",
      "New feature development",
      "Dedicated support team",
    ],
    outcomes: [
      "99.9% uptime",
      "Fast issue resolution",
      "Continuous improvement",
      "Peace of mind",
    ],
  },
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <>
    <Navbar></Navbar>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-50 flex items-center pt-20">
        <div className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Services Built for <span className="text-brand-600">Global Growth</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We offer a comprehensive suite of digital services to help you build, launch, and scale your product in global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesDetail.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Accordion */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-heading text-center mb-4">Service Details</h2>
            <p className="section-subheading text-center">
              Explore what each service includes and how it can benefit your project
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {servicesDetail.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedService(
                      expandedService === index ? null : index
                    )
                  }
                  className="w-full px-6 py-4 bg-white hover:bg-gray-50 transition flex items-start justify-between"
                >
                  <div className="flex items-start gap-4 text-left">
                    <div className="text-brand-600 mt-1">{service.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-gray-400 transition-transform flex-shrink-0 mt-1 ${
                      expandedService === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-6 border-t border-gray-200 bg-gray-50"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4">
                          What's Included
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4">
                          Expected Outcomes
                        </h4>
                        <ul className="space-y-3">
                          {service.outcomes.map((outcome) => (
                            <li
                              key={outcome}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="section-heading mb-12 text-center">Our Process</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We understand your goals, market, and vision",
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "Create strategy and roadmap for success",
                },
                {
                  step: "03",
                  title: "Execution",
                  description: "Build with excellence and attention to detail",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description: "Deploy and maintain your product long-term",
                },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-brand-600 mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <CTASection
            title="Ready to Get Started?"
            description="Let's discuss your project and create a custom plan for your success."
            primaryText="Schedule Consultation"
          />
        </div>
      </section>

      {/* Footer and FloatingWhatsApp are rendered by layout */}
    </>
  );
}
