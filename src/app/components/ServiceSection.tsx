import * as React from "react";
import CardLayout from "./CardLayout";
import triangle from "../../../public/triangle.png";
import polygon from "../../../public/Polygon.png";
import trapizuim from "../../../public/Trapizuim.png";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";

interface IServiceSectionProps {}

const ServiceSection: React.FunctionComponent<IServiceSectionProps> = (
  props
) => {
  return (
    <main className=" bg-bright-shade gap-10 flex flex-col items-center justify-center p-5 md:px-20 md:py-10">
      <div className=" md:w-[80%] gap-2 flex items-center justify-center flex-col">
        <h1 className=" text-center text-5xl font-semibold">
          {" "}
          Our Service Incubation Model
        </h1>
        <p className=" text-center text-xs">
          {" "}
          The Service Incubation model is an alternate funding model for startup
          that allows professionals to offer their services to startups in
          return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see your share grow as much
          as 1000% in 12 – 24 months as been first to invest.
        </p>
      </div>
      <div className="flex w-full flex-col justify-start items-start">
        <h3 className=" font-semibold text-xl"> Hypothesis</h3>
        <p className="text-sm">
          Just a few reasons we know its time for this model
          within the ecosystem
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <CardLayout
          content="Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support"
          img={triangle}
          styles="w-full"
        />
        <CardLayout
          content="If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment"
          img={polygon}
          styles="w-full"
        />
        <CardLayout
          content="Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return"
          img={trapizuim}
          styles="w-full"
        />
      </div>
      <div className="flex w-full flex-col justify-start items-start">
        <h3 className=" font-semibold text-xl"> Case Study </h3>
        <p className="text-sm">
          See what Service Incubators get, the maths behind Service Equity
          (SEEQ) and what the value of your share equity can be over time
        </p>
        <div className="my-5 flex gap-3 ">
            <span className="px-3 py-2 bg-white rounded-2xl border  border-black ">Service Incubator Equity</span>
            <span className="px-3 py-2 bg-white rounded-2xl border  border-black ">SEEQ Maths Equation</span>
            <span className="px-3 py-2 bg-white rounded-2xl border  border-black " >Value of my Equity Over Time</span>
        </div>
      </div>
      <Link className=" text-center flex gap-2 font-semibold text-sm items-center  underline" href="/service-incubator">Become A Service Incubator <FaArrowRightLong/> </Link>
    </main>
  );
};

export default ServiceSection;
