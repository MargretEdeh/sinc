import * as React from "react";
import Foot from "./Foot";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <main className="bg-dark py-20 px-20 text-white  ">
      <div>
        <h1 className=" text-5xl font-semibold ">Newsletter</h1>
        <p className=" w-1/2">
          Get the latest about SINC Partners, our startup Incubator program,
          Portfolio company offerings - straight into your inbox.
        </p>
      <form className="flex items-center rounded-full overflow-hidden w-1/3 my-20 shadow-lg bg-white">
        <input
          type="email"
          placeholder="Enter your email address"
          className="px-4 py-2 w-full focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 font-semibold rounded-r-full"
        >
          Subscribe
        </button>
      </form>
      <hr/>
      <Foot/>

      </div>
    </main>
  );
};

export default Footer;
