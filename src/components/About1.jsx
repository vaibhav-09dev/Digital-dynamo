import React from 'react'

const About1 = () => {
  return (
    <div className='h-auto md:h-[600px] w-full  flex flex-col md:flex-row justify-center items-end'>
          <div className='h-auto md:h-[600px] w-full md:w-2/3  flex justify-center items-center'>
            <div className=' h-auto md:h-[650px] w-full md:w-[800px] p-4 md:p-0'>
              <div className="mt-8 md:mt-32">
                <h1 className="text-3xl md:text-5xl font-bold underline-offset-8 text-left md:text-left  ">
                ABOUT <span className='text-green-500'>US</span>
                </h1>
                <br /> <br />
                <h2 className="text-lg md:text-xl font-mono italic text-left md:text-left  ">
                We live and breathe digital. The Internet is our home.
                </h2>
                <br />
                <p className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif ">
                We are a buzzing digital media agency based out of New Delhi, India. Our team <br /> consists of experienced and hardworking social bees who breathe and live<br />digital. Change on Facebook, Twitter, YouTube, Instagram, Google algorithm? <br />Rest assured that we are aware of it the moment it’s out. We combine our years <br />
                of experience in creating integrated social solutions with creative output to <br />generate a rich digital experience for our clients. We think we research, we <br /> create, and for our clients, we thrive to deliver best solutions to their every <br />problem.
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className='h-auto md:h-[700px] w-full md:w-1/3  flex justify-center items-center'>
           
          </div>
        </div>
  )
}

export default About1