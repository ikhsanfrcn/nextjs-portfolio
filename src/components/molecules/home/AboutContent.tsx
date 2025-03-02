import { Text } from "../../atoms/Text";
import { Button } from "../../atoms/Button";

interface AboutContentProps {
  showButton?: boolean;
}

export const AboutContent: React.FC<AboutContentProps> = ({ showButton = true }) => {
  return (
    <div className="md:w-[50%]">
      <Text className="mt-4">
        Hello, i’m Elias!
        <br />
        <br />
        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
        develop responsive websites from scratch and raise them into modern
        user-friendly web experiences. 
        <br />
        <br />
        Transforming my creativity and knowledge into websites has been my
        passion for over a year. I have been helping various clients to
        establish their presence online. I always strive to learn about the
        newest technologies and frameworks.
      </Text>
      {showButton && (
        <Button className="hidden border-primary md:block mt-6">
          Read more
        </Button>
      )}
    </div>
  );
};
