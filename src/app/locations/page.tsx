import { CallToAction, OfficeLocation } from "@/components/sections";
import { offices, siteName } from "@/data";
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
  return (
    <>
      <h1 className="sr-only">Our Locations</h1>

      <div className="space-y-30 lg:space-y-40">
        <div className="space-y-10 md:space-y-30 lg:space-y-8">
          {offices.map((office) => (
            <OfficeLocation key={office.slug} office={office} />
          ))}
        </div>

        <CallToAction />
      </div>
    </>
  );
}
