"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Code, GraduationCap, FileText } from "lucide-react";

export default function Resume() {
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
          <h1 className="text-5xl font-bold mb-2 text-blue-400">
            <FileText className="inline w-10 h-10 text-blue-500 mr-2" />
            My Resume
          </h1>
          <a
            href="/akhila-annireddy-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-2 text-sm font-semibold text-blue-300 border border-blue-500 rounded-md hover:bg-blue-950/40 transition-all duration-300"
          >
            View Full Resume (PDF)
          </a>
          <p className="text-lg text-blue-300 mt-4">
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
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              <GraduationCap className="inline w-8 h-8 text-blue-500 mr-2" />
              Education
            </h2>
            <div>
              <p className="font-semibold text-blue-200">
                University of Colorado Boulder
              </p>
              <p className="text-blue-300">MS in Data Science (GPA: 3.9/4.0)</p>
              <p className="text-sm text-blue-400">Aug 2024 - May 2026</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-blue-200">
                VNR Vignana Jyothi Institute of Engineering and Technology
              </p>
              <p className="text-blue-300">
                BTech in Computer Science (GPA: 3.9/4.0)
              </p>
              <p className="text-sm text-blue-400">Jun 2018 - Jun 2022</p>
            </div>
          </motion.section>

          {/* Work Experience Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              <Briefcase className="inline w-8 h-8 text-blue-500 mr-2" />
              Work Experience
            </h2>

            <div>
              <p className="font-semibold text-blue-200">
                Software Developer – Institute of Cognitive Science, CU Boulder
              </p>
              <p className="text-sm text-blue-400">Jan 2025 – Present</p>
              <ul className="mt-2 list-disc list-inside text-blue-300">
                <li>
                  Built a Faster-Whisper-based video-to-text pipeline with
                  speaker diarization using RoBERTa-SA and React dashboards.
                </li>
                <li>
                  Deployed scalable architecture with Dockerized Lambda, S3, and
                  SQS; extended support via AWS Batch &amp; EC2.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-blue-200">
                Software Development Engineer – JP Morgan Chase
              </p>
              <p className="text-sm text-blue-400">Aug 2022 – Aug 2024</p>
              <ul className="mt-2 list-disc list-inside text-blue-300">
                <li>
                  Built 50+ features in React, Spring Boot, and Java,
                  accelerating delivery by 40%.
                </li>
                <li>
                  Migrated 4 critical apps to AWS (99.9% uptime) reducing infra
                  costs by 30%.
                </li>
                <li>
                  Developed SCIM API onboarding service with PII compliance;
                  reduced manual work by 65%.
                </li>
                <li>
                  Resolved 70+ incidents via RCA and Splunk; reduced MTTR by
                  45%.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-blue-200">
                Software Developer Intern – JP Morgan Chase
              </p>
              <p className="text-sm text-blue-400">Feb 2022 – Aug 2022</p>
              <ul className="mt-2 list-disc list-inside text-blue-300">
                <li>
                  Developed Maker-Checker workflow with React + Spring; enhanced
                  audit logging and test coverage.
                </li>
                <li>
                  Ensured ADA compliance, improving accessibility and cutting
                  security review time by 35%.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-blue-200">
                Summer Intern – JP Morgan Chase
              </p>
              <p className="text-sm text-blue-400">May 2021 – Jul 2021</p>
              <ul className="mt-2 list-disc list-inside text-blue-300">
                <li>
                  Created AutoMonitor scheduler using Akka for deal status
                  alerts.
                </li>
                <li>
                  Automated test execution via Jenkins pipelines and Bitbucket
                  Actions.
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              <Code className="inline w-8 h-8 text-blue-500 mr-2" />
              Projects &amp; Research
            </h2>
            <ul className="list-disc list-inside text-blue-300">
              <li>
                <strong className="text-blue-200">Minutes Maker:</strong> Built
                a Dockerized, serverless video summarization pipeline on AWS
                using Faster-Whisper and FLAN-T5.
              </li>
              <li>
                <strong className="text-blue-200">
                  Distributed Patient Management:
                </strong>{" "}
                Event-driven microservice platform using Kafka, gRPC, Spring
                Boot, and React.
              </li>
              <li>
                <strong className="text-blue-200">EduBlog:</strong> Multi-user
                Django platform with real-time chat and WebSockets to boost
                engagement.
              </li>
            </ul>
          </motion.section>

          {/* Technical Skills Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-blue-300">
              <p>
                <strong className="text-blue-200">Languages:</strong> Java,
                Python, JavaScript, SQL, C, C++
              </p>
              <p>
                <strong className="text-blue-200">Web &amp; APIs:</strong>{" "}
                React, Next.js, Spring Boot, Django, Flask, REST, gRPC
              </p>
              <p>
                <strong className="text-blue-200">ML &amp; Data:</strong>{" "}
                Scikit-learn, Pandas, NumPy, Matplotlib, Feature Engineering
              </p>
              <p>
                <strong className="text-blue-200">DevOps &amp; Cloud:</strong>{" "}
                AWS, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions
              </p>
              <p>
                <strong className="text-blue-200">Tools:</strong> Selenium,
                JUnit, Mockito, Cucumber, Postman, Splunk, Jira
              </p>
            </div>
          </motion.section>

          {/* Certifications & Achievements Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              <Award className="inline w-8 h-8 text-blue-500 mr-2" />
              Certifications &amp; Achievements
            </h2>
            <ul className="list-disc list-inside text-blue-300">
              <li>AWS Certified Developer Associate</li>
              <li>AWS Certified Cloud Practitioner</li>
              <li>AWS Certified Machine Learning – Associate</li>
              <li>Innovation Excellence Award – JP Morgan (Q1 2023)</li>
              <li>Finalist – Code For Good Hackathon (2021)</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
