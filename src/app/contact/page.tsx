import { LocationLinks } from "@/components/sections";
import { siteName } from "@/data";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const title = "Contact";
const description =
  "Tell us about your project. Send Designo a message and the team will get back to you.";

export const metadata: Metadata = pageMetadata({
  title,
  shareTitle: `${title} | ${siteName}`,
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-30 lg:space-y-40">
      <h1>Contact Us</h1>
      <LocationLinks />
    </div>
  );
}
