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
    images: {
      mobile: webDesignMobile,
      tablet: webDesignTablet,
      desktop: webDesignDesktop,
    },
  },
  {
    slug: "app-design",
    name: "App Design",
    images: {
      mobile: appDesignMobile,
      tablet: appDesignTablet,
      desktop: appDesignDesktop,
    },
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    images: {
      mobile: graphicDesignMobile,
      tablet: graphicDesignTablet,
      desktop: graphicDesignDesktop,
    },
  },
];
