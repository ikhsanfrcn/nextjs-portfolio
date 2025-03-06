import { FaGithub, FaLinkedin, FaFigma } from 'react-icons/fa';
import { Icon } from './Icon';

export const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center gap-7 text-3xl text-gray">
      <Icon
        Component={FaGithub}
        link="https://github.com/ikhsanfrcn"
      />
      <Icon
        Component={FaLinkedin}
        link="https://linkedin.com/in/ikhsanfrcn"
      />
      <Icon
        Component={FaFigma}
        link="https://figma.com/@ikhsanfrcn"
      />
    </div>
  );
};
