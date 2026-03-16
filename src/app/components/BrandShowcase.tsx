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
      <div className="content-holder" onClick={togglePlay}>
        {!playing && (
          <div className="play-btn-holder">
            <Image
              src={`${CDN}/content/play.svg`}
              alt="Play"
              width={48}
              height={48}
              className="play-btn"
            />
          </div>
        )}
        <video
          ref={videoRef}
          className="content-img content-vid"
          playsInline
          preload="metadata"
        >
          <source src={`${item.src}#t=0.1`} />
        </video>
      </div>
    );
  }

  return (
    <div className="content-holder">
      {item.href && (
        <Link
          href={item.href}
          target="_blank"
          rel="nofollow"
          className="link-spanner"
        />
      )}
      <Image
        src={item.src}
        alt={item.alt ?? "Influencer content"}
        fill
        className="content-img"
      />
    </div>
  );
}

export default function BrandShowcase() {
  return (
    <div className="row-holder">
      <h2 className="row-title">Trusted by 330,000+ Brands</h2>
      <h3 className="row-subtitle">
        View collaborations from brands like Wealthsimple, Hopper, Deezer, and
        more.
      </h3>

      <div className="listing-row">
        {contentItems.map((item, i) => (
          <ContentCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
