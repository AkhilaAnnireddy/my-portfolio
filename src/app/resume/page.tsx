"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Code, GraduationCap, FileText } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-300 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            <FileText className="inline w-10 h-10 text-blue-400 mr-2" />
            My Resume
          </h1>
          <p className="text-lg text-blue-200">
            A journey of learning, innovation, and impactful problem-solving.
          </p>
        </motion.div>

        {/* Resume Sections */}
        <div className="mt-12 space-y-12">
          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-blue-100 shadow-lg rounded-lg text-blue-900"
          >
            <h2 className="text-3xl font-bold mb-4">
              <GraduationCap className="inline w-8 h-8 text-blue-600 mr-2" />
              Education
            </h2>
            <div>
              <p className="font-semibold">University of Colorado Boulder</p>
              <p className="text-blue-700">Masters in Data Science (GPA: 3.8/4.0)</p>
              <p className="text-sm text-blue-600">Aug 2024 - May 2026</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">VNR Vignana Jyothi Institute of Engineering and Technology</p>
              <p className="text-blue-700">Bachelor of Technology in Computer Science (GPA: 3.9/4.0)</p>
              <p className="text-sm text-blue-600">Jun 2018 - Jun 2022</p>
            </div>
          </motion.section>

          {/* Work Experience Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-blue-100 shadow-lg rounded-lg text-blue-900"
          >
            <h2 className="text-3xl font-bold mb-4">
              <Briefcase className="inline w-8 h-8 text-blue-600 mr-2" />
              Work Experience
            </h2>
            <div>
              <p className="font-semibold">Backend Developer</p>
              <p className="text-blue-700">Center for Innovation and Creativity - CU Boulder</p>
              <p className="text-sm text-blue-600">Jan 2025 - Present</p>
            </div>
            <ul className="mt-2 list-disc list-inside text-blue-800">
              <li>Developed a video-to-text conversion model using OpenAI Whisper.</li>
              <li>Optimized AWS architecture for scalability and cost efficiency.</li>
            </ul>

            <div className="mt-6">
              <p className="font-semibold">Software Development Engineer</p>
              <p className="text-blue-700">JP Morgan Chase & Co.</p>
              <p className="text-sm text-blue-600">Aug 2022 - Aug 2024</p>
            </div>
            <ul className="mt-2 list-disc list-inside text-blue-800">
              <li>Developed a REST API for Transfer Agency Portal onboarding.</li>
              <li>Migrated applications from private cloud to AWS with zero downtime.</li>
              <li>Handled 70+ production issues through deep-rooted RCA.</li>
            </ul>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-blue-100 shadow-lg rounded-lg text-blue-900"
          >
            <h2 className="text-3xl font-bold mb-4">
              <Code className="inline w-8 h-8 text-blue-600 mr-2" />
              Projects & Research
            </h2>
            <ul className="list-disc list-inside text-blue-800">
              <li><strong>StackStats:</strong> Created a StackOverflow portfolio builder using ReactJS & ChartJS.</li>
              <li><strong>EduBlog:</strong> Developed a Django-based university social media platform.</li>
              <li><strong>Autism Prediction:</strong> Designed a 3D CNN model achieving 90% accuracy using ABIDE fMRI data.</li>
            </ul>
          </motion.section>

          {/* Technical Skills Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-blue-100 shadow-lg rounded-lg text-blue-900"
          >
            <h2 className="text-3xl font-bold mb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-blue-800">
              <p><strong>Languages:</strong> Java, Python, JavaScript, C++, SQL</p>
              <p><strong>Web Development:</strong> React, Spring Boot, Flask, Django</p>
              <p><strong>Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn</p>
              <p><strong>Cloud & DevOps:</strong> AWS, Terraform, Docker, Jenkins</p>
              <p><strong>Software Practices:</strong> OOP, System Design, Agile</p>
            </div>
          </motion.section>

          {/* Certifications & Achievements Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-blue-100 shadow-lg rounded-lg text-blue-900"
          >
            <h2 className="text-3xl font-bold mb-4">
              <Award className="inline w-8 h-8 text-blue-600 mr-2" />
              Certifications & Achievements
            </h2>
            <ul className="list-disc list-inside text-blue-800">
              <li>AWS Certified Developer Associate</li>
              <li>AWS Certified Cloud Practitioner</li>
              <li>Innovation Excellence Award (JPMC, 2023)</li>
              <li>Finalist in "Code For Good" Hackathon (2021)</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
