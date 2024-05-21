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
          objectFit="fill"
        />
      
      <div className="absolute bottom-8 right-0 w-[62px] flex flex-col items-center justify-center space-y-4 z-10">
      <div className="flex flex-col items-center text-white w-[44px] h-[44px]">
        <a href="#" className="flex items-center gap-2 text-white no-underline mb-4">
          <Image
              src={author.avatarSrc}
              alt={author.username}
              width={44}
              height={44}
              objectFit='contain'
              className="relative border solid border-white rounded-full"
          />
        </a>
      </div>
      <div className="absolute left-[50%] bottom-[78%] transform -translate-x-1/2"><svg width="23" height="23" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#RedPlusCircleColor_filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 25C20.6274 25 26 19.6274 26 13C26 6.37258 20.6274 1 14 1C7.37258 1 2 6.37258 2 13C2 19.6274 7.37258 25 14 25Z" fill="#FE2C55"></path></g><path d="M9.5 14C9.22386 14 9 13.7761 9 13.5V12.5C9 12.2239 9.22386 12 9.5 12H18.5C18.7761 12 19 12.2239 19 12.5V13.5C19 13.7761 18.7761 14 18.5 14H9.5Z" fill="white"></path><path d="M13 8.5C13 8.22386 13.2239 8 13.5 8H14.5C14.7761 8 15 8.22386 15 8.5V17.5C15 17.7761 14.7761 18 14.5 18H13.5C13.2239 18 13 17.7761 13 17.5V8.5Z" fill="white"></path><defs><filter id="RedPlusCircleColor_filter0_d" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
      </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl w-[32px] h-[32px]"><svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"><g filter="url(#Icon_Color-Like_Shadow_Alt_1_svg__b)" clip-path="url(#Icon_Color-Like_Shadow_Alt_1_svg__a)"><path d="M24 9.44c3.2-4.03 7.61-5.56 12-4.67 2.31.46 5.59 2.28 7.75 5.48 2.26 3.32 3.21 7.99.98 13.85-1.75 4.57-5.5 8.83-9.28 12.2a56.6 56.6 0 0 1-10.52 7.47l-.93.49-.93-.49a56.6 56.6 0 0 1-10.52-7.47c-3.78-3.37-7.53-7.63-9.28-12.2-2.23-5.86-1.28-10.53.98-13.85C6.4 7.05 9.69 5.23 12 4.77c4.39-.9 8.8.64 12 4.67Z" fill="#fff" fill-opacity="0.9" shape-rendering="crispEdges"></path></g><defs><clipPath id="Icon_Color-Like_Shadow_Alt_1_svg__a"><path fill="#fff" d="M0 0h48v48H0z"></path></clipPath><filter id="Icon_Color-Like_Shadow_Alt_1_svg__b" x="-2.5" y="1.52" width="53" height="48.73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.5"></feOffset><feGaussianBlur stdDeviation="2.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_81245_5661"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.5"></feOffset><feGaussianBlur stdDeviation="0.75"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="effect1_dropShadow_81245_5661" result="effect2_dropShadow_81245_5661"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow_81245_5661" result="shape"></feBlend></filter></defs></svg></span>
          <span className="text-sm">{stats.likes}</span>
        </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl w-[32px] h-[32px]"><svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"><g filter="url(#Icon_Color-Comment_Shadow_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.5 35.31c4.1-4.11 6.5-8.4 6.5-13.38C45 11.8 35.73 3.6 24.3 3.6S3.6 11.8 3.6 21.93C3.6 32.05 13.17 39 24.6 39v3.36c0 1.06 1.1 1.74 2.04 1.24 2.92-1.59 8.33-4.76 11.85-8.29ZM14.23 19.46a2.95 2.95 0 0 1 2.96 2.93 2.95 2.95 0 0 1-2.96 2.94 2.95 2.95 0 0 1-2.95-2.94 2.95 2.95 0 0 1 2.95-2.93Zm13.02 2.93a2.95 2.95 0 0 0-2.96-2.93 2.95 2.95 0 0 0-2.96 2.93 2.95 2.95 0 0 0 2.96 2.94 2.95 2.95 0 0 0 2.96-2.94Zm7.1-2.93a2.95 2.95 0 0 1 2.95 2.93 2.95 2.95 0 0 1-2.96 2.94 2.95 2.95 0 0 1-2.95-2.94 2.95 2.95 0 0 1 2.95-2.93Z" fill="#fff" fill-opacity="0.9"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M24.6 39s11.47-.89 16.26-7.02c-4.8 6.75-9.59 10.43-13.78 11.66C22.88 44.86 24.6 39 24.6 39Z" fill="#000" fill-opacity="0.03"></path><defs><filter id="Icon_Color-Comment_Shadow_svg__a" x="1.2" y="2.4" width="46.2" height="44.97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.2"></feOffset><feGaussianBlur stdDeviation="1.2"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_2867"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2867" result="shape"></feBlend></filter></defs></svg></span>
          <span className="text-sm">{stats.comments}</span>
        </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl w-[32px] h-[32px]"><svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"><g filter="url(#Icon_Color-Share_Shadow_Alt_2_svg__b)" clip-path="url(#Icon_Color-Share_Shadow_Alt_2_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.56 4.07a1.98 1.98 0 0 0-2.15-.42 1.95 1.95 0 0 0-1.21 1.8v8.34c-5.4.35-10.04 2.2-13.43 5.68C4.97 23.35 3 29.03 3 36.19c0 .79.48 1.5 1.22 1.8.73.3 1.58.13 2.14-.42 3.34-3.31 7.65-4.56 11.25-4.95 1.8-.2 3.37-.18 4.5-.1h.09v9.03c0 .78.46 1.48 1.18 1.79.72.3 1.56.16 2.13-.37l18.87-17.49a1.94 1.94 0 0 0 .04-2.8L25.56 4.07Z" fill="#fff" fill-opacity="0.9" shape-rendering="crispEdges"></path></g><defs><clipPath id="Icon_Color-Share_Shadow_Alt_2_svg__a"><path fill="#fff" d="M0 0h48v48H0z"></path></clipPath><filter id="Icon_Color-Share_Shadow_Alt_2_svg__b" x="-1.5" y="0.5" width="51" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.5"></feOffset><feGaussianBlur stdDeviation="2.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_81245_5665"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.5"></feOffset><feGaussianBlur stdDeviation="0.75"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="effect1_dropShadow_81245_5665" result="effect2_dropShadow_81245_5665"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow_81245_5665" result="shape"></feBlend></filter></defs></svg></span>
          <span className="text-sm">{stats.shares}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoFeed;
