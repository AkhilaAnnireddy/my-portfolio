"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Minutes Maker: Serverless Meeting Summarization",
    techStack: [
      "AWS Lambda",
      "S3",
      "SQS",
      "Docker",
      "Terraform",
      "Faster-Whisper",
      "FLAN-T5",
      "GitHub Actions",
    ],
    description:
      "Built a serverless meeting summarization pipeline triggered by storage events, containerizing Faster-Whisper (ASR) and FLAN-T5 (summarization) models in Docker with retry logic for reliable execution. Created reusable Terraform modules to provision infrastructure and automated blue/green deployments via GitHub Actions, reducing deployment effort by 60%.",
    link: "https://github.com/AkhilaAnnireddy/Minutes-Maker",
  },
  {
    id: 2,
    title: "StackStats: Stack Overflow Analytics Dashboard",
    techStack: ["ReactJS", "ChartJS", "Stack Overflow API", "JavaScript"],
    description:
      "Developed a full-stack analytics dashboard that visualizes Stack Overflow user activity and expertise. Implemented profile pages with user details, recent activity, and answered questions, along with interactive ChartJS visualizations that provide statistical insights into tag usage and topic expertise. Optimized React components for real-time API integration, enabling live updates and smooth data exploration for developers.",
    link: "https://github.com/AkhilaAnnireddy/stackstats",
  },
  {
    id: 3,
    title: "EduBlog: University Blogging & Collaboration Platform",
    techStack: ["Django", "HTML", "CSS", "Bootstrap", "SQLite"],
    description:
      "Developed a role-based blogging platform tailored for universities where faculty can create, edit, and publish blogs with text and media, while students can log in, read, and comment on posts. Implemented user authentication with django-allauth, profile management, and role-based access control for faculty, students, and admins. Enabled full blog lifecycle management including creation, updates, deletion, comment threads, and post saving, with an admin dashboard to manage users, blogs, and content visibility.",
    link: "https://github.com/AkhilaAnnireddy/edublog",
  },
  {
    id: 4,
    title: "Autism Detection using 3D CNN",
    techStack: [
      "Python",
      "Deep Learning",
      "Keras",
      "Flask",
      "ABIDE Dataset",
      "fMRI",
      "3D CNN",
    ],
    description:
      "Published in Springer’s *Machine Vision and Augmented Intelligence* (ISBN: 978-981-97-4359-9), this research introduced a 3D Convolutional Neural Network to classify Autism Spectrum Disorder from fMRI brain scans using the ABIDE dataset. The pipeline included rigorous preprocessing (resampling, noise removal, augmentation), mining hidden biomarkers, and preserving spatial-temporal features for diagnosis. Achieved 90% classification accuracy, outperforming SVM, Decision Trees, and Logistic Regression. Deployed as a Flask-based web app with a diagnosis display and recommendation system, enabling early detection and treatment suggestions.",
    link: "https://github.com/AkhilaAnnireddy/autism_spectrum_detection",
    publication:
      "Springer Nature — Machine Vision and Augmented Intelligence (2025)",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-blue-200 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-blue-400 mb-4">
            <Code className="inline w-10 h-10 text-blue-500 mr-2" />
            My Projects
          </h1>
          <p className="text-lg text-blue-300">
            A collection of my work spanning{" "}
            <strong className="text-blue-400">
              full-stack development, AI, machine learning, and cloud computing
            </strong>
            .
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
              className="p-6 bg-gray-900 border border-blue-900/40 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-blue-300 mb-2">
                {project.title}
              </h2>
              <div className="flex flex-wrap text-sm text-blue-400 mb-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full mr-2 mb-2 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-blue-200 text-sm mb-4">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                className="text-blue-400 font-semibold flex items-center hover:text-blue-300"
              >
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
