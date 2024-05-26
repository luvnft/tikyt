import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_KEY = 'AIzaSyB_GHens60LxZLlzbK6DLmn2ALmAiSx-LM';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { pageToken } = req.query;

  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet,statistics',
        chart: 'mostPopular',
        maxResults: 10,
        pageToken,
        regionCode: 'US',
        key: API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching videos', error);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
};
