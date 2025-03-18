import React from 'react';
import { Text } from '../atoms/Text';

interface SkillListItemProps {
  title: string;
  skills: string;
}

export const SkillListItem: React.FC<SkillListItemProps> = ({ title, skills }) => {
  return (
    <div className="border border-grey">
      <h4 className="border-b border-grey p-2">{title}</h4>
      <Text className="p-2">{skills}</Text>
    </div>
  );
};
