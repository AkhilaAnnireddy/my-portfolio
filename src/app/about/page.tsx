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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 overflow-y-auto scrollbar-blue">
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
          Passion, Creativity & Little Joys
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-lg text-blue-200 max-w-3xl"
        >
          Life is more than just coding—it's about the simple joys. Whether it's
          sipping coffee, dancing, watching stars, or taking long walks, I find
          happiness in the little moments that make life beautiful.
          <br />
          <br />
          Let me share everything that makes my heart happy! 💙
        </motion.p>
      </motion.section>
      {/* Things That Make Me Happy */}
      <motion.section
        className="py-20 px-8 bg-gradient-to-b from-blue-200 to-blue-400 text-blue-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Things That Make Me Smile !!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Coffee */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <Coffee className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">
                Coffee Love ☕
              </h3>
              <p className="text-blue-800">My fuel for coding & creativity.</p>
            </motion.div>

            {/* Cooking */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <UtensilsCrossed className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">
                Cooking 🍳
              </h3>
              <p className="text-blue-800">Trying new recipes is my therapy.</p>
            </motion.div>

            {/* Books */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">Books 📚</h3>
              <p className="text-blue-800">
                Thrillers & romcoms keep me hooked.
              </p>
            </motion.div>

            {/* Dancing */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <Music className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">
                Dancing 💃
              </h3>
              <p className="text-blue-800">
                Music + Movement = My Happy Place.
              </p>
            </motion.div>

            {/* Mandala Art */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <Palette className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">
                Mandala Art 🎨
              </h3>
              <p className="text-blue-800">
                Creating patterns brings me peace.
              </p>
            </motion.div>

            {/* Pet Mom */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <PawPrint className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">
                Bash, My Hamster 🐹
              </h3>
              <p className="text-blue-800">Tiny but full of personality!</p>
            </motion.div>

            {/* Long Walks */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <Footprints className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">
                Nature Walks 🚶‍♀️
              </h3>
              <p className="text-blue-800">
                Exploring Boulder’s beauty on foot.
              </p>
            </motion.div>

            {/* Shopping */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <ShoppingBag className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">
                Shopping 🛍️
              </h3>
              <p className="text-blue-800">Retail therapy is real!</p>
            </motion.div>

            {/* Ice Cream */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <IceCream2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">
                Ice Cream 🍦
              </h3>
              <p className="text-blue-800">My stress relief solution.</p>
            </motion.div>

            {/* Stargazing */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">
                Stargazing ✨
              </h3>
              <p className="text-blue-800">The night sky is pure magic.</p>
            </motion.div>

            {/* Peanut Butter */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-300 rounded-xl shadow-lg"
            >
              <Nut className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">
                Peanut Butter 🥜
              </h3>
              <p className="text-blue-800">A spoonful of happiness.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section (Add your referenced code here) */}
      <section
        ref={contactRef}
        id="contact"
        className="py-20 px-8 bg-gradient-to-b from-transparent to-purple-100"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://github.com/aditi-v79"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Github className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/aditi-vakeel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-gray-600 hover:text-purple-500 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="mailto:aditivakeel@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Mail className="h-8 w-8" />
            </motion.a>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-1xl font-light italic text-gray-800">
              <footer className="text-lg text-gray-600 mt-4">
                "In a world full of choices, I'm grateful you chose to stop by."
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
