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
import Cart from "@/components/cart";
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

export type CartItem = {
  product: Product;
  variantLabel: string;
  variantImage: string;
  price: number;
  quantity: number;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [page, setPage] = useState<PageId>("accueil");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleNavigate = (p: PageId) => {
    setPage(p);
    setSelectedProduct(null);
    setSelectedCategory(null);
    setCartOpen(false);
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.product.name === item.product.name &&
          i.variantLabel === item.variantLabel,
      );
      if (existing) {
        return prev.map((i) =>
          i.product.name === item.product.name &&
          i.variantLabel === item.variantLabel
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }
      return [...prev, item];
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  const handleRemove = (productName: string, variantLabel: string) => {
    setCartItems((prev) =>
      prev.filter(
        (i) =>
          !(i.product.name === productName && i.variantLabel === variantLabel),
      ),
    );
  };

  const totalItems = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header
          setPage={handleNavigate}
          cartCount={totalItems}
          onCartOpen={() => setCartOpen(true)}
        />

        {justAdded && (
          <div className="fixed top-20 right-4 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium">
            ✓ Produit ajouté au panier
          </div>
        )}

        <main className="flex-1">
          {cartOpen ? (
            <Cart
              items={cartItems}
              onClose={() => setCartOpen(false)}
              onRemove={handleRemove}
            />
          ) : selectedProduct ? (
            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              onAddToCart={handleAddToCart}
            />
          ) : page === "accueil" ? (
            <>
              <Hero onNavigate={handleNavigate} />
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
