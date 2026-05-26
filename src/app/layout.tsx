"use client";

import { useState } from "react";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import ProductList from "@/components/home/ProductList";
import APropos from "@/components/a-propos";
import Contact from "@/components/contact";
import Produits from "@/components/produits";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "GymFox — Accessoires de sport premium",
//   description: "Accessoires de gym et musculation de qualité premium",
// };

export type PageId = "accueil" | "produits" | "a-propos" | "contact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [page, setPage] = useState<PageId>("accueil");

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header setPage={setPage} />
        <main className="flex-1">
          {page === "accueil" ? (
            <>
              <Hero />
              <Categories />
              <ProductList />
            </>
          ) : page === "produits" ? (
            <Produits />
          ) : page === "a-propos" ? (
            <APropos />
          ) : page === "contact" ? (
            <Contact />
          ) : (
            <p className="text-center text-red-600">Page introuvable</p>
          )}
        </main>
        <Footer />
      </body>
    </html>
  );
}
