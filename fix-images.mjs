import sharp from "sharp";

// Hero - 1920px max, compression agressive
await sharp("./public/GymBG.webp")
  .resize(1920)
  .webp({ quality: 60 })
  .toFile("./public/GymBG-opt.webp");

// Autres images lourdes
const heavy = [
  "glove2.webp", // 624 KB
  "A-proposHero.webp", // 484 KB
  "straps2.0.webp", // 400 KB
  "dumbel5-20kg.webp", // 303 KB
  "glove2-varianteBlanche.webp",
  "glove2-varianteBleuMarine.webp",
  "bands3.webp",
];

for (const file of heavy) {
  await sharp(`./public/${file}`)
    .resize(500)
    .webp({ quality: 70 })
    .toFile(`./public/${file.replace(".webp", "-opt.webp")}`);
}

console.log("Done");
