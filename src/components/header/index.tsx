import Logo from "@/components/common/Logo";
import Navbar from "./Navbar";
import Button from "@/components/common/Button";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />
        <Navbar />
        <Button>Panier (0)</Button>
      </div>
    </header>
  );
}
