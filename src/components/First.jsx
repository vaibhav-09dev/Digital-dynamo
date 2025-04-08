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
    <div className="md:h-220 w-121 h-66 md:w-400 flex justify-center items-center  ">
      <Image src={pic3} height={800} width={1500} alt="front"  />
     

      
    



    
    </div>
      )
    }
    

export default First