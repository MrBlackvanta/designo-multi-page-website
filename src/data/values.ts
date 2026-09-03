import friendly from "@/assets/illustrations/friendly.svg";
import passionate from "@/assets/illustrations/passionate.svg";
import resourceful from "@/assets/illustrations/resourceful.svg";
import type { CompanyValue } from "./types";

export const companyValues: CompanyValue[] = [
  {
    name: "Passionate",
    illustration: passionate,
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    name: "Resourceful",
    illustration: resourceful,
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    name: "Friendly",
    illustration: friendly,
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];
