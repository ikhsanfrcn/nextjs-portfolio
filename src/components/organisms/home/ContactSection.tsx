import { BsDiscord } from "react-icons/bs";
import { Icon } from "../../atoms/Icon";
import { Text } from "../../atoms/Text";
import { MdEmail } from "react-icons/md";

export const ContactSection: React.FC = () => {
  return (
    <section className="px-5 lg:px-10 mt-16">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 md:gap-10">
        <h2 className="text-2xl font-bold text-primary">
            #<span className="text-white">contact</span>
          </h2>
          <hr className="w-14 md:w-60 h-0.5 mx-auto my-4 bg-primary border-0 rounded-sm" />
        </div>
      </div>

      <div className="md:flex justify-between md:mt-5">
        <div className="md:w-[50%]">
          <Text className="mt-4">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </Text>
        </div>

        <div className="flex md:w-[40%] items-center md:justify-center pt-10 md:pt-0">
          <div className="border border-gray-400 p-2">
            <h5 className="p-2">Message Me Here</h5>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Icon Component={BsDiscord} className="text-2xl md:text-2xl text-gray" />
                <Text>!isanfh#1545</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon Component={MdEmail} className="text-2xl md:text-2xl text-gray" />
                <Text>ikhsanfrcn@gmail.com</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
