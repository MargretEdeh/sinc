import * as React from "react";
import Button from "./Button";
import hero from "../../../public/hero.png"
import Image from "next/image";

interface IHeroSectionProps {}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  return (
    <main className="flex lg:h-[500px] md:px-20 md:py-20   ">
      <article className=" lg:w-[40%]  bg-white flex flex-col px-3 py-5 items-center justify-center lg:items-start lg:justify-start gap-3 ">
        <h2 className=" text-xl text-center lg:text-start lg:text-3xl font-semibold lg:leading-10">
          SINC Partners is a service incubation company
        </h2>
        <p className="md:text-lg leading-8">
          {" "}
          Connecting experts in product development and growth marketing willing
          to offer their services to amazing startups in exchange
          for minute equity (usually 0.5% to 2%).
        </p>
        <Button className=" rounded-3xl bg-dark text-sm  text-white px-5 py-3">SINC With Us</Button>
      </article>
      <Image className=" filter opacity-20  lg:opacity-100 end-0 absolute top-0" src={hero} alt="Hero"/>
    </main>
  );
};

export default HeroSection;
