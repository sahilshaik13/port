"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react"

interface Achievement {
  id: number
  year: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function Achievements() {
  const achievements: Achievement[] = [
    { 
      id: 1, 
      year: "2024", 
      title: "Full Stack Developer & Open-Source Contributor", 
      description: 
        "Became a proficient full stack developer while actively contributing to open-source projects and communities.", 
      icon: <Trophy className="h-8 w-8 text-yellow-400" />, 
    }, 
    { 
      id: 2, 
      year: "2023", 
      title: "Started Engineering (B.E)", 
      description: 
        "Began studying Bachelor of Engineering at Nawab Shah Alam Khan College of Engineering and Technology, embarking on a journey in technology and development.", 
      icon: <Briefcase className="h-8 w-8 text-blue-400" />, 
    },
    {
      id: 3,
      year: "2023",
      title: "High School from TSBIE",
      description:
        "Completed my Intermediate from Sri Chaitanya Junior College, Tarnaka., with a focus on Mathematics, Physics and Chemistry.",
      icon: <Award className="h-8 w-8 text-green-400" />,
    },
    {
      id: 4,
      year: "2021",
      title: "Matriculation from SSC",
      description: "Completed Matriculation from St. Peter's Model School, Hyderabad.",
      icon: <GraduationCap className="h-8 w-8 text-purple-400" />,
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Achievements & Milestones
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Key highlights from my professional journey and career accomplishments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={achievement.id} className="relative">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                    <div
                      className={`p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <div className="flex items-center mb-4 gap-3">
                        {index % 2 === 1 && achievement.icon}
                        <div>
                          <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                          <span className="text-cyan-400 text-sm">{achievement.year}</span>
                        </div>
                        {index % 2 === 0 && achievement.icon}
                      </div>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>

                  <div className="md:w-1/2 flex justify-center md:justify-start md:pl-8">
                    {/* This div is intentionally empty for layout purposes */}
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 border-black"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
