"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap, Download } from "lucide-react";
import { EXPERIENCES, EDUCATION_LIST } from "@/data/mockData";
import { formatDateRange } from "@/lib/utils";

const fadeInUp = {
   initial: { opacity: 0, y: 60 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true, margin: "-100px" },
   transition: { duration: 0.6 },
};

export default function Resume() {
   return (
      <div className="space-y-12 ">
         {/* Header */}
         <motion.section {...fadeInUp}>
            <div className="relative inline-block">
               <h1 className="text-4xl font-bold text-(--color-text-primary)">Resume</h1>
               <div className="h-1 w-20 gradient-purple rounded-full mt-3" />
            </div>
         </motion.section>

         {/* Profile */}
         <motion.section {...fadeInUp} className="space-y-6">
            <div className="relative inline-block">
               <h2 className="text-2xl font-bold text-(--color-text-primary)">PROFILE</h2>
               <div className="h-1 w-16 gradient-purple rounded-full mt-2" />
            </div>
            <div className="space-y-4">
               <p className="text-lg text-(--color-text-secondary) leading-relaxed">
                  As a Computer Science graduate from Adeleke University, I have built a strong foundation in software development and modern web technologies. I also hold a certification in Frontend
                  Web Development, strengthening my expertise in building scalable and user-focused applications.
               </p>
               <p className="text-lg text-(--color-text-secondary) leading-relaxed">
                  I specialize in developing modern, responsive, and visually engaging web applications using React.js, Next.js, TypeScript, and TailwindCSS, while also building robust backend systems with Node.js,
                  Express.js, TypeScript, MongoDB, and secure payment integrations such as Paystack and Monnify.
               </p>
               <p className="text-lg text-(--color-text-secondary) leading-relaxed">
                  In addition, my Executive Assistant and Virtual Assistant certifications from Udemy have enhanced my organizational, communication, and project coordination skills, allowing me to
                  collaborate effectively, manage tasks efficiently, and deliver high-quality digital solutions.
               </p>
            </div>
         </motion.section>

         {/* Professional Experience */}
         <motion.section {...fadeInUp} className="space-y-8">
            <div className="relative inline-block">
               <h2 className="text-2xl font-bold text-(--color-text-primary)">PROFESSIONAL EXPERIENCE</h2>
               <div className="h-1 w-16 gradient-purple rounded-full mt-2" />
            </div>

            <div className="space-y-8">
               {EXPERIENCES.map((exp, index) => (
                  <motion.div
                     key={exp.id}
                     initial={{ opacity: 0, x: -60 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.6, delay: index * 0.2 }}
                     className="relative pl-12 pb-8 border-l-2 border-(--color-border) last:border-l-0 last:pb-0"
                  >
                     {/* Timeline dot */}
                     <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full gradient-purple border-4 border-(--color-bg-primary)" />

                     <div className="bg-(--color-bg-card) rounded-2xl p-6 hover:bg-(--color-bg-card-hover) transition-colors">
                        <div className="flex items-start gap-6">
                           <div className="w-16 h-16 rounded-xl bg-(--color-bg-secondary) flex items-center justify-center flex-shrink-0 overflow-hidden">
                              <Image
                                 src={exp.logo}
                                 alt={`${exp.company} logo`}
                                 width={64}
                                 height={64}
                                 className="object-contain p-2"
                              />
                           </div>
                           <div className="flex-1 space-y-3">
                              <div className="flex items-start justify-between flex-wrap gap-4">
                                 <div>
                                    <h3 className="text-2xl font-bold text-(--color-text-primary)">{exp.company}</h3>
                                    <p className="text-lg text-(--color-accent-primary) italic">{exp.position}</p>
                                 </div>
                                 <div className="text-right text-sm text-(--color-text-muted)">
                                    <p>{formatDateRange(exp.startDate, exp.endDate)}</p>
                                    <p>{exp.location}</p>
                                 </div>
                              </div>
                              <ul className="space-y-2 list-disc list-inside text-(--color-text-secondary)">
                                 {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                       {resp}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </motion.section>

         {/* Education */}
         <motion.section {...fadeInUp} className="space-y-8">
            <div className="relative inline-block">
               <h2 className="text-2xl font-bold text-(--color-text-primary)">EDUCATION</h2>
               <div className="h-1 w-16 gradient-purple rounded-full mt-2" />
            </div>

            <div className="space-y-8">
               {EDUCATION_LIST.map((edu, index) => (
                  <motion.div
                     key={edu.id}
                     initial={{ opacity: 0, x: 60 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.6, delay: index * 0.2 }}
                     className="relative pl-12 pb-8 border-l-2 border-(--color-border) last:border-l-0 last:pb-0"
                  >
                     {/* Timeline dot */}
                     <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full gradient-purple border-4 border-(--color-bg-primary)" />

                     <div className="bg-(--color-bg-card) rounded-2xl p-6 hover:bg-(--color-bg-card-hover) transition-colors">
                        <div className="flex items-start gap-6">
                           <div className="w-16 h-16 rounded-xl bg-(--color-bg-secondary) flex items-center justify-center flex-shrink-0">
                              <GraduationCap className="w-8 h-8 text-(--color-accent-primary)" />
                           </div>
                           <div className="flex-1 space-y-2">
                              <div className="flex items-start justify-between flex-wrap gap-4">
                                 <div>
                                    <h3 className="text-2xl font-bold text-(--color-text-primary)">{edu.degree}</h3>
                                    <p className="text-lg text-(--color-text-secondary) italic">{edu.institution}</p>
                                 </div>
                                 <div className="text-right text-sm text-(--color-text-muted)">
                                    <p>{edu.startDate ? formatDateRange(edu.startDate, edu.endDate) : edu.endDate}</p>
                                    {edu.location && <p>{edu.location}</p>}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Download Resume Button */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="pt-8">
               <a
                  href="../Onifade Ololade.pdf"
                  download
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-purple text-white text-lg font-medium hover:opacity-90 transition-opacity group"
               >
                  Download my resume
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
               </a>
            </motion.div>
         </motion.section>
      </div>
   );
}
