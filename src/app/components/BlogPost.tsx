import * as React from "react";
import youtube1 from "../../../public/youtube1.png";
import youtube2 from "../../../public/youtube2.png";
import book from "../../../public/book.png";
import bookii from "../../../public/bookii.png";
import bookiii from "../../../public/bookiii.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface IBlogPostProps {}

const BlogPost: React.FunctionComponent<IBlogPostProps> = (props) => {
  return (
    <main className=" bg-bright-shade gap-5 flex flex-col items-center justify-center p-5 md:px-20 md:py-10">
      <div className=" md:w-[80%] gap-2 flex items-center justify-center flex-col">
        <h1 className=" text-center text-5xl font-semibold">
          {" "}
          Blogs & Resources
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-3 mf:mt-20 mb-5 items-center">
        <Image src={youtube1} alt="embded" />
        <Image src={youtube2} alt="embded" />
        <Image src={youtube1} alt="embded" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="flex items-center w-full text-sm">
          <span>
            <h1 className=" font-semibold">Top Ten Most Powerful Startup</h1>
            <p>
              Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top
              Ten Most Powerful Startup
            </p>
          </span>
          <Image width={200} height={200} src={bookii}alt="book"/>
        </div>
        <div className="flex items-center w-full text-sm">
          <span>
            <h1  className=" font-semibold">Top Ten Most Powerful Startup</h1>
            <p>
              Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top
              Ten Most Powerful Startup
            </p>
          </span>
          <Image width={200} height={200} src={bookiii}alt="book"/>
        </div>
        <div  className="flex items-center w-full text-sm" >
          <span>
            <h1 className=" font-semibold">Top Ten Most Powerful Startup</h1>
            <p>
              Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top
              Ten Most Powerful Startup
            </p>
          </span>
          <Image width={200} height={200} src={book}alt="book"/>
        </div>
      </div>
      <Link className=" text-center flex gap-2 font-semibold text-sm items-center my-14  underline" href="/service-incubator">See More Equity Jobs <FaArrowRightLong/> </Link>

    </main>
  );
};

export default BlogPost;
