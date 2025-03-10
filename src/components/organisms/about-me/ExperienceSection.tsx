import { Text } from "@/components/atoms/Text";

export const ExperienceSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-16">
      <h3 className="text-2xl text-primary">
        #<span className="text-white">experience</span>
      </h3>
      <div className="flex justify-between gap-10">
        {/* Left Side */}
        <div className="flex flex-col gap-5">
          {/*  */}
          <div className="flex gap-5">
            <div className="border border-gray">
              <Text>Aug 2022</Text>
              <Text>Aug 2022</Text>
            </div>
            <div className="border border-gray">
              <Text className="botder-b border-gray text-white text-2xl">
                BVR Group Asia
              </Text>
              <div className="h-20">
                <Text className="line-clamp-2 hover:line-clamp-none bg-background">
                  Overseeing the development and upkeep of PHP Native, Laravel,
                  and WordPress websites while guaranteeing maximum security,
                  effective performance, and excellent user satisfaction was my
                  priority
                </Text>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex">
            <div className="border border-gray">
              <Text>Aug 2022</Text>
              <Text>Aug 2022</Text>
            </div>
            <div className="border border-gray">
              <Text className="botder-b border-gray text-white text-2xl">
                BVR Group Asia
              </Text>
              <Text>Description</Text>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="border border-gray">
          <Text className="border-b border-gray px-5 py-2">Languages</Text>
          <div className="flex justify-between gap-10 p-2">
            <Text className="">Indonesian</Text>
            <Text className="">Native</Text>
          </div>
          <div className="flex justify-between gap-10 p-2">
            <Text className="">English</Text>
            <Text className="">Professional</Text>
          </div>
          <div className="flex justify-between gap-10 p-2">
            <Text className="">Japanese</Text>
            <Text className="">A2</Text>
          </div>
        </div>
      </div>
    </section>
  );
};
