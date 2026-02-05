"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Twitter, Layers} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const isMobile = useMobile()

  // Greetings in different languages
  const greetings = [
    { lang: 'Hindi', text: 'नमस्ते' },
    { lang: 'English', text: 'Hello' },
    { lang: 'Kannada', text: 'ನಮಸ್ಕಾರ' },
    { lang: 'Bengali', text: 'নমস্কার' },
    { lang: 'Marathi', text: 'नमस्कार' }
  ];
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = ["about", "experience", "projects", "achievements", "Education"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 1000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [greetings.length]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Education", href: "#Education", id: "Education" },
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/CarnageOP10", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/parth--singh", label: "LinkedIn" },
    { icon: <Layers className="h-5 w-5" />, href: "https://medium.com/@parthsin10", label: "Medium" },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)

    // Smooth scroll to the section
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-dark/90 backdrop-blur-md border-b border-neon-green/20" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center">
              <motion.span
                className="text-xl font-bold text-neon-green neon-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={currentGreeting} // This key will trigger animation when it changes
              >
                {greetings[currentGreeting].text}
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    activeSection === link.id ? "text-neon-green" : "text-gray-300 hover:text-neon-green",
                  )}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-green"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-gray-400 hover:text-neon-green hover:bg-dark-lighter spotify-icon-button"
                >
                  <Link href={link.href} aria-label={link.label}>
                    {link.icon}
                  </Link>
                </Button>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="mailto:parthsin10@gmail.com" className="bg-neon-green text-dark hover:bg-neon-lime spotify-button font-bold py-2 px-4 rounded inline-block">
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="md:hidden"
          >
            <Button variant="ghost" size="icon" className="md:hidden text-gray-300" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            className="md:hidden bg-dark/95 backdrop-blur-md border-b border-neon-green/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={cn(
                        "text-lg font-medium transition-colors py-2 block w-full text-left",
                        activeSection === link.id ? "text-neon-green" : "text-gray-300 hover:text-neon-green",
                      )}
                    >
                      {link.name}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  className="flex items-center space-x-4 pt-4 border-t border-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  {socialLinks.map((link, index) => (
                    <motion.div key={link.label} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="text-gray-400 hover:text-neon-green hover:bg-dark-lighter spotify-icon-button"
                      >
                        <Link href={link.href} aria-label={link.label}>
                          {link.icon}
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button className="bg-neon-green text-dark hover:bg-neon-lime w-full mt-2 spotify-button font-bold">
                    Contact Me
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}