import webDesignFeature from "@/assets/services/desktop/web-design-large.webp";
import { ServiceCard } from "@/components/ui";
import { services } from "@/data";

export default function ServiceCards() {
  const [webDesign, ...rest] = services;

  return (
    <section aria-labelledby="services-heading" className="v-container">
      <h2 id="services-heading" className="sr-only">
        Our services
      </h2>

      <ul className="v-stagger grid gap-6 lg:grid-cols-2 lg:gap-x-7.5">
        <ServiceCard
          service={webDesign}
          desktopImage={webDesignFeature}
          className="lg:row-span-2"
        />
        {rest.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </ul>
    </section>
  );
}
