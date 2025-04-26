"use client";
import React from "react";
import Image from "next/image";
import pic3 from "../../public/pic3.jpg";
import { useRouter } from "next/navigation";

const First = () => {
  const router = useRouter();

  const Send = async () => {
    router.push("/form");
  };

  return (
    <div className="h-[20rem] md:h-[45rem] lg:h-[50rem] w-full flex justify-center items-center">
      <Image
        src={pic3}
        alt="front"
        layout="fill" // Makes the image responsive
        objectFit="cover" // Ensures the image scales properly
        priority // Optimizes the image for faster loading
      />
    </div>
  );
};

export default First;