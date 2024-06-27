import React from 'react';
import { text } from 'stream/consumers';
import Image from 'next/image';

interface ServiceIncubatorProps {
  heading?: string;
  content: React.ReactNode;
  styles?: string;
  img?:  string | any ;
  text?: string;
  top?: string;
  color?: string;
}

const CardLayout: React.FC<ServiceIncubatorProps> = ({ heading, content, color, styles, text, top, img }) => {
  return (
    <div className={` mx-auto flex flex-col gap-2  px-8 pb-5  shadow-lg my-8 ${styles}`}>
      <div className={`w-10  h-10 text-center text-white font-semibold ${color} rounded-full px-3 py-2`} >
        {top}
      </div>
       {img &&
        <Image
          src={typeof img === 'string' ? img : img?.src}
          alt={text || 'Incubator Image'}
          className="mb-4  h-auto"
          width={40}
          height={40}
        />
       }
      <h2 className={`${text} text-2xl font-bold mb-4`}>{heading}</h2>
      <div className={`${text} text-sm`} >
        {content}
      </div>
    </div>
  );
};

export default CardLayout;
