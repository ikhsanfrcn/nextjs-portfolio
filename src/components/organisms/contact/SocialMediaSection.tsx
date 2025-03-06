import { SocialMediaIcons } from "@/components/atoms/SocialMediaIcons"

export const SocialMediaSection: React.FC = () => {
    return (
        <div className="container mx-auto px-5 lg:px-10 pt-10">
          <h2 className="text-2xl text-primary">
            #<span className="text-white">all-media</span>
          </h2>
          <SocialMediaIcons />
        </div>
    )
}