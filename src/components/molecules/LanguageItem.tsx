import { Text } from "../atoms/Text";

interface LanguageItemProps {
  language: string;
  proficiency: string;
}

export const LanguageItem: React.FC<LanguageItemProps> = ({ language, proficiency }) => (
  <div className="flex justify-between">
    <Text>{language}</Text>
    <Text>{proficiency}</Text>
  </div>
);