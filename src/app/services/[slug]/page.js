import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/lib/servicesData";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];

  if (!service) {
    return {
      title: "Service Not Found | Glenns Lens Photography",
    };
  }

  return {
    title: `${service.title} | Glenns Lens Photography`,
    description: service.subtitle,
  };
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailTemplate service={service} />;
}
