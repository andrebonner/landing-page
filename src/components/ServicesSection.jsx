import React from "react";
import noon_daytime from "../assets/noon-daytime-line.svg";
import computer_screen from "../assets/computer-screen.svg";
import share from "../assets/share.svg";
import circle from "../assets/circle.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ServicesSection = () => {
  return (
    <section className="w-auto h-auto bg-gray-100">
      <article className="flex flex-col w-9/12 mx-auto h-auto">
        <div className="w-auto md:w-5/12 flex flex-col items-center justify-center my-10 mx-auto">
          <img src={noon_daytime} className="w-8 md:w-16 md:h-16" alt="" />
          <h2 className="text-3xl text-center font-semibold">Best Services</h2>
          <p className="text-gray-300 text-center my-4 leading-relaxed">
            We show only the best websites, portfolios and landing pages built
            completely with passion, simplicity & creativity !
          </p>
        </div>
        <div className="w-100 md:h-[500px] flex flex-col md:flex-row mx-auto">
          <div className="flex flex-col items-center my-5 mx-10 md:w-1/3">
            <img className="w-12 md:w-32" alt="" src={computer_screen} />
            <h6 className="text-md text-gray-300">Device Optimized</h6>
            <h2 className="text-xl font-semibold mb-5">Strategy Solutions</h2>
            <p className="text-gray-300 text-center mb-10 leading-relaxed">
              Vestibulum sem elit, cursus non finibus at, facilisis non metus.
            </p>
            <a
              href="/"
              className="text-gray-300 font-semibold flex items-center border-2 border-gray-300 rounded-full py-2 px-3 hover:text-gray-500"
            >
              <span className="pr-2">Learn More </span>
              <ArrowRightIcon className="w-4" />
            </a>
          </div>
          <div className="flex flex-col items-center my-5 mx-10 md:w-1/3">
            <img className="w-12 md:w-32" alt="" src={share} />
            <h6 className="text-md text-gray-300">Responsive</h6>
            <h2 className="text-xl font-semibold mb-5">Dedicated Support</h2>
            <p className="text-gray-300 text-center mb-10 leading-relaxed">
              Vestibulum sem elit, cursus non finibus at, facilisis non metus.
            </p>
            <a
              href="/"
              className="text-gray-300 font-semibold flex items-center border-2 border-gray-300 rounded-full py-2 px-3 hover:text-gray-500"
            >
              <span className="pr-2">Learn More </span>
              <ArrowRightIcon className="w-4" />
            </a>
          </div>
          <div className="flex flex-col items-center my-5 mx-10 md:w-1/3">
            <img className="w-12 md:w-32" alt="" src={circle} />
            <h6 className="text-md text-gray-300">Full Speed</h6>
            <h2 className="text-xl font-semibold mb-5">Digital Design</h2>
            <p className="text-gray-300 text-center mb-10 leading-relaxed">
              Vestibulum sem elit, cursus non finibus at, facilisis non metus.
            </p>
            <a
              href="/"
              className="text-gray-300 font-semibold flex items-center border-2 border-gray-300 rounded-full py-2 px-3 hover:text-gray-500"
            >
              <span className="pr-2">Learn More </span>
              <ArrowRightIcon className="w-4" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ServicesSection;
