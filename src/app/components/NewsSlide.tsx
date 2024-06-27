// ImageCarousel.tsx
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Button from './Button';

// Import  images
import new1 from "../../../public/new1.png"
import news2 from "../../../public/news2.png"
import news3 from "../../../public/news3.png"
import news4 from "../../../public/news4.png"

const images = [
 new1,
 news2,
 news3,
 news4
];

const ImageCarousel: React.FC = () => {
  return (
    <main className='bg-bright-shade '>

    <Swiper
      modules={[Autoplay]}
      spaceBetween={20 }
      slidesPerView={3}
      autoplay={{ delay: 1000, disableOnInteraction: true }}
      loop={true}
    >
      {images.map((src, index) => (
        <SwiperSlide className='mx-5 ' key={index}>
          <Image  src={src} alt={`Image ${index + 1}`}  />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className=' items-center p-5 my-32 flex justify-center flex-col'>

    <div className=" md:w-[80%] gap-2 flex items-center justify-center flex-col">
        <h1 className=" text-center md:text-5xl font-semibold">
        Let's build companies that help everyone succeed
        </h1>
      </div>
      <div className='flex gap-5 items-center'>
        <Button className=' px-5 py-2 border border-black rounded-full '> SINC With Us</Button>
        <Button className=' px-5 py-2 rounded-full bg-dark text-white'> Apply to SIP 1.0</Button>
      </div>
    </div>

    </main>

  );
};

export default ImageCarousel;
