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

            <p className="text-blue-200 leading-relaxed mb-4 italic">
              Building production-scale ML infrastructure and full-stack
              analytics platforms for education research at scale.
            </p>
            <ul className="list-disc list-inside text-blue-300 space-y-2">
              <li>
                Architected a{" "}
                <strong>production-scale media analytics platform</strong>{" "}
                processing <strong>500+ hours monthly</strong>, designing an
                event-driven microservices system using{" "}
                <strong>Docker, Terraform, and AWS</strong> for 200+ education
                researchers. Integrated <strong>AWS Cognito</strong> for secure
                authentication and user management with role-based permissions.
              </li>
              <li>
                Developed a <strong>full-stack analytics dashboard</strong>{" "}
                using <strong>Next.js</strong> and <strong>Python</strong> with
                RESTful APIs; implemented integration testing and code reviews.
                Built interactive <strong>Talk Trees</strong> powered by
                analytics results to visualize conversation patterns and
                tutoring dynamics.
              </li>
              <li>
                Optimized the <strong>ML inference pipeline</strong> on{" "}
                <strong>AWS Batch</strong> with GPU acceleration and{" "}
                <strong>SQS orchestration</strong>, reducing compute costs by{" "}
                <strong>30%</strong> while maintaining a{" "}
                <strong>99% job completion rate</strong> across production
                workloads.
              </li>
              <li>
                Architected{" "}
                <strong>distributed data synchronization system</strong> across{" "}
                <strong>DynamoDB</strong> and <strong>DocumentDB</strong> with
                Lambda-based orchestration, implementing{" "}
                <strong>eventual consistency model</strong> with conflict
                resolution for <strong>10K+ records</strong>.
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

            <p className="text-blue-200 leading-relaxed mb-4 italic">
              Built distributed microservices and cloud infrastructure for
              institutional banking platforms serving 500+ clients and
              processing $2B+ in transactions.
            </p>

            <ul className="list-disc list-inside text-blue-300 space-y-2">
              <li>
                Delivered <strong>50+ production features</strong> for
                institutional banking platform serving{" "}
                <strong>500+ clients</strong> through cross-functional
                collaboration, building <strong>React frontends</strong> and{" "}
                <strong>Spring Boot microservices</strong> with{" "}
                <strong>90%+ test coverage</strong> using unit testing and
                integration testing in Agile methodologies.
              </li>
              {/* <li>
                Led <strong>cloud infrastructure migration</strong> of four
                banking applications supporting{" "}
                <strong>$2B+ in transactions</strong> to{" "}
                <strong>Amazon Web Services (AWS)</strong>, implementing{" "}
                <strong>blue/green deployment</strong> and{" "}
                <strong>CI/CD pipelines</strong> with zero downtime, reducing
                infrastructure costs by <strong>30%</strong>.
              </li>
              <li>
                Built{" "}
                <strong>high-throughput investor onboarding system</strong>{" "}
                processing{" "}
                <strong>1,000+ daily KYC verifications at 50 TPS</strong> using{" "}
                <strong>Apache Kafka event streaming</strong>, achieving{" "}
                <strong>&lt;500ms p99 latency</strong> with distributed
                microservices architecture.
              </li> */}
              <li>
                Developed <strong>SCIM 2.0-compliant REST application</strong>{" "}
                for automated user onboarding and access certification
                maintenance across <strong>10,000+ accounts</strong>, reducing
                quarterly review time from <strong>2 weeks to 2 days</strong>{" "}
                and eliminating <strong>65% of manual audits</strong>.
              </li>
              <li>
                Orchestrated <strong>20+ production system releases</strong> via{" "}
                <strong>Jenkins CI/CD pipelines</strong> with code reviews,
                automated unit testing, integration testing, and rollback
                capabilities, reducing{" "}
                <strong>mean time to recovery by 45%</strong> and maintaining{" "}
                <strong>99.9% uptime</strong>.
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
                Built <strong>automated deal monitoring system</strong> using{" "}
                <strong>Akka scheduler</strong> to trigger distributed workflows
                in <strong>high-concurrency trading platform</strong>, reducing
                manual intervention and enabling real-time trade processing for
                production systems.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
