import React from 'react';
import { ProfileData } from '../../types';
import ImageCarousel from './ImageCarousel';

interface HeroProps {
  data: ProfileData;
  onPrint: () => void;
}

const Hero: React.FC<HeroProps> = ({ data, onPrint }) => {
  return (
    <section className="pt-32 pb-20 px-6 print-content">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Hello 👋, I'm <span className="gradient-text">{data.name}</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
            {data.bio}
          </p>
          <div className="flex flex-wrap gap-4 no-print">
            <a 
              href="#contact" 
              className="bg-slate-900 dark:bg-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-indigo-200 transition-all hover:-translate-y-1"
            >
              Say Hello
            </a>
            {/* <button 
              onClick={onPrint}
              className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-3 rounded-2xl font-semibold border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Xuất CV (PDF)
            </button> */}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="order-1 md:order-2 flex justify-center no-print">
          {data.avatarGallery && data.avatarGallery.length > 0 ? (
            <ImageCarousel images={data.avatarGallery} name={data.name} />
          ) : (
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-200 dark:bg-indigo-600 blur-3xl rounded-full opacity-30 dark:opacity-20 animate-pulse"></div>
              <img 
                src={data.avatar} 
                alt={data.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-[3rem] object-cover shadow-2xl border-4 border-white dark:border-slate-800 transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;