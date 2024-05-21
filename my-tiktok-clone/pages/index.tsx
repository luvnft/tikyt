import type { NextPage } from 'next';
import Header from '../components/Header';
import VideoFeed from '../components/VideoFeed';
import BottomNav from '../components/BottomNav';

const Home: NextPage = () => {
  const videoData = {
    posterSrc: 'https://www.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg',
    author: {
      username: 'Dorak',
      nickname: 'Dorak',
      avatarSrc: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-HD-Photo.png',
    },
    stats: {
      likes: 5300000,
      shares: 45200,
      comments: 123200,
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <VideoFeed
          posterSrc={videoData.posterSrc}
          author={videoData.author}
          stats={videoData.stats}
        />
      </main>
      <BottomNav />
    </div>
  );
};

export default Home;
