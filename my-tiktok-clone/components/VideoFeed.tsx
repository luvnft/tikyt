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
            {/* SVG for like icon */}
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
