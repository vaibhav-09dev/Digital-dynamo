"use client"
import About1 from '@/components/About1';
import React from 'react';
import { useRouter } from 'next/navigation';
const page = () => {
  const router = useRouter();
  const send1 = async () => {
    router.push('/service1')


  }
  const send2 = async () => {
    router.push('/service2')


  }
  const send3 = async () => {
    router.push('/service3')


  }
  const send4 = async () => {
    router.push('/service4')


  }
  const send5 = async () => {
    router.push('/service5')


  }
  const send6 = async () => {
    router.push('/service6')


  }
  const send7 = async () => {
    router.push('/service7')


  }
  const send8 = async () => {
    router.push('/service8')


  }
  const send9 = async () => {
    router.push('/service9')


  }
  const send10 = async () => {
    router.push('/service10')


  }
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between w-full'>
        <div className='bg-gray-800 h-[200px] md:h-[1750px] w-full md:w-1/3 text-4xl md:text-7xl'>
          <p className='md:fixed mt-20 md:mt-72 ml-10 md:ml-20 text-white font-bold font-sans'>
            Our <br /> <span className='text-green-500'>Services</span>
          </p>
        </div>
        <div className='h-auto md:h-[1750px] w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 '>
          <div className='w-full h-auto md:h-[350px] border border-solid p-4 mt-20'>
            <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
              Digital Strategy and <br />Planning
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
              “We leverage our years of experience to create the correct strategy and plans for your business which helps to grow your brand and revenue.
            </p>
            <br />
            <button onClick={send1} className=" md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </div>

          <div className='w-full h-auto md:h-[350px] border border-solid mt-20 '>
            <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
              Creative Strategy and Web <br />Graphics Design
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
              “Creativity is a way of life at webeesocial. When we create something – a website, an app, emailer, an infographic, a social media post or..
            </p>
            <br />
            <button onClick={send2} className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </div>

          <div className='w-full h-auto md:h-[350px] border border-solid '>
            <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
              Social Media Marketing
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
              “Social is in our name, literally! Social Media is key to our overall strategy, and we use a variety of social strategies across different channels…
            </p>
            <br />
            <button onClick={send3} className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </div>

          <div className='w-full h-auto md:h-[350px] border border-solid '>
            <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
              Videos, GIFs and Content <br />Marketing
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
              “Video has become the most popular content format. Google algorithm rewards pages with features such as social media integration, social bookmarking and rich videos. Videos…
            </p>
            <br />
            <button onClick={send4} className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </div>

          <div className='w-full h-auto md:h-[350px] border border-solid '>
            <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
              Website Design and<br />Development
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
              “We stay ahead of the technological and UI trends. We focus on breaking down a user journey, translating our design into the most efficient and…
            </p>
            <br />
            <button onClick={send5} className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </div>

          <div className='w-full h-auto md:h-[350px] border border-solid '>
            <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
              Search Engine Optimization
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
              “Our approach to SEO and SEM is simple and transparent. We audit your assets and assess your SEO/SEM goals post which we share timeline expectations…
            </p>
            <br />
            <button onClick={send6} className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </div>

          <div className='w-full h-auto md:h-[350px] border border-solid '>
            <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
              Email Marketing
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
              “We can build effective email marketing campaigns and streamline the delivery process so that sending emailers is easy, secure and personalised. Our creative team designs…
            </p>
            <br />
            <button onClick={send7} className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </div>

          <div className='w-full h-auto md:h-[350px] border border-solid '>
            <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
              Web Analytics
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
              “Data driven marketing is most effective. Understanding analytics data is key for any business with a digital presence. Your analytics helps you understand how users…
            </p>
            <br />
            <button onClick={send8} className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </div>

          <div className='w-full h-auto md:h-[350px] border border-solid '>
            <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
              Media Planning and Buying
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
              “We are connected with a network of media partners who help us offer a fully integrated and accredited communication solution. These media include websites, apps,…
            </p>
            <br />
            <button onClick={send9} className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </div>

          <div className='w-full h-auto md:h-[350px] border border-solid '>
            <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
              Shopify Website & <br />Development
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
              “Looking for a Shopify website development company? You’ve landed on just the right page!,…
            </p>
            <br />
            <button onClick={send10} className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read More
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className='text-white bg-black w-full h-[700px] md:absolute'>
        <p className='text-center mt-10'>gfhdfgjhdytjtd</p>
      </div>
    </div>
  );
};

export default page;