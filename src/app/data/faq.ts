import { FAQItem } from "@/app/components/FAQ";

export const faqData: Record<string, { title: string; items: FAQItem[] }> = {
  "/": {
    title: "Influencer Marketing FAQs",
    items: [
      {
        question: "What is Influencer Marketing?",
        answer:
          "Influencer marketing is a digital marketing strategy that involves collaborating with individuals, known as influencers, who have a dedicated and engaged following on social media platforms. Brands partner with influencers to promote their products or services authentically, build social proof, and reach a larger, more targeted audience.",
      },
      {
        question: "How Does Influencer Marketing Work?",
        answer:
          "Influencer marketing operates by identifying suitable influencers for your brand, establishing a partnership, and creating content through the influencer's channels. This can take the form of sponsored posts, reviews, tutorials, or endorsements shared with their engaged audience.",
      },
      {
        question: "How Much Does Influencer Marketing Cost?",
        answer:
          "The cost varies widely depending on the influencer's reach, niche, and engagement rates. Micro-influencers with smaller followings may charge less than macro-influencers or celebrities. Some work on a per-post basis, while others prefer ongoing partnerships.",
      },
    ],
  },

  "/pricing": {
    title: "Pricing FAQs",
    items: [
      {
        question: "Do you offer a free trial?",
        answer:
          "Yes, all plans include a 14-day free trial with no credit card required.",
      },
      {
        question: "Can I switch plans later?",
        answer:
          "Absolutely. You can upgrade or downgrade your plan at any time from your account settings.",
      },
    ],
  },

  // Add more routes here...
};
