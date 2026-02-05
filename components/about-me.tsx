"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Terminal, Brain, Cpu, Database, Code, Sparkles, Download, Mail, FileUser } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutMe() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Applied AI ML Researcher and Engineer"
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const skills = [
    { name: "Machine Learning", icon: <Cpu className="h-5 w-5 text-neon-green" /> },
    { name: "Deep Learning", icon: <Brain className="h-5 w-5 text-neon-yellow" /> },
    { name: "Generative AI", icon: <Sparkles className="h-5 w-5 text-neon-lime" /> },
    { name: "NLP", icon: <Database className="h-5 w-5 text-neon-green" /> },
    { name: "Data Science", icon: <Code className="h-5 w-5 text-neon-yellow" /> },
    { name: "Internet of Things", icon: <Terminal className="h-5 w-5 text-neon-lime" /> },
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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
  }

  return (
    <section id="about" className="py-20 min-h-screen flex items-center" ref={ref}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="space-y-6"
        >
          <div>
            <motion.p
              className="text-sm uppercase tracking-wider text-gray-400 mb-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-neon-green neon-text display-text">Parth Singh</span>
            </motion.h1>
            <div className="h-8 md:h-10">
              <h2 className="text-xl md:text-2xl font-medium text-neon-yellow">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Passionate about data and everything associated with it.
          </motion.p>

          <motion.p
            className="text-gray-400 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I’m an AI engineer passionate about building intelligent systems that bridge the gap between cutting-edge research and real-world impact.
            With expertise in deep learning, computer vision, and natural language processing, I create innovative
            applications that push the boundaries of what's possible.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={item} whileHover={{ scale: 1.05 }}>
                <Card className="bg-dark-card border border-gray-800 hover:border-neon-green/50 transition-all spotify-card">
                  <CardContent className="p-3 flex items-center space-x-2">
                    {skill.icon}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex space-x-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href ="https://drive.google.com/file/d/15jMHjAywQuDskNeDIJMsjgJdQ2hnyJgI/view?usp=sharing">
              <Button className="bg-neon-green text-dark hover:bg-neon-lime spotify-button font-bold">
                <FileUser className="h-4 w-4 mr-2" />
                Resume
              </Button></a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-neon-green/50 text-neon-green hover:bg-neon-green/10 spotify-button"
              >
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:parthsin10@gmail.com">
            Contact Me
              </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative"
        >
          <motion.div
            className="relative h-[400px] w-full md:h-[500px] rounded-lg overflow-hidden border border-neon-green/20 animate-pulse-glow"
            animate={{
              boxShadow: [
                "0 0 15px 0 rgba(197, 255, 0, 0.4)",
                "0 0 30px 5px rgba(197, 255, 0, 0.7)",
                "0 0 15px 0 rgba(197, 255, 0, 0.4)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-yellow/20 z-10" />
            <Image src="/parth.jpg?height=500&width=500" alt="John Doe" fill className="object-fill" />
            {/* Overlay with doodle effect inspired by the reference image */}
            <div className="absolute inset-0 bg-neon-green/10 mix-blend-overlay z-20"></div>
          </motion.div>
          <motion.div
            className="absolute -bottom-5 -right-5 h-full w-full border border-neon-green/40 rounded-lg -z-10"
            animate={{ rotate: [0, 1, 0, -1, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 h-full w-full border border-neon-yellow/30 rounded-lg -z-20"
            animate={{ rotate: [0, -1, 0, 1, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

