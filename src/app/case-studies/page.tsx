"use client";

import CTASection from "@/components/CTASection";
import CaseStudyCard from "@/components/CaseStudyCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const caseStudies = [
  {
    slug: "fintech-platform",
    title: "FinTech Platform for Asia",
    challenge: "Build a secure payment platform for emerging markets with legacy banking systems",
    result: "Processed $2M+ in transactions, 95% uptime, 50k+ users",
    region: "Southeast Asia",
    industry: "FinTech",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
  },
  {
    slug: "ecommerce-brazil",
    title: "E-Commerce Platform Brazil",
    challenge: "Create a localized marketplace for Brazilian sellers with local payment methods",
    result: "3x sales growth, 100k+ monthly visitors",
    region: "Brazil",
    industry: "E-Commerce",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=500&fit=crop",
  },
  {
    slug: "saas-india",
    title: "HR SaaS for India",
    challenge: "Develop HR management tool with local compliance and tax features",
    result: "500+ companies, 100k+ employees managed",
    region: "India",
    industry: "HR Tech",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
  },
  {
    slug: "logistics-mexico",
    title: "Logistics Platform Mexico",
    challenge: "Create delivery tracking system optimized for Mexican logistics network",
    result: "50k+ deliveries tracked, 98% accuracy",
    region: "Mexico",
    industry: "Logistics",
    image: "https://images.unsplash.com/photo-1553531088-189a46ba89f1?w=800&h=500&fit=crop",
  },
  {
    slug: "edtech-africa",
    title: "EdTech Platform Africa",
    challenge: "Build learning platform for offline-first usage in Africa",
    result: "100k+ students, 50+ schools using platform",
    region: "Africa",
    industry: "EdTech",
    image: "https://images.unsplash.com/photo-1522661335684-37898b6baf30?w=800&h=500&fit=crop",
  },
  {
    slug: "healthcare-se-asia",
    title: "Healthcare App Southeast Asia",
    challenge: "Develop telemedicine platform supporting local doctors and medications",
    result: "200k+ consultations, 4.9-star rating",
    region: "Southeast Asia",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
  },
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero Section */}
      <Navbar></Navbar>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-50 flex items-center pt-20">
        <div className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Real Results for <span className="text-brand-600">Global Companies</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how we've helped companies in different regions build products that solve real problems and generate revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} {...study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
          >
            {/* Image */}
            <div className="h-96 bg-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop"
                alt="Featured Case Study"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 space-y-8">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-brand-100 text-brand-700 font-semibold rounded-full text-sm">
                    FinTech
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full text-sm">
                    Southeast Asia
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Building Asia's Most Trusted Payment Platform
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A fintech startup wanted to revolutionize payments in Southeast Asia by creating a platform that connects local merchants with international buyers, while supporting legacy banking systems.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 py-8 border-y border-gray-200">
                <div>
                  <h3 className="font-bold text-gray-600 uppercase text-xs mb-2">
                    The Challenge
                  </h3>
                  <p className="text-gray-900 font-semibold">
                    Integrate with 10+ local payment gateways while maintaining security and compliance
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-600 uppercase text-xs mb-2">
                    Our Solution
                  </h3>
                  <p className="text-gray-900 font-semibold">
                    Built a microservices architecture with dedicated payment processors for each region
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-600 uppercase text-xs mb-2">
                    The Impact
                  </h3>
                  <p className="text-gray-900 font-semibold">
                    $2M+ in transactions processed, 95% uptime, 50k+ active users
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-gray-900">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "Kubernetes",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-brand-50 rounded-xl p-6 space-y-4">
                <h3 className="font-bold text-lg text-gray-900">Key Learnings</h3>
                <ul className="space-y-2">
                  {[
                    "Local payment methods are critical for market penetration",
                    "Compliance requirements vary significantly by region",
                    "Performance optimization is essential for emerging markets with slower connectivity",
                  ].map((learning) => (
                    <li key={learning} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading mb-4">Our Impact</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Products Built" },
              { number: "15+", label: "Countries Served" },
              { number: "$100M+", label: "Revenue Generated" },
              { number: "1000+", label: "Happy Clients" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-brand-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <CTASection
            title="Ready to Become Our Next Success Story?"
            description="Let's discuss your vision and create a roadmap to bring it to life."
            primaryText="Start Your Project"
          />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
