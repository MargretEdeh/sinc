import * as React from "react";
import CardLayout from "./CardLayout";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";


interface ICoFoundProps {}

const CoFound: React.FunctionComponent<ICoFoundProps> = (props) => {
  return (
    <main className=" bg-bright-shade gap-5 flex flex-col p-5 items-center justify-center md:px-20 md:py-10">
      <div className=" md:w-[80%] gap-2 flex items-center justify-center flex-col">
        <h1 className=" text-center text-5xl font-semibold">
          Co-found With Us
        </h1>
        <p className=" text-center text-xs">
          We seek to collaborate with visionary individuals who are solving
          similar problems of helping entrepreneurs succeed
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <CardLayout
          heading="We Ideate"
          color="bg-dark"
          styles="w-full"
          top="1"
          content="We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market."
        />
        <CardLayout
          top="2"
          styles="w-full"
          color="bg-orange-500"
          heading="You Validate"
          content="You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions "
        />
        <CardLayout
          heading="You Co-own"
          color="bg-pink-400"
          styles="w-full"
          top="3"
          content="After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture."
        />
      </div>
      <Link className=" text-center flex gap-2 font-semibold text-sm items-center  underline" href="/service-incubator">Build your dream <FaArrowRightLong/> </Link>

    </main>
  );
};

export default CoFound;
