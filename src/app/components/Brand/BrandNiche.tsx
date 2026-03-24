"use client";

import React from "react";

const niches = [
  "Lifestyle",
  "Fashion",
  "Beauty",
  "Travel",
  "Health & Fitness",
  "Family & Children",
  "Music & Dance",
  "Comedy & Entertainment",
];

type CreatorNichesProps = {
  title?: string;
  className?: string;
};

const BrandNiche: React.FC<CreatorNichesProps> = ({
  title = "Over 550,000 Creators for Your Brand",
  className = "",
}) => {
  return (
    <div className={`row-holder ${className}`}>
      <h2
        className="text-center font-semibold text-[165%] m-0"
        style={{
          background:
            "linear-gradient(90deg, rgb(255 132 160) 0%, rgb(251 102 157) 20%, rgb(179 45 194) 95%, rgb(136, 95, 183) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h2>

      <div className="flex items-center justify-center flex-wrap w-[70%] mx-auto mt-[3%] mb-[4%] max-[800px]:w-full max-[800px]:my-[6%]">
        {niches.map((niche, index) => (
          <div
            key={index}
            className="
          niche
          text-center
          min-w-[90px]
          rounded-[30px]
          px-[20px] py-[12px]
          m-[8px]
          border
          text-[100%]
          max-[800px]:min-w-[80px]
          max-[800px]:px-[10px]
          max-[800px]:py-[8px]
          max-[800px]:m-[5px]
          max-[800px]:text-[80%]
        "
            style={{
              background:
                "linear-gradient(90deg, rgb(255 132 160) 0%, rgb(251 102 157) 20%, rgb(179 45 194) 95%, rgb(136, 95, 183) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              borderColor: "#FF899B",
              boxShadow: "rgba(120, 120, 170, 0.2) 0 2px 10px 0",
            }}
          >
            {niche}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandNiche;
