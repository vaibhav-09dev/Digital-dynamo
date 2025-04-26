'use client';
import {
  DirectionAwareHover,
  DirectionAwareHover2,
  DirectionAwareHover3,
  DirectionAwareHover4,
  DirectionAwareHover5,
} from '../components/ui/direction-aware-hover';
import pic1 from '../../public/pic1.jpg';
import pic2 from '../../public/pic2.jpg';
import pic4 from '../../public/pic4.jpg';
import pic5 from '../../public/pic5.jpg';
import pic6 from '../../public/pic6.jpg';

const Third = () => {
  const imageUrl = pic1;
  const imageUrl1 = pic2;
  const imageUrl2 = pic4;
  const imageUrl3 = pic5;
  const imageUrl4 = pic6;

  return (
    <div className="h-auto md:h-[810px] flex flex-col md:flex-row items-end bg-gray-200">
      {/* Left Section */}
      <div className="relative flex items-center justify-center w-full md:w-1/2">
        <DirectionAwareHover imageUrl={imageUrl}>
          <div className="group relative">
            <p className="font-extrabold text-5xl text-green-500 group-hover:scale-110 group-hover:text-green-600 transition-transform duration-300 drop-shadow-lg">
              Social Media Marketing
            </p>
            <p className="font-light text-sm text-gray-1000 group-hover:translate-y-2 transition-transform duration-300">
              Engage your audience with impactful campaigns.
            </p>
          </div>
        </DirectionAwareHover>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-1/2 gap-1">
        <div className="relative flex items-center justify-center">
          <DirectionAwareHover2 imageUrl={imageUrl1}>
            <div className="group relative">
              <p className="font-extrabold text-5xl text-center text-green-500 group-hover:scale-110 group-hover:text-green-600 transition-transform duration-300 drop-shadow-lg">
                Performance Marketing
              </p>
              <p className="font-light text-sm text-gray-1000 group-hover:translate-y-2 transition-transform duration-300">
                Drive results with data-driven strategies.
              </p>
            </div>
          </DirectionAwareHover2>
        </div>
        <div className="relative flex items-center justify-center">
          <DirectionAwareHover3 imageUrl={imageUrl2}>
            <div className="group relative">
              <p className="font-extrabold text-5xl text-center text-green-500 group-hover:scale-110 group-hover:text-green-600 transition-transform duration-300 drop-shadow-lg">
                Web Analytics
              </p>
              <p className="font-light text-sm text-gray-1000 group-hover:translate-y-2 transition-transform duration-300">
                Analyze and optimize your online presence.
              </p>
            </div>
          </DirectionAwareHover3>
        </div>
        <div className="relative flex items-center justify-center">
          <DirectionAwareHover4 imageUrl={imageUrl3}>
            <div className="group relative">
              <p className="font-extrabold text-4xl text-center text-green-500 group-hover:scale-110 group-hover:text-green-600 transition-transform duration-300 drop-shadow-lg">
                Website Design & Development
              </p>
              <p className="font-light text-sm text-gray-1000 group-hover:translate-y-2 transition-transform duration-300">
                Build stunning and functional websites.
              </p>
            </div>
          </DirectionAwareHover4>
        </div>
        <div className="relative flex items-center justify-center">
          <DirectionAwareHover5 imageUrl={imageUrl4}>
            <div className="group relative">
              <p className="font-extrabold text-4xl text-center text-green-500 group-hover:scale-110 group-hover:text-green-600 transition-transform duration-300 drop-shadow-lg">
                Search Engine Optimization
              </p>
              <p className="font-light text-sm text-gray-1000 group-hover:translate-y-2 transition-transform duration-300">
                Improve your visibility and rankings.
              </p>
            </div>
          </DirectionAwareHover5>
        </div>
      </div>
    </div>
  );
};

export default Third;