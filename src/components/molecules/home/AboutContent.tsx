"use client";
import { Text } from "../../atoms/Text";
import { Button } from "../../atoms/Button";

interface AboutContentProps {
  showButton?: boolean;
}

export const AboutContent: React.FC<AboutContentProps> = ({
  showButton = true,
}) => {
  return (
    <div className="md:w-[50%]">
      <div className="flex flex-col gap-5 pt-10">
        <Text>Hi, I’m Ikhsan!</Text>
        <Text>
          I am currently enhancing my skills at Purwadhika Bootcamp. As a
          Software Developer, my focus is on creating scalable, user-friendly
          applications. I am passionate about building efficient,
          high-performance solutions and continually learning to improve my
          expertise.
        </Text>
        <Text>
          I specialize in front-end technologies like React.js and Next.js,
          paired with CSS frameworks such as Tailwind CSS to build responsive
          and visually appealing interfaces. On the back end, I work with
          Node.js, Express.js, and databases like PostgreSQL and MongoDB to
          develop secure and efficient APIs.
        </Text>
        <Text>
          As both a developer and game server administrator, my problem-solving
          and technical abilities have been sharpened. I am committed to writing
          clean, maintainable code and delivering high-quality applications. I
          prioritize staying up-to-date with the latest technologies to
          continually grow as a developer.
        </Text>
      </div>
      {showButton && (
        <Button
          onClick={() => window.open("/about-me", "_self")}
          className="hidden border-primary md:block mt-6"
        >
          Read more
        </Button>
      )}
    </div>
  );
};
