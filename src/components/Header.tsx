import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Bookmark, BookOpen } from 'lucide-react';
import { useBookmarks } from '../contexts/BookmarksContext';

export function Header() {
  const { bookmarks } = useBookmarks();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            ReviewHub
            <Star className="text-yellow-500" size={24} />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <BookOpen size={20} />
              <span className="hidden sm:inline">Blog</span>
            </Link>
            <Link
              to="/?view=bookmarks"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Bookmark size={20} />
              <span className="hidden sm:inline">Bookmarks</span>
              {bookmarks.length > 0 && (
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {bookmarks.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}