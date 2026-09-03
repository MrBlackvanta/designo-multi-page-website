import { companyValues } from "@/data";

export default function CompanyValues() {
  return (
    <section className="v-container relative">
      <div className="bg-light-grey/50 pointer-events-none absolute top-31 right-0 -z-10 hidden h-148.5 w-251.5 rotate-180 rounded-full rounded-bl-none lg:block" />

      <ul className="grid gap-y-20 md:gap-y-8 lg:grid-cols-3 lg:gap-x-7.5 lg:gap-y-0">
        {companyValues.map(({ name, illustration, description }) => (
          <li
            key={name}
            className="flex flex-col items-center gap-12 text-center md:flex-row md:text-left lg:flex-col lg:text-center"
          >
            <img
              src={illustration.src}
              alt=""
              width={illustration.width}
              height={illustration.height}
              loading="lazy"
              className="size-50.5 shrink-0"
            />

            <div>
              <h2 className="text-label font-medium uppercase">{name}</h2>
              <p className="text-body mt-8 md:mt-4 lg:mt-8">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
