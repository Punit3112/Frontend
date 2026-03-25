"use client";
import { useState } from "react";

type BillingType = "m" | "y";

type Feature = {
  text: string;
  bold?: boolean;
  disabled?: boolean;
};

type Plan = {
  name: string;
  monthly: number | string;
  yearly: number | string;
  features: Feature[];
  cancel: string;
};

export default function PricingPlans() {
  const [billing, setBilling] = useState<BillingType>("m");

  const plans: Plan[] = [
    {
      name: "Basic",
      monthly: "Free",
      yearly: "Free",
      features: [
        { text: "Search Influencers on the marketplace", bold: true },
        { text: "10% marketplace fee", bold: true },
        { text: "Post campaigns", disabled: true },
        { text: "Track live analytics", disabled: true },
        {
          text: "Advanced filters for age, ethnicity, language & more",
          disabled: true,
        },
        {
          text: "Chat & Negotiate with creators before hiring",
          disabled: true,
        },
        { text: "Influencer engagement & audience reports", disabled: true },
      ],
      cancel: "",
    },
    {
      name: "Pro",
      monthly: 299,
      yearly: 149,
      features: [
        { text: "Everything in Basic", bold: true },
        { text: "Post 1 campaign per month", bold: true },
        { text: "Track live analytics for 5 posts at a time", bold: true },
        {
          text: "Advanced filters for age, ethnicity, language and more",
          bold: true,
        },
        { text: "Chat & Negotiate with creators before hiring", bold: true },
        { text: "20 Influencer engagement & audience reports", bold: true },
      ],
      cancel: "Cancel anytime",
    },
    {
      name: "Premium",
      monthly: 399,
      yearly: 199,
      features: [
        { text: "Everything in Pro", bold: true },
        { text: "Post unlimited campaigns per month", bold: true },
        { text: "Track live analytics for 15 posts at a time", bold: true },
        { text: "5% marketplace fee", bold: true },
        { text: "Priority customer support", bold: true },
        { text: "50 Influencer engagement & audience reports", bold: true },
      ],
      cancel: "Cancel anytime",
    },
  ];

  return (
    <>
      {/* Toggle */}
      <div className="flex items-center mt-[2%] mb-[0.5%] max-[1000px]:mt-[18px] max-[1000px]:mb-[25px]">
        
          <div
            className="mx-[5px] text-[90%] text-[#bcbcbc] font-light cursor-pointer rounded-[30px] py-[3px] px-[9px]"
            onClick={() => setBilling("m")}
          >
            Bill Monthly
          </div>

          <div className="flex items-center">
            <div
              className="mx-[5px] text-[90%] text-[#bcbcbc] font-light cursor-pointer rounded-[30px] py-[3px] px-[9px]"
              onClick={() => setBilling("y")}
            >
              Bill Yearly
            </div>

            <div className="text-[65%] text-white rounded-[50px] py-[3px] px-[7px] ml-[-10px]">
              Save 50%
            </div>
          </div>
        </div>
      

      {/* Plans */}
      <div className="flex justify-around gap-5 mb-8 max-[1000px]:flex-col max-[1000px]:gap-7">
        <div className="w-full">
          <div className="flex justify-around gap-5 mb-8 max-[1000px]:flex-col max-[1000px]:gap-7">
            {plans.map((plan: Plan, index: number) => (
              <div
                key={index}
                className={`w-[calc(100%-42px)] border border-black rounded-lg px-6 py-5 flex flex-col max-[1000px]:w-auto ${
                  index === 1 ? "bg-black text-white" : "auto-plan-holder-right"
                }`}
              >
                <div className="text-center font-light text-[105%]">
                  {plan.name}
                </div>

                <div className="text-center font-semibold mt-[15px] text-[190%] monthly-plan-price">
                  {typeof plan.monthly === "string" ? (
                    <>
                      <span
                        className="monthly-price"
                        style={{
                          display: billing === "m" ? "inline-block" : "none",
                        }}
                      >
                        {plan.monthly}
                      </span>
                      <span
                        className="annual-price"
                        style={{
                          display: billing === "y" ? "inline-block" : "none",
                        }}
                      >
                        {plan.yearly}
                      </span>
                    </>
                  ) : (
                    <>
                      $
                      <span
                        className="monthly-price"
                        style={{
                          display: billing === "m" ? "inline-block" : "none",
                        }}
                      >
                        {plan.monthly}
                      </span>
                      <span
                        className="annual-price"
                        style={{
                          display: billing === "y" ? "inline-block" : "none",
                        }}
                      >
                        {plan.yearly}
                      </span>
                      /mo
                    </>
                  )}
                </div>

                <div className="mb-5">
                  {plan.features.map((f: Feature, i: number) => (
                    <div key={i} className="text-[88%] my-[23px]">
                      {f.disabled ? (
                        <s>{f.text}</s>
                      ) : f.bold ? (
                        <b>{f.text}</b>
                      ) : (
                        f.text
                      )}
                    </div>
                  ))}
                </div>

                <div
                  className="text-center rounded-[8px] p-[15px] w-[calc(100%-32px)] font-semibold mx-auto cursor-pointer transition duration-300 bg-white text-black"
                  data-id={index}
                >
                  Get Started
                </div>

                <div className="text-center mt-[12px] text-[78%] italic">
                  {plan.cancel || "\u00A0"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
