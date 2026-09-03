import {
  CallToAction,
  OtherServices,
  ProjectGrid,
  ServiceIntro,
} from "@/components/sections";
import { projects, services, siteName } from "@/data";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ServicePageProps = {
  params: Promise<{ service: string }>;
};

export function generateStaticParams() {
  return services.map(({ slug }) => ({ service: slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service } = await params;
  const match = services.find(({ slug }) => slug === service);

  if (!match) notFound();

  return pageMetadata({
    title: match.name,
    shareTitle: `${match.name} | ${siteName}`,
    description: match.description,
    path: `/${match.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = await params;
  const match = services.find(({ slug }) => slug === service);

  if (!match) notFound();

  return (
    <div className="space-y-24 md:space-y-30 lg:space-y-40">
      <ServiceIntro service={match} />
      <ProjectGrid projects={projects[match.slug]} />
      <OtherServices
        services={services.filter(({ slug }) => slug !== match.slug)}
      />
      <CallToAction />
    </div>
  );
}
