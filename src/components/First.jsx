"use client";
import React from "react";
import Image from "next/image";
import pic3 from "../../public/pic3.jpg"
import { useRouter } from "next/navigation"


const First = () => {
  const router=useRouter();
  const Send=async()=>{
    router.push("/form")
  }
  
  
  return (
    <div className="h-[20rem] md:h-[45rem] lg:h-[50rem] md:w-full flex justify-center items-center  ">
      <Image src={pic3} height={600} width={1400} alt="front"  />
     

      
    



    
    </div>
      )
    }
    

export default First