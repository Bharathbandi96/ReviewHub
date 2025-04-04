import React from 'react';
import { Car, Sparkles, Zap, Crown, Sun as Suv, Timer, Droplets, Scissors, Palette, SprayCan as Spray, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import type { MainCategory, CarCategory, BeautyCategory, CategoryFilter } from '../types';

interface CategoryFilterProps {
  selectedCategory: CategoryFilter | 'all';
  onSelectCategory: (category: CategoryFilter | 'all') => void;
  showSubCategories?: boolean;
}

interface CategoryOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  subcategories?: {
    id: CarCategory | BeautyCategory;
    label: string;
    icon: React.ReactNode;
  }[];
}

const categories: CategoryOption[] = [
  {
    id: 'cars',
    label: 'Cars',
    icon: <Car size={20} />,
    subcategories: [
      { id: 'electric', label: 'Electric', icon: <Zap size={16} /> },
      { id: 'luxury', label: 'Luxury', icon: <Crown size={16} /> },
      { id: 'suv', label: 'SUV', icon: <Suv size={16} /> },
      { id: 'sports', label: 'Sports', icon: <Timer size={16} /> },
      { id: 'hybrid', label: 'Hybrid', icon: <Zap size={16} /> }
    ]
  },
  {
    id: 'beauty',
    label: 'Beauty',
    icon: <Sparkles size={20} />,
    subcategories: [
      { id: 'skincare', label: 'Skincare', icon: <Droplets size={16} /> },
      { id: 'haircare', label: 'Hair Care', icon: <Scissors size={16} /> },
      { id: 'makeup', label: 'Makeup', icon: <Palette size={16} /> },
      { id: 'fragrance', label: 'Fragrance', icon: <Spray size={16} /> },
      { id: 'tools', label: 'Tools', icon: <Wrench size={16} /> }
    ]
  }
];

export function CategoryFilter({ selectedCategory, onSelectCategory, showSubCategories = false }: CategoryFilterProps) {
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(
    selectedCategory !== 'all' ? selectedCategory.main : null
  );

  const handleMainCategoryClick = (categoryId: string) => {
    if (!showSubCategories) {
      onSelectCategory({ main: categoryId as MainCategory });
      return;
    }

    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
      onSelectCategory({ main: categoryId as MainCategory });
    } else {
      setExpandedCategory(categoryId);
      onSelectCategory({ main: categoryId as MainCategory });
    }
  };

  const handleSubCategoryClick = (main: MainCategory, sub: CarCategory | BeautyCategory) => {
    onSelectCategory({ main, sub });
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <motion.button
          onClick={() => {
            setExpandedCategory(null);
            onSelectCategory('all');
          }}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </motion.button>

        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => handleMainCategoryClick(category.id)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${
              selectedCategory !== 'all' && selectedCategory.main === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.icon}
            {category.label}
          </motion.button>
        ))}
      </div>

      {showSubCategories && expandedCategory && (
        <motion.div
          className="flex gap-2 pl-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {categories
            .find(c => c.id === expandedCategory)
            ?.subcategories?.map((sub) => (
              <motion.button
                key={sub.id}
                onClick={() => handleSubCategoryClick(
                  expandedCategory as MainCategory,
                  sub.id
                )}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-sm transition ${
                  selectedCategory !== 'all' && 
                  selectedCategory.sub === sub.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {sub.icon}
                {sub.label}
              </motion.button>
            ))}
        </motion.div>
      )}
    </div>
  );
}