"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Calendar, User } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Deploying Machine Learning Models Using AWS Lambda and S3",
    author: "Akhila Annireddy",
    date: "April 11, 2025",
    description:
      "Learn how to deploy ML models with AWS Lambda and S3 for scalable, serverless inference pipelines.",
    link: "/blog/deploy-ml-lambda-s3",
  },
  {
    id: 2,
    title: "A Developer's Guide to SCIM API for User Provisioning",
    author: "Akhila Annireddy",
    date: "April 15, 2025",
    description:
      "Explore how SCIM API simplifies identity management and automates user provisioning in modern apps.",
    link: "/blog/scim",
  },
  {
    id: 3,
    title: "Runtime Database Switching in Spring Boot for Multi-Tenant Apps",
    author: "Akhila Annireddy",
    date: "April 20, 2025",
    description:
      "Master dynamic DB connections in Spring Boot to support multi-tenancy from a single UI.",
    link: "/blog/multipledb",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black p-8 text-blue-200">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4 text-blue-400">
            <BookOpen className="inline w-10 h-10 text-blue-500 mr-2" />
            My Blog
          </h1>
          <p className="text-lg text-blue-300">
            Insights, tutorials, and thoughts on technology, AI, and software
            development.
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
              className="p-6 bg-gray-900 border border-blue-900/40 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-blue-200"
            >
              <h2 className="text-2xl font-bold text-blue-300 mb-2">
                {blog.title}
              </h2>
              <div className="flex items-center text-blue-400 text-sm mb-2">
                <User className="w-4 h-4 mr-1" />
                {blog.author}
                <Calendar className="w-4 h-4 ml-4 mr-1" />
                {blog.date}
              </div>
              <p className="text-blue-300 text-sm mb-4">{blog.description}</p>
              <Link
                href={blog.link}
                className="text-blue-400 font-semibold hover:underline flex items-center"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
