"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Server } from "lucide-react";
import { SERVICES } from "@/data/mockData";

const iconMap = {
  Code2,
  Briefcase,
  Server,
} as const;

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section {...fadeInUp} className="space-y-6">
        <div className="space-y-4">
          <p className="text-lg text-(--color-text-secondary) leading-relaxed">
            Hello, I&apos;m Favour, a passionate software developer and lifelong learner from Lagos, Nigeria. I specialize in transforming beautiful designs into responsive, adaptable, and engaging websites.
          </p>
          <p className="text-lg text-(--color-text-secondary) leading-relaxed">
            My goal is to create the website you envision combining functionality with user-friendly design, without sacrificing aesthetics or interactivity.
          </p>
        </div>
      </motion.section>

      {/* What I'm Doing Section */}
      <motion.section {...fadeInUp} className="space-y-8">
        <div className="relative inline-block">
          <h2 className="text-2xl font-bold text-(--color-text-primary)">
            WHAT I&apos;M DOING
          </h2>
          <div className="h-1 w-16 gradient-purple rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-(--color-bg-card) rounded-2xl p-8 h-full hover:bg-(--color-bg-card-hover) transition-all duration-300 shadow-md hover:shadow-xl">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-xl gradient-purple flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {(() => {
                      const IconComponent = iconMap[service.icon as keyof typeof iconMap] ?? Code2;
                      return <IconComponent className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-(--color-text-primary)">
                      {service.title}
                    </h3>
                    <p className="text-(--color-text-secondary) leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}