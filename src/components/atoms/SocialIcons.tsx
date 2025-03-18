import { FaGithub, FaLinkedin, FaFigma } from 'react-icons/fa';
import { Icon } from './Icon';

export const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center gap-7 text-3xl text-grey">
      <Icon
        Component={FaGithub}
        link="https://github.com/ikhsanfrcn"
        className='hover:text-black'
      />
      <Icon
        Component={FaLinkedin}
        link="https://linkedin.com/in/ikhsanfrcn"
        className='hover:text-blue-500'
      />
      <Icon
        Component={FaFigma}
        link="https://figma.com/@ikhsanfrcn"
        className='hover:text-primary'
      />
    </div>
  );
};
