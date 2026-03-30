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
    <div className="md:w-[50%]" data-aos="fade-right">
      <div className="flex flex-col gap-5 pt-10">
        <Text>Hi, I’m Ikhsan!</Text>
        <Text>
          As a versatile IT Professional, I bridge the gap between robust software
          development and reliable IT infrastructure. I am passionate about building
          efficient, high-performance applications while ensuring the underlying
          systems—from Linux servers to network configurations—are optimized and secure.
        </Text>
        <Text>
          I specialize in Full-stack Web Development using React.js, Next.js, and
          Node.js, combined with a strong foundation in System Administration and
          Networking. Whether it's crafting responsive user interfaces or
          troubleshooting complex hardware and LAN/WLAN issues, I thrive on
          solving technical challenges from the ground up.
        </Text>
        <Text>
          With experience as both a developer and game server administrator, I bring
          a unique perspective to problem-solving. I am committed to delivering
          clean, maintainable code and building stable IT environments, always
          staying up-to-date with the latest technologies to provide end-to-end
          digital solutions.
        </Text>
      </div>
      {showButton && (
        <Button
          onClick={() => window.open("/about-me", "_self")}
          className="hidden border-primary md:block mt-6 hover:bg-[#C778DD]"
        >
          Read more
        </Button>
      )}
    </div>
  );
};
