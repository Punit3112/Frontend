"use client";
import { useEffect, useState } from "react";

const words = [
  "Video Ads",
  "Testimonials",
  "Sponsored Photos",
  "Product Photos",
];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 80);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <div className="hero-holder">
      <h1 className="text-[260%] font-semibold m-0 text-center text-black max-[800px]:text-[215%]">
        The Easy Way to Generate <br />
        <span className="change-txt title-gradient">
          {displayText || "\u00A0"}
        </span>
      </h1>

      <h2 className="hero-subtitle">
        Search influencers, post campaigns, track analytics, and get unique
        content for your brand in seconds
      </h2>

      <a href="/brand-signup" className="signup-btn btn">
        Join for Free
      </a>
    </div>
  );
}
