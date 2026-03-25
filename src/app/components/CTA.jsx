export default function CallToAction() {
  return (
    <div className="w-full h-87.5 relative bg-[#2b2b2b75] flex rounded-[15px] max-[800px]:h-315px">
      <div className="absolute h-full w-[45%] bg-[linear-gradient(to_right,#212121_74%,#000000b8_84%,#000000ab_87%,#0000009c_92%,#00000087_95%,#0000006b_97%,transparent)] text-white rounded-l-[15px] max-[800px]:w-full max-[800px]:bg-[rgba(0,0,0,0.65)] max-[800px]:text-center max-[800px]:rounded-[15px]">
        <div className="w-[80%] h-full mt-[-2%] mx-auto flex flex-col justify-center max-[800px]:w-[90%] max-[800px]:mt-0">
          <h2 className="font-semibold text-[210%] m-0 max-[800px]:text-[175%]">
            Supercharge your Influencer Marketing
          </h2>
          <h3 className="my-[3%] font-normal text-[100%] max-[800px]:my-[5%]">
            Post campaigns to 550,000 creators, track post analytics, and unlock
            advanced filters.
          </h3>
          <a className="btn bg-white text-black w-47.5 py-1 px-1.25 mt-[3%] max-[800px]:w-full max-[800px]:py-5.5 max-[800px]:px-0 max-[800px]:mt-[5%] max-[800px]:mx-auto">
            Get Started
          </a>
        </div>
      </div>
      <img
        loading="lazy"
        alt="top influencers"
        className="h-full w-[80%] object-cover object-[100px] ml-auto rounded-[15px] max-[800px]:w-full max-[800px]:object-[0]"
        src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/cta.png"
      />
    </div>
  );
}
