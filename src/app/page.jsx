import dynamic from "next/dynamic";
import First from "@/components/First";
import Second from "@/components/Second";
import Third from "@/components/Third";
import Fourth from "@/components/Fourth";
import Sixth from "@/components/Sixth";
import Seventh from "@/components/Seventh";

const First = dynamic(() => import("@/components/First"));
const Second = dynamic(() => import("@/components/Second"));
const Third = dynamic(() => import("@/components/Third"));
const Fourth = dynamic(() => import("@/components/Fourth"));
const Sixth = dynamic(() => import("@/components/Sixth"));
const Seventh = dynamic(() => import("@/components/Seventh"));







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