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
    <div className={`border border-grey ${className}`} data-aos="fade-up" data-aos-duration="1000">
      <Image
        src={visuals[0]}
        width={0}
        height={0}
        sizes="100vw"
        alt={title}
        className="md:h-[150px] lg:h-[250px] w-full object-cover border-b border-grey"
      />
      <div className="p-2 border-b border-grey">
        <Text className="md:line-clamp-2 line-clamp-3 hover:line-clamp-none">{caption}</Text>
      </div>
      <div className="grid gap-3 p-4">
        <div className="h-10">
        <h3 className="text-xl line-clamp-1 hover:line-clamp-none bg-background">{title}</h3>
        </div>
        <div className="h-20 z-10">
          <Text className="text-sm line-clamp-3 hover:line-clamp-none bg-background">
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
