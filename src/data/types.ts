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

export type Service = {
  slug: string;
  name: string;
  images: {
    mobile: StaticImageData;
    tablet: StaticImageData;
    desktop: StaticImageData;
  };
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
