import React from 'react';
import { motion } from 'framer-motion';
import { BlogList } from '../components/BlogList';
import { blogPosts } from '../data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Posts</h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <BlogList posts={blogPosts} />
      </motion.div>
    </main>
  );
}