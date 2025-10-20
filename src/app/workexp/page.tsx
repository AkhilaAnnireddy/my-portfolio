"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="min-h-screen px-6 py-16 bg-black text-blue-200">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Work Experience
        </h1>

        {/* Tagline */}
        <p className="text-center text-blue-300 text-lg max-w-2xl mx-auto mb-16">
          3+ years of hands-on experience delivering{" "}
          <strong>production-level features</strong>,{" "}
          <strong>scalable cloud systems</strong>, and{" "}
          <strong>ML-powered analytics</strong>.
        </p>

        <div className="space-y-16">
          {/* CU Boulder */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-blue-300">
              Software Developer – Institute of Cognitive Science, CU Boulder
            </h2>
            <p className="text-blue-400 text-sm mb-4">Jan 2025 – Present</p>
            <p className="text-blue-200 leading-relaxed mb-4">
              I bridge research and production by transforming advanced ML
              models into scalable platforms. My work enables researchers and
              clients to analyze thousands of student–tutor interactions,
              unlocking insights via diarization, transcription, and automated
              educational feedback.
            </p>
            <ul className="list-disc list-inside text-blue-300 space-y-1">
              <li>
                Architected event-driven AWS pipelines (Lambda, SQS, Batch, Step
                Functions).
              </li>
              <li>
                Migrated frontend from React → <strong>Next.js</strong> with ISR
                and API Routes.
              </li>
              <li>
                Cut GPU inference costs by <strong>30%</strong> through AWS
                Batch optimization.
              </li>
              <li>
                Defined all infrastructure in <strong>Terraform</strong> modules
                with CI/CD via GitHub Actions.
              </li>
            </ul>
          </motion.div>

          {/* JP Morgan Full-Time */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-blue-300">
              Software Development Engineer – JP Morgan Chase & Co.
            </h2>
            <p className="text-blue-400 text-sm mb-4">Feb 2022 – Aug 2024</p>
            <p className="text-blue-200 leading-relaxed mb-4">
              Partnered with operations, QA, and release teams to deliver
              critical features for the corporate investor portal. Ensured
              stability, compliance, and scalability while mentoring interns and
              driving production excellence.
            </p>
            <ul className="list-disc list-inside text-blue-300 space-y-1">
              <li>
                Delivered <strong>50+ full-stack features</strong> across React
                frontends and Spring Boot microservices.
              </li>
              <li>
                Orchestrated AWS migration (Terraform, Auto Scaling, blue/green
                deploys) cutting infra costs by <strong>30%</strong>.
              </li>
              <li>
                Developed a <strong>SCIM 2.0-compliant REST service</strong>{" "}
                with JWT auth and audit logging, reducing manual access reviews
                by <strong>65%</strong>.
              </li>
              <li>
                Enhanced reliability, reducing MTTR by <strong>45%</strong>{" "}
                through observability and automated rollbacks.
              </li>
              <li>
                Mentored interns and facilitated KT sessions for new hires.
              </li>
            </ul>
          </motion.div>

          {/* JP Morgan Intern */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gray-900 border border-blue-900/40 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-blue-300">
              Summer Intern – JP Morgan Chase & Co.
            </h2>
            <p className="text-blue-400 text-sm mb-4">May 2021 – Jul 2021</p>
            <p className="text-blue-200 leading-relaxed mb-4">
              Gained first-hand experience of enterprise software delivery in a
              global bank. Worked on backend automation, CI/CD pipelines, and
              production issue handling—building a foundation for future
              full-time work.
            </p>
            <ul className="list-disc list-inside text-blue-300 space-y-1">
              <li>
                Built an anomaly monitoring scheduler with <strong>Akka</strong>{" "}
                for deal workflows.
              </li>
              <li>
                Automated CI with Jenkins, Sonar, and Selenium, improving test
                coverage and reliability.
              </li>
              <li>
                Contributed to feature delivery, SQL query optimization, and
                resolving production issues.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Back to home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-blue-100 bg-blue-700 rounded-lg hover:bg-blue-600 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
