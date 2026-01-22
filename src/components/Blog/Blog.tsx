import React from 'react';
import { ProfileData } from '../../types';
import BlogCard from './BlogCard';

interface BlogProps {
  posts: ProfileData['blog'];
  onSelectPost: (post: ProfileData['blog'][0]) => void;
}

const Blog: React.FC<BlogProps> = ({ posts, onSelectPost }) => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900 no-print">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Latest Insights</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Thoughts on technology, leadership, and engineering.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onSelect={() => onSelectPost(post)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;