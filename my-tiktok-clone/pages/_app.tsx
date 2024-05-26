import '../styles/globals.css';
import Layout from '../components/Layout'; // Adjust the path according to your file structure
import { FC } from 'react';

interface MyAppProps {
  Component: FC;
  pageProps: Record<string, any>; // Adjust the type according to your pageProps structure
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
