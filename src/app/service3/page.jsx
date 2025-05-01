"use client";
import React from "react";
import img1 from "../../../public/img1.webp";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-20 md:mt-44">
      {/* Header Section */}
      <div className="w-full h-auto md:h-[400px] flex flex-col md:flex-row md:justify-center md:items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2 h-auto md:h-[400px] px-4 md:px-8 md:ml-28">
          <h1 className="text-3xl md:text-5xl font-bold underline-offset-8 text-left">
            Creative <span className="text-green-500">Social Media Marketing</span> Agency in India
            <br /> <br />
          </h1>
          <p className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed">
            We don’t want to brag about ourselves, but we’ve to say that we can help you establish the business you desire.
            From innovative designs to the best creative solutions and the theme you will fall for! Our motive is to make
            your business shine. Have a look at some of our outstanding creatives for our clients here. <br /> <br />
            We’re gonna go ahead and say that this is our speciality - after all, social is in our name, quite literally!
            Truly the key to any communication strategy, social media has the potential to give your brand the boost you
            never thought possible. Our agency uses a variety of social strategies across different channels to support our
      .
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-auto md:h-[400px] flex justify-center items-center px-4 md:px-8">
          <Image
            src={img1}
            alt="Social Media Marketing"
            className="object-contain rounded-lg shadow-lg"
            width={500}
            height={400}
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="ml-4 md:ml-28 w-full md:w-[1300px] px-4 md:px-8">
        <p className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed">
          We leverage the power of social media in the right way to utilise the optimal platforms, reach the appropriate
          audience, and initiate and encourage fruitful conversations with them. We also ensure that your customers can
          share, engage, add content, converse and give ratings and recommendations of your content, services, and products.
          Social media is a two-way street, and we believe in keeping an open and inviting dialogue. Our company also aids
          clients in running targeted, strategic ad campaigns on various platforms, along with recommending and executing
          innovative strategic and technical solutions to guarantee maximum social impact and engagement. <br /> <br />
        </p>
      </div>
    </div>
  );
};

export default page;