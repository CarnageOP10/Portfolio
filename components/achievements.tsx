"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, TrendingUp, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const achievements = [
    {
      id: 1,
      title: "Hackathons",
      value: "7",
      description: "Wins in AI-ML competitions",
      icon: <Zap className="h-10 w-10 text-neon-green" />,
      color: "from-neon-green/20 to-neon-green/5",
    },
    {
      id: 2,
      title: "Industry Projects",
      value: "10+",
      description: "AI-ML solutions deployed in production",
      icon: <TrendingUp className="h-10 w-10 text-neon-yellow" />,
      color: "from-neon-yellow/20 to-neon-yellow/5",
    },
    {
      id: 3,
      title: "Open Source",
      value: "Summer of Bitcoin",
      description: "Qualified for SoB",
      icon: <Users className="h-10 w-10 text-neon-lime" />,
      color: "from-neon-lime/20 to-neon-lime/5",
    },
    {
      id: 4,
      title: "Research Publications",
      value: "1(Pending)",
      description: "Papers published in top-tier conferences",
      icon: <Award className="h-10 w-10 text-neon-green" />,
      color: "from-neon-green/20 to-neon-green/5",
    }
    
  ]

  const keyAchievements = [
    {
      year: "2024",
      title: "Winner of ByteCraft and Analytica",
      organization: "Indian Institute of Information Technology, Nagpur",
      description: "Won 2 Hackathons within 36 hours. ByteCraft -> AIoT, Analytica -> Generative AI.",
    },
    {
      year: "2024",
      title: "PPI opportunity",
      organization: "Amazon",
      description: "Ranked 50th in Amazon ML Challenge 2024",
    },
    {
      year: "2024",
      title: "Runner Up",
      organization: "Indian Institute of Technology(BHU), Varanasi",
      description: "Vista - CNN competition at CodeFest’24",
    },
    {
      year: "2024",
      title: "1st Place",
      organization: "Indian Institute of Technology(BHU), Varanasi",
      description: "Technalytics - Data/Business Analytics competition at Technex’24",
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="achievements" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
          <span className="text-neon-green neon-text">Achievements</span>
        </h2>
        <p className="text-gray-400 max-w-3xl">
          Recognition and milestones from my journey in Deep learning and Artificial Intelligence.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {achievements.map((item) => (
          <motion.div key={item.id} variants={item} whileHover={{ scale: 1.05 }} className="spotify-card">
            <Card className="bg-dark-card border border-gray-800 hover:border-neon-green/30 transition-all h-full overflow-hidden">
              <CardContent className="p-6">
                <motion.div
                  className={`p-3 rounded-lg bg-gradient-to-br ${item.color} mb-4 inline-block`}
                  whileHover={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-medium text-gray-300 mb-1">{item.title}</h3>
                <motion.div
                  className="text-3xl font-bold text-neon-green neon-text mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {item.value}
                </motion.div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative">
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-green to-neon-yellow hidden md:block"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 1.5 }}
        />

        <div className="space-y-12 relative">
          {keyAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              className="md:pl-20 relative spotify-card"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="hidden md:block absolute left-7 top-1 w-3 h-3 rounded-full bg-neon-green transform -translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.5 }}
              />

              <div className="bg-dark-card border border-gray-800 rounded-lg p-6 hover:border-neon-green/30 transition-all">
                <motion.div
                  className="text-sm text-neon-green font-medium mb-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {achievement.year}
                </motion.div>
                <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                <div className="text-neon-yellow mb-3">{achievement.organization}</div>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

