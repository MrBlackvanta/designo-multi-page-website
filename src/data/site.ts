import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/icons";
import type { NavLink, SocialLink } from "./types";

export const siteName = "Designo";

export const siteUrl =
  "https://designo-multi-page-website.abdelrhman-ahmed8881.workers.dev";

export const routes = [
  "/",
  "/about",
  "/locations",
  "/contact",
  "/web-design",
  "/app-design",
  "/graphic-design",
];

const officePhone = "+1 253-863-8967";
const officeEmail = "contact@designo.co";

export const office = {
  name: "Designo Central Office",
  lines: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
};

export const contactDetails = {
  label: "Contact Us (Central Office)",
  phone: officePhone,
  phoneHref: `tel:${officePhone.replace(/[^+\d]/g, "")}`,
  email: officeEmail,
  emailHref: `mailto:${officeEmail}`,
};

export const navLinks: NavLink[] = [
  { label: "Our Company", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Pinterest", href: "#", icon: PinterestIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];
