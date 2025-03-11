"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";

// Sample projects data (Replace with real projects)
const projects = [
  {
    id: 1,
    title: "Predicting Social Effects on Pharmaceutical Wastewater",
    techStack: ["Machine Learning", "Data Science", "Python", "Pandas", "Scikit-Learn"],
    description: "Developed a model to analyze social factors affecting pharmaceutical concentrations in wastewater.",
    link: "https://github.com/AkhilaAnnireddy/pharma-waste-analysis",
  },
  {
    id: 2,
    title: "Full-Stack AI Tutoring Platform",
    techStack: ["React", "Spring Boot", "AWS", "Whisper API", "Next.js"],
    description: "Built an AI-driven tutoring system that converts videos to transcripts for learning insights.",
    link: "https://github.com/AkhilaAnnireddy/ai-tutoring-platform",
  },
  {
    id: 3,
    title: "AWS Cloud Migration for Banking Applications",
    techStack: ["AWS", "DevOps", "Terraform", "CI/CD", "Kubernetes"],
    description: "Led cloud migration of banking applications to AWS ensuring zero downtime deployment.",
    link: "https://github.com/AkhilaAnnireddy/aws-migration",
  },
  {
    id: 4,
    title: "Real-Time Crime Data Analysis",
    techStack: ["Python", "Data Visualization", "Pandas", "FBI Crime Data API"],
    description: "Analyzed FBI crime data and created interactive dashboards for crime trend insights.",
    link: "https://github.com/AkhilaAnnireddy/crime-data-analysis",
  },
  {
    id: 5,
    title: "CU Boulder Surplus Storefront",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    description: "Developed an e-commerce storefront for CU Boulder surplus property sales.",
    link: "https://github.com/AkhilaAnnireddy/surplus-store",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-300 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            <Code className="inline w-10 h-10 text-blue-400 mr-2" />
            My Projects
          </h1>
          <p className="text-lg text-blue-200">
            A collection of my work spanning <strong>full-stack development, AI, machine learning, and cloud computing</strong>.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{project.title}</h2>
              <div className="flex flex-wrap text-sm text-blue-600 mb-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-300 rounded-full mr-2 mb-2 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-blue-800 text-sm mb-4">{project.description}</p>
              <Link href={project.link} target="_blank" className="text-blue-600 font-semibold flex items-center">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
