import Image from "next/image";

export const AboutImage: React.FC = () => {
  return (
    <div className="flex relative justify-center md:w-[30%]">
      <Image
        src="/frame29.png"
        width={0}
        height={0}
        alt="frame29"
        sizes="100vw"
        className="w-[25%] h-auto absolute top-10 left-10 md:left-0 text-white text-6xl md:text-8xl"
      />
      <Image
        src="/profile-removebg.png"
        width={0}
        height={0}
        alt="about-me"
        sizes="100vw"
        className="border-b w-full h-auto border-primary"
      />
      <Image
        src="/frame30.png"
        width={0}
        height={0}
        alt="frame30"
        sizes="100vw"
        className="w-[30%] h-auto absolute right-0 bottom-32 text-white text-6xl md:text-8xl"
      />
    </div>
  );
};
