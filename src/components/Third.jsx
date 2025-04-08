'use client';
import { DirectionAwareHover, DirectionAwareHover2, DirectionAwareHover3, DirectionAwareHover4, DirectionAwareHover5 } from "../components/ui/direction-aware-hover";
import pic1 from "../../public/pic1.jpg";
import pic2 from "../../public/pic2.jpg"
import pic4 from "../../public/pic4.jpg";
import pic5 from "../../public/pic5.jpg";
import pic6 from "../../public/pic6.jpg";
import ads from "../../public/ads.jpg"

const Third = () => {
  const imageUrl = pic1;
  const imageUrl1 = pic2;
  const imageUrl2 = pic4;
  const imageUrl3 = pic5;
  const imageUrl4 = pic6;

  return (
    <div className="h-auto md:h-[800px] flex flex-col md:flex-row items-end bg-gray-200">
      <div className="relative flex items-center justify-center w-full md:w-1/2">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-5xl text-yellow-200">Social Media Marketing</p>
          <p className="font-normal text-sm"></p>
        </DirectionAwareHover>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-1/2">
        <div className="relative flex items-center justify-center">
          <DirectionAwareHover2 imageUrl={imageUrl1}>
            <p className="font-bold text-5xl text-yellow-200">Performance Marketing</p>
            <p className="font-normal text-sm"></p>
          </DirectionAwareHover2>
        </div>
        <div className="relative flex items-center justify-center">
          <DirectionAwareHover3 imageUrl={imageUrl2}>
            <p className="font-bold text-5xl text-yellow-200">Web Analytics</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover3>
        </div>
        <div className="relative flex items-center justify-center">
          <DirectionAwareHover4 imageUrl={imageUrl3}>
            <p className="font-bold text-5xl text-yellow-200">Website Design & Development</p>
            <p className="font-normal text-sm"></p>
          </DirectionAwareHover4>
        </div>
        <div className="relative flex items-center justify-center">
          <DirectionAwareHover5 imageUrl={imageUrl4}>
            <p className="font-bold text-5xl text-yellow-200">Search Engine Optimization</p>
            <p className="font-normal text-sm"></p>
          </DirectionAwareHover5>
        </div>
      </div>
    </div>
  );
};

export default Third;