"use client";
import React from 'react';
import Image from 'next/image';
import dg4 from "../../public/dg4.png";

const Fourth = () => {
  return (
    <div className='h-auto md:h-[700px] flex flex-col md:flex-row justify-center items-end'>
      <div className='h-auto md:h-[700px] w-full md:w-1/2 bg-gray-100 flex justify-center items-center'>
        <div className='bg-white h-auto md:h-[650px] w-full md:w-[600px] p-4 md:p-0'>
          <div className="mt-8 md:mt-32">
            <h1 className="text-2xl md:text-4xl font-bold underline-offset-8 text-center md:text-left  md:ml-32">
              Integrated Digital <br /> Solutions
            </h1>
            <br />
            <h2 className="text-lg md:text-xl font-mono italic text-center md:text-left  md:ml-32">
              Insights, Metrics and Analytics - <br /> Everything is connected!
            </h2>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-center md:text-left md:ml-32">
              In a digital world where everything’s <br /> connected, we believe that the<br /> approach to digital communications <br /> has to be joined-up too. Our approach <br />
              combines creativity & technology and <br />marketing disciplines — from mobile <br /> and responsive web design to search <br />and social media campaigns — all <br /> under one roof.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className='h-auto md:h-[700px] w-full md:w-1/2 bg-gray-400 flex justify-center items-center'>
        <Image src={dg4} alt='connect' layout="responsive" width={600} height={300} />
      </div>
    </div>
  );
};

export default Fourth;