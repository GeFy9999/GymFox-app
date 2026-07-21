import Contact from "@/components/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez GymFox.",
};
export default function ContactPage() {
  return <Contact />;
}
