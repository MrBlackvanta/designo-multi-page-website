import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type OfficeSlug = "canada" | "australia" | "united-kingdom";

export type MapView = {
  center: [number, number];
  zoom: number;
  area: string;
};

export type Office = {
  slug: OfficeSlug;
  country: string;
  illustration: StaticImageData;
  name: string;
  address: string[];
  phone: string;
  email: string;
  map: MapView;
};

export type ResponsiveImages = {
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
};

export type ServiceSlug = "web-design" | "app-design" | "graphic-design";

export type Service = {
  slug: ServiceSlug;
  name: string;
  intro: string;
  description: string;
  images: ResponsiveImages;
};

export type StorySlug = "world-class-talent" | "the-real-deal";

export type Story = {
  slug: StorySlug;
  name: string;
  paragraphs: string[];
  images: ResponsiveImages;
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
