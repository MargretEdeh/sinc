import * as React from "react";
import CardLayout from "./CardLayout";

interface IAreaFocusProps {}

const ConceptSection: React.FunctionComponent<IAreaFocusProps> = (props) => {
  return (
    <main className=" bg-bright-shade gap-5 flex flex-col items-center justify-center md:px-20 p-5 md:py-10">
      <div className=" md:w-[80%] gap-2 flex items-center justify-center flex-col">
        <h1 className=" text-center text-5xl font-semibold">
          {" "}
          Our Concept Innovations{" "}
        </h1>
        <p className=" text-center text-xs">
          {" "}
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and ultimately
          help democratize success;
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
        <CardLayout
        styles="bg-white rounded-lg w-full text-center"
          heading="Service Incubator"
          content="A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP"
        />
        <CardLayout
        styles="bg-white rounded-lg  w-full text-center"
          heading="Virtualting"
          content="A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource"
        />
        <CardLayout
        styles="bg-white rounded-lg text-center w-full"
          heading="Diiming"
          content="A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice "
        />
      </div>
    </main>
  );
};

export default ConceptSection;
