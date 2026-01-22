import React from 'react';
import { ProfileData } from '../../types';
import LazyImage from '../LazyImage';

interface BlogCardProps {
  post: ProfileData['blog'][0];
  onSelect: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onSelect }) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <article 
      onClick={onSelect}
      onKeyPress={handleKeyPress}
      className="flex flex-col group cursor-pointer focus-visible:outline-2 focus-visible:outline-indigo-600 rounded-2xl"
      role="button"
      tabIndex={0}
      aria-label={`Read article: ${post.title}`}
    >
      <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800">
        <LazyImage 
          src={post.coverImage} 
          alt={`${post.title} cover`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-indigo-700 dark:text-indigo-400 uppercase">
          Tech Article
        </div>
      </div>
      <div className="px-1">
        <time className="text-xs font-semibold text-slate-400" dateTime={post.date}>
          {post.date}
        </time>
        <h3 className="text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 dark:text-white transition-colors mb-3 line-clamp-2 mt-2">
          {post.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          Read More 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;