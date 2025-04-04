import React from 'react';
import { Link } from 'react-router-dom';
import { Star, StarHalf, Bookmark, BookmarkX, TrendingUp as Trending, Sparkle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBookmarks } from '../contexts/BookmarksContext';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const cardVariants = {
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

export function ProductCard({ product }: ProductCardProps) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="text-yellow-500 fill-current" size={18} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="text-yellow-500 fill-current" size={18} />);
    }

    return stars;
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48">
        <Link to={`/product/${product.id}`}>
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>
        <div className="absolute top-2 right-2 flex gap-2">
          <motion.div
            className="bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {product.category}
          </motion.div>
          {product.trending && (
            <motion.div
              className="bg-red-500 px-2 py-1 rounded-full text-sm font-medium text-white flex items-center gap-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Trending size={14} />
              Trending
            </motion.div>
          )}
          {product.new && (
            <motion.div
              className="bg-blue-500 px-2 py-1 rounded-full text-sm font-medium text-white flex items-center gap-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkle size={14} />
              New
            </motion.div>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <motion.h3
              className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition"
              whileHover={{ x: 5 }}
            >
              {product.name}
            </motion.h3>
          </Link>
          <motion.button
            onClick={() => isBookmarked(product.id) 
              ? removeBookmark(product.id)
              : addBookmark(product)
            }
            className="text-gray-600 hover:text-gray-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isBookmarked(product.id) ? (
              <BookmarkX size={20} className="text-blue-600" />
            ) : (
              <Bookmark size={20} />
            )}
          </motion.button>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {renderStars(product.rating)}
            <span className="ml-2 text-gray-600">({product.reviews?.length || 0})</span>
          </motion.div>
          <motion.span
            className="text-blue-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {product.price}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}