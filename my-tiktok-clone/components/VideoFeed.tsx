import React from 'react';

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
    <div className="relative h-full">
      <img src={posterSrc} alt="Video poster" className="w-full h-full object-cover" />
      
      <div className="absolute bottom-8 right-0 w-[62px] h-[100%] flex flex-col items-center justify-center space-y-4 z-10">
      <div className="flex flex-col items-center text-white">
        <a href="#" className="flex items-center gap-2 text-white no-underline mb-4">
          <img src={author.avatarSrc} alt={author.username} className="w-8 h-8 rounded-full" />
        </a>
      </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl w-[32px] h-[32px]"><svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"><g filter="url(#Icon_Color-Like_Shadow_Alt_1_svg__b)" clip-path="url(#Icon_Color-Like_Shadow_Alt_1_svg__a)"><path d="M24 9.44c3.2-4.03 7.61-5.56 12-4.67 2.31.46 5.59 2.28 7.75 5.48 2.26 3.32 3.21 7.99.98 13.85-1.75 4.57-5.5 8.83-9.28 12.2a56.6 56.6 0 0 1-10.52 7.47l-.93.49-.93-.49a56.6 56.6 0 0 1-10.52-7.47c-3.78-3.37-7.53-7.63-9.28-12.2-2.23-5.86-1.28-10.53.98-13.85C6.4 7.05 9.69 5.23 12 4.77c4.39-.9 8.8.64 12 4.67Z" fill="#fff" fill-opacity="0.9" shape-rendering="crispEdges"></path></g><defs><clipPath id="Icon_Color-Like_Shadow_Alt_1_svg__a"><path fill="#fff" d="M0 0h48v48H0z"></path></clipPath><filter id="Icon_Color-Like_Shadow_Alt_1_svg__b" x="-2.5" y="1.52" width="53" height="48.73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.5"></feOffset><feGaussianBlur stdDeviation="2.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_81245_5661"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.5"></feOffset><feGaussianBlur stdDeviation="0.75"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="effect1_dropShadow_81245_5661" result="effect2_dropShadow_81245_5661"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow_81245_5661" result="shape"></feBlend></filter></defs></svg></span>
          <span className="text-sm">{stats.likes}</span>
        </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl"><svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><g filter="url(#Icon_Color-Comment_Shadow_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.5 35.31c4.1-4.11 6.5-8.4 6.5-13.38C45 11.8 35.73 3.6 24.3 3.6S3.6 11.8 3.6 21.93C3.6 32.05 13.17 39 24.6 39v3.36c0 1.06 1.1 1.74 2.04 1.24 2.92-1.59 8.33-4.76 11.85-8.29ZM14.23 19.46a2.95 2.95 0 0 1 2.96 2.93 2.95 2.95 0 0 1-2.96 2.94 2.95 2.95 0 0 1-2.95-2.94 2.95 2.95 0 0 1 2.95-2.93Zm13.02 2.93a2.95 2.95 0 0 0-2.96-2.93 2.95 2.95 0 0 0-2.96 2.93 2.95 2.95 0 0 0 2.96 2.94 2.95 2.95 0 0 0 2.96-2.94Zm7.1-2.93a2.95 2.95 0 0 1 2.95 2.93 2.95 2.95 0 0 1-2.96 2.94 2.95 2.95 0 0 1-2.95-2.94 2.95 2.95 0 0 1 2.95-2.93Z" fill="#fff" fill-opacity="0.9"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M24.6 39s11.47-.89 16.26-7.02c-4.8 6.75-9.59 10.43-13.78 11.66C22.88 44.86 24.6 39 24.6 39Z" fill="#000" fill-opacity="0.03"></path><defs><filter id="Icon_Color-Comment_Shadow_svg__a" x="1.2" y="2.4" width="46.2" height="44.97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.2"></feOffset><feGaussianBlur stdDeviation="1.2"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_2867"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2867" result="shape"></feBlend></filter></defs></svg></span>
          <span className="text-sm">{stats.comments}</span>
        </div>
        <div className="flex flex-col items-center text-white">
          <span className="material-icons text-2xl"><svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><g filter="url(#Icon_Color-Share_Shadow_Alt_2_svg__b)" clip-path="url(#Icon_Color-Share_Shadow_Alt_2_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.56 4.07a1.98 1.98 0 0 0-2.15-.42 1.95 1.95 0 0 0-1.21 1.8v8.34c-5.4.35-10.04 2.2-13.43 5.68C4.97 23.35 3 29.03 3 36.19c0 .79.48 1.5 1.22 1.8.73.3 1.58.13 2.14-.42 3.34-3.31 7.65-4.56 11.25-4.95 1.8-.2 3.37-.18 4.5-.1h.09v9.03c0 .78.46 1.48 1.18 1.79.72.3 1.56.16 2.13-.37l18.87-17.49a1.94 1.94 0 0 0 .04-2.8L25.56 4.07Z" fill="#fff" fill-opacity="0.9" shape-rendering="crispEdges"></path></g><defs><clipPath id="Icon_Color-Share_Shadow_Alt_2_svg__a"><path fill="#fff" d="M0 0h48v48H0z"></path></clipPath><filter id="Icon_Color-Share_Shadow_Alt_2_svg__b" x="-1.5" y="0.5" width="51" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.5"></feOffset><feGaussianBlur stdDeviation="2.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_81245_5665"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.5"></feOffset><feGaussianBlur stdDeviation="0.75"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="effect1_dropShadow_81245_5665" result="effect2_dropShadow_81245_5665"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow_81245_5665" result="shape"></feBlend></filter></defs></svg></span>
          <span className="text-sm">{stats.shares}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoFeed;
