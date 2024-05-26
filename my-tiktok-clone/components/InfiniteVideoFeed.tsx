import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import VideoFeed from './VideoFeed';

interface Video {
  id: string;
  posterSrc: string;
  author: {
    username: string;
    nickname: string;
    avatarSrc: string;
  };
  stats: {
    likes: string;
    shares: string;
    comments: string;
  };
}

const fetchVideos = async (pageToken: string | null = null) => {
  const response = await fetch(`/api/videos?pageToken=${pageToken}`);
  if (!response.ok) {
    throw new Error('Failed to fetch videos');
  }
  return response.json();
};

const InfiniteVideoFeed: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreVideos = useCallback(async () => {
    try {
      const data = await fetchVideos(nextPageToken);
      setVideos(prevVideos => [
        ...prevVideos,
        ...data.items.map((item: any) => ({
          id: item.id,
          posterSrc: item.snippet.thumbnails.high.url,
          author: {
            username: item.snippet.channelTitle,
            nickname: item.snippet.channelTitle,
            avatarSrc: item.snippet.thumbnails.default.url,
          },
          stats: {
            likes: item.statistics.likeCount,
            shares: item.statistics.shareCount || '0', // Default to '0' if undefined
            comments: item.statistics.commentCount,
          },
        }))
      ]);
      setNextPageToken(data.nextPageToken);
      if (!data.nextPageToken) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    }
  }, [nextPageToken]);

  useEffect(() => {
    loadMoreVideos();
  }, []);

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={loadMoreVideos}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more videos</p>}
    >
      {videos.map(video => (
        <VideoFeed
          key={video.id}
          posterSrc={video.posterSrc}
          author={video.author}
          stats={video.stats}
        />
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteVideoFeed;
