import React from 'react';

interface SkillListItemProps {
  title: string;
  skills: string;
}

export const SkillListItem: React.FC<SkillListItemProps> = ({ title, skills }) => {
  return (
    <div className="border border-gray">
      <h4 className="border-b border-gray p-2">{title}</h4>
      <p className="p-2">{skills}</p>
    </div>
  );
};
