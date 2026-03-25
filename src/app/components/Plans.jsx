export default function Plans() {
  return (
    <>
      <div className="text-center text-[220%] mt-[11%] mb-[-1%] font-semibold max-[800px]:text-[205%] max-[800px]:mt-[20%] max-[800px]:mb-[-1%]">
        Included in Pro and Premium Plans
      </div>
      <div className="px-15 max-[1000px]:px-7.5">
        <div className="example-row-handler">
          <div className="example-steps-holder">
            <div className="example-step-tag">Search</div>
            <h2 className="example-row-title">
              Find and Hire Influencers in Seconds on the Marketplace
            </h2>
            <div className="example-step">
              <h3 className="example-step-title">Search Influencers</h3>
              <div className="example-step-txt">
                Search thousands of vetted Instagram, TikTok, and YouTube
                influencers.
              </div>
            </div>
            <div className="example-step">
              <h3 className="example-step-title">
                Purchase &amp; Chat Securely
              </h3>
              <div className="example-step-txt">
                Safely purchase and communicate through Collabstr. We hold your
                payment until the work is completed.
              </div>
            </div>
            <div className="example-step">
              <h3 className="example-step-title">Receive Quality Content</h3>
              <div className="example-step-txt">
                Receive your high-quality content from influencers directly
                through the platform.
              </div>
            </div>
          </div>
          <div className="example-img-holder">
            <picture>
              <source
                media="(max-width: 800px)"
                srcSet="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/brandPage/marketplaceSmall.png"
              />
              <img
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/brandPage/marketplace.png"
                className="example-img"
                alt="Influencer marketplace"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
        <div className="example-row-handler max-[800px]:flex-col">
          <div className="example-img-holder">
            <picture>
              <source
                media="(max-width: 800px)"
                srcSet="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/brandPage/campaignApplySmall.png"
              />
              <img
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/brandPage/campaignApply.png"
                className="example-img"
                alt="Influencer campaign brief"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="example-steps-holder">
            <div className="example-step-tag">Campaigns</div>
            <h2 className="example-row-title">
              Post Campaigns and Have 550,000+ Influencers Come to You
            </h2>

            <div className="example-step">
              <h3 className="example-step-title">Set Targeting</h3>
              <div className="example-step-txt">
                Specify demographics including niche, location and following
                size of the influencers you want to target.
              </div>
            </div>
            <div className="example-step">
              <h3 className="example-step-title">Post Campaign</h3>
              <div className="example-step-txt">
                Centralize your images, requirements, and more in a campaign
                brief sent to 550,000 influencers.
              </div>
            </div>
            <div className="example-step">
              <h3 className="example-step-title">Influencers Apply</h3>
              <div className="example-step-txt">
                Targeted influencers submit their pricing, and you choose who to
                collaborate with.
              </div>
            </div>
          </div>
        </div>
        <div className="example-row-handler">
          <div className="example-steps-holder">
            <div className="example-step-tag">Track</div>
            <h2 className="example-row-title">
              Track Post Analytics and Performance in Real Time
            </h2>
            <div className="example-step">
              <h3 className="example-step-title">One-Click Tracking</h3>
              <div className="example-step-txt">
                Track Instagram, TikTok, and YouTube content in real time from a
                single dashboard. Say goodbye to manual tracking and messy
                spreadsheets.
              </div>
            </div>
            <div className="example-step">
              <h3 className="example-step-title">
                Advanced Analytics &amp; Reporting
              </h3>
              <div className="example-step-txt">
                Analyze content performance over time, including impressions,
                engagement and more. Organize performance by campaign and
                effortlessly build reports.
              </div>
            </div>
            <div className="example-step">
              <h3 className="example-step-title">Fully Automated</h3>
              <div className="example-step-txt">
                Metrics are updated every 24 hours, ensuring performance data is
                always up-to-date.
              </div>
            </div>
          </div>
          <div className="example-img-holder">
            <picture>
              <source
                media="(max-width: 800px)"
                srcSet="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/tracking/trackingSmall.png"
              />
              <img
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/tracking/tracking.png"
                className="example-img"
                alt="Influencer campaign brief"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
