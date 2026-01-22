import React from 'react';
import { ProfileData } from '../../types';

interface CVHeaderProps {
  data: ProfileData;
}

const CVHeader: React.FC<CVHeaderProps> = ({ data }) => {
  return (
    <div className="cv-header">
      <h1 className="text-4xl font-bold uppercase">{data.name}</h1>
      <p className="text-xl text-indigo-700 font-semibold mb-4">{data.role}</p>
      <div className="grid grid-cols-2 gap-x-12 gap-y-2 w-full text-sm">
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Location:</strong> {data.location}</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/namhoainguyen</p>
        <p><strong>GitHub:</strong> github.com/namhoainguyen</p>
      </div>
    </div>
  );
};

export default CVHeader;