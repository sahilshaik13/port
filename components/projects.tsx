"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"; 
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons

interface Project {
  id: number;
  title: string;
  description: string;
  video: string; // Updated for iframe instead of image
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  linkedinUrl?: string; // Optional LinkedIn URL
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Attendance Management System",
      description:
        "An attendance management system made using Django and MongoDB for efficient attendance tracking & management.",
      video:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7278691386139271168?compact=1",
      tags: ["Django", "MongoDB", "HTML CSS JS", "Django AUTH", "GitHub", "LinkedIn"],
      liveUrl: "Not Available",
      githubUrl: "https://github.com/sahilshaik13/attendance.git",
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7278691386139271168/",
    },
        {
      id: 2,
      title: "Django-Based Course Registration Platform with Payment Gateway - AppIgnite Learning Enterprise",
      description:
        "Developed a comprehensive full-stack registration system to facilitate seamless course enrollment, integrating a secure payment gateway using Razorpay. Designed an admin panel for efficient management of user registrations and structured data handling.",
      video: "https://aile.vercel.app/ ",
      tags: [
        "Next.js",
        "Django",
        "Supabase",
        "HTML CSS JS",
        "Supabase AUTH",
        "GitHub",
        "Telegram Bot API",
      ],
      liveUrl: "https://aile.vercel.app/",
      githubUrl: "https://github.com/sahilshaik13/aile-registrations.git",
    },
    {
      id: 3,
      title: "Serenity Space: Your AI-Powered Mental Health Companion",
      description:
        "Serenity Space is a comprehensive mental health care application designed to support individuals in managing anxiety, stress, and depression. The platform uses assessments, journaling, AI-based recommendations, and chatbot interactions to provide a holistic mental well-being experience.",
      video: "https://serenity-space-ten.vercel.app/",
      tags: [
        "Next.js",
        "Django",
        "Supabase",
        "HTML CSS JS",
        "Supabase AUTH",
        "GitHub",
        "OpenRouter API",
        "Meta-llama AI",
      ],
      liveUrl: "https://serenity-space-ten.vercel.app/",
      githubUrl: "https://github.com/sahilshaik13/serenityspace.git",
      linkedinUrl: "https://www.linkedin.com/posts/mdshaiksahil_serenity-space-document-activity-7333052821853917185-qT-b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmy1uoBdFTfkHNgKkMyt6yIJqmocXmvcy4",
    },
    {
      id: 4,
      title: "Path Pilot – AI Career Guidance Platform",
      description:
        "Built Path Pilot, an AI-powered career navigation app designed to help users discover, build, and progress along a personalized career path. The platform assists users in selecting domains of interest, adjusting skill levels, and following structured, AI-guided roadmaps for professional growth.",
      video: "https://path-pilot-tau.vercel.app/",
      tags: [
        "Next.js",
        "Supabase",
        "Supabase AUTH",
        "GitHub",
        "OpenRouter API",
        "Meta-llama AI",
      ],
      liveUrl: "https://path-pilot-tau.vercel.app/",
      githubUrl: "https://github.com/sahilshaik13/PathPilot.git",
    },
  ];

  const [activeProject, setActiveProject] = useState(0);

  const nextProject = () => {
    setActiveProject((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setActiveProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
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
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent work. Each project represents a unique
            challenge and solution.
          </p>
        </motion.div>

        <div className="relative">
          {/* Previous Button */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
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

          {/* Next Button */}
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
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

          {/* Projects Slider */}
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
                      {project.video ? (
                        <div className="relative w-full h-full">
                          <iframe
                            src={project.video}
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allowFullScreen
                            title="Embedded Video"
                          ></iframe>
                        </div>
                      ) : (
                        <div className="h-full bg-gray-700 flex items-center justify-center text-gray-300">
                          No Preview Available
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>

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
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-purple-500 text-purple-400 hover:bg-purple-950/30"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                        {project.linkedinUrl && (  // Check if linkedinUrl exists
                          <Button
                            variant="outline"
                            className="border-blue-500 text-blue-400 hover:bg-blue-950/30"
                            asChild
                          >
                            <a
                              href={project.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin className="mr-2 h-4 w-4" /> LinkedIn
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
