import React from 'react';
import { ProfileData } from '../../types';

interface ProjectCardProps {
  project: ProfileData['projects'][0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative overflow-hidden h-64 no-print">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a 
            href={project.link} 
            className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-indigo-100 transition-colors"
          >
            View Details
          </a>
        </div>
      </div>
      <div className="p-8">
        <div className="flex gap-2 mb-4 no-print">
          {project.tags.map((tag, tIdx) => (
            <span 
              key={tIdx} 
              className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 dark:text-white">{project.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;