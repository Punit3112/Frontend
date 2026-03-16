"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ContentItem {
  type: "video" | "image";
  src: string;
  href?: string;
  alt?: string;
}

const CDN = "https://d5ik1gor6xydq.cloudfront.net/websiteImages";

const contentItems: ContentItem[] = [
  { type: "video", src: `${CDN}/content/1.mp4` },
  {
    type: "image",
    src: `${CDN}/content/2.png`,
    href: "https://www.instagram.com/p/CN546zuBXwr/",
    alt: "Influencer content",
  },
  { type: "video", src: `${CDN}/content/3.mp4` },
  {
    type: "image",
    src: `${CDN}/content/4.png`,
    href: "https://www.instagram.com/p/CB3KJUdB3Sq/",
    alt: "Influencer content",
  },
  { type: "video", src: `${CDN}/content/5.mp4` },
];

function ContentCard({ item }: { item: ContentItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  if (item.type === "video") {
    return (
      <div
        className="h-[330px] w-[19%] relative cursor-pointer max-[800px]:h-[285px] max-[800px]:min-w-[180px] max-[800px]:mr-[3%]"
        onClick={togglePlay}
      >
        {!playing && (
          <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-[#0000009e] rounded-b-[8px]">
            <Image
              src={`${CDN}/content/play.svg`}
              alt="Play"
              width={48}
              height={48}
              className="w-5 mb-[11px] ml-[11px]"
            />
          </div>
        )}
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-[8px]"
          playsInline
          preload="metadata"
        >
          <source src={`${item.src}#t=0.1`} />
        </video>
      </div>
    );
  }

  return (
    <div className="relative cursor-pointer h-[330px] w-[19%] max-[800px]:h-[285px] max-[800px]:min-w-[180px] max-[800px]:mr-[3%]">
      {item.href && (
        <Link
          href={item.href}
          target="_blank"
          rel="nofollow"
          className="absolute inset-0 z-[1]"
        />
      )}
      <Image
        src={item.src}
        alt={item.alt ?? "Influencer content"}
        fill
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}

export default function BrandShowcase() {
  return (
    <div className="my-[6%] mx-auto">
      <h2 className="font-semibold text-[165%] m-0">
        Trusted by 330,000+ Brands
      </h2>
      <h3 className="mt-[1%] mb-[2%] text-gray-500 text-[95%] font-normal max-[800px]:my-[2%]">
        View collaborations from brands like Wealthsimple, Hopper, Deezer, and
        more.
      </h3>

      <div className="flex justify-between mt-[1%] max-[1150px]:overflow-x-scroll max-[1150px]:mt-[4%]">
        {contentItems.map((item, i) => (
          <ContentCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
