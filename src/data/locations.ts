import australia from "@/assets/illustrations/australia.svg";
import canada from "@/assets/illustrations/canada.svg";
import unitedKingdom from "@/assets/illustrations/united-kingdom.svg";
import type { Office } from "./types";

export const offices: Office[] = [
  { slug: "canada", country: "Canada", illustration: canada },
  { slug: "australia", country: "Australia", illustration: australia },
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    illustration: unitedKingdom,
  },
];
