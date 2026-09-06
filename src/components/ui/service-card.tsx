import { ArrowRightIcon } from "@/components/icons";
import type { Service } from "@/data";
import { cn } from "@/lib/utils";
import type { StaticImageData } from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  service: Service;
  desktopImage?: StaticImageData;
  className?: string;
};

export default function ServiceCard({
  service,
  desktopImage,
  className,
}: ServiceCardProps) {
  const { slug, name, images } = service;

  return (
    <li className={cn("v-wipe", className)}>
      <Link
        href={`/${slug}`}
        className="rounded-card group/card relative isolate flex h-full min-h-62.5 flex-col items-center justify-center gap-3 overflow-clip text-center text-white focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white md:min-h-50 md:gap-6 lg:min-h-77"
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
            className="size-full object-cover brightness-46 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover/card:scale-105"
          />
        </picture>

        <span className="bg-peach-deep/80 pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover/card:opacity-100 group-focus-visible/card:opacity-100 motion-safe:transition-opacity motion-safe:duration-300" />

        <h3 className="text-title-sm md:text-title font-medium uppercase">
          {name}
        </h3>

        <span className="text-link flex items-center gap-4 font-medium uppercase">
          <span className="pe-(--text-link--letter-spacing)">
            View projects
          </span>
          <ArrowRightIcon className="text-peach motion-safe:transition-transform motion-safe:group-hover/card:translate-x-1" />
        </span>
      </Link>
    </li>
  );
}
