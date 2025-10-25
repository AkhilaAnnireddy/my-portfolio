"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function WorkPage() {
  return (
    <div className="min-h-screen px-6 py-16 bg-black text-blue-200">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Work Experience
        </h1>

        <p className="text-center text-blue-300 text-lg max-w-2xl mx-auto mb-16">
          3+ years of experience delivering{" "}
          <strong>production-grade systems</strong>,{" "}
          <strong>cloud-native architectures</strong>, and{" "}
          <strong>ML-powered analytics platforms</strong> that drive measurable
          impact.
        </p>

        <div className="space-y-16">
          {/* CU Boulder */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-semibold text-blue-300">
                Software Developer – Institute of Cognitive Science, CU Boulder
                <a
                  href="https://www.colorado.edu/cs/2023/11/02/humans-and-computers-work-together-tutoring-success"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-400 hover:text-blue-500 transition"
                  aria-label="External link to CU Boulder article"
                >
                  <FaExternalLinkAlt className="inline w-4 h-4" />
                </a>
              </h2>
              <p className="text-blue-400 text-sm">Jan 2025 – Present</p>
            </div>

            <p className="text-blue-200 leading-relaxed mb-4">
              Bridging research and production by architecting end-to-end ML
              infrastructure and full-stack platforms for large-scale
              educational analytics.
            </p>
            <ul className="list-disc list-inside text-blue-300 space-y-1">
              <li>
                Architected a production-grade video analytics pipeline
                processing <strong>500+ hours monthly</strong>, enabling 50+
                researchers to analyze student–tutor interactions in real time.
              </li>
              <li>
                Designed event-driven microservices using{" "}
                <strong>AWS Lambda, SQS, and Batch</strong> with modular
                infrastructure via Terraform.
              </li>
              <li>
                Developed full-stack analytics dashboard using{" "}
                <strong>Next.js</strong> (ISR + REST APIs) and{" "}
                <strong>Python</strong>, achieving 2s load times through CDN
                caching and SSR optimization.
              </li>
              <li>
                Optimized ML inference pipeline with GPU acceleration on AWS
                Batch, reducing compute cost by <strong>30%</strong> while
                maintaining 99% job completion.
              </li>
              <li>
                Built automated data synchronization system between{" "}
                <strong>DynamoDB</strong> and <strong>DocumentDB</strong> via
                Lambda, ensuring consistency across 10K+ records.
              </li>
            </ul>
          </motion.div>

          {/* JP Morgan Full-Time */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-semibold text-blue-300">
                Software Development Engineer – JPMorgan Chase & Co.
                <a
                  href="https://drive.google.com/file/d/1EsP8jH35jlYwHtPAovgCXxS6zHDUFEaP/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-400 hover:text-blue-500 transition"
                  aria-label="Proof of work certificate"
                >
                  <FaExternalLinkAlt className="inline w-4 h-4" />
                </a>
              </h2>
              <p className="text-blue-400 text-sm">Feb 2022 – Aug 2024</p>
            </div>

            <p className="text-blue-200 leading-relaxed mb-4">
              Delivered scalable, secure banking systems powering institutional
              investor platforms. Worked across full-stack and DevOps layers to
              ensure reliability, compliance, and feature velocity.
            </p>

            <ul className="list-disc list-inside text-blue-300 space-y-1">
              <li>
                Delivered <strong>50+ production features</strong> across React
                frontends and Spring Boot microservices with 90%+ unit coverage.
              </li>
              <li>
                Led AWS cloud migration for four critical banking apps
                supporting <strong>$2B+ transactions</strong>, reducing infra
                cost by <strong>30%</strong>.
              </li>
              <li>
                Built a <strong>SCIM 2.0-compliant REST API</strong> with JWT
                auth and audit logging, automating access reviews for 10,000+
                user accounts and cutting manual audits by <strong>65%</strong>.
              </li>
              <li>
                Implemented Kafka-based investor onboarding service processing
                1,000+ verifications daily, reducing processing time from 48h to
                2h.
              </li>
              <li>
                Orchestrated 20+ production releases via Jenkins CI/CD with
                rollback automation, reducing MTTR by <strong>45%</strong>.
              </li>
            </ul>
          </motion.div>

          {/* JP Morgan Intern */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-semibold text-blue-300">
                Software Engineering Intern – JPMorgan Chase & Co.
                <a
                  href="https://drive.google.com/file/d/1EsP8jH35jlYwHtPAovgCXxS6zHDUFEaP/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-400 hover:text-blue-500 transition"
                  aria-label="Internship proof"
                >
                  <FaExternalLinkAlt className="inline w-4 h-4" />
                </a>
              </h2>
              <p className="text-blue-400 text-sm">May 2021 – Jul 2021</p>
            </div>

            <p className="text-blue-200 leading-relaxed mb-4">
              Gained hands-on experience in backend automation and CI/CD for
              enterprise trading platforms in a fast-paced, global environment.
            </p>

            <ul className="list-disc list-inside text-blue-300 space-y-1">
              <li>
                Built automated deal monitoring system using{" "}
                <strong>Akka scheduler</strong> to trigger distributed workflows
                for high-concurrency trading.
              </li>
              <li>
                Automated CI/CD pipelines using <strong>Jenkins</strong>,{" "}
                <strong>SonarQube</strong>, and <strong>Selenium</strong>,
                improving test reliability.
              </li>
              <li>
                Contributed to SQL query optimization, feature development, and
                production issue resolution.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
