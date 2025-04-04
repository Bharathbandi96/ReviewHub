import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { BlogPost } from '../types';

interface BlogListProps {
  posts: BlogPost[];
  category?: string;
}

const postVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export function BlogList({ posts, category }: BlogListProps) {
  const filteredPosts = category
    ? posts.filter(post => post.category === category)
    : posts;

  return (
    <div className="grid grid-cols-1 gap-8">
      {filteredPosts.map(post => (
        <motion.article
          key={post.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          variants={postVariants}
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <Link to={`/blog/${post.id}`}>
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </Link>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="capitalize px-3 py-1 bg-gray-100 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {post.author}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition">
                  {post.title}
                </Link>
              </h3>

              <p className="text-gray-600 text-lg mb-6">{post.excerpt}</p>

              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                Read Full Article
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}