'use client'
import CreatorCard from "../components/CreatorCard"

export default function CreatorSection({ title, subtitle, seeAllHref, creators }) {
  return (
    <div className="section-holder">
      <h2 className="section-title">{title}</h2>
      <h3 className="section-subtitle">
        {subtitle}
        <span className="explore-btn" onClick={() => location.href = seeAllHref}>
          See All
        </span>
      </h3>
      <div className="listing-row">
        {creators.map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}