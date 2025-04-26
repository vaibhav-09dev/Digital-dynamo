import dynamic from "next/dynamic";

const First = dynamic(() => import("@/components/First"));
const Second = dynamic(() => import("@/components/Second"));
const Third = dynamic(() => import("@/components/Third"));
const Fourth = dynamic(() => import("@/components/Fourth"));
const Sixth = dynamic(() => import("@/components/Sixth"));
const Seventh = dynamic(() => import("@/components/Seventh"));




import First from "@/components/First";
import Fourth from "@/components/Fourth";

import Second from "@/components/Second";
import Seventh from "@/components/Seventh";


import Sixth from "@/components/Sixth";
import Third from "@/components/Third";




export default function Home() {
  
  return (
   <div className="md:mt-0" >

   
  <div className="">
    
    
  <First/>
  </div>
  <Second/>
   
 <Third/>
 <Fourth/>
 <Sixth/>
  <Seventh/>
  


   </div>
  );
}