"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/mockData";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function Portfolio() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.section {...fadeInUp}>
        <div className="space-y-4">
          <div className="relative inline-block">
            <h1 className="text-4xl font-bold text-(--color-text-primary)">
              Portfolio
            </h1>
            <div className="h-1 w-20 gradient-purple rounded-full mt-3" />
          </div>
          <p className="text-lg text-(--color-text-secondary)">
            Here is a collection of my most recent works.
          </p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group"
          >
            <div className="bg-(--color-bg-card) rounded-2xl overflow-hidden hover:bg-(--color-bg-card-hover) transition-all duration-300 shadow-md hover:shadow-xl">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-(--color-text-primary)">
                  {project.title}
                </h3>
                <p className="text-(--color-text-secondary) leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-sm rounded-full border border-(--color-border) text-(--color-text-secondary) hover:border-(--color-accent-primary) hover:text-(--color-accent-primary) transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-purple text-white font-medium hover:opacity-90 transition-opacity group/button"
                >
                  Visit {project.title}
                  <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}