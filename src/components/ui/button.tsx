import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonGround = "light" | "dark";

const grounds: Record<ButtonGround, string> = {
  light: "bg-peach",
  dark: "bg-white",
};

type SharedProps = {
  ground?: ButtonGround;
  className?: string;
  children: ReactNode;
};

type ButtonProps = SharedProps &
  ({ href: string; type?: never } | { href?: never; type: "submit" });

export default function Button({
  href,
  type,
  ground = "light",
  className,
  children,
}: ButtonProps) {
  const shape = cn(
    "v-focus text-button text-dark-grey rounded-button hover:bg-peach-light flex h-14 w-38 items-center justify-center font-medium uppercase motion-safe:transition-colors",
    grounds[ground],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={shape}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={shape}>
      {children}
    </button>
  );
}
