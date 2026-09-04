import { notFound } from "next/navigation";
import { SERVICE_AREAS_DATA } from "@/lib/serviceAreasData";
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

export async function generateStaticParams() {
  return Object.keys(SERVICE_AREAS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const area = SERVICE_AREAS_DATA[resolvedParams.slug];

  if (!area) {
    return {
      title: "Location Not Found | Glenns Lens Photography",
    };
  }

  return {
    title: `${area.title} | Glenns Lens Photography`,
    description: area.tagline,
  };
}

export default async function ServiceAreaPage({ params }) {
  const resolvedParams = await params;
  const area = SERVICE_AREAS_DATA[resolvedParams.slug];

  if (!area) {
    notFound();
  }

  return <ServiceAreaTemplate area={area} />;
}
