"use client";

import React from "react";
import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

const TRANSITION = "0.35s ease";

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-[10%] mb-[8%] max-[800px]:my-[25%]">
      <div className="w-full">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="mb-[4%] pb-[2%] cursor-pointer border-b border-black/10 
              max-[800px]:mb-[10%] max-[800px]:pb-[4%]"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              onClick={() => toggle(index)}
            >
              <button
                className="flex items-center justify-between w-full p-0 border-none bg-transparent cursor-pointer text-left font-inherit text-inherit"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <h2
                  className="font-semibold text-[112%] m-0 max-[800px]:text-[100%]"
                  itemProp="name"
                >
                  {item.question}
                </h2>
                <img
                  className="shrink-0 w-[15px] h-[15px] mr-[10px] transition-transform duration-300 rotate-0"
                  src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg"
                  loading="lazy"
                  style={{
                    transform: isOpen ? "rotateZ(45deg)" : "rotateZ(0deg)",
                    transition: `transform ${TRANSITION}`,
                  }}
                  alt=""
                />
              </button>

              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: `grid-template-rows ${TRANSITION}`,
                  overflow: "hidden",
                }}
              >
                <div
                  id={`faq-answer-${index}`}
                  className="mt-[2%] font-light text-[95%]"
                  itemProp="text"
                  style={{ minHeight: 0 }}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
