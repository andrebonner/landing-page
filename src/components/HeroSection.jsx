import React from "react";
import programming from "../assets/programming.svg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-cyan-500 w-auto h-auto mt-20">
      <article className="flex flex-col-reverse md:flex-row w-9/12 mx-auto py-20">
        <div className="w-100 md:w-1/2 p-5 flex flex-col items-center md:items-start justify-center">
          <span className="flex flex-col md:flex-row text-center md:text-left bg-white bg-opacity-40 px-2 py-1 my-5 rounded-full w-max">
            <mark className="bg-transparent text-green-500">25% Save</mark>
            <span className="text-white ">For First Month Trial Version</span>
          </span>
          <h1 className="text-5xl text-white leading-snug my-8 text-center md:text-left">
            TechZenth Is Awarded Best Management Tools In 2020.
          </h1>
          <p className="text-white leading-normal text-center md:text-left ">
            With a rock solid foundation in design and development opportunities
            that is followed by exceptional customer service
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <button className="mr-5 mt-5 p-3 rounded bg-green-300 hover:bg-green-400 text-white">
              Download Now
            </button>{" "}
            <span className="text-white mx-2">or</span>{" "}
            <a
              href="/signup"
              className="text-white underline underline-offset-4 hover:no-underline"
            >
              Start Free Trial
            </a>
          </div>
        </div>
        <div className="w-100 md:w-1/2 p-5">
          <img src={programming} className="w-full h-full" alt="" />
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
