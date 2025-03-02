import { Text } from "@/components/atoms/Text";

export const SkillSection: React.FC = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl text-primary">
        #<span className="text-white">skills</span>
      </h2>
      <div className="grid md:flex justify-between gap-5 mt-10">
        <div>
          <div className="border border-gray">
            <h4 className="border-b border-gray p-2">Languages</h4>
            <Text className="p-2">TypeScript Lua Python JavaScript</Text>
          </div>
        </div>
        <div>
          <div className="border border-gray">
            <h4 className="border-b border-gray-400 p-2">Databases</h4>
            <Text className="p-2">MongoDB PostgreSQL MySQL</Text>
          </div>
        </div>
        <div>
          <div className="border border-gray">
            <h4 className="border-b border-gray-400 p-2">Other</h4>
            <Text className="p-2">HTML CSS EJS SCSS REST Jinja</Text>
          </div>
        </div>
        <div>
          <div className="border border-gray">
            <h4 className="border-b border-gray-400 p-2">Tools</h4>
            <Text className="p-2">
              VSCode Neovim Linux Figma XFCE Arch Git Font Awesome
            </Text>
          </div>
        </div>
        <div>
          <div className="border border-gray">
            <h4 className="border-b border-gray-400 p-2">Frameworks</h4>
            <Text className="p-2">
              React Vue Disnake Discord.js Flask Express.js
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};
