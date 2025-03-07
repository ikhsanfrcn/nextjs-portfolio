import { MainTemplate } from '../../components/templates/MainTemplate';
import { Text } from '@/components/atoms/Text';
import { FullProjectSection } from '@/components/organisms/projects/FullProjectSection';
import { OfficeProjectSection } from '@/components/organisms/projects/OfficeProjectSection';

export const metadata = {
  title: "My Projects | Creative Web Portfolio",
  description:
    "Explore a selection of my standout web development projects, showcasing creativity, technical skills, and problem-solving abilities.",
  opengraph: {
    url: "",
  },
};

export default function Projects() {
  return (
    <MainTemplate>
      <div className='container mx-auto px-5 lg:px-10'>
        <h1 className='text-3xl text-primary mt-10'>/<span className='text-white'>projects</span></h1>
        <Text className='text-sm'>List of my projects</Text>
      </div>
      <FullProjectSection />
      <OfficeProjectSection />
    </MainTemplate>
  );
}
