'use client'
import { Title } from '../../atoms/Title';
import { Button } from '../../atoms/Button';
import Motion from "../../atoms/Motion";
import TypeAnimations from "../../atoms/Type";

export const HeroContent: React.FC = () => {
  return (
    <div className='md:w-[50%]'>
      <Title className="text-3xl font-bold">
        Ikhsan is a <span className="text-primary">Software Developer</span> with a focus on<br />
        <span className="text-primary">Web Development</span>
      </Title>
      <Motion direction="left">
        <div className="flex items-center gap-2">
          <span className="mt-5 h-16 md:h-5 relative text-lg text-grey">
            <TypeAnimations
              sequence={["He crafts responsive websites", "where technologies meet creativity"]}
              delay={3000}
            />
          </span>
        </div>
      </Motion>
      <Button onClick={() => window.open("/contact", "_self")} className="hidden border-primary md:block mt-12 hover:bg-[#C778DD]">Contact me !!</Button>
    </div>
  );
};
