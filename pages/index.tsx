import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Welcome to My Simple Next Application
      </h1>
      <Link href="/api-data" className="text-blue-500 hover:underline">
        Explore API Data
      </Link>
      <br />
      <Link href="/about" className="text-blue-500 hover:underline">
        Learn More About This App
      </Link>
    </div>
  );
};

export default Home;