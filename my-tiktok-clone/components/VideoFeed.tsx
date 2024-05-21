import React from 'react';

interface Author {
  username: string;
  nickname: string;
  avatarSrc: string;
}

interface Stats {
  likes: number;
  shares: number;
  comments: number;
}

interface VideoFeedProps {
  posterSrc: string;
  author: Author;
  stats: Stats;
}

const VideoFeed: React.FC<VideoFeedProps> = ({ posterSrc, author, stats }) => {
  return (
    <div className="flex flex-col justify-between relative h-full video-feed-container">
      <img src={posterSrc} alt="Video poster" className="w-full h-full object-cover poster-image" />
      {/* <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black to-transparent z-10 slide-overlay">
        <div className="flex justify-between items-center content-wrapper">
          <a href="#" className="flex items-center gap-2 text-white no-underline author-card">
            <img src={author.avatarSrc} alt={author.username} className="w-8 h-8 rounded-full" />
            <div>
              <p className="m-0 text-sm author-username">@{author.username}</p>
              <p className="m-0 text-xs author-nickname">{author.nickname}</p>
            </div>
          </a>
          <div className="flex items-center gap-2 right-area-box">
            <div className="flex items-center gap-2 cursor-pointer favor operator-area">
              <span className="material-icons">favorite</span>
              <span className="text-sm text-white favor-count">{stats.likes}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer share operator-area">
              <span className="material-icons">share</span>
              <span className="text-sm text-white share-count">{stats.shares}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer comment operator-area">
              <span className="material-icons">comment</span>
              <span className="text-sm text-white comment-count">{stats.comments}</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default VideoFeed;
