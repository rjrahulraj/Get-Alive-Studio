"use client";

import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Ahmed Hassan",
    role: "Founder & CEO",
    bio: "Product entrepreneur with 10+ years building startups. Previously founded 2 companies that scaled to 7-figures. Passionate about non-English markets.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    expertise: ["Product Strategy", "Business Development", "Global Markets"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "ahmed@getalive.studio",
    },
  },
  {
    name: "Maria Rodriguez",
    role: "Head of Design",
    bio: "Design leader with experience at tech companies in 5 countries. Specializes in creating user experiences for diverse audiences.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    expertise: ["UI/UX Design", "Design Systems", "User Research"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "maria@getalive.studio",
    },
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Full-stack engineer and open-source contributor. Built scalable systems for millions of users. Loves clean code and modern tech.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    expertise: ["Full-Stack Development", "Scalability", "DevOps"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "priya@getalive.studio",
    },
  },
  {
    name: "Carlos Santos",
    role: "VP Business Development",
    bio: "10+ years in international business development. Strong connections across Latin America, Asia, and Africa.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    expertise: ["Business Development", "Market Expansion", "Partnerships"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "carlos@getalive.studio",
    },
  },
];

const values = [
  {
    title: "Global Mindset",
    description: "We think globally, act locally. Every product decision considers multiple markets.",
  },
  {
    title: "Quality First",
    description: "Excellence is non-negotiable. We deliver products we'd use ourselves.",
  },
  {
    title: "User Focused",
    description: "We obsess over user needs, especially those in underserved markets.",
  },
  {
    title: "Transparency",
    description: "We're honest about capabilities, timelines, and challenges.",
  },
  {
    title: "Innovation",
    description: "We constantly explore new technologies and approaches.",
  },
  {
    title: "Impact",
    description: "We measure success by the positive impact we create for our clients.",
  },
];

export default function Team() {
  return (
    <>
    <Navbar />
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
              Meet the <span className="text-brand-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Global experts united by a mission to build world-class products for emerging markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl h-96 bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-brand-600 hover:text-white transition"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-brand-600 hover:text-white transition"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-brand-600 hover:text-white transition"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-brand-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="section-heading mb-4">Our Values</h2>
            <p className="section-subheading">
              These principles guide every decision we make and every product we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-brand-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="section-heading mb-4">Our Story</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Alive Studio was founded in 2020 with a simple observation: most tech companies ignore non-English speaking markets. They build for the US, UK, and Western Europe, then half-heartedly translate everything.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We realized that 2 billion+ people in emerging markets want to build tech companies, hire developers, and launch products. But they couldn't find teams that understood their markets, spoke their languages, and cared about their success.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              So we built Alive Studio to be that team. We spent the first few years learning from markets across Latin America, Africa, South Asia, and Southeast Asia. Every product we built taught us something new about what these markets need.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we've helped 50+ companies build products that generate millions in revenue. But more importantly, we've proven that companies focused on non-English markets can be incredibly successful—if they understand what their users actually need.
            </p>

            <div className="bg-brand-50 border border-brand-200 rounded-xl p-8 mt-8">
              <p className="text-lg font-semibold text-gray-900">
                "We believe that the future of tech is global. And building for global markets isn't a nice-to-have feature—it's the only way to build products that matter."
              </p>
              <p className="text-gray-600 mt-4">— Ahmed Hassan, Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8 bg-white rounded-2xl p-8 lg:p-12 border border-gray-200"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">We're Growing</h2>
              <p className="text-gray-600">
                We're looking for talented developers, designers, and strategists who are passionate about building for global markets.
              </p>
            </div>

            <a href="mailto:careers@getalive.studio" className="btn-primary inline-block">
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <CTASection
            title="Ready to Work with Our Team?"
            description="Let's discuss your project and how we can help you succeed globally."
            primaryText="Schedule Consultation"
          />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
