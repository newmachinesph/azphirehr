import { notFound } from "next/navigation";
import { solutions } from "@/data/site";
import { SolutionDetailClient } from "./solution-detail-client";

/* ------------------------------------------------------------------ */
/*  Static params — pre-render all 4 solution pages                    */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

/* ------------------------------------------------------------------ */
/*  Server page — resolve slug, pass data to client component          */
/* ------------------------------------------------------------------ */
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) notFound();

  return <SolutionDetailClient solution={solution} />;
}
