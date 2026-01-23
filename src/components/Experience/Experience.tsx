import React from 'react';
import { ProfileData } from '../../types';
import SkillsSection from './SkillsSection';
import ExperienceTimeline from './ExperienceTimeline';

interface ExperienceProps {
  data: ProfileData;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-20 px-6 print-content">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
        {/* <SkillsSection skills={data.skills} /> */}
        <ExperienceTimeline experience={data.experience} />
      </div>
    </section>
  );
};

export default Experience;