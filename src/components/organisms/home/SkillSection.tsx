import Image from "next/image";
import { Text } from "../../atoms/Text";

export const SkillSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-16 lg:pl-20">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 md:gap-10">
          <h2 className="text-2xl font-bold text-primary">
            #<span className="text-white">skills</span>
          </h2>
          <hr className="w-14 md:w-60 h-0.5 mx-auto my-4 bg-primary border-0 rounded-sm" />
        </div>
      </div>

      <div className="md:flex justify-between md:mt-5">
        {/* Image */}
        <div className="md:w-[70%] lg:w-[50%] flex justify-center">
          <Image
            src="/skillsimg.png"
            width={0}
            height={0}
            alt="Skills Section"
            sizes="100vw"
            className="md:ml-5 w-[80%] h-auto object-contain"
          />
        </div>

        {/* Skills */}
        <div className="md:w-[100%] lg:w-[50%]">
          <div className="grid md:grid-cols-3 gap-5 mt-10 md:mt-0">
            <div className="flex flex-col gap-5">
              <div className="border border-gray-400 ">
                <h4 className="border-b border-gray-400 p-2">Languages</h4>
                <Text className="p-2">TypeScript Lua Python JavaScript</Text>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="border border-gray-400">
                <h4 className="border-b border-gray-400 p-2">Databases</h4>
                <Text className="p-2">MongoDB PostgreSQL MySQL</Text>
              </div>
              <div className="border border-gray-400">
                <h4 className="border-b border-gray-400 p-2">Other</h4>
                <Text className="p-2">HTML CSS EJS SCSS REST Jinja</Text>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="border border-gray-400">
                <h4 className="border-b border-gray-400 p-2">Tools</h4>
                <Text className="p-2">
                  VSCode Neovim Linux Figma XFCE Arch Git Font Awesome
                </Text>
              </div>
              <div className="border border-gray-400">
                <h4 className="border-b border-gray-400 p-2">Frameworks</h4>
                <Text className="p-2">
                  React Vue Disnake Discord.js Flask Express.js
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


{/* <div className="md:w-[100%]">
          <div className="grid md:grid-cols-3 gap-5 mt-10 md:mt-0">
            <div className="grid md:grid-rows-5 gap-5">
              <div className="border border-gray-400 ">
                <h4 className="border-b border-gray-400 p-2">Languages</h4>
                <Text className="p-2">TypeScript Lua Python JavaScript</Text>
              </div>
            </div>
            <div className="grid md:grid-rows-4 gap-5">
              <div className="border border-gray-400">
                <h4 className="border-b border-gray-400 p-2">Databases</h4>
                <Text className="p-2">MongoDB PostgreSQL MySQL</Text>
              </div>
              <div className="border border-gray-400">
                <h4 className="border-b border-gray-400 p-2">Other</h4>
                <Text className="p-2">HTML CSS EJS SCSS REST Jinja</Text>
              </div>
            </div>
            <div className="grid md:grid-rows-3 gap-5">
              <div className="border border-gray-400">
                <h4 className="border-b border-gray-400 p-2">Tools</h4>
                <Text className="p-2">
                  VSCode Neovim Linux Figma XFCE Arch Git Font Awesome
                </Text>
              </div>
              <div className="border border-gray-400">
                <h4 className="border-b border-gray-400 p-2">Frameworks</h4>
                <Text className="p-2">
                  React Vue Disnake Discord.js Flask Express.js
                </Text>
              </div>
            </div>
          </div>
        </div> */}