"use client";
import { useRouter } from "next/navigation";

// Minimal inline SVG icons — no external dependency
const icons = {
  Instagram: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  TikTok: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  ),
  Eye: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Dollar: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Camera: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  ShoppingBag: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  Sparkles: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3L9.5 9.5 3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5z" />
    </svg>
  ),
  Heart: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

export interface QuickSearchItem {
  id: string;
  title: string;
  href: string;
  icon: React.ReactNode;
}

const DEFAULT_ITEMS: QuickSearchItem[] = [
  {
    id: "rising_instagram",
    title: "Rising Instagram Stars",
    href: "/influencers?qs=rising_instagram_stars&title=Rising%20Instagram%20Stars&p=instagram&fmi=10000&fmx=100000",
    icon: icons.Instagram,
  },
  {
    id: "rising_tiktok",
    title: "Rising TikTok Stars",
    href: "/influencers?qs=rising_tiktok_stars&title=Rising%20TikTok%20Stars&p=tiktok&fmi=10000&fmx=1000000",
    icon: icons.TikTok,
  },
  {
    id: "most_viewed",
    title: "Most Viewed",
    href: "/influencers?qs=most_viewed&title=Most%20Viewed&p=tiktok",
    icon: icons.Eye,
  },
  {
    id: "under_250",
    title: "Under $250",
    href: "/influencers?qs=under_250&title=Influencers%20Under%20%24250&pmi=50&pmx=250",
    icon: icons.Dollar,
  },
  {
    id: "ugc",
    title: "UGC",
    href: "/influencers?qs=ugc&title=UGC&p=user+generated+content",
    icon: icons.Camera,
  },
  {
    id: "fashion",
    title: "Fashion",
    href: "/influencers?qs=fashion&title=Fashion&c=Fashion",
    icon: icons.ShoppingBag,
  },
  {
    id: "beauty",
    title: "Beauty",
    href: "/influencers?qs=beauty&c=Beauty",
    icon: icons.Sparkles,
  },
  {
    id: "health_fitness",
    title: "Health & Fitness",
    href: "/influencers?qs=health_and_fitness&c=Health+%26+Fitness",
    icon: icons.Heart,
  },
];

interface QuickSearchItemCardProps {
  item: QuickSearchItem;
  onClick?: (item: QuickSearchItem) => void;
}

function QuickSearchItemCard({ item, onClick }: QuickSearchItemCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick(item);
    } else {
      router.push(item.href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center shadow-[rgba(120,120,170,0.3)_0_2px_10px_0] cursor-pointer gap-[6px] px-[10px] py-[4px] rounded-[50px]"
    >
      <span className="block mt-[4px]">{item.icon}</span>
      <span className="text-[80%] font-semibold">{item.title}</span>
    </button>
  );
}

interface QuickSearchProps {
  /** Override the default items */
  items?: QuickSearchItem[];
  /** Custom click handler — if omitted, navigates to item.href via router.push */
  onItemClick?: (item: QuickSearchItem) => void;
  className?: string;
}

export default function QuickSearch({
  items = DEFAULT_ITEMS,
  onItemClick,
  className = "",
}: QuickSearchProps) {
  return (
    <div
      className={`quick-search-holder ${className}`}
      role="navigation"
      aria-label="Quick search filters"
    >
      {items.map((item) => (
        <QuickSearchItemCard key={item.id} item={item} onClick={onItemClick} />
      ))}
    </div>
  );
}

export { DEFAULT_ITEMS };
