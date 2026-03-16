import Badge from './Badge'


const PLATFORM_ICONS = {
  instagram: "/icons/instagram.svg",
  tiktok: "/icons/tiktok.svg",
  youtube: "/icons/youtube.svg",
  ugc: "/icons/ugc.svg",
};

export default function CreatorCard({ creator }) {
  const { href, image, name, platform, followers, rating, title, price, location, badges = [] } = creator;

  return (
    <div className="profile-listing-holder">
      <a href={href}><span className="link-spanner" /></a>

      <div className="profile-listing-img-holder">
        {badges.length > 0 && (
          <div className="profile-listing-badge-holder">
            {badges.includes("top_creator") && <Badge type="top_creator" />}
            {badges.includes("responds_fast") && <Badge type="responds_fast" name={name} />}
          </div>
        )}
        <img className="profile-listing-img" src={image} alt={`${name} creator`} loading="lazy" />

        <div className="profile-listing-owner-holder">
          <div className="profile-platform-badge">
            <img className="profile-listing-platform-img" src={PLATFORM_ICONS[platform]} alt={platform} />
            {platform === "ugc"
              ? <div className="profile-listing-followers">UGC</div>
              : <div className="profile-listing-followers">{followers}</div>
            }
          </div>
          <div className="profile-listing-owner-name">
            {name}
            {rating && (
              <span className="profile-listing-review-holder">
                <img src="/icons/star.svg" className="profile-listing-review-img" />
                {rating.toFixed(1)}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="profile-listing-info-row">
        <h3 className="profile-listing-title">{title}</h3>
        <div className="profile-listing-price">${price.toLocaleString()}</div>
      </div>
      <div className="profile-listing-category">{location}</div>
    </div>
  );
}