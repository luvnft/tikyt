import React, { useState, useEffect, useCallback, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import VideoFeed from './VideoFeed';
import { getVideos } from '../services/youtubeService';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  channelAvatar: string;
  likes: number;
  comments: number;
}

const InfiniteVideoFeed: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const loadMoreVideos = useCallback(async () => {
    if (loading) return; // Prevent multiple simultaneous requests
    setLoading(true);
    setError(null); // Reset error state

    try {
      const { videos: newVideos, nextPageToken: newNextPageToken } = await getVideos(nextPageToken);
      setVideos((prevVideos) => [...prevVideos, ...newVideos]);
      setNextPageToken(newNextPageToken || null);
      if (!newNextPageToken) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Failed to load more videos', error);
      setError('Failed to load more videos');
    } finally {
      setLoading(false);
    }
  }, [loading, nextPageToken]);

  useEffect(() => {
    loadMoreVideos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = 0; i < videoRefs.current.length; i++) {
        const videoElement = videoRefs.current[i];
        if (videoElement) {
          const videoTop = videoElement.offsetTop;
          const videoBottom = videoTop + videoElement.offsetHeight;
          if (scrollPosition >= videoTop && scrollPosition <= videoBottom) {
            videoElement.scrollIntoView({ behavior: 'smooth' });
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videos]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={loadMoreVideos}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more videos</p>}
    >
      {videos.map((video, index) => (
        <div
          key={video.id}
          ref={(el) => (videoRefs.current[index] = el)}
          className="h-screen"
        >
          <VideoFeed
            videoUrl={`https://www.youtube.com/watch?v=${video.id}`}
            posterSrc={video.thumbnail}
            author={{
              username: video.channelTitle,
              nickname: video.channelTitle,
              avatarSrc: video.channelAvatar,
            }}
            stats={{
              likes: video.likes.toString(),
              shares: '0', // Placeholder for shares as YouTube API does not provide this
              comments: video.comments.toString(),
            }}
          />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteVideoFeed;
