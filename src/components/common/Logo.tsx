import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/gymfoxLogo.webp"
      alt="Logo GymFox"
      width={300}
      height={100}
      style={{ width: "auto", height: "30px" }}
      priority
    />
  );
}
