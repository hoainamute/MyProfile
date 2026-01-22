
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Check initial theme from document class
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 no-print">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass px-4 md:px-6 py-3 rounded-2xl shadow-sm">
        <div className="text-xl font-bold gradient-text">PRO.FOLIO</div>
        
        <div className="hidden lg:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-indigo-600 transition">Về tôi</a>
          <a href="#experience" className="hover:text-indigo-600 transition">Kinh nghiệm</a>
          <a href="#projects" className="hover:text-indigo-600 transition">Dự án</a>
          <a href="#blog" className="hover:text-indigo-600 transition">Blog</a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <button 
            onClick={handlePrint}
            className="hidden sm:flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 text-sm font-medium transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Tải CV
          </button>

          <a 
            href="#contact" 
            className="bg-slate-900 dark:bg-indigo-600 text-white px-4 md:px-5 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 dark:hover:bg-indigo-500 transition shadow-sm"
          >
            Liên hệ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
