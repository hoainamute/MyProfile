import React from 'react';
import { ProfileData } from '../../types';

interface ContactProps {
  data: ProfileData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="py-20 px-6 no-print">
      <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] text-center border-none shadow-xl">
        <h2 className="text-4xl font-bold mb-6 dark:text-white">
          Let's build something amazing.
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
          Tôi luôn sẵn sàng cho các dự án mới hoặc những cơ hội hợp tác thú vị. 
          Hãy liên hệ với tôi qua email hoặc mạng xã hội.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href={`mailto:${data.email}`} 
            className="bg-slate-900 dark:bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-200"
          >
            Send an Email
          </a>
          <div className="flex items-center justify-center gap-6">
            <a 
              href={data.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-all hover:-translate-y-1"
            >
              LinkedIn
            </a>
            <a 
              href={data.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-all hover:-translate-y-1"
            >
              GitHub
            </a>
            {/* ✅ THÊM FACEBOOK */}
            {data.facebook && (
              <a 
                href={data.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:text-blue-600 dark:hover:text-blue-400 shadow-sm transition-all hover:-translate-y-1"
              >
                Facebook
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;