import webDesignFeature from "@/assets/services/desktop/web-design-large.webp";
import { ArrowRightIcon } from "@/components/icons";
import { services } from "@/data";
import type { Service } from "@/data";
import type { StaticImageData } from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  service: Service;
  desktopImage?: StaticImageData;
  className?: string;
};

function ServiceCard({ service, desktopImage, className }: ServiceCardProps) {
  const { slug, name, images } = service;

  return (
    <li className={className}>
      <Link
        href={`/${slug}`}
        className="rounded-card group relative isolate flex h-full min-h-62.5 flex-col items-center justify-center gap-3 overflow-clip text-center text-white focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white md:min-h-50 md:gap-6 lg:min-h-77"
      >
        <picture className="pointer-events-none absolute inset-0 -z-10">
          <source
            media="(min-width: 64rem)"
            srcSet={(desktopImage ?? images.desktop).src}
          />
          <source media="(min-width: 48rem)" srcSet={images.tablet.src} />
          <img
            src={images.mobile.src}
            alt=""
            width={images.mobile.width}
            height={images.mobile.height}
            loading="lazy"
            className="size-full object-cover brightness-50 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
          />
        </picture>

        <h3 className="text-title-sm md:text-title font-medium uppercase">
          {name}
        </h3>

        <span className="text-link flex items-center gap-4 font-medium uppercase">
          <span className="pe-(--text-link--letter-spacing)">
            View projects
          </span>
          <ArrowRightIcon className="text-peach motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
        </span>
      </Link>
    </li>
  );
}

export default function ServiceCards() {
  const [webDesign, ...rest] = services;

  return (
    <section aria-labelledby="services-heading" className="v-container">
      <h2 id="services-heading" className="sr-only">
        Our services
      </h2>

      <ul className="grid gap-6 lg:grid-cols-2 lg:gap-x-7.5">
        <ServiceCard
          service={webDesign}
          desktopImage={webDesignFeature}
          className="lg:row-span-2"
        />
        {rest.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </ul>
    </section>
  );
}
