import { Icon } from "@/components/atoms/Icon";
import {
  BsDiscord,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

export const SocialMediaIcons: React.FC = () => {
  return (
    <div className="flex gap-5 pt-5">
      <Icon
        Component={BsDiscord}
        className="text-2xl md:text-2xl text-grey hover:text-blue-700"
        link="https://discordapp.com/users/334326223670870036" />
      <Icon
        Component={BsInstagram}
        className="text-2xl md:text-2xl text-grey hover:text-primary"
        link="https://www.instagram.com/isanfh/"
      />
      <Icon
        Component={BsLinkedin}
        className="text-2xl md:text-2xl text-grey hover:text-blue-500"
        link="https://www.linkedin.com/in/ikhsanfrcn/"
      />
      <Icon
        Component={BsGithub}
        className="text-2xl md:text-2xl text-grey hover:text-black"
        link="https://github.com/ikhsanfrcn"
      />
      <Icon
        Component={BsWhatsapp}
        className="text-2xl md:text-2xl text-grey hover:text-green-500"
        link="https://wa.me/62816355340"
      />
    </div>
  );
};
