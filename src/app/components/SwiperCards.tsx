import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { cardData } from '../../constants/utils';
import Image from 'next/image';

// Install Swiper modules
// SwiperCore.use([Pagination, Navigation]);

const SwiperComponent: React.FC = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={0}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    loop={true}
  >
      {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide">
            <h3>{card.top}</h3>
            <p>{card.content}</p>
            <Image src={card.imgs} alt={card.top} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
