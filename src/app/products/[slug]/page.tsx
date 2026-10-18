import { notFound } from "next/navigation";
import { products } from "@/data/site";
import ProductDetailClient from "./product-detail-client";

/* ------------------------------------------------------------------ */
/*  Static Params                                                      */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

/* ------------------------------------------------------------------ */
/*  Page (Server Component)                                            */
/* ------------------------------------------------------------------ */

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return <ProductDetailClient product={product} />;
}
