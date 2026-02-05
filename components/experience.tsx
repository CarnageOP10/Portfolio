"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const professionalJourney = [
    {
      period: "July 2026",
      title: "Applied Scientist",
      organization: "Amazon",
      location: "Bengaluru, KA, India",
      description: "Joining full-time to work on large-scale machine learning problems and algorithmic optimizations.",
      status: "upcoming"
    },
    {
      period: "December 2025 - Present",
      title: "AI Engineering Intern",
      organization: "Vibe-Engine AI",
      location: "USA (Remote)",
      description: "Focusing on generative AI workflows, LLM integration, and developing scalable AI solutions for startup environments.",
      status: "current"
    },
    {
      period: "June 2025 - November 2025",
      title: "Applied Scientist Intern",
      organization: "Amazon",
      location: "Bangalore, KA, India",
      description: "Worked on deep learning models and data-driven solutions within the Amazon ecosystem during my summer internship.",
      status: "completed"
    }
  ]

  return (
    <section id="experience" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
          <span className="text-neon-green neon-text">Professional Experience</span>
        </h2>
        <p className="text-gray-400 max-w-3xl">
          My journey from internships to full-time roles in Applied Science and AI Engineering.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Vertical Line */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green via-neon-yellow to-transparent hidden md:block"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 1.5 }}
        />

        <div className="space-y-12 relative">
          {professionalJourney.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              className="md:pl-20 relative"
              whileHover={{ x: 5 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`hidden md:block absolute left-7 top-1 w-3 h-3 rounded-full transform -translate-x-1/2 z-10 ${
                  job.status === 'upcoming' ? 'bg-neon-yellow shadow-[0_0_10px_#facc15]' : 'bg-neon-green'
                }`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.5 }}
              />

              <div className="bg-dark-card border border-gray-800 rounded-lg p-6 hover:border-neon-green/30 transition-all shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <motion.div
                      className={`text-sm font-bold mb-1 uppercase tracking-wider ${
                        job.status === 'upcoming' ? 'text-neon-yellow' : 'text-neon-green'
                      }`}
                    >
                      {job.period}
                    </motion.div>
                    <h3 className="text-2xl font-black text-white uppercase italic">{job.title}</h3>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <div className="text-gray-300 font-bold text-lg">{job.organization}</div>
                    <div className="text-gray-500 text-sm font-medium">{job.location}</div>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed border-l-2 border-gray-800 pl-4 italic">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}