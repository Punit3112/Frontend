// data/brandLogos.ts
import { BrandLogo } from "@/app/components/BrandLogos";

const BASE_URL =
  "https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/logos";

export const brandLogos: BrandLogo[] = [
  { src: `${BASE_URL}/wealthsimple.svg`, alt: "Wealthsimple logo" },
  { src: `${BASE_URL}/clickup.svg`, alt: "ClickUp logo" },
  { src: `${BASE_URL}/hopper.svg`, alt: "Hopper logo" },
  { src: `${BASE_URL}/un.svg`, alt: "United Nations logo" },
  { src: `${BASE_URL}/deezer.svg`, alt: "Deezer logo" },
];
