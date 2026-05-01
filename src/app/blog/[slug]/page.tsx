"use client";

import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { use } from "react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Blog posts data
const blogPostsData: Record<string, any> = {
  "building-products-for-non-english-markets": {
    title: "Building Products for Non-English Markets: A Complete Guide",
    author: "Ahmed Hassan",
    date: "2024-12-15",
    readTime: 8,
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    excerpt:
      "Learn the key strategies and challenges when building tech products for emerging markets where English is not the primary language.",
    content: `
Building tech products for non-English markets requires more than just translation. You need to understand local payment systems, compliance requirements, internet infrastructure, and cultural preferences.

## The Opportunity

The non-English speaking market is HUGE. We're talking about 2 billion+ potential customers who prefer to use products in their native language. Yet, most tech companies ignore this opportunity because they assume English is good enough.

It's not. And the companies that understand this gain a significant competitive advantage.

## Key Challenges

### 1. Language & Localization
Translation is NOT localization. You can't just run your content through Google Translate and expect it to work. You need native speakers who understand your product.

### 2. Payment Methods
Most people in emerging markets don't use credit cards. They use:
- Mobile money
- Bank transfers
- Cash on delivery
- Digital wallets

If you only support Stripe/PayPal, you're missing 80% of your potential customers.

### 3. Internet Infrastructure
Not everyone has 100Mbps fiber internet. Your product needs to:
- Work on 3G/4G
- Have small bundle sizes
- Support offline functionality
- Optimize images aggressively

### 4. Compliance & Regulations
Every country has different:
- Data protection laws
- Tax requirements
- Financial regulations
- Consumer protection rules

You need to understand these BEFORE launching.

### 5. Cultural Differences
What works in the US might not work in Brazil, India, or Indonesia. Design, colors, messaging, and workflows need to be culturally adapted.

## Solutions

1. **Hire locally** - Get native speakers and local team members
2. **Test with real users** - Talk to actual users in your target market
3. **Support local payments** - Integrate with regional payment providers
4. **Optimize for slow internet** - Compress, cache, and minimize
5. **Understand regulations** - Consult with local lawyers and compliance experts
6. **Iterate based on feedback** - Be ready to pivot your approach

## Conclusion

Building for non-English markets is a massive opportunity. The companies that get it right will have a huge advantage in the next decade.

The question is: are you ready to build for the world?
    `,
    tags: ["localization", "global markets", "product strategy"],
  },
  "localization-vs-translation-what-you-need-to-know": {
    title: "Localization vs Translation: What You Need to Know",
    author: "Maria Rodriguez",
    date: "2024-12-10",
    readTime: 6,
    category: "Localization",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=600&fit=crop",
    excerpt:
      "Most companies confuse localization with translation. Here's why localization is critical for success in new markets.",
    content: `
Translation is converting text from one language to another. Localization is adapting your entire product—UI, design, content, features—for a specific market.

Most companies get this wrong, and it costs them millions.

## Translation vs Localization

### Translation
- Word-for-word conversion
- Faster and cheaper
- Often misses context
- Creates awkward user experiences

Example: A button that says "Submit" in English might need different text in other languages because the space is different or the word doesn't convey the same meaning.

### Localization
- Full adaptation for a market
- Includes UI, design, copy, features
- Slower and more expensive
- Creates natural user experiences

Example: A payment form that works perfectly in the US might need to be completely redesigned for India because the address formats are different.

## Why It Matters

Users judge products in milliseconds. If something feels "off" or confusing, they leave. Localization ensures your product feels native to users in different markets.

Companies that localize well see:
- 30-50% higher conversion rates
- Better user engagement
- Lower support costs
- Stronger brand loyalty

Companies that just translate see:
- Confused users
- High bounce rates
- Bad reviews
- Slow growth

## How to Localize Properly

1. **Hire native speakers** - They understand cultural nuances
2. **Test with real users** - Get feedback from actual market users
3. **Adapt UI/UX** - Text length varies by language
4. **Consider design** - Colors, symbols, and layouts have different meanings
5. **Check compliance** - Laws vary by country
6. **Iterate** - Be ready to make changes based on feedback

## Conclusion

Localization is not a cost center. It's an investment in market penetration. Companies that localize properly win in global markets.
    `,
    tags: ["localization", "translation", "UX"],
  },
};

export default function BlogDetail({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <section className="min-h-screen flex items-center pt-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">This article doesn't exist or has been moved.</p>
          <Link href="/blog" className="btn-primary inline-block">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Image */}
      <section className="h-96 bg-gray-900 overflow-hidden pt-20">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-70"
        />
      </section>

      {/* Article */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all mb-6"
              >
                <ArrowLeft size={18} /> Back to Blog
              </Link>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 py-6 border-y border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <User size={18} />
                  {post.author}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="text-gray-600">{post.readTime} min read</div>
                <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {post.content.split("\n").map((paragraph: string, index: number) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-bold text-gray-900 mt-8 mb-4"
                    >
                      {paragraph.replace("##", "").trim()}
                    </h2>
                  );
                }
                if (paragraph.startsWith("###")) {
                  return (
                    <h3
                      key={index}
                      className="text-2xl font-bold text-gray-900 mt-6 mb-3"
                    >
                      {paragraph.replace("###", "").trim()}
                    </h3>
                  );
                }
                if (paragraph.startsWith("-")) {
                  return (
                    <li key={index} className="text-gray-700 leading-relaxed">
                      {paragraph.replace("-", "").trim()}
                    </li>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed text-lg mb-4"
                    >
                      {paragraph.trim()}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            {/* Tags */}
            <div className="mb-12 py-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-600 mb-3">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 py-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-600">Share:</p>
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-100 transition">
                <Share2 size={18} className="text-gray-600" />
              </button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-heading mb-4">More Articles</h2>
            <p className="text-gray-600">Continue reading about global product building</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {["building-products-for-non-english-markets", "localization-vs-translation-what-you-need-to-know"]
              .filter((s) => s !== slug)
              .map((related) => (
                <Link
                  key={related}
                  href={`/blog/${related}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-brand-400 transition"
                >
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={blogPostsData[related]?.image || ""}
                      alt={blogPostsData[related]?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition">
                      {blogPostsData[related]?.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {blogPostsData[related]?.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <CTASection
            title="Ready to Start Your Global Project?"
            description="Let's discuss your vision and create a roadmap to build for global markets."
            primaryText="Schedule Consultation"
          />
        </div>
      </section>
    </>
  );
}
