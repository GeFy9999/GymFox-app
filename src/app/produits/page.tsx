import Produits from "@/components/produits";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produits",
  description: "Nos produits.",
};
export default function ProduitsPage() {
  return <Produits />;
}
