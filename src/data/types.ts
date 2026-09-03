import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type Office = {
  slug: string;
  country: string;
  illustration: StaticImageData;
};

export type ServiceSlug = "web-design" | "app-design" | "graphic-design";

export type Service = {
  slug: ServiceSlug;
  name: string;
  intro: string;
  description: string;
  images: {
    mobile: StaticImageData;
    tablet: StaticImageData;
    desktop: StaticImageData;
  };
};

export type Project = {
  name: string;
  description: string;
  image: StaticImageData;
};

export type CompanyValue = {
  name: string;
  illustration: StaticImageData;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
