import PricingPlans from "./PricingPlans";

export default function Hero() {
  return (
    <div className="flex flex-col items-center my-[2%] max-[800px]:mt-[1%] max-[800px]:mb-0">
      <h1 className="max-[800px]:text-[215%] text-[260%] font-semibold m-0 text-center black">
        Supercharge your Influencer Marketing
      </h1>
      <div className="flex items-center mt-[2%] mb-[0.5%] max-[1000px]:mt-[18px] max-[1000px]:mb-[25px] flex-col">
        <PricingPlans />
      </div>
    </div>
  );
}
