import React from 'react';
import Link from 'next/link';

interface NavDrawerProps {
  isDrawerOpen: boolean;
  drawerRef: React.RefObject<HTMLDivElement>;
}

const NavDrawer: React.FC<NavDrawerProps> = ({ isDrawerOpen, drawerRef }) => {
  return (
    <nav
      ref={drawerRef}
      className={`fixed top-0 bottom-0 left-0 w-[285px] h-[calc(100vh-49px)] text-white transition-transform duration-300 ease-out transform ${isDrawerOpen ? '-translate-x-0' : '-translate-x-full'}`}
    >
      <div className="fixed top-0 w-[285px] h-[calc(100vh-49px)] flex-none bg-white left-0">
        <div className="h-12 py-3 pl-3 box-content z-3 flex flex-row items-center text-left">
          <Link href="/" legacyBehavior>
            <a data-e2e="tiktok-logo" className="relative" aria-label="Go to TikTok For You feed">
              <strong className="css-o5o7hg-StrongText">TikTok</strong>
            </a>
          </Link>
          <strong className="css-o5o7hg-StrongText">TikTok</strong>
        </div>
        <div className="box-border fixed top-[60px] bottom-[49px] w-[285px] z-11 overflow-y-auto overscroll-contain perspective-[1px] transform-style-preserve-3d perspective-origin-top-right pr-3">
          <div className="box-border h-full">
            <div className="w-[285px] h-full pt-2 flex flex-shrink-0 flex-col items-stretch">
              <div className="css-xmh2k9-DivUpperContent">
                <div className="mb-2 p-0">
                  <Link href="/foryou" legacyBehavior>
                    <a className="relative flex justify-start items-center p-2 box-border rounded transition-background duration-200 ease-in-out" data-e2e="nav-foryou">
                      <h2 className="font-tiktok font-bold text-2xl leading-7 text-[#fe2c55] break-all ml-3">For You</h2>
                    </a>
                  </Link>
                  <Link href="/following" legacyBehavior>
                    <a className="relative flex justify-start items-center p-2 box-border rounded transition-background duration-200 ease-in-out" data-e2e="nav-following">
                      <h2 className="font-tiktok font-normal text-2xl leading-7 text-[#161823] break-all ml-3">Following</h2>
                    </a>
                  </Link>
                </div>
                <div className="px-4 my-4 box-border">
                  <button type="button" className="mt-5 rounded h-12">Log in</button>
                </div>
              </div>
              <div className="box-border relative pb-6 w-full text-left pl-4 text-[rgba(22,24,35,0.5)]">
                <div className="css-wkktkh-DivBottomContentColumn">
                  <h4 className="font-tiktok leading-4.5 text-[rgba(22,24,35,0.4)] font-medium text-sm">Company</h4>
                  <span className="text-[#161823] font-tiktok leading-5 block mt-3 text-base font-medium">
                    <Link href="https://www.tiktok.com/about?lang=en" legacyBehavior>
                      <a className="relative block no-underline bg-transparent">
                        <h5 className="font-tiktok relative inline leading-normal font-medium text-base no-underline bg-transparent text-black">About</h5>
                      </a>
                    </Link>
                  </span>
                  {/* More company links */}
                </div>
                {/* More bottom content columns */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavDrawer;
