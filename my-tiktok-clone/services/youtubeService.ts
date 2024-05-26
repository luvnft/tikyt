import axios from 'axios';

const API_KEY = 'AIzaSyB_GHens60LxZLlzbK6DLmn2ALmAiSx-LM';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  channelAvatar: string;
  likes: number;
  comments: number;
}

export const getVideos = async (): Promise<Video[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet,statistics',
        chart: 'mostPopular',
        maxResults: 10,
        regionCode: 'US',
        key: API_KEY,
      },
    });

    const videos = response.data.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      channelTitle: item.snippet.channelTitle,
      channelAvatar: `https://www.youtube.com/channel/${item.snippet.channelId}/profile_picture`,
      likes: item.statistics.likeCount || 0, // Ensure likes are always defined
      comments: item.statistics.commentCount || 0, // Ensure comments are always defined
    }));

    return videos;
  } catch (error) {
    console.error('Error fetching videos', error);
    return [];
  }
};
