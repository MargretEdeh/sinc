import * as React from "react";
import CardLayout from "./CardLayout";

interface IAreaFocusProps {}

const AreaFocus: React.FunctionComponent<IAreaFocusProps> = (props) => {
  return (
    <main className="flex bg-bright-shade p-5 gap-5 flex-col justify-center items-center md:p-20">
      <div className="flex text-center gap-2   w-10/12  flex-col items-center justify-center">
        <h1 className=" text-5xl  "> Our Area of Focus</h1>
        <p className=" text-sm w-[60%] ">
          In our quest to help make success available to everyone, we have
          initial strategic direction to focus on these five (5) key areas at
          the lab
        </p>
      </div>
      <div className="flex md:flex-row flex-col ">
        <CardLayout
          content="Business Support & Incubation"
          styles="bg-dark"
          text="text-white"
          heading="01"
        />
         <CardLayout
          content="On-Demand & As-A-Service"
          styles="bg-orange-500"
          text="text-white"
          heading="02"
        /> 
        <CardLayout
        content="Marketplace & Crowdsourcing"
        styles="bg-pink-400"
        text="text-white"
        heading="03"
      />
       <CardLayout
          content="Aggregation & Shared Economy"
          styles="bg-silk"
          text="text-white"
          heading="04"
        />
         <CardLayout
          content="Decentralized Economy & Digital Assets"
          styles="bg-pink-400"
          text="text-white"
          heading="05"
        />
      </div>
    </main>
  );
};

export default AreaFocus;
