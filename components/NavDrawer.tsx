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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 118 42" width="118" height="42"><path fill="#25F4EE" d="M9.875 16.842v-1.119A8.836 8.836 0 008.7 15.64c-4.797-.006-8.7 3.9-8.7 8.707a8.706 8.706 0 003.718 7.135A8.675 8.675 0 011.38 25.55c0-4.737 3.794-8.598 8.495-8.707z"></path><path fill="#25F4EE" d="M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a6.78 6.78 0 01-.11-1.202h-4.726l-.006 18.969a3.978 3.978 0 01-3.967 3.829 3.93 3.93 0 01-1.846-.46 3.949 3.949 0 003.22 1.662zM23.992 13.166v-1.055a6.506 6.506 0 01-3.583-1.068 6.571 6.571 0 003.583 2.123z"></path><path fill="#FE2C55" d="M20.409 11.043a6.54 6.54 0 01-1.616-4.315h-1.265a6.557 6.557 0 002.88 4.316zM8.706 20.365a3.98 3.98 0 00-3.973 3.976c0 1.528.869 2.858 2.134 3.523a3.936 3.936 0 01-.754-2.321 3.98 3.98 0 013.973-3.976c.409 0 .805.07 1.175.185v-4.833a8.837 8.837 0 00-1.175-.083c-.07 0-.134.006-.204.006v3.708a3.999 3.999 0 00-1.176-.185z"></path><path fill="#FE2C55" d="M23.992 13.166v3.676c-2.453 0-4.727-.786-6.58-2.116v9.621c0 4.802-3.902 8.714-8.706 8.714a8.669 8.669 0 01-4.988-1.579 8.69 8.69 0 006.368 2.781c4.797 0 8.707-3.906 8.707-8.714v-9.621a11.25 11.25 0 006.579 2.116v-4.73c-.48 0-.94-.052-1.38-.148z"></path><path fill="black" d="M17.413 24.348v-9.622a11.251 11.251 0 006.58 2.116v-3.676a6.571 6.571 0 01-3.584-2.123 6.61 6.61 0 01-2.888-4.315H14.06l-.006 18.968a3.978 3.978 0 01-3.967 3.83A3.99 3.99 0 016.86 27.87a3.991 3.991 0 01-2.133-3.523A3.98 3.98 0 018.7 20.372c.409 0 .805.07 1.175.185v-3.708c-4.701.103-8.495 3.964-8.495 8.701 0 2.29.888 4.373 2.338 5.933a8.669 8.669 0 004.988 1.58c4.798 0 8.707-3.913 8.707-8.714zM30.048 13.179h14.774l-1.354 4.232h-3.832v15.644h-4.778V17.41l-4.804.006-.006-4.238zM69.032 13.179h15.12l-1.355 4.232h-4.17v15.644h-4.785V17.41l-4.804.006-.006-4.238zM45.73 19.502h4.733v13.553h-4.708l-.026-13.553zM52.347 13.128h4.733v9.257l4.689-4.61h5.646l-5.934 5.76 6.644 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236H52.34V13.128h.006zM102.49 13.128h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734V13.128zM48.093 17.954a2.384 2.384 0 002.382-2.384 2.384 2.384 0 10-2.382 2.384z"></path><path fill="#25F4EE" d="M83.544 24.942a8.112 8.112 0 017.474-8.087 8.748 8.748 0 00-.709-.026c-4.478 0-8.106 3.631-8.106 8.113 0 4.482 3.628 8.113 8.106 8.113.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087z"></path><path fill="#FE2C55" d="M92.858 16.83c-.217 0-.505.012-.716.025a8.111 8.111 0 017.468 8.087 8.112 8.112 0 01-7.468 8.087c.211.02.499.026.716.026 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113z"></path><path fill="black" d="M91.58 28.887a3.94 3.94 0 01-3.94-3.945 3.94 3.94 0 117.882 0c0 2.18-1.77 3.945-3.942 3.945zm0-12.058c-4.477 0-8.106 3.631-8.106 8.113 0 4.482 3.629 8.113 8.106 8.113 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113z"></path></svg>
              <strong className="css-o5o7hg-StrongText">TikTok</strong>
            </a>
          </Link>
        </div>
        <div className="box-border fixed top-[60px] bottom-[10px] w-[285px] z-11 overflow-y-auto overscroll-contain perspective-[1px] transform-style-preserve-3d perspective-origin-top-right pr-3">
          <div className="box-border h-full">
            <div className="w-[285px] h-full pt-2 flex flex-shrink-0 flex-col items-stretch">
              <div className="h-full">
                <div className="mb-2 pl-2">
                  <Link href="/foryou" legacyBehavior>
                    <a className="relative flex justify-start items-center p-2 box-border rounded transition-background duration-200 ease-in-out" data-e2e="nav-foryou">
                    <svg width="40" data-e2e="" height="40" viewBox="0 0 48 48" fill="#fe2c55" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"></path></svg>
                      <h2 className="font-tiktok font-bold text-2xl leading-7 text-[#fe2c55] break-all ml-3">For You</h2>
                    </a>
                  </Link>
                  <Link href="/following" legacyBehavior>
                    <a className="relative flex justify-start items-center p-2 box-border rounded transition-background duration-200 ease-in-out" data-e2e="nav-following">
                      <svg width="40" data-e2e="" height="40" viewBox="0 0 48 48" fill="#161823" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672 22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151 12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801 29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131 6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303 42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z"></path></svg>
                      <h2 className="font-tiktok font-normal text-2xl leading-7 text-[#161823] break-all ml-3">Following</h2>
                    </a>
                  </Link>
                </div>
                <div className="px-4 my-4 box-border">
                  <button type="button" className="min-h-[36px] cursor-pointer text-white font-semibold leading-22px relative box-border mt-20px px-8 py-6 min-w-164 w-full h-[48px] flex items-center justify-center bg-[#fe2c55] border-none rounded-md select-none transition duration-200 ease-in-out">Log in</button>
                </div>
              </div>
              <div className="box-border relative pb-7 w-full text-left pl-4 text-[rgba(22,24,35,0.5)]">
                <div className='relative h-[1px] right-[-2px] w-[248px] bg-[#1618231f]'></div>
                <div className="box-border relative pt-[12px] pb-[24px] w-full text-left text-gray-500">
                  <h4 className="font-tiktok leading-4.5 text-[rgba(22,24,35,0.4)] font-medium text-sm">Company</h4>
                  <span className="text-[#161823] font-tiktok leading-5 block mt-3 text-base font-medium">
                    <Link href="https://www.tiktok.com/about?lang=en" legacyBehavior>
                      <a className="relative block no-underline bg-transparent">
                        <h5 className="font-tiktok relative inline leading-normal font-medium text-base no-underline bg-transparent text-black">About</h5>
                      </a>
                    </Link>
                  </span>
                  <span className="text-[#161823] font-tiktok leading-5 block mt-3 text-base font-medium">
                    <Link href="https://www.tiktok.com/about?lang=en" legacyBehavior>
                      <a className="relative block no-underline bg-transparent">
                        <h5 className="font-tiktok relative inline leading-normal font-medium text-base no-underline bg-transparent text-black">Newsroom</h5>
                      </a>
                    </Link>
                  </span>
                  <span className="text-[#161823] font-tiktok leading-5 block mt-3 text-base font-medium">
                    <Link href="https://www.tiktok.com/about?lang=en" legacyBehavior>
                      <a className="relative block no-underline bg-transparent">
                        <h5 className="font-tiktok relative inline leading-normal font-medium text-base no-underline bg-transparent text-black">Contact</h5>
                      </a>
                    </Link>
                  </span>
                  <span className="text-[#161823] font-tiktok leading-5 block mt-3 text-base font-medium">
                    <Link href="https://www.tiktok.com/about?lang=en" legacyBehavior>
                      <a className="relative block no-underline bg-transparent">
                        <h5 className="font-tiktok relative inline leading-normal font-medium text-base no-underline bg-transparent text-black">Career</h5>
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
