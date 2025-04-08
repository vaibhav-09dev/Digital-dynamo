import React from 'react';

const About3 = () => {
  return (
    <div className='h-auto md:h-[700px] w-full'>
      <div className='flex justify-center items-center text-3xl md:text-5xl font-bold underline-offset-8 text-center md:text-left mt-7 md:mt-10'>
        <h1>
          The <span className='text-green-500'>Leadership</span>
        </h1>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-7 md:mt-20'>
        <div className='h-auto md:h-[550px] w-full md:w-1/2 p-4 md:p-0 flex flex-col justify-center items-center'>
          <p className="text-base md:text-lg text-gray-500 text-center md:text-left font-serif mt-4 md:mt-24 px-4 md:px-16">
            Soumya Sharma is the Co-Founder & CEO of WebeeSocial. She also heads the Creative Department of the agency. Before setting 
            up WeBeeSocial, she spearheaded 
            some of the biggest campaigns for brands like Huawei, Intel, Ford, Dabur etc.
          </p>
          <div className="mt-4 md:mt-10">
            photo
          </div>
        </div>
        <div className=' h-auto md:h-[550px] w-full md:w-1/2 p-4 md:p-0 flex flex-col justify-center items-center'>
          <div className="mt-4 md:mt-10">
           photo
          </div>
          <p className="text-base md:text-lg text-gray-500 text-center md:text-left font-serif mt-4 md:mt-24 px-4 md:px-16">
            Soumya Sharma is the Co-Founder & CEO of WebeeSocial. She also heads the Creative Department of the agency. Before setting 
            up WeBeeSocial, she spearheaded 
            some of the biggest campaigns for brands like Huawei, Intel, Ford, Dabur etc.
          </p>
        </div>
      </div>
      <div className='w-full flex justify-center items-center h-[100] bg-yellow-300 text-4xl font-bold font-sans'>OUR motto - "Stand Out from the Competition with Our Unparalleled Strategies" </div>
    </div>
  );
};

export default About3;