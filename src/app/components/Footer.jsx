export default function Footer() {
  return (
    <footer className="w-full py-[30px] border-t border-[#ededed] flex flex-col items-center font-light mt-auto max-[800px]:pb-[100px]">
      <div className="flex w-[90%] max-w-[1600px] mx-auto mt-[2%] mb-[4%] max-[800px]:flex-col">
        <div className="footer-section">
          <div className="footer-title">Resources</div>

          <a href="/blog" className="footer-txt">
            Blog
          </a>
          <a href="/resource-hub" className="footer-txt">
            Resource Hub
          </a>
          <a href="/ultimate-guide-to-tiktok-for-brands" className="footer-txt">
            TikTok Ebook For Brands
          </a>
          <a href="/2026-influencer-marketing-report" className="footer-txt">
            2026 Influencer Marketing Report
          </a>
        </div>
        <div className="footer-section">
          <div className="footer-title">Tools</div>
          <a href="/influencer-price-calculator" className="footer-txt">
            Influencer Price Calculator
          </a>
          <a href="/instagram-fake-follower-checker" className="footer-txt">
            Instagram Fake Follower Checker
          </a>
          <a href="/tiktok-fake-follower-checker" className="footer-txt">
            TikTok Fake Follower Checker
          </a>
          <a
            href="/instagram-engagement-rate-calculator"
            className="footer-txt"
          >
            Instagram Engagement Rate Calculator
          </a>
          <a href="/tiktok-engagement-rate-calculator" className="footer-txt">
            TikTok Engagement Rate Calculator
          </a>
          <a href="/influencer-campaign-brief-template" className="footer-txt">
            Influencer Campaign Brief Template
          </a>
          <a href="/influencer-contract-template" className="footer-txt">
            Influencer Contract Template
          </a>
          <a href="/influencer-analytics" className="footer-txt">
            Influencer Analytics &amp; Tracking
          </a>
          <a href="/instagram-reels-downloader" className="footer-txt">
            Instagram Reels Downloader
          </a>
          <a href="/tiktok-video-downloader" className="footer-txt">
            TikTok Video Downloader
          </a>
        </div>
        <div className="footer-section">
          <div className="footer-title">Discover</div>
          <a href="/find-influencers" className="footer-txt">
            Find Influencers
          </a>
          <a href="/top-influencers" className="footer-txt">
            Top Influencers
          </a>
          <a href="/search-influencers" className="footer-txt">
            Search Influencers
          </a>
          <a href="/influencer-shoutouts" className="footer-txt">
            Buy Shoutouts
          </a>
        </div>
        <div className="footer-section">
          <div className="footer-title">Support</div>
          <a href="/support" className="footer-txt">
            Contact Us
          </a>
          <a href="/#how-it-works" className="footer-txt">
            How It Works
          </a>
          <a href="/faq" className="footer-txt">
            Frequently Asked Questions
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between w-[90%] max-w-[1600px] mx-auto mt-[2%] mb-[1%] text-[80%] max-[800px]:flex-col-reverse max-[800px]:items-baseline max-[800px]:my-[4%]">
        <div className="flex items-center">
          <div className="footer-item">© Collabstr Inc.</div>
          <a href="/privacy" className="footer-item">
            Privacy
          </a>
          <a href="/terms" className="footer-item">
            Terms
          </a>
          <a href="/sitemap" className="footer-item">
            Sitemap
          </a>
        </div>
        <div className="flex items-center">
          <div className="footer-img">
            <a href="" target="_blank">
              <span className="link-spanner"></span>
            </a>
            <img
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/instagram.svg"
              alt="Instagram logo"
              loading="lazy"
            />
          </div>
          <div className="footer-img">
            <a href="" target="_blank">
              <span className="link-spanner"></span>
            </a>
            <img
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/tiktok.svg"
              alt="TikTok logo"
              loading="lazy"
            />
          </div>
          <div className="footer-img">
            <a href="" target="_blank">
              <span className="link-spanner"></span>
            </a>
            <img
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/twitter.svg"
              alt="Twitter logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
