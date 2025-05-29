"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: number
  color: string
}

export default function Skills() {
  const frontendSkills: Skill[] = [
    { name: "HTML/CSS", level: 95, color: "from-blue-500 to-cyan-400" },
    { name: "JavaScript", level: 90, color: "from-yellow-500 to-amber-400" },
    { name: "React", level: 88, color: "from-cyan-500 to-blue-400" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-indigo-500" },
    { name: "Next.js", level: 82, color: "from-gray-700 to-gray-500" },
  ]

  const backendSkills: Skill[] = [
    { name: "Node.js", level: 87, color: "from-green-500 to-emerald-400" },
    { name: "Supabase", level: 85, color: "from-gray-600 to-gray-400" },
    { name: "MongoDB", level: 80, color: "from-green-600 to-green-400" },
    { name: "Django", level: 78, color: "from-blue-700 to-blue-500" },
    { name: "Flask", level: 75, color: "from-red-600 to-red-400" },
  ]

  const otherSkills: Skill[] = [
    { name: "UI/UX Design", level: 88, color: "from-purple-600 to-purple-400" },
    { name: "Git/GitHub", level: 92, color: "from-orange-600 to-orange-400" },
    { name: "Vercel", level: 92, color: "from-orange-600 to-orange-400" },
    { name: "Postman", level: 85, color: "from-gray-600 to-gray-400" },
    { name: "Testing", level: 78, color: "from-red-600 to-red-400" },
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-black">
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
              Technical Skills
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-cyan-400">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <motion.div key={index} variants={item} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-800">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </Progress>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-cyan-400">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <motion.div key={index} variants={item} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-800">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </Progress>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-cyan-400">Other Skills</h3>
            <div className="space-y-6">
              {otherSkills.map((skill, index) => (
                <motion.div key={index} variants={item} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-800">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </Progress>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">2+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
