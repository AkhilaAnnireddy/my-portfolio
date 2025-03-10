"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "AI Transcription Tool", desc: "Convert speech to text using NLP.", link: "#" },
  { title: "AWS AutoScaler", desc: "Dynamically scale cloud infrastructure.", link: "#" },
  { title: "Big Data ML Analytics", desc: "Analyze large-scale datasets efficiently.", link: "#" },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-4xl font-bold text-[#00ff99] text-center mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="border border-gray-700 p-6 rounded-lg hover:bg-[#111] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#00aaff]">{project.title}</h3>
            <p className="text-gray-400">{project.desc}</p>
            <a href={project.link} className="text-[#00ff99] hover:underline mt-2 block">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
