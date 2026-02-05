"use client"

import { motion } from "framer-motion"
import AboutMe from "@/components/about-me"
import Experience from "@/components/experience"
import Achievements from "@/components/achievements"
import Certifications from "@/components/certifications"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Projects from "@/components/projects"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-dark text-white overflow-hidden">
        {/* Bold background inspired by the reference image */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-neon-green/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute top-0 left-0 right-0 h-[300px] md:h-[600px] bg-gradient-to-b from-neon-green/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full text-[250px] md:text-[400px] font-black text-neon-green/10 uppercase leading-none tracking-tighter overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            PARTH
          </motion.div>
        </div>

        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4 pb-20">
            <AboutMe />
            <Experience />
            <Projects />
            <Achievements />
            <Certifications />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

