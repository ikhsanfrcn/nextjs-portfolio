import { CompleteAppsSection } from '@/components/organisms/projects/CompleteAppsSection';
import { MainTemplate } from '../../components/templates/MainTemplate';
import { SmallProjectSection } from '@/components/organisms/projects/SmallProjectSection';
import { Text } from '@/components/atoms/Text';

export default function Projects() {
  return (
    <MainTemplate>
      <h1 className='text-3xl text-primary mt-10'>/<span className='text-white'>projects</span></h1>
      <Text className='text-sm'>List of my projects</Text>
      <CompleteAppsSection />
      <SmallProjectSection />
    </MainTemplate>
  );
}
