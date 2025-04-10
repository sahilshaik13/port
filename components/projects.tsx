"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Nebula Dashboard",
      description: "A futuristic admin dashboard with real-time data visualization, dark mode, and responsive design.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Quantum E-commerce",
      description: "A modern e-commerce platform with advanced filtering, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Redux", "Stripe", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Stellar Chat",
      description: "Real-time chat application with end-to-end encryption, file sharing, and video calls.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Socket.io", "WebRTC", "Firebase", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Orbit Analytics",
      description: "Data visualization platform for business intelligence with customizable dashboards.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["D3.js", "Node.js", "GraphQL", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const [activeProject, setActiveProject] = useState(0)

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:flex absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-950/30"
              onClick={prevProject}
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-950/30"
              onClick={nextProject}
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              animate={{ x: `-${activeProject * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gray-900/50 border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full bg-gray-800 text-cyan-400 border border-cyan-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-purple-500 text-purple-400 hover:bg-purple-950/30"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-950/30"
              onClick={prevProject}
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-950/30"
              onClick={nextProject}
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${activeProject === index ? "bg-cyan-400" : "bg-gray-700"}`}
                onClick={() => setActiveProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none"
            size="lg"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
