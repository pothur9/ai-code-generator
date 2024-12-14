import React from 'react';
import { Card } from '../shared/Card';
import type { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <article>
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <a
          href={`#${post.id}`}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        >
          Read more →
        </a>
      </article>
    </Card>
  );
}