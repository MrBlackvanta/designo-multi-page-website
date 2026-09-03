import {
  CallToAction,
  CompanyValues,
  HomeHero,
  ServiceCards,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="space-y-30 lg:space-y-40">
      <HomeHero />
      <ServiceCards />
      <CompanyValues />
      <CallToAction />
    </div>
  );
}
