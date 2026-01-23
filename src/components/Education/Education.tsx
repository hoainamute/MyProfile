import React from 'react';
import { ProfileData } from '../../types';

interface EducationProps {
  data: ProfileData;
}

const Education: React.FC<EducationProps> = ({ data }) => {
  if (!data.education || data.education.length === 0) return null;

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-slate-900 print-content">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 dark:text-white">
          Education
          <div className="hidden md:block h-px flex-1 bg-slate-100 dark:bg-slate-800"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {data.education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 rounded-3xl p-8 shadow-sm page-break-inside-avoid"
            >
              <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {edu.period}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {edu.school}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 font-medium mt-2">
                {edu.degree}{edu.field ? ` • ${edu.field}` : ''}
              </p>

              {edu.description && edu.description.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {edu.description.map((line, i) => (
                    <li key={i} className="text-slate-500 dark:text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-indigo-400 mt-1.5">•</span>
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;