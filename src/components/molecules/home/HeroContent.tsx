'use client'
import { Title } from '../../atoms/Title';
import { Button } from '../../atoms/Button';
// import Image from "next/image";
import Motion from "../../atoms/Motion";
import TypeAnimations from "../../atoms/Type";

export const HeroContent: React.FC = () => {
  return (
    <div className='md:w-[70%]'>
      <Title className="text-3xl font-bold">
        Ikhsan is a <span className="text-primary">web designer</span> and <br />
        <span className="text-primary">front-end developer</span>
      </Title>
      <Motion direction="left">
        <div className="flex items-center gap-2">
          <span className="mt-5 h-16 md:h-5 relative text-lg text-gray">
            {/* <span className="absolute bottom-[-1px] md:bottom-[-5px] left-0 w-full bg-primary bg-opacity-[0.6] h-[5%] md:h-[5%]" /> */}
            <TypeAnimations
              sequence={["He crafts responsive websites", "where technologies meet creativity"]}
              delay={3000}
            />
          </span>
          {/* <Image
            src="/giphy.gif"
            alt="tangan"
            priority
            width={25}
            height={25}
          /> */}
        </div>
      </Motion>
      <Button onClick={() => window.open("/contact", "_self")} className="hidden border-primary md:block mt-12">Contact me !!</Button>
    </div>
  );
};
