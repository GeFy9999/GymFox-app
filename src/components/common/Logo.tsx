import Image from "next/image";
import logo from "@/public/gymfoxLogo.webp";

export default function Logo() {
  return (
    <Image
      src={logo}
      alt="Logo GymFox"
      width={300}
      height={100}
      style={{ width: "auto", height: "30px" }}
      priority
    />
  );
}
