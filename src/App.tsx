import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import HomePage from './pages/HomePage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { BookmarksProvider } from './contexts/BookmarksContext';

function App() {
  return (
    <BrowserRouter>
      <BookmarksProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
          </Routes>
        </div>
      </BookmarksProvider>
    </BrowserRouter>
  );
}

export default App;