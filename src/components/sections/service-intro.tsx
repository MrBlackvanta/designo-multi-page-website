import appDesignPattern from "@/assets/patterns/intro-app-design.svg";
import graphicDesignPattern from "@/assets/patterns/intro-graphic-design.svg";
import webDesignPattern from "@/assets/patterns/intro-web-design.svg";
import type { Service, ServiceSlug } from "@/data";
import { cn } from "@/lib/utils";
import type { StaticImageData } from "next/image";

type DesktopPattern = {
  image: StaticImageData;
  offset: string;
};

const desktopPatterns: Record<ServiceSlug, DesktopPattern> = {
  "web-design": { image: webDesignPattern, offset: "lg:left-58.5" },
  "app-design": { image: appDesignPattern, offset: "lg:-left-14.5" },
  "graphic-design": { image: graphicDesignPattern, offset: "lg:-left-14.5" },
};

type ServiceIntroProps = {
  service: Service;
};

export default function ServiceIntro({ service }: ServiceIntroProps) {
  const { image, offset } = desktopPatterns[service.slug];

  return (
    <section className="md:v-container relative">
      <div className="bg-light-grey/50 pointer-events-none absolute top-31.5 left-0 -z-10 hidden h-148.5 w-251.5 rounded-full rounded-bl-none lg:block" />

      <div className="bg-peach-band md:rounded-card relative isolate flex min-h-80 flex-col justify-center overflow-clip px-6 text-center text-white md:min-h-63">
        <picture
          className={cn(
            "v-drift pointer-events-none absolute top-0 right-0 -z-10 h-146 w-219 md:inset-y-0 md:right-auto md:-left-5.25 md:my-auto",
            offset,
          )}
        >
          <source media="(min-width: 64rem)" srcSet={image.src} />
          <img
            src={webDesignPattern.src}
            alt=""
            width={webDesignPattern.width}
            height={webDesignPattern.height}
            className="size-full"
          />
        </picture>

        <h1 className="text-hero-sm md:text-hero font-medium">
          {service.name}
        </h1>

        <p className="mx-auto mt-6 max-w-102.5">{service.intro}</p>
      </div>
    </section>
  );
}
