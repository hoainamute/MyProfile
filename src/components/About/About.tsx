import React from 'react';
import { ProfileData } from '../../types';

interface AboutProps {
  data: ProfileData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 print-content">
      <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 dark:text-white">
          About Me
          <div className="hidden md:block h-px flex-1 bg-slate-100 dark:bg-slate-800"></div>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {data.about}
        </p>
      </div>
    </section>
  );
};

export default About;