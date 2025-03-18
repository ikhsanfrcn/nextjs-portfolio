import Motion from "@/components/atoms/Motion";
import ToolsItem from "@/components/atoms/ToolsItem";
import Marquee from "react-fast-marquee";

export default function ToolsContent() {
  return (
    <div className="max-md:pt-5">
      <div className="w-full">
        <Motion direction="left">
          <Marquee pauseOnHover={true}>
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              desc="Node js"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              desc="Javascript"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              desc="Typescript"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              desc="React"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/nextjs-icon.svg"
              desc="Next js"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/tailwindcss-icon.svg"
              desc="Tailwind CSS"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              desc="My SQL"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
              desc="PostgreSQL"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              desc="HTML5"
            />
            <ToolsItem
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              desc="CSS"
            />
          </Marquee>
        </Motion>
      </div>
    </div>
  );
}