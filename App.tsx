
import React, { useState } from 'react';
import { profileData } from './data';
import Navbar from './components/Navbar';
import AiAssistant from './components/AiAssistant';
import BlogModal from './components/BlogModal';
import { ProfileData } from './types';

const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<ProfileData['blog'][0] | null>(null);

  const handlePrint = () => {
    console.log("Preparing PDF Export...");
    window.print();
  };

  return (
    <div className="min-h-screen relative selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors duration-300">
      <Navbar />
      <AiAssistant />
      
      {selectedPost && (
        <BlogModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}

      {/* CV Print-only Header */}
      <div className="cv-header">
        <h1 className="text-4xl font-bold uppercase">{profileData.name}</h1>
        <p className="text-xl text-indigo-700 font-semibold mb-4">{profileData.role}</p>
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 w-full text-sm">
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Location:</strong> {profileData.location}</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/namhoainguyen</p>
          <p><strong>GitHub:</strong> github.com/namhoainguyen</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 print-content">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold mb-6 no-print">
              👋 Available for new projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              I'm <span className="gradient-text">{profileData.name}</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
              {profileData.bio}
            </p>
            <div className="flex flex-wrap gap-4 no-print">
              <a href="#contact" className="bg-slate-900 dark:bg-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-indigo-200 transition-all hover:-translate-y-1">
                Say Hello
              </a>
              <button 
                onClick={handlePrint}
                className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-3 rounded-2xl font-semibold border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 group"
              >
                <svg className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Xuất CV (PDF)
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center no-print">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-200 dark:bg-indigo-600 blur-3xl rounded-full opacity-30 dark:opacity-20 animate-pulse"></div>
              <img 
                src={profileData.avatar} 
                alt={profileData.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-[3rem] object-cover shadow-2xl border-4 border-white dark:border-slate-800 transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 print-content">
        <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 dark:text-white">
            About Me
            <div className="hidden md:block h-px flex-1 bg-slate-100 dark:bg-slate-800"></div>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {profileData.about}
          </p>
        </div>
      </section>

      {/* Skills & Experience */}
      <section id="experience" className="py-20 px-6 print-content">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 dark:text-white">
              <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
              Technical Stack
            </h2>
            <div className="space-y-8">
              {profileData.skills.map((skillGroup, idx) => (
                <div key={idx} className="page-break-inside-avoid">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 shadow-sm print:border-none print:px-0 print:mr-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 dark:text-white">
              <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
              Work Experience
            </h2>
            <div className="space-y-12">
              {profileData.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800 last:border-l-0 pb-4 page-break-inside-avoid">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-900 shadow-sm no-print"></div>
                  <div className="mb-1 text-sm font-bold text-indigo-600 dark:text-indigo-400">{exp.period}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.position}</h3>
                  <div className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">@ {exp.company}</div>
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
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 print-content">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 dark:text-white">Featured Projects</h2>
              <p className="text-slate-500 dark:text-slate-400">Creative solutions for complex problems.</p>
            </div>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all no-print">
              View Github <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {profileData.projects.map((project, idx) => (
              <div key={idx} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden h-64 no-print">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={project.link} className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold">View Details</a>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4 no-print">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-white">{project.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white dark:bg-slate-900 no-print">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Latest Insights</h2>
            <p className="text-slate-500 dark:text-slate-400">Thoughts on technology, leadership, and engineering.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {profileData.blog.map((post) => (
              <article 
                key={post.id} 
                onClick={() => setSelectedPost(post)}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6">
                  <img src={post.coverImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-indigo-700 dark:text-indigo-400 uppercase">
                    Tech Article
                  </div>
                </div>
                <div className="px-1">
                  <div className="text-xs font-semibold text-slate-400 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 dark:text-white transition-colors mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 no-print">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] text-center border-none shadow-xl">
          <h2 className="text-4xl font-bold mb-6 dark:text-white">Let's build something amazing.</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
            Tôi luôn sẵn sàng cho các dự án mới hoặc những cơ hội hợp tác thú vị. Hãy liên hệ với tôi qua email hoặc mạng xã hội.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href={`mailto:${profileData.email}`} className="bg-slate-900 dark:bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-200">
              Send an Email
            </a>
            <div className="flex items-center justify-center gap-6">
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-all hover:-translate-y-1">
                LinkedIn
              </a>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-all hover:-translate-y-1">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 dark:border-slate-800 text-center no-print">
        <div className="text-sm text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {profileData.name}. Designed & Built with ❤️
        </div>
      </footer>
    </div>
  );
};

export default App;
