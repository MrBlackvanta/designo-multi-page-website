import { ServiceCard } from "@/components/ui";
import type { Service } from "@/data";

type OtherServicesProps = {
  services: Service[];
};

export default function OtherServices({ services }: OtherServicesProps) {
  return (
    <section aria-labelledby="other-services-heading" className="v-container">
      <h2 id="other-services-heading" className="sr-only">
        Other services
      </h2>

      <ul className="grid gap-6 lg:grid-cols-2 lg:gap-x-7.5">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </ul>
    </section>
  );
}
