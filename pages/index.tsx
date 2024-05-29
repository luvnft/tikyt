// pages/index.tsx
import { GetServerSideProps, NextPage } from 'next';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import InfiniteVideoFeed from '../components/InfiniteVideoFeed'; // Import InfiniteVideoFeed
import { getVideos } from '@/services/youtubeService';

interface HomeProps {
  videos: {
    id: string;
    title: string;
    thumbnail: string;
    channelTitle: string;
    channelAvatar: string;
    likes: number;
    comments: number;
  }[];
}

const Home: NextPage<HomeProps> = ({ videos }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <InfiniteVideoFeed initialVideos={videos} /> {/* Use InfiniteVideoFeed */}
      </main>
      <BottomNav />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const videos = await getVideos();

  return {
    props: {
      videos: Array.isArray(videos) ? videos : [], // Ensure videos is always an array
    },
  };
};

export default Home;
