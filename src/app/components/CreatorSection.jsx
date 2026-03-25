'use client'
import CreatorCard from "../components/CreatorCard"

export default function CreatorSection({ title, subtitle, seeAllHref, creators }) {
  return (
    <div className="section-holder">
      <h2 className="flex items-baseline text-[150%] font-semibold m-0">{title}</h2>
      <h3 className="flex items-center my-[4px] mb-[8px] text-[92%] font-normal text-gray-500">
        {subtitle}
        <span className="text-[#222] ml-auto cursor-pointer font-semibold" onClick={() => location.href = seeAllHref}>
          See All
        </span>
      </h3>
      <div className="flex justify-between mt-[1%] max-[1150px]:overflow-x-scroll max-[1150px]:mt-[4%]">
        {creators.map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}