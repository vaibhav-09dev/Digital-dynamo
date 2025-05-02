'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Second = () => {
  const router = useRouter();

  const senda = async () => {
    router.push('/about');
  };

  const sends = async () => {
    router.push('/services');
  };

  return (
    <div className="h-auto md:h-[550px] mb-1 bg-gray-200 flex flex-col md:flex-row justify-center items-center">
      {/* Left Section */}
      <div className="h-auto md:h-[550px] w-full md:w-[510px] flex justify-center items-center">
        <p className="text-4xl md:text-9xl font-bold mt-10 md:mt-20 ml-4 md:ml-8 text-center md:text-left animate-fadeInUp">
          What We <br /> <span className="text-[#182f94] animate-pulse">do ?</span>
        </p>
      </div>

      {/* Middle Section */}
      <div className="bg-white h-auto md:h-[550px] w-full md:w-[510px] flex justify-center items-center">
        <div className="mt-6 p-4 md:p-0">
          <h1 className="text-2xl md:text-4xl font-bold underline-offset-8 text-center md:text-left md:ml-12 animate-slideInLeft">
            Digital.
          </h1>
          <br />
          <h2 className="text-lg md:text-xl font-bold font-mono italic text-center md:text-left md:ml-12 animate-fadeIn">
            We create super-rich experiences online!
          </h2>
          <br />
          <p className="text-base md:text-lg text-gray-500 text-center md:text-left md:ml-12 animate-fadeIn">
            Digital Dynamo is a full-scale Digital <br /> Marketing Agency based out of New <br /> Delhi, India. We mix our years of <br /> experience and knowledge to create <br />
            solutions for our clients which are not <br /> only performance driven, but also <br /> creative. We are running kick-ass <br /> digital campaigns for our clients, <br /> even as you read this!
          </p>
          <br />
          <div className="flex justify-center md:justify-start">
            <button
              onClick={senda}
              className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#2441c4] to-blue-500 group-hover:from-[#213aac] group-hover:to-[#182f94] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 transition-transform transform hover:scale-110 animate-bounce"
            >
              <span className="text-xl font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                ABOUT US
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="h-auto md:h-[500px] w-full md:w-[510px] flex justify-center items-center">
        <div className="mt-6 p-4 md:p-0">
          <h1 className="text-2xl md:text-4xl font-bold underline-offset-8 text-center md:text-left animate-slideInRight">
            And More <br /> Digital.
          </h1>
          <br />
          <h2 className="text-lg md:text-xl font-mono italic font-bold text-center md:text-left animate-fadeIn">
            Marketing brands with care
          </h2>
          <br />
          <p className="text-base md:text-lg text-gray-500 text-center md:text-left animate-fadeIn">
            What is marketing if it is not <br /> performance driven? <br />  We create digital experiences which <br /> stick with audiences and also reach <br />
            the objective. Trust us with <br /> making your brand visible and <br /> desired, with highly focused <br /> performance marketing.
          </p>
          <br />
          <div className="flex justify-center md:justify-start">
            <button
              onClick={sends}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#2441c4] to-blue-500 group-hover:from-[#213aac] group-hover:to-[#182f94] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 transition-transform transform hover:scale-110 animate-bounce"
            >
              <span className="text-xl font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                OUR SERVICES
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;