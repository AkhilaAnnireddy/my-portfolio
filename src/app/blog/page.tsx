"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Calendar, User } from "lucide-react";

// Sample blog data (Replace this with dynamic content later)
const blogs = [
  {
    id: 1,
    title: "Understanding Machine Learning: A Beginner’s Guide",
    author: "Akhila Annireddy",
    date: "March 10, 2025",
    description: "An introduction to ML concepts, algorithms, and their real-world applications.",
    link: "/blog/machine-learning",
  },
  {
    id: 2,
    title: "AWS vs Azure: Choosing the Right Cloud Platform",
    author: "Akhila Annireddy",
    date: "March 5, 2025",
    description: "A detailed comparison of AWS and Azure to help you pick the best cloud solution.",
    link: "/blog/aws-vs-azure",
  },
  {
    id: 3,
    title: "Building Scalable Web Apps with React & Spring Boot",
    author: "Akhila Annireddy",
    date: "February 28, 2025",
    description: "A step-by-step guide to integrating React with Spring Boot for scalable web applications.",
    link: "/blog/react-spring-boot",
  },
];

export default function Blog() {
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
            <BookOpen className="inline w-10 h-10 text-blue-400 mr-2" />
            My Blog
          </h1>
          <p className="text-lg text-blue-200">
            Insights, tutorials, and thoughts on technology, AI, and software development.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-blue-900"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{blog.title}</h2>
              <div className="flex items-center text-blue-700 text-sm mb-2">
                <User className="w-4 h-4 mr-1" />
                {blog.author}
                <Calendar className="w-4 h-4 ml-4 mr-1" />
                {blog.date}
              </div>
              <p className="text-blue-800 text-sm mb-4">{blog.description}</p>
              <Link href={blog.link} className="text-blue-700 font-semibold hover:underline flex items-center">
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
