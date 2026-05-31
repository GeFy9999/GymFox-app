"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import ProductList from "@/components/home/ProductList";
import APropos from "@/components/a-propos";
import Contact from "@/components/contact";
import Produits from "@/components/produits";
import ProductDetail from "@/components/productDetail/productDetail";
import products from "@/utils/products.json";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export type Product = (typeof products)[0];
export type PageId = "accueil" | "produits" | "a-propos" | "contact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [page, setPage] = useState<PageId>("accueil");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleNavigate = (p: PageId) => {
    setPage(p);
    setSelectedProduct(null);
    setSelectedCategory(null);
  };

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header setPage={handleNavigate} />
        <main className="flex-1">
          {selectedProduct ? (
            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          ) : page === "accueil" ? (
            <>
              <Hero />
              <Categories
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              <ProductList
                onSelectProduct={setSelectedProduct}
                selectedCategory={selectedCategory}
              />
            </>
          ) : page === "produits" ? (
            <Produits onSelectProduct={setSelectedProduct} />
          ) : page === "a-propos" ? (
            <APropos />
          ) : page === "contact" ? (
            <Contact />
          ) : (
            <p className="text-center text-red-600">Page introuvable</p>
          )}
        </main>
        <Footer setPage={handleNavigate} />
      </body>
    </html>
  );
}
