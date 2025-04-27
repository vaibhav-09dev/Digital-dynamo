"use client";
import React from "react";
import pic3 from "../../public/pic3.jpg"; // Ensure the image is in the public directory

const First = () => {
  return (
    <div
      className="h-[20rem] md:h-[45rem] lg:h-[50rem] w-full flex justify-center mt-6 items-center bg-center"
      style={{
        backgroundImage: `url(${pic3.src})`, // Set the image as the background
        backgroundSize: "contain", // Ensure the full image is displayed
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      <section>
        <p className="text-white text-xl font-bold">Your Content Here</p>
      </section>
    </div>
  );
};

export default First;