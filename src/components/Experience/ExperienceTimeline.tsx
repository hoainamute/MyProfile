import React from 'react';
import { ProfileData } from '../../types';

interface ExperienceTimelineProps {
  experience: ProfileData['experience'];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experience }) => {
  return (
    <div className="md:col-span-2">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 dark:text-white">
        <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
        Work Experience
      </h2>
      <div className="space-y-12">
        {experience.map((exp, idx) => (
          <div 
            key={idx} 
            className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800 last:border-l-0 pb-4 page-break-inside-avoid"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-900 shadow-sm no-print"></div>
            <div className="mb-1 text-sm font-bold text-indigo-600 dark:text-indigo-400">
              {exp.period}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {exp.position}
            </h3>
            <div className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">
              @ {exp.company}
            </div>
            <ul className="space-y-3">
              {exp.description.map((desc, dIdx) => (
                <li key={dIdx} className="text-slate-500 dark:text-slate-400 text-sm flex items-start gap-2">
                  <span className="text-indigo-400 mt-1.5">•</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;