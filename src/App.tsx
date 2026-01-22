import React, { useState, useEffect } from 'react';
import { profileData } from './data';
import { schemaMarkup } from './utils/seo';
import Navbar from './components/Navbar';
import AiAssistant from './components/AiAssistant';
import BlogModal from './components/BlogModal';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CVHeader from './components/CVHeader/CVHeader';
import { ProfileData } from './types';

const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<ProfileData['blog'][0] | null>(null);

  useEffect(() => {
    // Add structured data
    const schemaElement = document.getElementById('schema-markup');
    if (schemaElement) {
      schemaElement.textContent = JSON.stringify(schemaMarkup(profileData));
    }

    // Set page title
    document.title = `${profileData.name} | Senior Frontend Engineer`;
  }, []);

  const handlePrint = () => {
    console.log("Preparing PDF Export...");
    window.print();
  };

  return (
    <div className="min-h-screen relative selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors duration-300">
      {/* Navigation */}
      <Navbar />
      <AiAssistant />
      
      {/* Blog Modal */}
      {selectedPost && (
        <BlogModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}

      {/* CV Print-only Header */}
      <CVHeader data={profileData} />

      {/* Hero Section */}
      <Hero data={profileData} onPrint={handlePrint} />

      {/* About Section */}
      <About data={profileData} />

      {/* Skills & Experience */}
      <Experience data={profileData} />

      {/* Featured Projects */}
      <Projects data={profileData} />

      {/* Blog Section */}
      <Blog 
        posts={profileData.blog} 
        onSelectPost={setSelectedPost}
      />

      {/* Contact Section */}
      <Contact data={profileData} />

      {/* Footer */}
      <Footer name={profileData.name} />
    </div>
  );
};

export default App;