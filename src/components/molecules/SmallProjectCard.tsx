import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";

type ProjectCard = {
  caption: string;
  title: string;
  description: string;
  className?: string;
  buttons?: { title: string; onClick: () => void; className?: string }[];
};

export const SmallProjectCard: React.FC<ProjectCard> = ({
  caption,
  title,
  description,
  className = "",
  buttons = [],
}) => {
  return (
    <div className={`border border-gray${className}`}>
      <div className="border-b p-2">
        <Text className="line-clamp-1 hover:line-clamp-none">{caption}</Text>
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
