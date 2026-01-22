import React from 'react';
import { ProfileData } from '../../types';

interface BlogCardProps {
  post: ProfileData['blog'][0];
  onSelect: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onSelect }) => {
  return (
    <article 
      onClick={onSelect}
      className="flex flex-col group cursor-pointer"
    >
      <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6">
        <img 
          src={post.coverImage} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          alt={post.title} 
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-indigo-700 dark:text-indigo-400 uppercase">
          Tech Article
        </div>
      </div>
      <div className="px-1">
        <div className="text-xs font-semibold text-slate-400 mb-2">{post.date}</div>
        <h3 className="text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 dark:text-white transition-colors mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          Read More 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;