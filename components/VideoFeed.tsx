import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

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
  videoUrl: string;
  posterSrc: string;
  author: Author;
  stats: Stats;
}

const VideoFeed: React.FC<VideoFeedProps> = ({ videoUrl, posterSrc, author, stats }) => {
  return (
    <div className="relative h-[421px]">
      {typeof window !== 'undefined' && (
        <ReactPlayer
          url={videoUrl}
          playing
          controls
          width="100%"
          height="100%"
          light={posterSrc}  // Set the poster image
        />
      )}
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
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl w-[32px] h-[32px]">
          <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px">
              <g filter="url(#Icon_Color-Like_Shadow_Alt_1_svg__b)" clipPath="url(#Icon_Color-Like_Shadow_Alt_1_svg__a)">
                <path d="M24 9.44c3.2-4.03 7.61-5.56 12-4.67 2.31.46 5.59 2.28 7.75 5.48 2.26 3.32 3.21 7.99.98 13.85-1.75 4.57-5.5 8.83-9.28 12.2a56.6 56.6 0 0 1-10.52 7.47l-.93.49-.93-.49a56.6 56.6 0 0 1-10.52-7.47c-3.78-3.37-7.53-7.63-9.28-12.2-2.23-5.86-1.28-10.53.98-13.85C6.4 7.05 9.69 5.23 12 4.77c4.39-.9 8.8.64 12 4.67Z" fill="#fff" fillOpacity="0.9" shapeRendering="crispEdges"></path>
              </g>
              <defs>
                <clipPath id="Icon_Color-Like_Shadow_Alt_1_svg__a">
                  <path fill="#fff" d="M0 0h48v48H0z"></path>
                </clipPath>
                <filter id="Icon_Color-Like_Shadow_Alt_1_svg__b" x="-2.5" y="1.52" width="53" height="48.73" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dy="1.5"></feOffset>
                  <feGaussianBlur stdDeviation="2.25"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_81245_5661"></feBlend>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_81245_5661" result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </span>
          <p className="text-sm mt-1">{stats.likes}</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl w-[32px] h-[32px]">
            {/* SVG for comment icon */}
          </span>
          <p className="text-sm mt-1">{stats.comments}</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl w-[32px] h-[32px]">
            {/* SVG for share icon */}
          </span>
          <p className="text-sm mt-1">{stats.shares}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoFeed;
