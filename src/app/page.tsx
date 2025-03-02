import { HeroSection } from "@/components/organisms/home/HeroSection";
import { MainTemplate } from "../components/templates/MainTemplate";
import { ProjectSection } from "@/components/organisms/home/ProjectSection";
import { QuoteSection } from "@/components/organisms/home/QuoteSection";
import { SkillSection } from "@/components/organisms/home/SkillSection";
import { AboutMeSection } from "@/components/organisms/home/AboutMeSection";
import { ContactSection } from "@/components/organisms/home/ContactSection";

export const metadata = {
    title: "Portfolio",
    description: "Portfolio",
    opengraph: {
        url: ""
    }
};

export default function Home() {
  return (
    <MainTemplate>
      <HeroSection />
      <QuoteSection />
      <ProjectSection />
      <SkillSection />
      <AboutMeSection />
      <ContactSection />
      {/* <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nesciunt,
        aperiam molestiae veniam ullam libero dolorum vero dignissimos
        voluptatem obcaecati dicta quod accusamus adipisci cumque id quaerat.
        Atque dolore laudantium beatae repellendus minima, odio possimus
        provident eius tenetur maiores. A quaerat animi, reiciendis ut sequi
        eveniet molestias dicta consequatur adipisci sit autem enim cumque
        placeat quam et quis numquam laborum similique quia, expedita commodi.
        Voluptatum itaque consequuntur laborum odit doloremque ratione
        laudantium, nulla ipsam inventore, ullam non magnam atque obcaecati
        corrupti ea minima tenetur eaque asperiores laboriosam explicabo debitis
        blanditiis eos. Vitae fuga pariatur necessitatibus nesciunt tempora,
        deserunt doloribus architecto nam repellendus ad aut, dolore suscipit!
        Quisquam ad ea minus nobis dolores maiores blanditiis nulla animi, eaque
        fugiat suscipit consequuntur, voluptatem laborum molestiae
        necessitatibus, asperiores modi distinctio labore doloremque nisi.
        Quidem quia soluta voluptate, numquam quod accusantium voluptates est?
        Suscipit consequatur explicabo soluta dolor repellat alias deserunt ex
        ea eveniet exercitationem impedit, accusantium vel tenetur nostrum
        quibusdam quasi ad. Consequatur laudantium laborum saepe ad illo dolores
        sequi. Mollitia tenetur sequi culpa hic praesentium facilis nemo placeat
        dolorum consequatur nobis illo repellendus veritatis, sint maiores odit
        quisquam suscipit libero incidunt porro non deserunt, aliquid ullam
        magnam. Beatae repellendus optio minima excepturi?
      </div> */}
    </MainTemplate>
  );
}
