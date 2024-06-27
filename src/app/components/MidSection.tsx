import Link from "next/link";
import * as React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface IMidProps {}

const Mid: React.FunctionComponent<IMidProps> = (props) => {
  return (
    <main className="bg-bright-shade shadow-2xl md:px-32 md:py-20 flex flex-col md:gap-20 items-center justify-center">
      <section className=" w-[70%] text-center gap-2 flex flex-col bg-white rounded-3xl px-10 py-10 ">
        <p className=" text-center">
          "Nigeria and Africa has a massive network effect that have not be
          fully utilized. With Nigerians/Africans in every country and territory
          of the world, we can scale an African business to 100+ countries in
          few weeks"
        </p>
        <p className=" font-semibold text-sm">Daniel Izeghs Oratokhai</p>
        <p className="text-xs">Managing Partner at SINC Partners Ltd</p>
      </section>
      <h2 className=" text-5xl font-semibold w-[70%] text-center">
        Network of builders helping startup scale
      </h2>
      <section className="flex flex-col md:flex-row gap-5 ">
      <div className=" bg-white md:w-1/2 shadow-lg rounded-2xl flex justify-between flex-col gap-3 px-10 py-10">
          <h3 className=" text-lg font-semibold">Work with Service Incubators to expedite your time-to-market</h3>
          <p className=" text-sm ">
            Collaborate with our meticulously chosen service partners, each with
            a vested interest, ensuring a shared commitment to success in the
            game of venture building.
          </p>
          <p className=" font-semibold text-sm">
            {" "}
            For 7.5% equity, you get a product manager, product designer,
            frontend engineer, software engineer and growth marketer to build
            the MVP of your app or web application and validate it.
          </p>
          <Link href='/learn-more' className="flex text-sm underline font-semibold items-center gap-3 " >Learn More  <FaArrowRightLong/> </Link>
        </div>
        <div className=" bg-white shadow-lg md:w-1/2 rounded-2xl flex flex-col justify-between gap-3 px-10 py-10">
          <h3 className=" text-lg font-semibold">Access funding after your mvp is validated </h3>
          <p className=" text-sm ">
          Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
          
          </p>
          <p className=" font-semibold text-sm">
            {" "}
            Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months 
          </p>
          <Link href='/learn-more' className="flex underline text-sm font-semibold items-center gap-3 " >Learn More  <FaArrowRightLong/> </Link>
        </div>
        
        
      </section>
    </main>
  );
};

export default Mid;
