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
