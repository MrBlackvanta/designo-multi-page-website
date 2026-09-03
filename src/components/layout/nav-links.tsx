"use client";

import { navLinks } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksVariant = "header" | "footer" | "menu";

type Variant = {
  landmark: string;
  nav?: string;
  list: string;
  link: string;
};

const variants: Record<NavLinksVariant, Variant> = {
  header: {
    landmark: "Main",
    nav: "hidden md:block",
    list: "flex gap-10.5",
    link: "v-focus text-nav",
  },
  footer: {
    landmark: "Footer",
    nav: "order-3 mt-8 md:order-2 md:mt-0",
    list: "flex flex-col items-center gap-8 md:flex-row md:gap-10.5",
    link: "v-focus-on-dark text-nav",
  },
  menu: {
    landmark: "Menu",
    list: "flex flex-col items-start gap-8",
    link: "v-focus-on-dark text-menu",
  },
};

type NavLinksProps = {
  variant: NavLinksVariant;
  onNavigate?: () => void;
};

export default function NavLinks({ variant, onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const route = pathname.replace(/\/+$/, "") || "/";
  const { landmark, nav, list, link } = variants[variant];

  return (
    <nav aria-label={landmark} className={nav}>
      <ul className={list}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={route === href ? "page" : undefined}
              className={cn("v-nav-link block uppercase", link)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
