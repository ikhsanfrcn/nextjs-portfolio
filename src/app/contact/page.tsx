import { Text } from "@/components/atoms/Text";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { ContactText } from "@/components/molecules/ContactText";
import { ContactBox } from "@/components/molecules/ContactBox";
import { SocialMediaSection } from "@/components/organisms/contact/SocialMediaSection";

export const metadata = {
  title: "Contact | Creative Web Portfolio",
  description: "Get in touch to discuss potential projects, collaborations, or just to say hello. I'd love to connect!",
  opengraph: {
      url: ""
  }
};


export default function Contact() {
  return (
    <MainTemplate>
      <section id="contact">
        <div className="container mx-auto px-5 lg:px-10">
          <h1 className="text-3xl text-primary mt-10">
            /<span className="text-white">contact</span>
          </h1>
          <Text className="text-sm">Who am i?</Text>
          <div className="md:flex justify-between md:mt-5">
            <ContactText />
            <ContactBox />
          </div>
        </div>
        <SocialMediaSection />
      </section>
    </MainTemplate>
  );
}
