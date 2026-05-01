"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  challenge: string;
  result: string;
  region: string;
  industry: string;
  image?: string;
  index?: number;
}

export default function CaseStudyCard({
  slug,
  title,
  challenge,
  result,
  region,
  industry,
  image = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  index = 0,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-400 hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-semibold rounded-full">
            {industry}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
            {region}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>

        {/* Challenge & Result */}
        <div className="space-y-3 py-4 border-y border-gray-200">
          <div>
            <p className="text-xs font-semibold text-gray-600 uppercase">Challenge</p>
            <p className="text-sm text-gray-700 mt-1">{challenge}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-600 uppercase">Result</p>
            <p className="text-sm text-brand-600 font-semibold mt-1">{result}</p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/case-studies/${slug}`}
          className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all"
        >
          Read Case Study <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
