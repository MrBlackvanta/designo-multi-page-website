import { Button } from "@/components/ui";
import { offices } from "@/data";

export default function LocationLinks() {
  return (
    <section aria-labelledby="offices-heading" className="v-container">
      <h2 id="offices-heading" className="sr-only">
        Our offices
      </h2>

      <ul className="grid justify-items-center gap-y-12 md:gap-y-17.25 lg:grid-cols-3 lg:gap-x-7.5">
        {offices.map(({ slug, country, illustration }) => (
          <li key={slug} className="flex flex-col items-center">
            <img
              src={illustration.src}
              alt=""
              width={illustration.width}
              height={illustration.height}
              loading="lazy"
              className="size-50.5"
            />

            <h3 className="text-label mt-12 font-medium uppercase">
              {country}
            </h3>

            <Button href={`/locations#${slug}`} className="mt-8">
              See location
              <span className="sr-only"> in {country}</span>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
