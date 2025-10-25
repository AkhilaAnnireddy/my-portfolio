"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Coffee,
  UtensilsCrossed,
  Book,
  PawPrint,
  Palette,
  Footprints,
  Music,
  IceCream2,
  Star,
  ShoppingBag,
  Nut,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function About() {
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen bg-black overflow-y-auto scrollbar-blue">
      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-black to-blue-900 text-blue-300"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl font-bold text-blue-400"
        >
          Beyond the Code: <br />
          Passion, Creativity &amp; Little Joys
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-lg text-blue-200 max-w-3xl"
        >
          Life is more than just coding&mdash;it&apos;s about the simple joys.
          Whether it&apos;s sipping coffee, dancing, watching stars, or taking
          long walks, I find happiness in the little moments that make life
          beautiful.
          <br />
          <br />
          Let me share everything that makes my heart happy! 💙
        </motion.p>
      </motion.section>

      {/* Things That Make Me Happy */}
      <motion.section
        className="py-20 px-8 bg-gradient-to-b from-blue-900 to-black text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Things That Make Me Smile !!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: (
                  <Coffee className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                ),
                title: "Coffee Love ☕",
                text: "My fuel for coding & creativity.",
              },
              {
                icon: (
                  <UtensilsCrossed className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                ),
                title: "Cooking 🍳",
                text: "Trying new recipes is my therapy.",
              },
              {
                icon: <Book className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
                title: "Books 📚",
                text: "Thrillers & romcoms keep me hooked.",
              },
              {
                icon: (
                  <Music className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                ),
                title: "Dancing 💃",
                text: "Music + Movement = My Happy Place.",
              },
              {
                icon: (
                  <Palette className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                ),
                title: "Mandala Art 🎨",
                text: "Creating patterns brings me peace.",
              },
              {
                icon: (
                  <PawPrint className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                ),
                title: "Bash, My Hamster 🐹",
                text: "Tiny but full of personality!",
              },
              {
                icon: (
                  <Footprints className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                ),
                title: "Nature Walks 🚶‍♀️",
                text: "Exploring Boulder&apos;s beauty on foot.",
              },
              {
                icon: (
                  <ShoppingBag className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                ),
                title: "Shopping 🛍️",
                text: "Retail therapy is real!",
              },
              {
                icon: (
                  <IceCream2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                ),
                title: "Ice Cream 🍦",
                text: "My stress relief solution.",
              },
              {
                icon: <Star className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
                title: "Stargazing ✨",
                text: "The night sky is pure magic.",
              },
              {
                icon: <Nut className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
                title: "Peanut Butter 🥜",
                text: "A spoonful of happiness.",
              },
            ].map(({ icon, title, text }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-900 rounded-xl shadow-lg"
              >
                {icon}
                <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
                <p className="text-blue-400">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-20 px-8 bg-gradient-to-b from-black to-blue-900"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-blue-400">
            Let&apos;s Connect
          </h2>
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://github.com/AkhilaAnnireddy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-blue-300 hover:text-blue-500 transition-colors"
            >
              <Github className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/akhilaannireddy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-blue-300 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="mailto:akhilaannireddy0605@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-blue-300 hover:text-blue-500 transition-colors"
            >
              <Mail className="h-8 w-8" />
            </motion.a>
          </div>

          <div className="max-w-4xl mx-auto text-center mt-8">
            <blockquote className="text-xl font-light italic text-blue-300">
              <footer className="text-lg text-blue-400 mt-4">
                &quot;In a world full of choices, I&apos;m grateful you chose to
                stop by.&quot;
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
