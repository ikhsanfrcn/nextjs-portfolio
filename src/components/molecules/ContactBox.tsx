import { BsDiscord } from "react-icons/bs";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { MdWhatsapp } from "react-icons/md";

export const ContactBox: React.FC = () => {
  return (
    <div className="flex items-center md:justify-center pt-10 md:pt-0">
      <div className="border border-gray-400 p-2">
        <h5 className="p-2">Message Me Here</h5>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <Icon
              Component={BsDiscord}
              className="text-2xl md:text-2xl text-gray"
            />
            <Text>!isanfh#1545</Text>
          </div>
          <div className="flex items-center gap-2">
            <Icon
              Component={MdWhatsapp}
              className="text-2xl md:text-2xl text-gray"
            />
            <Text>+62 816-355-340</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
