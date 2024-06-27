import * as React from "react";
import { jobPositions } from "@/constants/micro";
import Image from "next/image";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface IEquityProps {}

const Equity: React.FunctionComponent<IEquityProps> = (props) => {
  return (
    <main className=" bg-bright-shade gap-5 flex flex-col items-center justify-center p-5 md:px-20 md:py-10">
      <div className=" md:w-[80%] gap-2 flex items-center justify-center flex-col">
        <h1 className=" text-center text-5xl font-semibold"> Equity jobs</h1>
        <p className=" text-center text-xs">
          See companies and startups offering equity or a mix of cash and equity
          for very important position in their company
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 ">
        {jobPositions.map((data,i)=>(
            <div key={data.stipend} className="w-full flex flex-col gap-3 shadow-lg bg-white rounded-xl px-3 py-5 " >
                <Image src={data.imageSrc} alt="logo"/>
                <p className=" text-sm">This company is a SAAS Startup that builds AI copy generator... </p>
                <p className=" text-md font-semibold">{data.role} </p>
                <div className="flex justify-between gap-5 text-sm">
                    <div className="flex flex-col">
                        <p className=" text-slate-400">Location</p>
                        <p>{data.location} </p>
                    </div>
                    <div className="flex flex-col" >
                        <p className=" text-slate-400">Industry</p>
                        <p>{data.industry} </p>
                    </div>
                </div>
                <div className="flex justify-between gap-5 text-sm">
                    <div  className="flex flex-col" >
                        <p className=" text-slate-400">Equity</p>
                        <p>{data.equity} </p>
                    </div>
                    <div className="flex flex-col">
                        <p className=" text-slate-400">Stipend</p>
                        <p>{data.stipend} </p>
                    </div>
                </div>
                <div className="flex justify-between gap-5 text-sm">
                    <div className="flex flex-col">
                        <p className=" text-slate-400">DEADLINE</p>
                        <p>{data.deadline} </p>
                    </div>
                    <div className="flex flex-col">
                        <p className=" text-slate-400"> ROLE_TYPE</p>
                        <p>{data.roleType} </p>
                    </div>
                </div>
                <Button size="md" className="px-3 py-2 my-3 bg-dark rounded-full text-white font-semibold">View Details</Button>
            </div>
        )) }
      </div>
      <Link className=" text-center flex gap-2 font-semibold text-sm items-center my-14  underline" href="/service-incubator">See More Equity Jobs <FaArrowRightLong/> </Link>

    </main>
  );
};

export default Equity;
