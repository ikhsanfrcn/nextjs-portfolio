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
      <Icon Component={BsDiscord} className="text-2xl md:text-2xl text-gray" />
      <Icon
        Component={BsInstagram}
        className="text-2xl md:text-2xl text-gray hover:text-primary"
        link="https://www.instagram.com/ikhsanfrcn/"
      />
      <Icon
        Component={BsLinkedin}
        className="text-2xl md:text-2xl text-gray hover:text-blue-500"
        link="https://www.linkedin.com/in/ikhsanfrcn/"
      />
      <Icon
        Component={BsGithub}
        className="text-2xl md:text-2xl text-gray hover:text-black"
        link="https://github.com/ikhsanfrcn"
      />
      <Icon
        Component={BsWhatsapp}
        className="text-2xl md:text-2xl text-gray hover:text-green-500"
        link="https://wa.me/62816355340"
      />
    </div>
  );
};
