"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-holder">
      <div className="ds-accordion ds-accordion--divided">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="ds-accordion__item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="ds-accordion__header"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <h2 className="ds-accordion__title" itemProp="name">
                  {item.question}
                </h2>
                <img
                  className="ds-accordion__icon"
                  src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/plus.svg"
                  loading="lazy"
                  style={{
                    transform: isOpen ? "rotateZ(45deg)" : "rotateZ(0deg)",
                  }}
                  alt=""
                />
              </button>

              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div
                  id={`faq-answer-${index}`}
                  className="ds-accordion__content"
                  itemProp="text"
                  style={{ display: isOpen ? "block" : "none" }}
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
