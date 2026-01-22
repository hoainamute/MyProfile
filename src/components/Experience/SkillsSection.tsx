import React from 'react';
import { ProfileData } from '../../types';

interface SkillsSectionProps {
  skills: ProfileData['skills'];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className="md:col-span-1">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 dark:text-white">
        <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
        Technical Stack
      </h2>
      <div className="space-y-8">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="page-break-inside-avoid">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 shadow-sm print:border-none print:px-0 print:mr-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;