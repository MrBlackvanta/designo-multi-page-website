import {
  AboutHero,
  AboutStory,
  CallToAction,
  LocationLinks,
} from "@/components/sections";
import { siteName, stories } from "@/data";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const title = "Our Company";
const description =
  "Meet the people behind Designo. Ten years of design and branding work for startups, corporations and nonprofits, from offices in Canada, Australia and the United Kingdom.";

export const metadata: Metadata = pageMetadata({
  title,
  shareTitle: `${title} | ${siteName}`,
  description,
  path: "/about",
});

export default function AboutPage() {
  const [talent, realDeal] = stories;

  return (
    <div className="space-y-30 lg:space-y-40">
      <div className="md:space-y-30 lg:space-y-40">
        <AboutHero />
        <AboutStory story={talent} />
      </div>

      <LocationLinks />
      <AboutStory story={realDeal} />
      <CallToAction />
    </div>
  );
}
