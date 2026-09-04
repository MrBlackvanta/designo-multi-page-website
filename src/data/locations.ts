import australia from "@/assets/illustrations/australia.svg";
import canada from "@/assets/illustrations/canada.svg";
import unitedKingdom from "@/assets/illustrations/united-kingdom.svg";
import type { Office } from "./types";

export const offices: Office[] = [
  {
    slug: "canada",
    country: "Canada",
    illustration: canada,
    name: "Designo Central Office",
    address: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    map: { center: [43.6444, -79.3878], zoom: 13, area: "Toronto, Canada" },
  },
  {
    slug: "australia",
    country: "Australia",
    illustration: australia,
    name: "Designo AU Office",
    address: ["19 Balonne Street", "New South Wales 2443"],
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
    map: {
      center: [-31.6497, 152.7936],
      zoom: 13,
      area: "Laurieton, New South Wales",
    },
  },
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    illustration: unitedKingdom,
    name: "Designo UK Office",
    address: ["13 Colorado Way", "Rhyd-y-fro SA8 9GA"],
    phone: "078 3115 1400",
    email: "contact@designo.uk",
    map: { center: [51.7333, -3.85], zoom: 13, area: "Rhyd-y-fro, Wales" },
  },
];
