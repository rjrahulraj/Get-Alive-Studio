"use client";

import { useState } from "react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const blogPosts = [
  {
    slug: "building-products-for-non-english-markets",
    title: "Building Products for Non-English Markets: A Complete Guide",
    excerpt:
      "Learn the key strategies and challenges when building tech products for emerging markets where English is not the primary language.",
    content:
      "Building tech products for non-English markets requires more than just translation. You need to understand local payment systems, compliance requirements, internet infrastructure, and cultural preferences. This guide covers everything you need to know.",
    author: "Ahmed Hassan",
    date: "2024-12-15",
    readTime: 8,
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    tags: ["localization", "global markets", "product strategy"],
  },
  {
    slug: "localization-vs-translation-what-you-need-to-know",
    title: "Localization vs Translation: What You Need to Know",
    excerpt:
      "Most companies confuse localization with translation. Here's why localization is critical for success in new markets.",
    content:
      "Translation is converting text from one language to another. Localization is adapting your entire product—UI, design, content, features—for a specific market. Learn the differences and why it matters for your business.",
    author: "Maria Rodriguez",
    date: "2024-12-10",
    readTime: 6,
    category: "Localization",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=400&fit=crop",
    tags: ["localization", "translation", "UX"],
  },
  {
    slug: "payment-methods-for-emerging-markets",
    title: "Payment Methods for Emerging Markets: A Developer's Guide",
    excerpt:
      "Credit cards are only 10% of payment methods in emerging markets. Here's what you need to support.",
    content:
      "Emerging markets have unique payment preferences. From local bank transfers to mobile money and digital wallets, supporting the right payment methods is crucial for conversion. This guide covers all major payment solutions.",
    author: "Priya Sharma",
    date: "2024-12-05",
    readTime: 7,
    category: "Technical",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    tags: ["payments", "fintech", "emerging markets"],
  },
  {
    slug: "seo-for-non-english-websites",
    title: "SEO for Non-English Websites: Best Practices",
    excerpt:
      "SEO strategies that work in English often fail in other languages. Here's what you need to do differently.",
    content:
      "Non-English SEO requires different strategies, tools, and approaches. From keyword research to link building, we cover everything you need to rank in multiple languages and markets.",
    author: "Ahmed Hassan",
    date: "2024-11-30",
    readTime: 9,
    category: "SEO",
    image:
      "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=400&fit=crop",
    tags: ["SEO", "multilingual", "ranking"],
  },
  {
    slug: "affordable-app-development-emerging-markets",
    title: "Building Affordable Apps for Emerging Markets",
    excerpt:
      "How to build high-quality apps without breaking the bank for emerging market audiences.",
    content:
      "Emerging markets often have different budget constraints and device types. Learn how to build optimized, affordable apps that work on older devices with slower internet.",
    author: "Priya Sharma",
    date: "2024-11-25",
    readTime: 7,
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    tags: ["mobile apps", "optimization", "budget"],
  },
  {
    slug: "trust-and-credibility-in-new-markets",
    title: "Building Trust and Credibility in New Markets",
    excerpt:
      "Trust is everything when entering a new market. Here's how to establish it quickly.",
    content:
      "New markets are skeptical of unknown brands. From testimonials to certifications, here's everything you can do to build trust and credibility when launching in a new region.",
    author: "Maria Rodriguez",
    date: "2024-11-20",
    readTime: 6,
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    tags: ["trust", "credibility", "marketing"],
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "Strategy", "Localization", "Technical", "SEO", "Development", "Marketing"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar></Navbar>
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-gray-50 via-white to-brand-50 flex items-center pt-20">
        <div className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Insights for Building <span className="text-brand-600">Global Products</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stories, strategies, and insights from building products for non-English markets around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-16">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      category === "All"
                        ? null
                        : category === selectedCategory
                          ? null
                          : category
                    )
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    (category === "All" && !selectedCategory) ||
                    category === selectedCategory
                      ? "bg-brand-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="max-w-4xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-400 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="grid md:grid-cols-3 gap-6 p-6 lg:p-8">
                      {/* Image */}
                      <div className="md:col-span-1 h-48 md:h-auto rounded-lg overflow-hidden bg-gray-200">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 flex flex-col justify-between space-y-4">
                        <div>
                          {/* Meta */}
                          <div className="flex flex-wrap gap-3 mb-4">
                            <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-semibold rounded-full">
                              {post.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <User size={16} />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </div>
                            <span>{post.readTime} min read</span>
                          </div>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all"
                          >
                            Read More <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No articles found. Try a different search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-8 bg-white rounded-2xl p-8 lg:p-12 border border-gray-200"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-gray-600">
                Get insights on building products for global markets delivered to your inbox.
              </p>
            </div>

            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button className="btn-primary">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <CTASection
            title="Ready to Build for Global Markets?"
            description="Let's discuss your product vision and how we can help you succeed internationally."
            primaryText="Start Your Project"
          />
        </div>
      </section>

      {/* Footer and FloatingWhatsApp are rendered by layout */}
    </>
  );
}
