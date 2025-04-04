import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data';
import { SalesTrends } from '../components/SalesTrends';

export function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500">Blog post not found.</p>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          Return to blog
        </Link>
      </div>
    );
  }

  return (
    <motion.main 
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to blog
      </button>

      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-6">{post.excerpt}</p>

          <div className="prose max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          {post.salesTrends && (
            <div className="my-8">
              <SalesTrends {...post.salesTrends} />
            </div>
          )}

          {post.relatedProducts && post.relatedProducts.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Related Products</h2>
              <div className="grid gap-4">
                {post.relatedProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="grid gap-2">
                      {product.sales.map((sale, saleIndex) => (
                        <div
                          key={saleIndex}
                          className="flex items-center justify-between text-sm"
                        >
                          <span>{sale.platform}</span>
                          <div className="flex items-center gap-4">
                            <span className="font-medium">{sale.price}</span>
                            <a
                              href={sale.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <ExternalLink size={16} />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-500">Written by {post.author}</p>
          </div>
        </div>
      </article>
    </motion.main>
  );
}