"use client";
import React from "react";
import pic3 from "../../public/pic3.jpg"; // Ensure the image is in the public directory

const First = () => {
  return (
    <div
      className="h-[20rem] md:h-[45rem] lg:h-[50rem] w-full flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${pic3.src})`, // Set the image as the background
      }}
    >
      <section>
        
      </section>
    </div>
  );
};

export default First;