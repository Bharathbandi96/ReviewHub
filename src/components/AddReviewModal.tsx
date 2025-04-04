import React, { useState } from 'react';
import { X, Upload, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product, Review } from '../types';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: Omit<Review, 'id' | 'helpful'>) => void;
  productId?: string;
}

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

export function AddReviewModal({ isOpen, onClose, onSubmit, productId }: AddReviewModalProps) {
  const [formData, setFormData] = useState({
    userName: '',
    rating: 5,
    comment: '',
    images: [] as string[],
    video: '',
    productId: productId || ''
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      userId: 'u' + Date.now(),
      ...formData,
      date: new Date().toISOString()
    });
    setFormData({
      userName: '',
      rating: 5,
      comment: '',
      images: [],
      video: '',
      productId: productId || ''
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl max-w-2xl w-full p-6"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Write a Review</h2>
              <motion.button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.userName}
                  onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  step="0.5"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Review
                </label>
                <textarea
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Images
                </label>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <label className="flex-1">
                      <motion.div
                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Upload size={24} className="mx-auto mb-2 text-gray-400" />
                        <span className="text-sm text-gray-500">Upload images</span>
                      </motion.div>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                      <AnimatePresence>
                        {formData.images.map((image, index) => (
                          <motion.div
                            key={index}
                            className="relative"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            layout
                          >
                            <img
                              src={image}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <motion.button
                              type="button"
                              onClick={() => handleRemoveImage(index)}
                              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 size={14} />
                            </motion.button>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Video URL (YouTube)
                </label>
                <input
                  type="url"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.video}
                  onChange={(e) => setFormData({ ...formData, video: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </motion.div>

              <div className="flex justify-end gap-3">
                <motion.button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Review
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}