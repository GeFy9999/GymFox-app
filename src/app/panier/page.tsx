import Cart from "@/components/cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panier",
  description: "Votre panier GymFox.",
};
export default function PanierPage() {
  return <Cart />;
}
