import React from 'react';
import { ProfileData } from '../../types';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  data: ProfileData;
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 print-content">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Featured Projects</h2>
            <p className="text-slate-500 dark:text-slate-400">Creative solutions for complex problems.</p>
          </div>
          <a 
            href={data.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all no-print"
          >
            View Github 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;