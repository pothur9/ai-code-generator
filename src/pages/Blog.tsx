import React from 'react';

import { BlogCard } from '../components/blog/BlogCard';
import { blogPosts } from '../data/blog-posts';

export function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">Latest updates, articles, and resources</p>
    </div>

    <div className="grid gap-8">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  </div>
   
  );
}