import { siteName } from "@/data";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const title = "Locations";
const description =
  "Find Designo in Canada, Australia and the United Kingdom. Addresses and phone numbers for all three offices.";

export const metadata: Metadata = pageMetadata({
  title,
  shareTitle: `${title} | ${siteName}`,
  description,
  path: "/locations",
});

export default function LocationsPage() {
  return <h1>Our Locations</h1>;
}
