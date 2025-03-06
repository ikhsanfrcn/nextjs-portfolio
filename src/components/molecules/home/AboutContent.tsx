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
      <Text className="mt-4">
        Hello, i’m Ikhsan!
        <br />
        <br />
        Currently improving my skills at Purwadhika Bootcamp, I am a Software
        Developer focused on building scalable, user-friendly applications. I
        used JavaScript library like React.js and Next.js Framework, paired with
        CSS frameworks such as Tailwind CSS for creating responsive interfaces.
        On the backend, I work with Node.js, Express.js, and databases like
        PostgreSQL and MongoDB to develop secure and efficient APIs.
        <br />
        <br />
        The experience of being a developer and administrator of a game server
        has honed my problem solving and technical abilities to the finer
        points. As a developer, I am passionate about writing clean,
        maintainable code, and thus, committed to building high-performance
        applications. I keep in touch with the latest technologies and trends in
        order to keep improving my expertise.
      </Text>
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
