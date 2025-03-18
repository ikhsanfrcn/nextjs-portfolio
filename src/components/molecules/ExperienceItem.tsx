import { Text } from "../atoms/Text";

interface ExperienceItemProps {
  startDate: string;
  endDate: string;
  companyName: string;
  description: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  startDate,
  endDate,
  companyName,
  description,
}) => (
  <div className="flex max-sm:flex-col justify-between">
    <div className="text-center md:w-[20%] lg:w-[15%]">
      <div className="border border-grey p-2">
        <Text>{startDate}</Text>
        <Text>{endDate}</Text>
      </div>
    </div>
    <div className="md:w-[75%] lg:w-[80%]">
      <Text className="p-2 border border-grey text-white text-2xl">{companyName}</Text>
      <div className="p-2 border border-grey">
        <Text className="line-clamp-2 hover:line-clamp-none bg-background">{description}</Text>
      </div>
    </div>
  </div>
);