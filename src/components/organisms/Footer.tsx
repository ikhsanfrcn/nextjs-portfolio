import { AiOutlineLayout } from "react-icons/ai";
import { Text } from "../atoms/Text";
import { SocialIcons } from "../atoms/SocialIcons";

export const Footer: React.FC = () => {
  return (
    <div className="pt-8 pb-5 border-t border-gray mt-32">
      <div className="container mx-auto px-5 lg:px-10 md:flex justify-between">
        <section>
          <div className="flex max-sm:flex-col md:items-center max-sm:gap-2 gap-10">
            <div className="flex items-center">
              <AiOutlineLayout className="text-sm" />
              <p className="md:text-sm font-bold ml-2">Portfolio</p>
            </div>
            <Text className="text-sm md:text-md">ikhsanfrcn@gmail.com</Text>
          </div>
          <p className="pt-1">Fullstack Web Developer</p>
        </section>

        <section className="pt-5 md:pt-0">
          <p className="hidden md:block text-xl">Media</p>
          <SocialIcons />
        </section>
      </div>

      <div>
        <Text className="text-center pt-5">
          &copy; 2025 Ikhsan. All rights reserved.
        </Text>
      </div>
    </div>
  );
};
