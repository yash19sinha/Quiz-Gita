import React from "react";
import Link from "next/link";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img bg-orange-200">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">Welcome to Gita Quiz</h2>
        <p className="py-5 text-xl">Challenge Yourself</p>
        <Link href="/" passHref>
          <button className="px-8 py-2 border">Here</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
