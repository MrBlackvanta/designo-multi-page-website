import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonGround = "light" | "dark";

const grounds: Record<ButtonGround, string> = {
  light: "bg-peach",
  dark: "bg-white",
};

type ButtonProps = {
  href: string;
  ground?: ButtonGround;
  className?: string;
  children: ReactNode;
};

export default function Button({
  href,
  ground = "light",
  className,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "v-focus text-button text-dark-grey rounded-button hover:bg-peach-light flex h-14 w-38 items-center justify-center font-medium motion-safe:transition-colors",
        grounds[ground],
        className,
      )}
    >
      {children}
    </Link>
  );
}
