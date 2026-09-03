import { siteName } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-start gap-4", className)}>
      <span
        aria-hidden="true"
        className="v-logo-mark size-6 shrink-0 rounded-full"
      />
      <span className="font-display text-logo font-bold uppercase">
        {siteName}
      </span>
    </Link>
  );
}
