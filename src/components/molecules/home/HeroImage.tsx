import Image from "next/image";
import { Icon } from "../../atoms/Icon";
import { AiOutlineLayout } from "react-icons/ai";
import { LuSquareDashedKanban } from "react-icons/lu";
import { Text } from "../../atoms/Text";

export const HeroImage: React.FC = () => {
  return (
    <div>
      <div className="flex relative justify-center">
        <Icon
          Component={AiOutlineLayout}
          className="absolute top-20 left-5 -z-10 text-primary text-6xl md:text-8xl"
        />
        <Image
          src="/profile.png"
          width={0}
          height={0}
          alt="Profile"
          sizes="100vw"
          className="w-full h-auto"
        />
        <Icon
          Component={LuSquareDashedKanban}
          className="absolute right-0 bottom-5 text-gray text-6xl md:text-8xl"
        />
      </div>
      <div className="flex items-center gap-3 border border-white p-2">
        <div className="w-5 h-5 bg-primary"></div>
        <Text>
          Currently working on <span className="text-white"> Portfolio</span>
        </Text>
      </div>
    </div>
  );
};
