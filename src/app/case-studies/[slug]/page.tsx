"use client";

import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { use } from "react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

// Sample case study data - in production, this would come from a CMS or database
const caseStudiesData: Record<string, any> = {
  "fintech-platform": {
    title: "FinTech Platform for Asia",
    industry: "FinTech",
    region: "Southeast Asia",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop",
    challenge:
      "A fintech startup wanted to revolutionize payments in Southeast Asia by creating a platform that connects local merchants with international buyers, while supporting legacy banking systems.",
    challengeDetails: [
      "Integrate with 10+ local payment gateways",
      "Maintain security and compliance across different regulations",
      "Support offline transactions in areas with limited connectivity",
      "Handle multiple currencies and real-time exchange rates",
    ],
    solution:
      "We built a microservices architecture with dedicated payment processors for each region.",
    solutionDetails: [
      "Microservices for payment processing",
      "Dedicated regional payment gateways",
      "Real-time transaction monitoring",
      "Advanced fraud detection system",
      "Multi-currency support",
      "Offline-first architecture",
    ],
    result:
      "The platform processed $2M+ in transactions, maintained 95% uptime, and reached 50k+ active users within the first year.",
    metrics: [
      { label: "Transactions Processed", value: "$2M+" },
      { label: "Uptime", value: "95%" },
      { label: "Active Users", value: "50k+" },
      { label: "Daily Volume", value: "$100k+" },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "Stripe",
    ],
    keyLearnings: [
      "Local payment methods are critical for market penetration",
      "Compliance requirements vary significantly by region",
      "Performance optimization is essential for emerging markets",
      "Trust badges and security certifications drive adoption",
    ],
  },
  // Add more case studies as needed
};

export default function CaseStudyDetail({ params }: CaseStudyPageProps) {
  const { slug } = use(params);
  const caseStudy = caseStudiesData[slug];

  if (!caseStudy) {
    return (
      <section className="min-h-screen flex items-center pt-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Case Study Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            This case study doesn't exist or has been moved.
          </p>
          <a href="/case-studies" className="btn-primary">
            Back to Case Studies
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero with Image */}
      <section className="h-96 bg-gray-900 overflow-hidden pt-20">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover opacity-60"
        />
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-brand-100 text-brand-700 font-semibold rounded-full text-sm">
                  {caseStudy.industry}
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full text-sm">
                  {caseStudy.region}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Three Column Layout */}
            <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-gray-200 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  The Challenge
                </h3>
                <ul className="space-y-3">
                  {caseStudy.challengeDetails.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Our Solution
                </h3>
                <p className="text-gray-700 font-semibold mb-3">
                  {caseStudy.solution}
                </p>
                <ul className="space-y-3">
                  {caseStudy.solutionDetails.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  The Impact
                </h3>
                <p className="text-gray-700 font-semibold mb-6">
                  {caseStudy.result}
                </p>
                <div className="space-y-3">
                  {caseStudy.metrics.map((metric: any) => (
                    <div key={metric.label}>
                      <p className="font-bold text-brand-600 text-lg">
                        {metric.value}
                      </p>
                      <p className="text-sm text-gray-600">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Key Learnings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-brand-50 rounded-xl p-8 border border-brand-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Learnings
              </h3>
              <ul className="space-y-4">
                {caseStudy.keyLearnings.map((learning: string) => (
                  <li key={learning} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm mt-1">
                      ✓
                    </div>
                    <span className="text-gray-800 font-medium">{learning}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <CTASection
            title="Ready to Create Your Success Story?"
            description="Let's discuss your project and how we can help you achieve similar results."
          />
        </div>
      </section>
    </>
  );
}
