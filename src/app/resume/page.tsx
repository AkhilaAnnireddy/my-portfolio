"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Code, GraduationCap, FileText } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-800 to-blue-600 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-2">
            <FileText className="inline w-10 h-10 text-blue-400 mr-2" />
            My Resume
          </h1>
          <a
            href="/akhila-annireddy-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-300 rounded-md shadow-md transition-all duration-300"
          >
            View Full Resume (PDF)
          </a>
          <p className="text-lg text-blue-200 mt-4">
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
            className="p-6 bg-blue-800/50 backdrop-blur rounded-lg text-blue-100"
          >
            <h2 className="text-3xl font-bold mb-4">
              <GraduationCap className="inline w-8 h-8 text-blue-300 mr-2" />
              Education
            </h2>
            <div>
              <p className="font-semibold">University of Colorado Boulder</p>
              <p className="text-blue-200">Masters in Data Science (GPA: 3.8/4.0)</p>
              <p className="text-sm text-blue-400">Aug 2024 - May 2026</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">VNR Vignana Jyothi Institute of Engineering and Technology</p>
              <p className="text-blue-200">Bachelor of Technology in Computer Science (GPA: 3.9/4.0)</p>
              <p className="text-sm text-blue-400">Jun 2018 - Jun 2022</p>
            </div>
          </motion.section>

          {/* Work Experience Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-blue-800/50 backdrop-blur rounded-lg text-blue-100"
          >
            <h2 className="text-3xl font-bold mb-4">
              <Briefcase className="inline w-8 h-8 text-blue-300 mr-2" />
              Work Experience
            </h2>
            <div>
              <p className="font-semibold">Software Developer</p>
              <p className="text-blue-200">Center for Innovation and Creativity - CU Boulder</p>
              <p className="text-sm text-blue-400">Jan 2025 - Present</p>
              <ul className="mt-2 list-disc list-inside text-blue-200">
                <li>Built a Faster Whisper-based video-to-text system and classified tutor/student talk moves with analytics dashboard in React.</li>
                <li>Designed fault-tolerant architecture using AWS Lambda, S3, and SQS; improved processing scalability.</li>
                <li>Reduced AWS costs by 25% through auto-scaling and spot instances while enhancing system performance.</li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="font-semibold">Software Development Engineer</p>
              <p className="text-blue-200">JP Morgan Chase & Co.</p>
              <p className="text-sm text-blue-400">Aug 2022 - Aug 2024</p>
              <ul className="mt-2 list-disc list-inside text-blue-200">
                <li>Delivered 50+ user stories for a client-facing app using Java, React, Spring Boot, and Agile workflows.</li>
                <li>Migrated 4 applications to AWS with 99.9% uptime, saving 30% in infra costs using a parallel lift-and-shift model.</li>
                <li>Implemented SCIM-based REST APIs automating onboarding & compliance, reducing manual effort by 65%.</li>
                <li>Led 20+ zero-downtime deployments using Jenkins, Blue-Green strategy, and AWS stack.</li>
                <li>Resolved 70+ issues with deep Splunk-driven RCA, improving resolution time by 45%.</li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="font-semibold">Software Developer Intern</p>
              <p className="text-blue-200">JP Morgan Chase & Co.</p>
              <p className="text-sm text-blue-400">Feb 2022 - Aug 2022</p>
              <ul className="mt-2 list-disc list-inside text-blue-200">
                <li>Created Maker-Checker workflow with Spring & React to enhance audit and security traceability.</li>
                <li>Boosted automation by 50% via CI/CD pipelines integrated with S3 & vulnerability scans.</li>
                <li>Handled backend upgrade workflows, reducing release friction and minimizing downtime.</li>
              </ul>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-blue-800/50 backdrop-blur rounded-lg text-blue-100"
          >
            <h2 className="text-3xl font-bold mb-4">
              <Code className="inline w-8 h-8 text-blue-300 mr-2" />
              Projects & Research
            </h2>
            <ul className="list-disc list-inside text-blue-200">
              <li><strong>StackStats:</strong> Created a StackOverflow portfolio builder using ReactJS & ChartJS.</li>
              <li><strong>EduBlog:</strong> Developed a Django-based university social media platform.</li>
              <li><strong>Autism Prediction:</strong> Designed a 3D CNN model achieving 90% accuracy using ABIDE fMRI data.</li>
              <li><strong>Pharmaceutical Wastewater Detection:</strong> Built ML models to detect drug compound levels in sewage using regression & classification models.</li>
            </ul>
          </motion.section>

          {/* Technical Skills Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-blue-800/50 backdrop-blur rounded-lg text-blue-100"
          >
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-blue-200">
              <p><strong>Languages:</strong> Java, Python, JavaScript, C, C++, SQL</p>
              <p><strong>Web Development:</strong> React, Spring Boot, Flask, Django, HTML, CSS, TypeScript</p>
              <p><strong>Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib</p>
              <p><strong>Cloud & DevOps:</strong> AWS, Docker, Terraform, Jenkins, GitHub Actions</p>
              <p><strong>APIs:</strong> RESTful APIs, SCIM API, FastAPI</p>
              <p><strong>Tools & Testing:</strong> Selenium, JUnit, Cucumber, Mockito, Splunk, Jira</p>
            </div>
          </motion.section>

          {/* Certifications & Achievements Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-blue-800/50 backdrop-blur rounded-lg text-blue-100"
          >
            <h2 className="text-3xl font-bold mb-4">
              <Award className="inline w-8 h-8 text-blue-300 mr-2" />
              Certifications & Achievements
            </h2>
            <ul className="list-disc list-inside text-blue-200">
              <li>AWS Certified Developer Associate</li>
              <li>AWS Certified Cloud Practitioner</li>
              <li>Innovation Excellence Award - JP Morgan Chase (2023)</li>
              <li>Finalist - Code For Good Hackathon (2021)</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
