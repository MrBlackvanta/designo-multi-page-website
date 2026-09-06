import { ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "hero",
            "hero-sm",
            "heading",
            "cta",
            "title",
            "title-sm",
            "label",
            "body",
            "body-sm",
            "nav",
            "menu",
            "button",
            "link",
            "field",
            "error",
            "logo",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

const nonBreakingSpace = String.fromCharCode(0xa0);

export function telText(phone: string) {
  return phone.replaceAll(" ", nonBreakingSpace);
}
