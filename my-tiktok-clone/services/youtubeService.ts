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

interface YouTubeApiResponse {
  items: any[];
  nextPageToken?: string;
}

const getChannelAvatar = async (channelId: string): Promise<string> => {
  try {
    const response = await axios.get(`${BASE_URL}/channels`, {
      params: {
        part: 'snippet',
        id: channelId,
        key: API_KEY,
      },
    });
    return response.data.items[0].snippet.thumbnails.default.url;
  } catch (error) {
    console.error('Error fetching channel avatar', error);
    return '';
  }
};

export const getVideos = async (pageToken: string | null = null): Promise<{ videos: Video[], nextPageToken?: string }> => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet,statistics',
        chart: 'mostPopular',
        maxResults: 10,
        regionCode: 'US',
        pageToken: pageToken,
        key: API_KEY,
      },
    });

    const videos = await Promise.all(
      response.data.items.map(async (item: any) => {
        const channelAvatar = await getChannelAvatar(item.snippet.channelId);
        return {
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          channelTitle: item.snippet.channelTitle,
          channelAvatar: channelAvatar,
          likes: item.statistics.likeCount || 0,
          comments: item.statistics.commentCount || 0,
        };
      })
    );

    return {
      videos,
      nextPageToken: response.data.nextPageToken,
    };
  } catch (error) {
    console.error('Error fetching videos', error);
    return {
      videos: [],
      nextPageToken: undefined,
    };
  }
};
