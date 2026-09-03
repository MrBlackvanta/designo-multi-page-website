"use client";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import NavLinks from "./nav-links";

const transition =
  "motion-safe:transition-[opacity,visibility] motion-safe:duration-300 motion-safe:ease-out";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia("(width >= 48rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);

    const behind = document.querySelectorAll("main, footer");
    behind.forEach((element) => element.setAttribute("inert", ""));

    const { style } = document.body;
    const offset = window.scrollY;
    style.position = "fixed";
    style.insetInline = "0";
    style.top = `-${offset}px`;

    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      behind.forEach((element) => element.removeAttribute("inert"));
      style.position = "";
      style.insetInline = "";
      style.top = "";
      window.scrollTo(0, offset);
    };
  }, [open]);

  const dismiss = () => setOpen(false);

  const close = () => {
    dismiss();
    toggleRef.current?.focus();
  };

  const closeOnEscape = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") close();
  };

  return (
    <div className="contents md:hidden" onKeyDown={closeOnEscape}>
      <button
        ref={toggleRef}
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(!open)}
        className="v-tap v-focus flex w-6 justify-center text-black"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        aria-hidden="true"
        onClick={close}
        className={cn(
          "bg-scrim absolute inset-x-0 top-full h-dvh",
          transition,
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      />

      <div
        id="site-menu"
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full bg-black px-6 py-12 text-white",
          transition,
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <NavLinks variant="menu" onNavigate={dismiss} />
      </div>
    </div>
  );
}
