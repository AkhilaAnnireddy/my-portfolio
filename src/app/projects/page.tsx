"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";

// Sample projects data (Replace with real projects)
const projects = [
  {
    id: 1,
    title: "StackStats",
    techStack: ["ReactJS", "ChartJS", "Stack Overflow API", "JavaScript"],
    description:
      "Built a dynamic portfolio generator that visualizes developer contributions using the Stack Overflow API. Leveraged ChartJS for real-time data visualizations and React for an interactive UI showcasing user statistics and tag-based expertise.",
    link: "https://github.com/AkhilaAnnireddy/stackstats",
  },
  {
    id: 2,
    title: "EduBlog",
    techStack: ["Django", "HTML", "CSS", "Bootstrap", "SQLite"],
    description:
      "Built a university-focused social platform where students and professors can share blogs, announcements, and research updates. Implemented authentication, CRUD operations, and comment moderation features with Django’s robust backend.",
    link: "https://github.com/AkhilaAnnireddy/edublog",
  },
  {
    id: 3,
    title: "Autism Detection using 3D CNN",
    techStack: ["Python", "Deep Learning", "Keras", "ABIDE Dataset", "fMRI", "3D CNN"],
    description:
      "Built a 3D Convolutional Neural Network to classify autism spectrum disorder from ABIDE fMRI brain scan data. Achieved over 90% accuracy by preprocessing medical images and optimizing model architecture for volumetric analysis.",
    link: "https://github.com/AkhilaAnnireddy/autism-detection-3dcnn"
  },
  {
    id: 4,
    title: "StackStats: Developer Engagement Analytics",
    techStack: ["React", "ChartJS", "Pandas", "Scikit-Learn", "Machine Learning"],
    description:
      "Analyzed Stack Overflow user behavior to explore engagement trends, reputation dynamics, and the influence of AI tools like ChatGPT. Built interactive dashboards with React and ChartJS, and applied machine learning models to predict user retention, tag popularity, and activity decline. Provided actionable insights for platform sustainability and growth strategies.",
    link: "https://github.com/AkhilaAnnireddy/StackStats"
  },
  {
    id: 5,
    title: "Analyzing Crime Trends and Patterns in the U.S.",
    techStack: ["R", "Data Cleaning", "EDA", "Hypothesis Testing", "Time Series Analysis", "Bootstrapping"],
    description:
      "Conducted a comprehensive statistical analysis of crime data across U.S. states from 1979–2023 using FBI Crime Data Explorer. Applied advanced methods including hypothesis testing, bootstrapping, and linear regression to explore regional disparities, time-based crime patterns, and predict future crime rates. Normalized crime metrics per 100,000 population to ensure comparability, and developed actionable insights for policy planning and public safety improvements.",
    link: "https://github.com/AkhilaAnnireddy/us-crime-trends-analysis"
  }
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
