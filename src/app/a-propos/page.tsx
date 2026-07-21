import APropos from "@/components/a-propos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A-propos",
  description: "A-propos de GymFox.",
};
export default function AProposPage() {
  return <APropos />;
}
