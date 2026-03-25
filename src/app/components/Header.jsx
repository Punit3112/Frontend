export default function Header() {
  return (
    <header className="flex items-center justify-center w-full h-[85px] min-h-[85px] md:fixed md:top-0 md:left-0 md:bg-white md:z-[999999999]">
      <div className="flex justify-between items-center w-[90%] max-w-[1600px] mx-auto max-[800px]:w-[92%]">
        <div>
          <a className="cursor-pointer text-inherit flex max-h-[35px]">
            <img
              alt="Collabstr logo"
              className="w-[121px] h-auto max-h-[35px] max-[800px]:w-[105px] max-[800px]:max-h-[28px]"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/logo.svg"
            />
          </a>
        </div>
        <div className="flex items-center flex-wrap justify-end">
          <a className="header-btn" href="/influencers">
            Search
          </a>
          <a className="header-btn" href="/#how-it-works">
            How It Works
          </a>
          <a className="header-btn" href="/pricing">
            Pricing
          </a>
          <a className="header-btn" href="/login">
            Login
          </a>
          <a className="header-btn" href="/brand">
            Join as Brand
          </a>
          <a className="header-btn join-btn" href="/creator">
            Join as Creator
          </a>
        </div>
      </div>
    </header>
  );
}
