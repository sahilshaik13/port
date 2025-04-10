"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] w-full md:h-[500px] rounded-lg overflow-hidden border-2 border-cyan-500/30">
              <Image src="/placeholder.svg?height=500&width=500" alt="Alex Nova" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 h-full w-full border-2 border-purple-500/30 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Hello there!</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm Alex Nova, a passionate full-stack developer with over 5 years of experience creating innovative
              digital solutions. My journey in tech began when I built my first website at 15, and I've been hooked ever
              since.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in creating immersive web experiences that combine cutting-edge technology with intuitive
              design. My approach focuses on building scalable, efficient applications that solve real-world problems
              while providing exceptional user experiences.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              mentoring aspiring developers. I believe in continuous learning and pushing the boundaries of what's
              possible in web development.
            </p>

            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none"
              size="lg"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
