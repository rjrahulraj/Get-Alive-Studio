"use client";

import { motion } from "framer-motion";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  features,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-brand-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300 mb-6">
        <div className="text-brand-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-1.5 h-1.5 bg-brand-600 rounded-full"></div>
            </div>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
