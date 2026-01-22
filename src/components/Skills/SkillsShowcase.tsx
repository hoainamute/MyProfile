import React, { useState, useEffect } from 'react';
import { ProfileData } from '../../types';

interface SkillsShowcaseProps {
  skills: ProfileData['skills'];
}

interface SkillItem {
  name: string;
  percentage: number;
  icon: string;
  color: string;
}

const SkillsShowcase: React.FC<SkillsShowcaseProps> = ({ skills }) => {
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  // Flatten skills và thêm icon + color
  const skillsData: SkillItem[] = [
    { name: 'React & Next.js', percentage: 95, icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'TypeScript', percentage: 90, icon: '📘', color: 'from-blue-500 to-blue-600' },
    { name: 'Performance Optimization', percentage: 92, icon: '⚡', color: 'from-yellow-400 to-orange-400' },
    { name: 'System Design', percentage: 88, icon: '🏗️', color: 'from-purple-400 to-pink-400' },
    { name: 'Node.js & Backend', percentage: 85, icon: '🟢', color: 'from-green-400 to-emerald-400' },
    { name: 'DevOps & CI/CD', percentage: 87, icon: '🚀', color: 'from-red-400 to-rose-400' },
    { name: 'GraphQL & REST API', percentage: 90, icon: '🔌', color: 'from-indigo-400 to-purple-400' },
    { name: 'Database Design', percentage: 86, icon: '🗄️', color: 'from-teal-400 to-cyan-400' },
  ];

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setAnimatedSkills(skillsData.map((_, i) => i));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950 print-content">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            💡 Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Skills & Proficiency
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and mastery levels across different domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 dark:from-slate-800/50 dark:to-slate-800/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Card Content */}
              <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className={`text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-6 flex-1">
                  {skill.name}
                </h3>

                {/* Percentage Display */}
                <div className="mb-4">
                  <div className="flex items-end justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Proficiency
                    </span>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {animatedSkills.includes(idx) ? skill.percentage : 0}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: animatedSkills.includes(idx) ? `${skill.percentage}%` : '0%',
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse"></span>
                    Expert Level
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alternative: Category Breakdown */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 dark:text-white text-center">
            Skill Categories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, idx) => (
              <div
                key={idx}
                className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full hover:shadow-md transition-all transform hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Interested in collaboration or want to discuss a specific technology?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-200 transition-all hover:-translate-y-1"
          >
            Let's Talk
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;