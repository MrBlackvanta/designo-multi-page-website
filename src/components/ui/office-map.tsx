"use client";

import type { MapView } from "@/data";
import type { Map } from "leaflet";
import { useEffect, useRef } from "react";

const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const tileAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

type OfficeMapProps = {
  view: MapView;
  className?: string;
};

export default function OfficeMap({ view, className }: OfficeMapProps) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = host.current;
    if (!node) return;

    let map: Map | undefined;
    let released = false;

    const mount = async () => {
      const [L] = await Promise.all([
        import("leaflet"),
        import("./office-map.css"),
      ]);
      if (released) return;

      const animate = !window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches;

      map = L.map(node, {
        center: view.center,
        zoom: view.zoom,
        scrollWheelZoom: false,
        zoomAnimation: animate,
        fadeAnimation: animate,
      });
      map.attributionControl.setPrefix(false);
      L.tileLayer(tileUrl, { attribution: tileAttribution, maxZoom: 19 }).addTo(
        map,
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        void mount();
      },
      { rootMargin: "300px" },
    );

    observer.observe(node);

    return () => {
      released = true;
      observer.disconnect();
      map?.remove();
    };
  }, [view]);

  return (
    <div
      ref={host}
      role="group"
      aria-label={`Interactive map of ${view.area}`}
      className={className}
    />
  );
}
