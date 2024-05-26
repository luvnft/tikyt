import React from 'react';
import Image from 'next/image';

interface Author {
  username: string;
  nickname: string;
  avatarSrc: string;
}

interface Stats {
  likes: string;
  shares: string;
  comments: string;
}

interface VideoFeedProps {
  posterSrc: string;
  author: Author;
  stats: Stats;
}

const VideoFeed: React.FC<VideoFeedProps> = ({ posterSrc, author, stats }) => {
  return (
    <div className="relative h-[421px]">
      <Image
        src={posterSrc}
        alt="Video poster"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-8 right-0 w-[62px] flex flex-col items-center justify-center space-y-4 z-10">
        <div className="flex flex-col items-center text-white w-[44px] h-[44px]">
          <a href="#" className="flex items-center gap-2 text-white no-underline mb-4">
            <Image
              src={author.avatarSrc}
              alt={author.username}
              width={44}
              height={44}
              objectFit="contain"
              className="border border-white rounded-full"
            />
          </a>
        </div>
        {/* Add SVG Icons Here */}
        <div className="absolute left-[50%] bottom-[78%] transform -translate-x-1/2">
          <svg width="23" height="23" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#RedPlusCircleColor_filter0_d)">
              <path fillRule="evenodd" clipRule="evenodd" d="M14 25C20.6274 25 26 19.6274 26 13C26 6.37258 20.6274 1 14 1C7.37258 1 2 6.37258 2 13C2 19.6274 7.37258 25 14 25Z" fill="#FE2C55"></path>
            </g>
            <path d="M9.5 14C9.22386 14 9 13.7761 9 13.5V12.5C9 12.2239 9.22386 12 9.5 12H18.5C18.7761 12 19 12.2239 19 12.5V13.5C19 13.7761 18.7761 14 18.5 14H9.5Z" fill="white"></path>
            <path d="M13 8.5C13 8.22386 13.2239 8 13.5 8H14.5C14.7761 8 15 8.22386 15 8.5V17.5C15 17.7761 14.7761 18 14.5 18H13.5C13.2239 18 13 17.7761 13 17.5V8.5Z" fill="white"></path>
            <defs>
              <filter id="RedPlusCircleColor_filter0_d" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                <feOffset dy="1"></feOffset>
                <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl w-[32px] h-[32px]">
            <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px">
              <g filter="url(#Icon_Color-Like_Shadow_Alt_1_svg__b)" clipPath="url(#Icon_Color-Like_Shadow_Alt_1_svg__a)">
                <path d="M24 9.44c3.2-4.03 7.61-5.56 12-4.67 2.31.46 5.59 2.28 7.75 5.48 2.26 3.32 3.21 7.99.98 13.85-1.75 4.57-5.5 8.83-9.28 12.2a56.6 56.6 0 0 1-10.52 7.47l-.93.49-.93-.49a56.6 56.6 0 0 1-10.52-7.47c-3.78-3.37-7.53-7.63-9.28-12.2-2.23-5.86-1.28-10.53.98-13.85C6.4 7.05 9.69 5.23 12 4.77c4.39-.9 8.8.64 12 4.67z" fill="#EC3B5C"></path>
              </g>
              <defs>
                <clipPath id="Icon_Color-Like_Shadow_Alt_1_svg__a">
                  <path fill="#fff" d="M0 0h48v48H0z"></path>
                </clipPath>
                <filter id="Icon_Color-Like_Shadow_Alt_1_svg__b" x="-.001" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </span>
          <p className="text-sm mt-1">{stats.likes}</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl w-[32px] h-[32px]">
            <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px">
              <g filter="url(#Icon_Color-Comment_Shadow_Alt_1_svg__b)" clipPath="url(#Icon_Color-Comment_Shadow_Alt_1_svg__a)">
                <path d="M24 4c10.12 0 18.33 6.66 18.33 15.07 0 10.92-8.42 14.93-16.63 15.01-1.15 0-2.13.35-3.02.82l-6.67 3.64C15.03 38.91 14 38.36 14 37.31v-5.07C9.33 30.74 5.67 27.47 5.67 19.07 5.67 10.66 13.88 4 24 4z" fill="#FEFFFE"></path>
              </g>
              <defs>
                <clipPath id="Icon_Color-Comment_Shadow_Alt_1_svg__a">
                  <path fill="#fff" d="M0 0h48v48H0z"></path>
                </clipPath>
                <filter id="Icon_Color-Comment_Shadow_Alt_1_svg__b" x="-.001" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </span>
          <p className="text-sm mt-1">{stats.comments}</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl w-[32px] h-[32px]">
            <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px">
              <g filter="url(#Icon_Color-Share_Alt_1_svg__b)" clipPath="url(#Icon_Color-Share_Alt_1_svg__a)">
                <path d="M26.5 8.5a4.5 4.5 0 1 1-8.996-.001A4.5 4.5 0 0 1 26.5 8.5zm0 0h0v0zm0 0h0v0zm-10 14a4.5 4.5 0 1 1 8.996.001A4.5 4.5 0 0 1 16.5 22.5zm0 0h0v0zm0 0h0v0zM24 39.5a4.5 4.5 0 1 1-9-.001 4.5 4.5 0 0 1 9 .001zm0 0h0v0zm0 0h0v0z" fill="#FEFFFE"></path>
                <path d="M19.505 11.59l11.448 6.667c.466.271.616.863.345 1.328-.1.173-.243.316-.416.417l-11.448 6.666c-.465.27-1.057.12-1.328-.346a1 1 0 0 1-.145-.518V12.453a1 1 0 0 1 1-1c.179 0 .36.048.519.146z" fill="#FEFFFE"></path>
              </g>
              <defs>
                <clipPath id="Icon_Color-Share_Alt_1_svg__a">
                  <path fill="#fff" d="M0 0h48v48H0z"></path>
                </clipPath>
                <filter id="Icon_Color-Share_Alt_1_svg__b" x="-.001" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </span>
          <p className="text-sm mt-1">{stats.shares}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoFeed;
