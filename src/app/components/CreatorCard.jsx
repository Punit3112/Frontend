import Badge from "./Badge";

const PLATFORM_ICONS = {
  instagram:
    "https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/instagram.svg",
  tiktok:
    "https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/tiktok.svg",
  youtube:
    "https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/youtube.svg",
  ugc: "https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/ugc.svg",
};

export default function CreatorCard({ creator }) {
  const {
    href,
    image,
    name,
    platform,
    followers,
    rating,
    title,
    price,
    location,
    badges = [],
  } = creator;

  return (
    <div className="relative cursor-pointer w-[24%] min-w-[245px] max-[1150px]:mr-[3%]">
      <a href={href}>
        <span className="absolute w-full h-full top-0 left-0 z-[1]" />
      </a>

      <div className="w-full h-[320px] relative rounded-[9px] bg-black overflow-hidden max-[800px]:h-[250px]">
        {badges.length > 0 && (
          <div className="absolute top-[10px] left-[8px] z-[99] flex">
            {badges.includes("top_creator") && <Badge type="top_creator" />}
            {badges.includes("responds_fast") && (
              <Badge type="responds_fast" name={name} />
            )}
          </div>
        )}
        <img
          className="w-full h-full object-cover rounded-[8px] transition-transform duration-[400ms];
          -webkit-mask-image: linear-gradient(to top, rgb(0 0 0 / 50%) 10%, rgba(0, 0, 0, 1));
          transition-timing-function: cubic-bezier(0.17, 0.67, 0.13, 1.02)"
          src={image}
          alt={`${name} creator`}
          loading="lazy"
        />

        <div className="absolute bottom-2 left-2 flex flex-col">
          <div className="h-auto bg-white w-fit px-[5px] py-[2px] border border-white rounded-[50px] flex justify-center items-center">
            <img
              className="w-[12px] h-[12px] mr-[5px]"
              src={PLATFORM_ICONS[platform]}
              alt={platform}
            />
            {platform === "ugc" ? (
              <div className="text-[65%] font-semibold">UGC</div>
            ) : (
              <div className="text-[65%] font-semibold">{followers}</div>
            )}
          </div>
          <div className="flex items-center text-[80%] text-white font-semibold">
            {name}
            {rating && (
              <span className="font-medium flex items-center">
                <img
                  src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/star.svg"
                  className="w-[12px] mx-[3px] ml-[7px]"
                />
                {rating.toFixed(1)}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center my-[2%] mb-[1%]">
        <h3 className="text-[90%] font-light m-0 h-[18px] overflow-hidden text-ellipsis whitespace-nowrap max-w-[600px] max-[800px]:max-w-[200px]">
          {title}
        </h3>
        <div className="font-semibold text-[95%]">
          ${price.toLocaleString()}
        </div>
      </div>
      <div className="text-[rgb(151,163,197)] text-[75%]">{location}</div>
    </div>
  );
}
