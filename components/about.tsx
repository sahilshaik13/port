"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="pt-28 py-20 bg-black/80 scroll-mt-28 relative z-10"
    >
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
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[350px] w-full md:h-[450px] rounded-lg overflow-hidden border-2 border-cyan-500/30">
              <Image
                src="images/sa1.jpg"
                alt="Mohammed Shaik Sahil"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 h-full w-full border-2 border-purple-500/30 rounded-lg -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Hello there!
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Aspiring Software Engineer | Web Development Enthusiast
              I am currently pursuing a Bachelor of Engineering in Computer
              Science with a specialization in IoT, Cyber Security, and
              Blockchain Technology at Nawab Shah Alam Khan College of
              Engineering and Technology, Malakpet. My academic journey, coupled
              with a strong passion for web development, drives my commitment
              to excellence in creating innovative and user-friendly solutions.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I take pride in my dedication to continuous learning and skill
              development, ensuring that I stay updated with industry trends and
              technologies. My effective time management allows me to balance
              academic commitments, personal projects, and hobbies,
              demonstrating my ability to prioritize and deliver results in
              high-pressure environments.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I possess a versatile skill set, including expertise in
              programming languages like C, Python, and JavaScript, and
              proficiency in frameworks such as Django, Flask, and React. My
              technical arsenal also includes tools like GitHub, Postman, AI
              assistants, and database management systems like MongoDB and
              MySQL. I excel in integrating APIs and deploying projects using
              platforms like Vercel and Netlify, showcasing my ability to
              transform concepts into impactful applications.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Beyond academics, I enjoy playing snookers, table tennis,
              badminton, and swimming. I’m an avid follower of cricket and
              Formula 1 racing, which fuels my competitive and analytical
              spirit.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With a focus on professional growth and innovation, I am dedicated
              to contributing to cutting-edge projects and expanding my
              expertise in the ever-evolving field of computer science and web
              development.
            </p>
          
            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center mt-6"
            >
              <a
                href="/Mohammed Shaik Sahil CV.pdf"
                download
                className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition hover:scale-105"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}