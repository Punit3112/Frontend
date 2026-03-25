import Image from "next/image";

export interface BrandLogo {
  src: string;
  alt: string;
}

interface BrandLogosProps {
  logos: BrandLogo[];
}

const BrandLogos = ({ logos }: BrandLogosProps) => {
  return (
    <div className="flex items-center justify-evenly mt-[4%] mb-[-2%] opacity-75 max-[800px]:flex-wrap">
      {logos.map(({ src, alt }) => (
        <div key={src}>
          <Image
            key={src}
            src={src}
            alt={alt}
            width={130}
            height={45}
            className="object-contain max-[800px]:w-[130px] max-[800px]:flex-[0_30%] max-[800px]:my-[2%]"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandLogos;
