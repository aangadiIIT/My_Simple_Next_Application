import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ApiData: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        Explore API Data
      </h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td className="py-2 px-4 border">{post.id}</td>
              <td className="py-2 px-4 border">{post.title}</td>
              <td className="py-2 px-4 border">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiData;