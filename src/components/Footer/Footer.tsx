import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800 text-center no-print">
      <div className="text-sm text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} {name}. Designed & Built with ❤️
      </div>
    </footer>
  );
};

export default Footer;