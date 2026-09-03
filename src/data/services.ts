import appDesignDesktop from "@/assets/services/desktop/app-design.webp";
import graphicDesignDesktop from "@/assets/services/desktop/graphic-design.webp";
import webDesignDesktop from "@/assets/services/desktop/web-design.webp";
import appDesignMobile from "@/assets/services/mobile/app-design.webp";
import graphicDesignMobile from "@/assets/services/mobile/graphic-design.webp";
import webDesignMobile from "@/assets/services/mobile/web-design.webp";
import appDesignTablet from "@/assets/services/tablet/app-design.webp";
import graphicDesignTablet from "@/assets/services/tablet/graphic-design.webp";
import webDesignTablet from "@/assets/services/tablet/web-design.webp";
import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "web-design",
    name: "Web Design",
    intro:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    description:
      "Websites that serve as powerful marketing tools and bring memorable brand experiences. Six Designo builds, from multi-carrier ecommerce shipping to blogging and online training.",
    images: {
      mobile: webDesignMobile,
      tablet: webDesignTablet,
      desktop: webDesignDesktop,
    },
  },
  {
    slug: "app-design",
    name: "App Design",
    intro:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    description:
      "Mobile designs that bring intuitive digital solutions to your customers right at their fingertips. Five Designo apps, from indoor air quality to virtual reality.",
    images: {
      mobile: appDesignMobile,
      tablet: appDesignTablet,
      desktop: appDesignDesktop,
    },
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    intro:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    description:
      "Eye-catching branding materials tailored to meet your business objectives. Three Designo commissions: a book cover, a packaging concept and a collaborative poster.",
    images: {
      mobile: graphicDesignMobile,
      tablet: graphicDesignTablet,
      desktop: graphicDesignDesktop,
    },
  },
];
