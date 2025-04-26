"use client";
import dynamic from "next/dynamic";

const First = dynamic(() => import("@/components/First"), { ssr: false });
const Second = dynamic(() => import("@/components/Second"), { ssr: false });
const Third = dynamic(() => import("@/components/Third"), { ssr: false });
const Fourth = dynamic(() => import("@/components/Fourth"), { ssr: false });
const Sixth = dynamic(() => import("@/components/Sixth"), { ssr: false });
const Seventh = dynamic(() => import("@/components/Seventh"), { ssr: false });




export default function Home() {
 
  return (
    <>
    <div className="md:mt-0">
      
        <First />
     
      <Second />
      <Third />
      <Fourth />
      <Sixth />
      <Seventh />
    </div>
    </>
  );
}