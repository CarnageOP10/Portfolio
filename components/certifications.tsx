"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("all")
  const [hoveredCert, setHoveredCert] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const certifications = [
    {
      id: 1,
      title: "Application of AI for Anomaly Detection",
      organization: "Nvidia",
      date: "November 2024",
      image: "/nvidia.png?height=100&width=200",
      category: "deep-learning",
      credential: "https://drive.google.com/file/d/1ylatTlvD4fibFg0xPiysP7TujVj4wCsu/view",
    },
    {
      id: 2,
      title: "Machine Learning Specialization",
      organization: "Stanford University | DeepLearning.Ai",
      date: "October 2023",
      image: "/stanford.png?height=100&width=200",
      category: "machine-learning",
      credential: "https://www.coursera.org/account/accomplishments/specialization/QQHFFTW43NZA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    },
    {
      id: 3,
      title: "Google Data Analytics Professional Certificate",
      organization: "Google",
      date: "September 2023",
      image: "/google.png?height=100&width=200",
      category: "data-analytics",
      credential: "https://www.coursera.org/account/accomplishments/professional-cert/LAEL4HG8943A?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
    },
    {
      id: 4,
      title: "ESP32 Bootcamp: A Step By Step Practical Approach",
      organization: "Udemy",
      date: "April 2023",
      image: "/udemy.png?height=100&width=200",
      category: "IoT",
      credential: "http://ude.my/UC-4801b413-7bed-47ff-8140-83ac6fdf1a2e",
    }
  ]

  const categories = [
    { id: "all", name: "All Certifications" },
    { id: "deep-learning", name: "Deep Learning" },
    { id: "machine-learning", name: "Machine Learning" },
    { id: "data-analytics", name: "Data Analytics" },
    { id: "IoT", name: "Internet of Things" }
  ]

  const filteredCertifications =
    activeTab === "all" ? certifications : certifications.filter((cert) => cert.category === activeTab)

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
    <section id="Education" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
          <span className="text-neon-green neon-text">Education and Certifications</span>
        </h2>
        <p className="text-gray-400 max-w-3xl">
          Professional certifications and courses I've completed.
        </p>
      </motion.div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TabsList className="bg-dark-card border border-gray-800 p-1 mb-8 overflow-x-auto flex w-full max-w-full justify-start">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
              >
                <TabsTrigger
                  value={category.id}
                  className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 ${activeTab === category.id ? "text-neon-green" : "text-gray-400"}`}
                >
                  {category.name}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>
        </motion.div>

        <TabsContent value={activeTab} className="mt-0">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {filteredCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={item}
                className="spotify-card"
                onHoverStart={() => setHoveredCert(cert.id)}
                onHoverEnd={() => setHoveredCert(null)}
              >
                <Card className="bg-dark-card border border-gray-800 hover:border-neon-green/50 transition-all h-full group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="relative h-12 w-24 mr-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.organization}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                      <div>
                        <motion.h3
                          className="font-medium text-lg group-hover:text-neon-green transition-colors"
                          animate={hoveredCert === cert.id ? { x: [0, 2, 0] } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          {cert.title}
                        </motion.h3>
                        <p className="text-gray-400 text-sm">{cert.organization}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-400 mt-auto">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{cert.date}</span>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-4 text-neon-green hover:text-neon-lime hover:bg-neon-green/10 justify-start px-0 spotify-button"
                        asChild
                      >
                        <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View Credential
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        className="mt-16 bg-dark-card border border-gray-800 rounded-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="flex items-center mb-6">
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          >
            <Award className="h-8 w-8 text-neon-green mr-3" />
          </motion.div>
          <h3 className="text-2xl font-bold">Education</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="space-y-3">
              <motion.div whileHover={{ x: 5 }} className="transition-all duration-200">
                <div className="font-medium">BTech. in Electronics and Communication with specialization in IoT</div>
                <div className="text-gray-400 text-sm">Indian Institute of Information Technology, Nagpur, 2022-2026(Expected)</div>
                <div className="text-gray-400 text-sm">CGPA : 9.28</div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="transition-all duration-200">
                <div className="font-medium">Class 12th CBSE</div>
                <div className="text-gray-400 text-sm">MG Convent School, Lucknow, 2021-2022</div>
                <div className="text-gray-400 text-sm">Percentage : 95.6%</div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="transition-all duration-200">
                <div className="font-medium">Class 10th CBSE</div>
                <div className="text-gray-400 text-sm">St. Michael's Sr. Sec. School, Satna, 2019-2020</div>
                <div className="text-gray-400 text-sm">Percentage : 96.2%</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

