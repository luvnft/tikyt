import { GetServerSideProps, NextPage } from 'next';
import Header from '../components/Header';
import VideoFeed from '../components/VideoFeed';
import BottomNav from '../components/BottomNav';
import { getVideos } from '../services/youtubeService';

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
        {videos.map((video) => (
          <VideoFeed
            key={video.id}
            posterSrc={video.thumbnail}
            author={{
              username: video.channelTitle,
              nickname: video.channelTitle,
              avatarSrc: video.channelAvatar,
            }}
            stats={{
              likes: video.likes.toString(),
              shares: '0', // Update this if you have shares data
              comments: video.comments.toString(),
            }}
          />
        ))}
      </main>
      <BottomNav />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const videos = await getVideos();

  return {
    props: {
      videos,
    },
  };
};

export default Home;
