import * as React from "react";
import { imgs } from "@/constants/utils";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";

interface IPortFolioProps {}

const PortFolio: React.FunctionComponent<IPortFolioProps> = (props) => {
  return (
    <main className=" bg-bright-shade gap-5 flex flex-col items-center justify-center px-20 py-10">
      <div className=" w-[80%] gap-2 flex items-center justify-center flex-col">
        <h1 className=" text-center text-5xl font-semibold">
          Our Studio Portfolio
        </h1>
        <p className=" text-center text-xs">
          Our 2024 Service Incubator Portfolio Companies
        </p>
      </div>
      <div className="grid grid-cols-2 my-10 md:grid-cols-8 gap-5">
        {imgs.map((data, i) => (
          <div key={data.id} className=" bg-white flex items-center justify-center px-7 py-3 rounded-lg shadow-lg ">
            <Image src={data.src} alt={data.alt}/>
          </div>
        ))}
      </div>
      <Link className=" text-center flex gap-2 font-semibold text-sm items-center  underline" href="/service-incubator">View All Companies <FaArrowRightLong/> </Link>

    </main>
  );
};

export default PortFolio;
