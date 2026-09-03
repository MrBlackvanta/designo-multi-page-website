import { CallToAction, LocationLinks } from "@/components/sections";
import { siteName } from "@/data";
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
  return (
    <div className="space-y-30 lg:space-y-40">
      <h1>About Us</h1>
      <LocationLinks />
      <CallToAction />
    </div>
  );
}
