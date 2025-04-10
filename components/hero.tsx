"use client"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mohammed Shaik Sahil
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            <span className="typing-text">Full Stack Developer | Deployment Specialist | Tech Enthusiast</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="animate-bounce" size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
