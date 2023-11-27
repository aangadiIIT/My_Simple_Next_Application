import { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <><div className="container mx-auto my-8">
            <Link href="/" className="text-blue-500 hover:underline">
                Back to Home
            </Link>
        </div>
    <div className="container mx-auto my-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
                About My Simple Next Application
            </h1>
            <p className="text-gray-600">
                This is a simple Next.js application demonstrating various features. Feel free to explore!<br></br>Developed by Akhilesh Angadi
            </p>
    </div></>
  );
};

export default About;