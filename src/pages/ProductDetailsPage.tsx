import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Star, StarHalf, ThumbsUp, ThumbsDown, Bookmark, BookmarkX, 
  ExternalLink, Image as ImageIcon, Play, ShieldCheck, Award, Zap, Scale, 
  DollarSign, BarChart3, CheckCircle2, XCircle, AlertTriangle, Truck, 
  Clock, PenTool as Tool 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products as initialProducts, blogPosts } from '../data';
import { useBookmarks } from '../contexts/BookmarksContext';
import { RatingChart } from '../components/RatingChart';
import { BlogList } from '../components/BlogList';
import { AddReviewModal } from '../components/AddReviewModal';
import type { Review, Product } from '../types';

export function ProductDetailsPage() {
  const { id } = useParams();
  const [products, setProducts] = useState(initialProducts);
  const product = products.find(p => p.id === id);
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<'overview' | 'testing' | 'comparison'>('overview');
  const [helpfulReviews, setHelpfulReviews] = useState<Record<string, boolean>>({});

  const relatedPosts = product
    ? blogPosts.filter(post => post.category === product.category)
    : [];

  const similarProducts = product
    ? products.filter(p => 
        p.category === product.category && 
        p.id !== product.id
      ).slice(0, 3)
    : [];

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
        <p className="text-xl text-gray-500">Product not found.</p>
        <Link to="/" className="text-lg text-blue-600 hover:underline mt-4 inline-block">
          Return to home
        </Link>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="text-yellow-500 fill-current" size={24} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="text-yellow-500 fill-current" size={24} />);
    }

    return stars;
  };

  const handleReviewSubmit = (review: Omit<Review, 'id' | 'helpful'>) => {
    const newReview = { ...review, id: `r${Date.now()}`, helpful: 0 };
    setProducts(currentProducts => 
      currentProducts.map(p => {
        if (p.id === product.id) {
          return {
            ...p,
            reviews: [...(p.reviews || []), newReview]
          };
        }
        return p;
      })
    );
    setIsModalOpen(false);
  };

  const handleHelpfulClick = (reviewId: string) => {
    setHelpfulReviews(prev => {
      const wasHelpful = prev[reviewId];
      return { ...prev, [reviewId]: !wasHelpful };
    });

    setProducts(currentProducts =>
      currentProducts.map(p => {
        if (p.id === product.id) {
          return {
            ...p,
            reviews: p.reviews?.map(r => {
              if (r.id === reviewId) {
                return {
                  ...r,
                  helpful: helpfulReviews[reviewId] ? r.helpful - 1 : r.helpful + 1
                };
              }
              return r;
            })
          };
        }
        return p;
      })
    );
  };

  const renderTestingDetails = () => (
    <div className="space-y-8">
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <Tool className="text-blue-600" size={28} />
          Testing Methodology
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="text-blue-600" size={28} />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Duration</h4>
              <p className="text-lg text-gray-600">30-day comprehensive testing period</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle2 className="text-green-600" size={28} />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Quality Checks</h4>
              <p className="text-lg text-gray-600">Multiple inspections by certified experts</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <BarChart3 className="text-purple-600" size={28} />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Performance Metrics</h4>
              <p className="text-lg text-gray-600">Standardized testing procedures across multiple scenarios</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold mb-6">Test Results</h3>
        <div className="space-y-8">
          <div className="grid gap-6">
            <div className="border-b pb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-medium">Performance</span>
                <div className="flex items-center gap-2">
                  {renderStars(4.8)}
                  <span className="text-lg text-gray-600">4.8/5</span>
                </div>
              </div>
              <p className="text-lg text-gray-600">Exceptional performance in all standard metrics</p>
            </div>
            <div className="border-b pb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-medium">Build Quality</span>
                <div className="flex items-center gap-2">
                  {renderStars(4.5)}
                  <span className="text-lg text-gray-600">4.5/5</span>
                </div>
              </div>
              <p className="text-lg text-gray-600">Premium materials and solid construction</p>
            </div>
            <div className="border-b pb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-medium">Value for Money</span>
                <div className="flex items-center gap-2">
                  {renderStars(4.3)}
                  <span className="text-lg text-gray-600">4.3/5</span>
                </div>
              </div>
              <p className="text-lg text-gray-600">Competitive pricing for the features offered</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold mb-6">Long-term Reliability</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg text-green-600">
            <CheckCircle2 size={24} />
            <span>Passed 1000-hour endurance test</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-green-600">
            <CheckCircle2 size={24} />
            <span>Zero critical failures reported</span>
          </div>
          <div className="flex items-center gap-3 text-lg text-yellow-600">
            <AlertTriangle size={24} />
            <span>Minor wear observed after extended use</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderComparison = () => {
    if (!product.comparableProducts || product.comparableProducts.length === 0) {
      return (
        <div className="text-center py-8 bg-gray-50 rounded-xl">
          <p className="text-xl text-gray-500">No comparison data available for this product.</p>
        </div>
      );
    }

    const specKeys = Array.from(new Set([
      ...Object.keys(product.specifications),
      ...product.comparableProducts.flatMap(p => Object.keys(p.specifications))
    ]));

    return (
      <div className="space-y-8">
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-lg font-medium text-gray-500">Features</th>
                <th className="px-6 py-4 text-left text-lg font-medium text-gray-500">{product.name}</th>
                {product.comparableProducts.map(p => (
                  <th key={p.name} className="px-6 py-4 text-left text-lg font-medium text-gray-500">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-lg text-gray-500">Price</td>
                <td className="px-6 py-4 text-lg font-medium text-gray-900">{product.price}</td>
                {product.comparableProducts.map(p => (
                  <td key={p.name} className="px-6 py-4 text-lg text-gray-900">{p.price}</td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 text-lg text-gray-500">Rating</td>
                <td className="px-6 py-4 text-lg font-medium text-gray-900">
                  {product.rating} ★
                </td>
                {product.comparableProducts.map(p => (
                  <td key={p.name} className="px-6 py-4 text-lg text-gray-900">
                    {p.rating} ★
                  </td>
                ))}
              </tr>
              {specKeys.map(key => (
                <tr key={key}>
                  <td className="px-6 py-4 text-lg text-gray-500">{key}</td>
                  <td className="px-6 py-4 text-lg font-medium text-gray-900">
                    {product.specifications[key] || '-'}
                  </td>
                  {product.comparableProducts && product.comparableProducts.map(p => (
                    <td key={p.name} className="px-6 py-4 text-lg text-gray-900">
                      {p.specifications[key] || '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Key Differences</h3>
          <div className="grid gap-6">
            {product.comparableProducts.map(p => (
              <div key={p.name} className="border-b pb-6 last:border-b-0">
                <h4 className="text-xl font-medium mb-4">{p.name} vs {product.name}</h4>
                <ul className="space-y-3">
                  {p.keyDifferences.map((diff, index) => (
                    <li key={index} className="flex items-center gap-3 text-lg text-gray-600">
                      <CheckCircle2 size={20} className="text-blue-500" />
                      {diff}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Value Analysis</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-medium mb-3 flex items-center gap-3">
                <DollarSign className="text-green-600" size={24} />
                Price Comparison
              </h4>
              <p className="text-lg text-gray-600">
                {product.name} offers competitive pricing in its category, with features that justify the cost.
                {product.sales?.[0]?.discount && 
                  ` Currently available with a ${product.sales[0].discount.percentage}% discount.`}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-3 flex items-center gap-3">
                <Scale className="text-blue-600" size={24} />
                Feature-to-Price Ratio
              </h4>
              <p className="text-lg text-gray-600">
                Excellent value proposition with premium features at a reasonable price point.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-3 flex items-center gap-3">
                <Zap className="text-yellow-600" size={24} />
                Performance Value
              </h4>
              <p className="text-lg text-gray-600">
                Outstanding performance metrics compared to similarly priced alternatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center text-lg text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft size={24} className="mr-2" />
        Back to products
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-xl text-gray-500 mb-4">{product.brand}</p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={product.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-lg"
                >
                  Buy Now
                  <ExternalLink size={20} />
                </a>
                <button
                  onClick={() => isBookmarked(product.id) 
                    ? removeBookmark(product.id)
                    : addBookmark(product)
                  }
                  className="text-gray-600 hover:text-gray-900"
                >
                  {isBookmarked(product.id) ? (
                    <BookmarkX size={28} className="text-blue-600" />
                  ) : (
                    <Bookmark size={28} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              {renderStars(product.rating)}
              <span className="text-lg text-gray-600">
                ({product.reviews?.length || 0} reviews)
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div>
                <div className="text-lg text-gray-500">Price</div>
                <div className="text-3xl font-bold text-blue-600">{product.price}</div>
                {product.sales?.[0]?.discount && (
                  <div className="text-lg text-gray-500 line-through">
                    Was: <del className='text-decoration: line-through'>{product.sales[0].discount.original}</del>
                  </div>
                )}
              </div>
              {product.sales?.[0]?.discount && (
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-lg">
                  Save {product.sales[0].discount.percentage}% off
                </div>
              )}
            </div>

            <p className="text-xl text-gray-700 mb-6">{product.description}</p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-lg text-gray-500">Rating</div>
                <div className="text-2xl font-semibold">{product.rating}/5</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-lg text-gray-500">Reviews</div>
                <div className="text-2xl font-semibold">{product.reviews?.length || 0}</div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-lg text-gray-700">
                    <ShieldCheck className="text-green-500" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability */}
            {product.sales && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Available At</h2>
                <div className="space-y-3">
                  {product.sales.map((sale, index) => (
                    <a
                      key={index}
                      href={sale.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition"
                    >
                      <div>
                        <div className="text-xl font-medium">{sale.platform}</div>
                        {sale.shipping && (
                          <div className="text-lg text-gray-500 flex items-center gap-2">
                            <Truck size={18} />
                            {sale.shipping}
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{sale.price}</div>
                        {sale.discount && (
                          <div className="text-lg text-red-500">
                            Was: <del className='text-decoration: line-through'>{sale.discount.original}</del>
                          </div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex border-b border-gray-200">
            <button
              className={`px-8 py-4 text-lg font-medium ${
                activeTab === 'overview'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-8 py-4 text-lg font-medium ${
                activeTab === 'testing'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('testing')}
            >
              Testing Details
            </button>
            <button
              className={`px-8 py-4 text-lg font-medium ${
                activeTab === 'comparison'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('comparison')}
            >
              Comparison
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Pros & Cons */}
                {(product.pros || product.cons) && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {product.pros && (
                      <div>
                        <h2 className="text-2xl font-semibold mb-4 text-green-600">Pros</h2>
                        <ul className="space-y-3">
                          {product.pros.map((pro, index) => (
                            <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                              <CheckCircle2 className="text-green-500" size={24} />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {product.cons && (
                      <div>
                        <h2 className="text-2xl font-semibold mb-4 text-red-600">Cons</h2>
                        <ul className="space-y-3">
                          {product.cons.map((con, index) => (
                            <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                              <XCircle className="text-red-500" size={24} />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Specifications */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="border-b border-gray-200 pb-3">
                          <p className="text-lg text-gray-500">{key}</p>
                          <p className="text-xl text-gray-900">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rating Chart */}
                {product.monthlyRatings && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Rating Trends</h2>
                    <RatingChart data={product.monthlyRatings} />
                  </div>
                )}
              </div>
            )}

            {activeTab === 'testing' && renderTestingDetails()}
            {activeTab === 'comparison' && renderComparison()}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-200 p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Reviews</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg"
            >
              Write a Review
            </button>
          </div>

          <div className="space-y-8">
            {product.reviews?.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-8">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-xl font-semibold">{review.userName}</p>
                    <div className="flex items-center gap-2">
                      {renderStars(review.rating)}
                      <span className="text-lg text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <button 
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
                    onClick={() => handleHelpfulClick(review.id)}
                  >
                    {helpfulReviews[review.id] ? (
                      <ThumbsDown size={20} />
                    ) : (
                      <ThumbsUp size={20} />
                    )}
                    <span className="text-lg">{review.helpful}</span>
                  </button>
                </div>
                <p className="text-xl text-gray-700 mt-3 mb-6">{review.comment}</p>

                {/* Review Media */}
                {(review.images && review.images.length > 0 || review.video) && (
                  <div className="flex gap-6 mt-6">
                    {review.images?.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className="relative group"
                      >
                        <img
                          src={image}
                          alt={`Review ${index + 1}`}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-all flex items-center justify-center">
                          <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transition-all" size={24} />
                        </div>
                      </button>
                    ))}
                    {review.video && (
                      <button
                        onClick={() => setSelectedVideo(review.video)}
                        className="relative group"
                      >
                        <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Play className="text-gray-400 group-hover:text-gray-600 transition-all" size={32} />
                        </div>
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
            {(!product.reviews || product.reviews.length === 0) && (
              <p className="text-xl text-gray-500 text-center py-6">
                No reviews yet. Be the first to review this product!
              </p>
            )}
          </div>
        </div>

        {/* Related Blog Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <BlogList posts={relatedPosts} />
          </div>
        )}
      </div>

      {/* Media Modals */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}

        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedVideo(undefined)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                src={selectedVideo}
                title="Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AddReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleReviewSubmit}
        productId={product.id}
      />
    </div>
  );
}