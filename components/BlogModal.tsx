
import React from 'react';
import { ProfileData } from '../types';

interface BlogModalProps {
  post: ProfileData['blog'][0] | null;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 bg-white/90 dark:bg-slate-800/90 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full text-slate-900 dark:text-white shadow-lg transition-all border border-slate-100 dark:border-slate-700"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto scroll-smooth">
          <div className="relative h-64 md:h-[400px] w-full">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent opacity-40"></div>
          </div>
          
          <div className="p-8 md:p-16 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-indigo-500"></span>
              <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">{post.date}</div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-10 leading-[1.15] tracking-tight">
              {post.title}
            </h2>
            
            <div className="text-slate-800 dark:text-slate-200 text-lg md:text-xl leading-relaxed space-y-8 font-normal">
              {post.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-indigo-600 dark:first-letter:text-indigo-400 first-letter:mr-1 first-letter:float-left contents">
                  {paragraph.split('\n').map((line, lIdx) => (
                    <React.Fragment key={lIdx}>
                      {line}
                      {lIdx < paragraph.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <span className="block h-4"></span>
                </p>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                  HN
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Nguyễn Hoài Nam</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Software Architect</div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Quay lại trang chủ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
