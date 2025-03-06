import { ContactText } from "@/components/molecules/ContactText";
import { ContactBox } from "@/components/molecules/ContactBox";

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
        <ContactText />
        <ContactBox />
      </div>
    </section>
  );
};
