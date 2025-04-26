"use client";
import About1 from '@/components/About1';
import React from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:mt-20 w-full">
        {/* Sidebar Section */}
        <div className="bg-gray-800 h-[200px] md:h-[1900px] w-full md:w-1/3 text-4xl md:text-7xl">
          <p className="md:fixed mt-20 md:mt-72 ml-10 md:ml-20 text-white font-bold font-sans animate-fadeIn">
            Our <br /> <span className="text-green-500">Services</span>
          </p>
        </div>

        {/* Services Section */}
        <div className="h-auto md:h-[1750px] w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {[
            {
              title: "Digital Strategy and Planning",
              description:
                "We leverage our years of experience to create the correct strategy and plans for your business which helps to grow your brand and revenue.",
              action: () => navigateTo('/service1'),
            },
            {
              title: "Creative Strategy and Web Graphics Design",
              description:
                "Creativity is a way of life at webeesocial. When we create something – a website, an app, emailer, an infographic, a social media post or...",
              action: () => navigateTo('/service2'),
            },
            {
              title: "Social Media Marketing",
              description:
                "Social is in our name, literally! Social Media is key to our overall strategy, and we use a variety of social strategies across different channels...",
              action: () => navigateTo('/service3'),
            },
            {
              title: "Videos, GIFs and Content Marketing",
              description:
                "Video has become the most popular content format. Google algorithm rewards pages with features such as social media integration, social bookmarking and rich videos...",
              action: () => navigateTo('/service4'),
            },
            {
              title: "Website Design and Development",
              description:
                "We stay ahead of the technological and UI trends. We focus on breaking down a user journey, translating our design into the most efficient and...",
              action: () => navigateTo('/service5'),
            },
            {
              title: "Search Engine Optimization",
              description:
                "Our approach to SEO and SEM is simple and transparent. We audit your assets and assess your SEO/SEM goals post which we share timeline expectations...",
              action: () => navigateTo('/service6'),
            },
            {
              title: "Email Marketing",
              description:
                "We can build effective email marketing campaigns and streamline the delivery process so that sending emailers is easy, secure and personalised. Our creative team designs...",
              action: () => navigateTo('/service7'),
            },
            {
              title: "Web Analytics",
              description:
                "Data driven marketing is most effective. Understanding analytics data is key for any business with a digital presence. Your analytics helps you understand how users...",
              action: () => navigateTo('/service8'),
            },
            {
              title: "Media Planning and Buying",
              description:
                "We are connected with a network of media partners who help us offer a fully integrated and accredited communication solution. These media include websites, apps...",
              action: () => navigateTo('/service9'),
            },
            {
              title: "Shopify Website & Development",
              description:
                "Looking for a Shopify website development company? You’ve landed on just the right page!",
              action: () => navigateTo('/service10'),
            },
          ].map((service, index) => (
            <div
              key={index}
              className="w-full h-auto md:h-[350px] border border-solid p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h1 className="text-xl md:text-3xl font-bold underline-offset-8 text-center md:text-left md:ml-10 md:mt-8">
                {service.title}
              </h1>
              <br />
              <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif md:ml-10 md:mr-7">
                {service.description}
              </p>
              <br />
              <button
                onClick={service.action}
                className="md:ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-400 group-hover:to-lime-400 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 transition-transform transform hover:scale-105"
              >
                <span className="text-lg font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Read More
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;