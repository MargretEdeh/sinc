'use client'
import * as React from "react";
import { Navigation ,A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { cardData } from '../../constants/utils';
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import "../../constants/swipper-custom.css";


interface IProgramProps {}

const Program: React.FunctionComponent<IProgramProps> = (props) => {
  return (
    <main className="bg-bright-shade relative gap-5 flex flex-col items-center p-5 justify-center md:px-20 md:py-32 ">
      <div className="w-full gap-2 flex items-center justify-center flex-col">
        <h1 className="text-center text-5xl font-semibold">
          Join Our Entrepreneur In Residence (EIR) Program
        </h1>
        <p className="py-5 text-center text-xs">
          Our EIR program is our structured 3 months unpaid program designed to
          help us have a pipeline of business and technical cofounders who can
          run the venture of choice as CEO & CTO owning 20% equity each.
        </p>
      </div>
      <div className="w-full hidden   bg-bright-shade md:flex items-center justify-center">
        <Swiper
          modules={[Navigation ,A11y]}
          spaceBetween={20} // Adjust space between slides if needed
          slidesPerView={3}
          navigation
          loop={true}
          className="mySwiper " // Apply a custom class if needed
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col items-start gap-3 bg-white h-[400px] p-8  shadow-lg my-8  mx-auto">
              <Image src={card.imgs} alt={card.top} width={50} height={50} />
                <h3 className=" font-semibold">{card.top}</h3>
                <p className=" text-sm">{card.content}</p>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
       <div className=" flex flex-col md:hidden" >
        {cardData.map((card, index) => (
            <div key={index}>
              <div className="w-full flex flex-col items-start gap-3 bg-white h-[400px] p-8  shadow-lg my-8  mx-auto">
              <Image src={card.imgs} alt={card.top} width={50} height={50} />
                <h3 className=" font-semibold">{card.top}</h3>
                <p className=" text-sm">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      <Link className=" text-center flex gap-2 font-semibold text-sm items-center  underline" href="/service-incubator">Support the Future <FaArrowRightLong/> </Link>
    </main>
  );
};

export default Program;
