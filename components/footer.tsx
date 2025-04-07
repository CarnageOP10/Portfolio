"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Github, Layers, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
    <footer className="border-t border-gray-800 bg-dark/90 backdrop-blur-sm" ref={ref}>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-xl font-bold text-neon-green neon-text">Thanks for visiting</h3>
            
            <div className="flex space-x-3">
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/CarnageOP10", label: "GitHub" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/parth--singh", label: "LinkedIn" },
                { icon: <Layers className="h-5 w-5" />, href: "https://medium.com/@parthsin10", label: "Medium" },
                { icon: <Mail className="h-5 w-5" />, href: "mailto:parthsin10@gmail.com", label: "Email" },
              ].map((link, index) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-neon-green hover:bg-dark-lighter spotify-icon-button"
                    asChild
                  >
                    <Link href={link.href} aria-label={link.label}>
                      {link.icon}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Me", href: "#about", id: "about" },
                { name: "Projects", href: "#projects", id: "projects" },
                { name: "Achievements", href: "#achievements", id: "achievements" },
                { name: "Education", href: "#Education", id: "Education" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-gray-400 hover:text-neon-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Blog", href: "https://medium.com/@parthsin10" },
                { name: "Resume", href: "https://drive.google.com/file/d/15jMHjAywQuDskNeDIJMsjgJdQ2hnyJgI/view" }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-neon-green transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <motion.li
                className="text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                Bengaluru, KA
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                whileHover={{ x: 5 }}
              >
                <Link
                  href="mailto:parthsin10@gmail.com"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                >
                  parthsin10@gmail.com
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.9 }}
                whileHover={{ x: 5 }}
              >
                <Link href="tel:+919685771374" className="text-gray-400 hover:text-neon-green transition-colors">
                  +91-9685771374
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-gray-400 text-sm">© {currentYear} Parth Singh. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

