"use client";

import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Award, CheckCircle, Star, Users } from "lucide-react";

const certifications = [
  {
    name: "ISO 27001",
    category: "Security",
    description: "Information Security Management certification",
    icon: "🔒",
    year: 2023,
  },
  {
    name: "SOC 2 Type II",
    category: "Compliance",
    description: "Security, availability, and confidentiality controls",
    icon: "✓",
    year: 2024,
  },
  {
    name: "Google Partner",
    category: "Technology",
    description: "Certified Google Cloud Partner",
    icon: "☁️",
    year: 2023,
  },
  {
    name: "AWS Advanced Partner",
    category: "Technology",
    description: "AWS Partner Network Advanced Tier",
    icon: "⚙️",
    year: 2024,
  },
  {
    name: "Clutch Top Agency",
    category: "Recognition",
    description: "Top-rated agency on Clutch.co",
    icon: "⭐",
    year: 2024,
  },
  {
    name: "GoodFirms Leader",
    category: "Recognition",
    description: "Recognized as a leader on GoodFirms",
    icon: "👥",
    year: 2024,
  },
];

const partnerships = [
  {
    name: "Stripe",
    description: "Payment processing partner",
    logo: "💳",
  },
  {
    name: "MongoDB",
    description: "Database technology partner",
    logo: "🗄️",
  },
  {
    name: "Vercel",
    description: "Hosting and deployment partner",
    logo: "▲",
  },
  {
    name: "Figma",
    description: "Design tools partner",
    logo: "🎨",
  },
];

const stats = [
  {
    icon: <Award size={32} />,
    number: "10+",
    label: "Certifications",
  },
  {
    icon: <Users size={32} />,
    number: "50+",
    label: "Products Launched",
  },
  {
    icon: <Star size={32} />,
    number: "4.9/5",
    label: "Average Rating",
  },
  {
    icon: <CheckCircle size={32} />,
    number: "100%",
    label: "On-Time Delivery",
  },
];

export default function Certifications() {
  return (
    <>
      {/* Hero Section */}
      <Navbar></Navbar>

      <section className="min-h-[60vh] bg-gradient-to-br from-gray-50 via-white to-brand-50 flex items-center pt-20">
        <div className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Trust & <span className="text-brand-600">Credibility</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're certified, recognized, and trusted by leading organizations worldwide. Here's proof of our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-brand-600 flex justify-center mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="section-heading mb-4">Certifications & Compliance</h2>
            <p className="section-subheading">
              We maintain industry-leading certifications to ensure security, compliance, and quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-brand-400 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                  <p className="text-sm font-semibold text-brand-600">{cert.category}</p>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                  <p className="text-xs text-gray-500 pt-2">Certified {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="section-heading mb-4">Technology Partnerships</h2>
            <p className="section-subheading">
              We partner with industry leaders to deliver best-in-class solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center hover:border-brand-400 hover:bg-brand-50 transition-all"
              >
                <div className="text-5xl mb-4">{partner.logo}</div>
                <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="section-heading text-center mb-12">Recognition & Awards</h2>

            <div className="space-y-6">
              {[
                {
                  year: "2024",
                  title: "Best Digital Agency for Emerging Markets",
                  organization: "Global Tech Awards",
                },
                {
                  year: "2023",
                  title: "Top 10 SaaS Development Companies",
                  organization: "TechCrunch",
                },
                {
                  year: "2023",
                  title: "Best Place to Work",
                  organization: "Great Place to Work",
                },
              ].map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 border border-gray-200 flex items-start gap-4"
                >
                  <div className="text-3xl">🏆</div>
                  <div>
                    <p className="text-sm font-semibold text-brand-600">{award.year}</p>
                    <h3 className="font-bold text-gray-900 text-lg">{award.title}</h3>
                    <p className="text-gray-600">{award.organization}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Security is Not Optional
              </h2>

              <div className="space-y-4">
                {[
                  "End-to-end encryption for all data transfers",
                  "Regular security audits and penetration testing",
                  "GDPR, CCPA, and local compliance certified",
                  "99.99% uptime guarantee with SLA",
                  "Automated backups and disaster recovery",
                  "24/7 security monitoring and incident response",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Security Practices</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Data Protection</p>
                  <p className="text-brand-100 text-sm">
                    All data encrypted at rest and in transit using industry standards.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Access Control</p>
                  <p className="text-brand-100 text-sm">
                    Role-based access control with multi-factor authentication.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Compliance</p>
                  <p className="text-brand-100 text-sm">
                    Regular audits ensure compliance with all applicable regulations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <CTASection
            title="Ready to Partner with a Trusted Agency?"
            description="Let's discuss your project and how we can help you build with confidence."
            primaryText="Schedule Consultation"
          />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
