import pattern from "@/assets/patterns/three-circles.svg";
import { OfficeMap } from "@/components/ui";
import { mapTiles } from "@/data";
import type { Office, OfficeSlug } from "@/data";
import { cn, telHref } from "@/lib/utils";
import { preconnect } from "react-dom";

const bands: Record<OfficeSlug, string> = {
  canada: "lg:flex-row-reverse",
  australia: "lg:flex-row",
  "united-kingdom": "lg:flex-row-reverse",
};

type OfficeLocationProps = {
  office: Office;
};

export default function OfficeLocation({ office }: OfficeLocationProps) {
  const { slug, country, name, address, phone, email, map } = office;
  const headingId = `${slug}-heading`;

  preconnect(mapTiles.origin);

  return (
    <section id={slug} aria-labelledby={headingId} className="md:v-container">
      <div
        className={cn(
          "flex flex-col md:gap-y-6 lg:flex-row lg:gap-x-7.5",
          bands[slug],
        )}
      >
        <div className="v-map bg-peach-pale md:rounded-card h-80 overflow-clip md:h-81.5 lg:h-auto lg:w-87.5 lg:shrink-0">
          <OfficeMap view={map} className="size-full" />
        </div>

        <div className="bg-peach-pale md:rounded-card v-rise relative isolate overflow-clip px-6 py-20 text-center md:px-18.75 md:py-22 md:text-left lg:flex-1 lg:px-23.75">
          <img
            src={pattern.src}
            alt=""
            width={pattern.width}
            height={pattern.height}
            loading="lazy"
            className="v-drift pointer-events-none absolute top-0 left-0 -z-10 size-146 max-w-none md:top-auto md:bottom-0"
          />

          <h2
            id={headingId}
            className="text-hero-sm md:text-heading text-peach-ink font-medium"
          >
            {country}
          </h2>

          <address className="mt-6 grid gap-y-6 font-bold not-italic md:grid-cols-2 md:gap-x-7.5 md:gap-y-0">
            <p>
              <span className="block">{name}</span>
              {address.map((line) => (
                <span key={line} className="block font-normal">
                  {line}
                </span>
              ))}
            </p>

            <p>
              <span className="block">Contact</span>
              <span className="block font-normal">
                P :{" "}
                <a href={telHref(phone)} className="v-focus hover:underline">
                  {phone}
                </a>
              </span>
              <span className="block font-normal">
                M :{" "}
                <a href={`mailto:${email}`} className="v-focus hover:underline">
                  {email}
                </a>
              </span>
            </p>
          </address>
        </div>
      </div>
    </section>
  );
}
