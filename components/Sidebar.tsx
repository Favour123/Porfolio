"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/mockData";
import SocialLink from "./SocialLink";

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-[380px] lg:sticky lg:top-8 lg:self-start"
    >
      <div className="bg-(--color-bg-card) rounded-2xl p-8 shadow-lg">
        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mb-6"
          >
            <div className="w-40 h-40 rounded-3xl bg-(--color-bg-secondary) flex items-center justify-center overflow-hidden shadow-xl">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-8xl"
              >
                💡
              </motion.div>
              <div className="absolute top-0 left-0 w-12 h-12 text-5xl">
                👤
              </div>
            </div>
            {/* Glow effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-3xl bg-(--color-accent-primary)/20 blur-xl -z-10"
            />
          </motion.div>

          <h1 className="text-3xl font-bold text-(--color-text-primary) mb-2">
            Onifade Ololade
          </h1>
          <p className="text-(--color-text-secondary) text-lg">
            Front-Engineer / Full-Stack Developer 
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-(--color-border) my-8" />

        {/* Social Links */}
        <div className="space-y-4">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.div
              key={link.platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            >
              <SocialLink {...link} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}