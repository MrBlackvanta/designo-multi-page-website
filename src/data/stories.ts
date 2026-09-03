import realDealDesktop from "@/assets/about/desktop/real-deal.webp";
import talentDesktop from "@/assets/about/desktop/world-class-talent.webp";
import realDealMobile from "@/assets/about/mobile/real-deal.webp";
import talentMobile from "@/assets/about/mobile/world-class-talent.webp";
import realDealTablet from "@/assets/about/tablet/real-deal.webp";
import talentTablet from "@/assets/about/tablet/world-class-talent.webp";
import type { Story } from "./types";

export const stories: Story[] = [
  {
    slug: "world-class-talent",
    name: "World-class talent",
    paragraphs: [
      "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
      "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    ],
    images: {
      mobile: talentMobile,
      tablet: talentTablet,
      desktop: talentDesktop,
    },
  },
  {
    slug: "the-real-deal",
    name: "The real deal",
    paragraphs: [
      "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
      "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
    ],
    images: {
      mobile: realDealMobile,
      tablet: realDealTablet,
      desktop: realDealDesktop,
    },
  },
];
