import React, { createContext, useContext, useState } from 'react';
import type { Product } from '../types';

interface BookmarksContextType {
  bookmarks: Product[];
  addBookmark: (product: Product) => void;
  removeBookmark: (productId: string) => void;
  isBookmarked: (productId: string) => boolean;
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined);

export function BookmarksProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Product[]>([]);

  const addBookmark = (product: Product) => {
    setBookmarks((prev) => [...prev, product]);
  };

  const removeBookmark = (productId: string) => {
    setBookmarks((prev) => prev.filter((p) => p.id !== productId));
  };

  const isBookmarked = (productId: string) => {
    return bookmarks.some((p) => p.id === productId);
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarksContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarksProvider');
  }
  return context;
}