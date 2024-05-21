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
      avatarSrc: 'https://vectorified.com/images/avatar-icon-png-24.png',
    },
    stats: {
      likes: '48.4k',
      shares: '0',
      comments: '3304',
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
