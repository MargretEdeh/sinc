import * as React from "react";
import {deals} from "@/constants/micro";
import { second } from "@/constants/micro";
import Button from "./Button";

interface IInvestorsProps {}

const Investors: React.FunctionComponent<IInvestorsProps> = (props) => {
  return (
    <main className=" bg-bright-shade gap-5 flex flex-col items-center justify-center p-5 md:px-20 md:py-10">
      <div className=" md:w-[80%] gap-2 flex items-center justify-center flex-col">
        <h1 className=" text-center text-5xl font-semibold">
          SINC Investors Network
        </h1>
        <p className=" text-center text-xs">
          {" "}
          Our deals are structured not just to take in investments but to
          onboard owners passionate about our solutions. Our portfolio companies
          are valued at $50k at start, with these low valuation, you are
          guaranteed at least 2x-5x, usually been the first to invest.
        </p>

        <p className=" text-center text-xs">
          <b>Disclaimer: </b> These deal flows is a statement of our projections
          and may differ from stage to stage and from venture to venture and the
          guarantee is for deal 1, usually the first to invest
        </p>
      </div>
      <div className="flex w-full my-10 items-start justify-start">
        <p>
          {" "}
          <b> Micro Angel Investors & Service incubators</b> (Invest from $500 &
          above)
        </p>
      </div>
      <div className="flex flex-col md:flex-row ">
        {deals.map((deal, index) => (
          <div className=" px-5 py-3 w-full border " key={index}>
            <h2 className=" font-semibold">{deal.deal}</h2>
            <ul>
              <li>{deal.deal1}</li>
              <li>{deal.deal2}</li>
              <li>{deal.deal3}</li>
              <li>{deal.deal4}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col my-10 items-start justify-start">
        <p>
          {" "}
         <b> Angel Investors & Venture Capital </b> (Invest from $50k and above) 
        </p>
        <div className="flex flex-col md:flex-row ">
        {second.map((deal, index) => (
          <div className=" px-5 py-3 w-full border " key={index}>
            <h2 className=" font-semibold">{deal.deal}</h2>
            <ul>
              <li>{deal.deal1}</li>
              <li>{deal.deal2}</li>
              <li>{deal.deal3}</li>
              <li>{deal.deal4}</li>
            </ul>
          </div>
        ))}
        <div className="px-5 py-5 text-center flex flex-col items-center justify-center gap-5 w-full border text-white bg-black">
        <p className=" text-xl font-semibold"> Work with Service Incubators (SINC) to expedite your time to market</p>
        <Button size="lg" className=" bg-dark rounded-full font-semibold  px-5 py-3" >Join SINC Network</Button>

        </div>
      </div>
      </div>
    </main>
  );
};

export default Investors;
