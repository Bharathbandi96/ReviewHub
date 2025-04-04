import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Search, TrendingUp as Trending, Sparkle, ExternalLink, Star, Clock, Tag, Percent,
  ShieldCheck, Truck, CreditCard, StarHalf,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { AddReviewModal } from '../components/AddReviewModal';
import { useBookmarks } from '../contexts/BookmarksContext';
import { products as initialProducts, blogPosts } from '../data';
import type { CategoryFilter as CategoryFilterType, Product, Review } from '../types';
import { SalesTrends } from '../components/SalesTrends';

export function HomePage() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view');
  const { bookmarks } = useBookmarks();

  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterType | 'all'>('all');
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(initialProducts);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const post = blogPosts[4]

  useEffect(() => {
    const baseProducts = view === 'bookmarks' ? bookmarks : products;
    const filtered = baseProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' ||
        (selectedCategory.sub
          ? product.category === selectedCategory.main && product.subCategory === selectedCategory.sub
          : product.category === selectedCategory.main);
      const matchesSearch = searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
    setDisplayProducts(filtered);
  }, [view, bookmarks, products, selectedCategory, searchQuery]);

  const trendingProducts = products.filter(p => p.trending);
  // const newProducts = products.filter(p => p.new);

  // const handleReviewSubmit = (review: Omit<Review, 'id' | 'helpful'>) => {
  //   setProducts(currentProducts =>
  //     currentProducts.map(p => {
  //       if (p.id === review.productId) {
  //         return {
  //           ...p,
  //           reviews: [...(p.reviews || []), { ...review, id: `r${Date.now()}`, helpful: 0 }]
  //         };
  //       }
  //       return p;
  //     })
  //   );
  //   setIsModalOpen(false);
  // };

  const getCategoryDisplayName = (category: CategoryFilterType | 'all') => {
    if (category === 'all') return 'All Products';
    if (category.sub) {
      return `${category.sub.charAt(0).toUpperCase() + category.sub.slice(1)} ${category.main.charAt(0).toUpperCase() + category.main.slice(1)}`;
    }
    return `${category.main.charAt(0).toUpperCase() + category.main.slice(1)} Products`;
  };

  const renderMagazineHeader = () => (
    <div className="relative bg-gradient-to-b from-blue-50 to-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-6xl font-roboto font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            ReviewHub
          </h1>
          <p className="text-gray-600 text-xl italic mb-8">
            Your Guide to Smart Shopping & Better Living
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-green-500" />
              Verified Deals
            </div>
            <div className="flex items-center gap-2">
              <Percent size={20} className="text-blue-500" />
              Price Tracking
            </div>
            <div className="flex items-center gap-2">
              <Truck size={20} className="text-purple-500" />
              Shipping Info
            </div>
            <div className="flex items-center gap-2">
              <CreditCard size={20} className="text-red-500" />
              Payment Options
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeaturedDeals = () => (

    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Deal of the Day */}
        {trendingProducts[0] && (
          <motion.div
            className="relative mb-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="text-white space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500">
                  <Trending size={16} className="mr-1" /> Deal of the Day
                </div>
                <h2 className="text-4xl font-bold">{trendingProducts[0].name}</h2>
                <p className="text-gray-200 text-lg">{trendingProducts[0].description}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400" size={20} />
                    <span>{trendingProducts[0].rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="text-blue-300" size={20} />
                    <span>Best Price Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-blue-300" size={20} />
                    <span>Limited Time Offer</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-sm text-gray-300">Starting from</div>
                    <div className="text-3xl font-bold">{trendingProducts[0].price}</div>
                  </div>
                  <a
                    href={trendingProducts[0].purchaseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
                  >
                    Shop Now
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src={trendingProducts[0].image}
                  alt={trendingProducts[0].name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Latest Deals */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8">Latest Deals & Offers</h2>
          <div className="grid gap-8">
            {trendingProducts.slice(0, 5).map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[400px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.trending && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Trending size={14} />
                        Trending
                      </div>
                    )}
                    {product.new && (
                      <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Sparkle size={14} />
                        New
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span className="capitalize">{product.category}</span>
                        <span>•</span>
                        <span>{product.brand}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(Math.floor(product.rating))].map((_, i) => (
                            <Star key={i} size={18} className="text-yellow-400 fill-current" />
                          ))}
                          {product.rating % 1 >= 0.5 && (
                            <StarHalf size={18} className="text-yellow-400 fill-current" />
                          )}
                        </div>
                        <span className="text-gray-600">
                          ({product.reviews?.length || 0} reviews)
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">{product.description}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        {product.features?.slice(0, 4).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <ShieldCheck size={16} className="text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="border-t border-gray-100 pt-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-gray-500">Best Price</div>
                            <div className="text-3xl font-bold text-blue-600">{product.price}</div>
                            {product.sales?.[0]?.discount && (
                              <div className="text-sm text-red-500 flex items-center gap-1">
                                <Percent size={14} />
                                Save {product.sales[0].discount.percentage}% off
                              </div>
                            )}
                          </div>
                          <a
                            href={product.purchaseLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                          >
                            Shop Now
                            <ExternalLink size={18} />
                          </a>
                        </div>

                        {product.sales && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium text-gray-700">Available at:</div>
                            <div className="grid grid-cols-2 gap-4">
                              {product.sales.map((sale, i) => (
                                <a
                                  key={i}
                                  href={sale.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between text-sm p-2 rounded-lg border border-gray-200 hover:border-blue-500 transition"
                                >
                                  <span>{sale.platform}</span>
                                  <span className="font-medium">{sale.price}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {product.sales?.[0]?.shipping && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Truck size={16} className="text-blue-500" />
                            {product.sales[0].shipping}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Retailers */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8">Featured Retailers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Tesla Direct',
                logo: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800',
                description: 'Official Tesla store with direct pricing and full warranty coverage.',
                benefits: ['Factory warranty', 'Direct support', 'Test drives available']
              },
              {
                name: 'CarMax',
                logo: 'https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=800',
                description: 'Certified pre-owned vehicles with comprehensive inspection.',
                benefits: ['90-day warranty', 'No-haggle pricing', 'Free delivery']
              },
              {
                name: 'Sephora',
                logo: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800',
                description: 'Premium beauty products with rewards program.',
                benefits: ['Beauty Insider points', 'Free samples', 'Expert advice']
              }
            ].map((retailer, index) => (
              <motion.div
                key={retailer.name}
                className="bg-white rounded-xl shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={retailer.logo}
                  alt={retailer.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{retailer.name}</h3>
                <p className="text-gray-600 mb-4">{retailer.description}</p>
                <ul className="space-y-2">
                  {retailer.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <ShieldCheck size={16} className="text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Shopping Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8">Smart Shopping Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Price Tracking',
                icon: <Trending className="text-blue-500" size={24} />,
                description: 'Monitor price changes across retailers to find the best time to buy.'
              },
              {
                title: 'Verified Reviews',
                icon: <ShieldCheck className="text-green-500" size={24} />,
                description: 'Read authentic user reviews and expert opinions before making a decision.'
              },
              {
                title: 'Shipping Calculator',
                icon: <Truck className="text-purple-500" size={24} />,
                description: 'Compare shipping costs and delivery times from different retailers.'
              }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                className="bg-white rounded-xl shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {tip.icon}
                  <h3 className="text-lg font-bold">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recent Blog Posts */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Match: Cars for Every Adventure</h1>
        <section>
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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

                <h1 className="text-xl font-bold text-gray-900 mb-4">{post.title}</h1>
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
          </motion.div>

          <h2 className="text-3xl font-serif font-bold mb-8">Further Readings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Clock size={14} />
                    {post.readTime}
                    <span>•</span>
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <a href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800">
                      Read More
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Magazine Header */}
      {!view && !searchQuery && selectedCategory === 'all' && renderMagazineHeader()}

      {/* Search and Filters */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4 items-center">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                showSubCategories={selectedCategory !== 'all'}
              />
              {/* <motion.button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlusCircle size={20} />
                <span className="hidden sm:inline">Add Review</span>
              </motion.button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Magazine Style Layout */}
      {!view && !searchQuery && selectedCategory === 'all' && renderFeaturedDeals()}

      {/* Category-specific Products */}
      {(selectedCategory !== 'all' || searchQuery || view === 'bookmarks') && (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {view === 'bookmarks'
                ? 'Your Bookmarks'
                : getCategoryDisplayName(selectedCategory)}
            </h2>
            {displayProducts.length === 0 ? (
              <motion.div
                className="text-center py-12 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-500">No products found.</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {displayProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.section>
        </div>
      )}

      {/* <AddReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleReviewSubmit}
      /> */}
    </main>
  );
}

export default HomePage;