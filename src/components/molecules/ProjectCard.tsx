import Image from "next/image";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";

type ProjectCardProps = {
  className?: string;
  visuals: string[];
  caption:string;
  title: string;
  description: string;
  buttons?: { title: string; onClick: () => void; className?: string }[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  visuals,
  caption,
  title,
  description,
  buttons = [],
}) => {
  return (
    <div className={`border border-gray ${className}`}>
      <Image
        src={visuals[0]}
        width={0}
        height={0}
        sizes="100vw"
        alt={title}
        className="md:h-[150px] lg:h-[250px] w-full object-cover border-b border-gray"
      />
      <div className="p-2 h-20 border-b border-gray">
        <Text className="line-clamp-3 hover:line-clamp-none">{caption}</Text>
      </div>
      <div className="grid gap-3 p-4">
        <h3 className="text-xl line-clamp-1 hover:line-clamp-none">{title}</h3>
        <div className="h-20">
          <Text className="text-sm line-clamp-4 hover:line-clamp-none">
            {description}
          </Text>
        </div>
        <div className="flex gap-3">
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={button.onClick}
              className={button.className}
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
