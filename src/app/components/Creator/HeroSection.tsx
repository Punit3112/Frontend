"use client";

import React, { useState } from "react";

type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  domain?: string;
  onClaim?: (username: string) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Get Paid to Work With Brands You Love",
  subtitle = "The simple way to sell, manage, and get paid for your Instagram, TikTok, YouTube, and UGC brand deals",
  domain = "collabstr.com/",
  onClaim,
}) => {
  const [username, setUsername] = useState("");

  const handleClaim = () => {
    if (!username.trim()) return;
    onClaim?.(username);
  };

  return (
    <div className="hero-holder">
      <h1 className="text-[260%] font-semibold m-0 text-center text-[#222] max-[800px]:text-[215%]">
        {title}
      </h1>
      <h2 className="hero-subtitle">{subtitle}</h2>

      <div
        className="
  flex items-center justify-between
  w-[55%]
  rounded-[50px]
  px-[16px] py-[10px]
  border border-[#222]
  transition-all duration-300
  max-[800px]:w-[calc(97%-32px)]
"
        style={{
          boxShadow: "rgba(120, 120, 170, 0.2) 0 2px 10px 0",
        }}
      >
        <div className="text-[108%] text-[#333] font-medium">{domain}</div>

        <div className="w-full">
          <input
            type="text"
            className="h-[40px]
            w-full
            border-none
            text-[108%]
            font-[Inter,sans-serif]
            pl-[initial]
            max-[800px]:pl-0"
            placeholder="yourname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div
          className="bg-[#222]
  text-white
  rounded-[50px]
  px-[16px] py-[14px]
  font-semibold
  cursor-pointer"
          onClick={handleClaim}
        >
          Claim
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
