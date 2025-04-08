"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [playingProject, setPlayingProject] = useState<number | null>(null)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ml", name: "Deep Learning" },
    { id: "gi", name: "Generative AI" },
    { id: "cv", name: "Computer Vision" },
    { id: "nlp", name: "NLP" },
    { id: "research", name: "Research" },
    { id: "agi", name: "AI Agents" }
  ]

  const projects = [
    {
      id: 1,
      title: "Chakshu AI",
      description:
        "A Federated Hybrid ConvNeXt-ViT Framework with Preprocessing Enhancement for Privacy-Preserving Medical Image Classification",
      image: "/chakshu.png?height=300&width=600",
      category: ["ml", "cv", "research"],
      tags: ["PyTorch", "CNNs", "Computer Vision", "Transformer"],
      github: "https://github.com/CarnageOP10/Kidney-Stone-Detection-via-DIP-Custom-Vision-Transformer-and-Federated-Learning-on-CT-Scans",
      progress: 85,
    },
    {
      id: 2,
      title: "Skin-Vision",
      description:
        "AI-Powered Detection of Acne & Jaundice Using YOLOv8, InceptionV3, and Qwen2-VLM for Precision Dermatology",
      image: "/skinvision.png?height=300&width=600",
      category: ["ml", "gi","cv"],
      tags: ["Transfer Learning", "VLM", "YOLO", "Qwen-VL", "InceptionV3"],
      github: "https://github.com/CarnageOP10/SkinVision-Acne-Jaundice-Prediction-with-YOLOv8-InceptionV3-and-Qwen2-VLM",
      progress: 100,
    },
    {
      id: 3,
      title: "AutoMate",
      description:
        "An AI-powered customer support platform leveraging NLP via Llama-3.1, Tableau and PostgreSQL for enhanced insights",
      image: "/automate.png?height=400&width=600",
      category: ["ml", "gi", "nlp"],
      tags: ["LLMs", "NLP", "Tableau", "PostgreSQL", "Llama3"],
      github: "https://github.com/CarnageOP10/AI-Powered-Customer-Support-and-Insights-Platform",
      progress: 100,
    },
    {
      id: 4,
      title: "Auto-Scholar",
      description: "An AI-powered multi-agent research team that autonomously retrieves, analyzes, and synthesizes academic papers into actionable insights using CrewAI, AutoGen, and RAG.",
      image: "/autoscholar.png?height=300&width=600",
      category: ["agi", "ml", "gi"],
      tags: ["AI agents", "Langchain", "RAGs", "AutoGen", "CrewAI"],
      github: "https://github.com/CarnageOP10/AutoScholar",
      progress: 100,
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory))

 

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
    <section id="projects" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 mb-10"
      >
        
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
          <span className="text-neon-green neon-text">My Projects</span>
        </h2>
        <p className="text-gray-400 max-w-3xl">
          Explore my portfolio of Deep Learning and AI projects, showcasing innovative solutions and research.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full spotify-button",
                activeCategory === category.id
                  ? "bg-neon-green text-dark font-bold"
                  : "border-gray-700 hover:border-neon-green/50 hover:text-neon-green",
              )}
            >
              {category.name}
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className="spotify-card"
          >
            <Card className="bg-dark-card border border-gray-800 hover:border-neon-green/50 transition-all overflow-hidden h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />

                {/* Spotify-like play button overlay */}
                

                {/* Spotify-like progress bar */}
                <div className="absolute bottom-0 left-0 right-0 progress-bar">
                  <motion.div
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-truncate">{project.title}</h3>
                  <p className="text-gray-400 line-clamp-2">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="spotify-pill border-neon-green/50 text-neon-green bg-neon-green/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white spotify-button" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            className="border-neon-green/50 text-neon-green hover:bg-neon-green/10 spotify-button"
          >
            <a href="https://github.com/CarnageOP10">View All Projects</a>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

