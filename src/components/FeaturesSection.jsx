import React from "react";
import dot_circle from "../assets/dot-circle.svg";
import circle from "../assets/circle.svg";
import squares from "../assets/squares.svg";
import share_outline from "../assets/share-outline.svg";
import experience_design from "../assets/experience-design.svg";
import heatmap from "../assets/heatmap.svg";
import website_builder from "../assets/website-builder.svg";
import infinity from "../assets/infinity.svg";

import {
  BellIcon,
  DocumentDuplicateIcon,
  PaperClipIcon,
  ShieldCheckIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
const FeaturesSection = () => {
  return (
    <section className="w-auto h-full">
      <article className="flex flex-col w-9/12 mx-auto h-auto">
        <div className="w-auto md:w-5/12 flex flex-col items-center my-10 mx-auto">
          <img className="w-8 md:w-16 md:h-16" src={share_outline} alt="" />
          <h2 className="text-3xl text-center font-semibold">Top Features</h2>
          <p className="text-gray-300 text-center my-4 leading-relaxed">
            We show only the best websites, portfolios and landing pages built
            completely with passion, simplicity &amp; creativity
          </p>
        </div>
        <div className="w-auto md:w-10/12 mx-auto my-3 md:my-5 flex flex-col md:flex-row ">
          <div className="w-auto md:w-1/2 mx-5 my-3">
            <img className="w-100 h-auto" src={experience_design} alt="" />
          </div>
          <div className="w-auto md:w-1/2 flex flex-col items-center md:items-start">
            <img className="w-8 md:w-16 md:h-16" src={circle} alt="" />
            <h3 className="text-md text-gray-300 text-center md:text-left mt-3">
              DECENT
            </h3>
            <h2 className="text-3xl font-semibold text-center md:text-left mt-1">
              Clean &amp; Minimal Design
            </h2>
            <p className="text-gray-300 text-center md:text-left mt-4 border-5 border-blue-700">
              You want customer to your store. Easily publish your coupons and
              when a user has manage to catch one of your coupons.
            </p>
            <div className="flex flex-col md:flex-row space-x-4">
              <button className="flex items-center my-3 py-1 px-2 border-2 border-gray-100 rounded-full cursor-default">
                <span className="p-1 bg-blue-400 rounded-full">
                  <ShieldCheckIcon className="w-6 text-white" />
                </span>{" "}
                <span className="mx-3">Security</span>
              </button>
              <button className="flex items-center my-3 py-1 px-2 border-2 border-gray-100 rounded-full cursor-default">
                <span className="p-1 bg-blue-400 rounded-full">
                  <BellIcon className="w-6 text-white" />
                </span>{" "}
                <span className="mx-3">Notification</span>
              </button>
              <button className="flex items-center my-3 py-1 px-2 border-2 border-gray-100 rounded-full cursor-default">
                <span className="p-1 bg-blue-400 rounded-full">
                  <WifiIcon className="w-6 text-white" />
                </span>{" "}
                <span className="mx-3">Connect</span>
              </button>
            </div>{" "}
            <a href="/" className="underline underline-offset-8 text-blue-600">
              + Read More
            </a>
          </div>
        </div>
        <div className="w-auto md:w-11/12 my-3 md:my-5 mx-auto flex flex-col md:flex-row items-center md:items-start">
          <div className="w-auto md:w-1/2 flex flex-col items-center md:items-start">
            <img src={infinity} className="w-8 md:w-16 md:h-16" alt="" />
            <h3 className="text-md text-gray-300 text-center md:text-left mt-2">
              UX DEVELOPER
            </h3>
            <h2 className="text-3xl font-semibold text-center md:text-left mt-2">
              Planning &amp; Strategy
            </h2>
            <ul className="list-inside space-y-1 max-w-md  my-3 text-gray-300">
              <li className="flex items-center">
                <img src={dot_circle} alt="" className="w-4 h-4 mr-1" />
                We put a lot of effort in design
              </li>
              <li className="flex items-center">
                <img src={dot_circle} alt="" className="w-4 h-4 mr-1" />
                We want to build a lot of productivity
              </li>
              <li className="flex items-center">
                <img src={dot_circle} alt="" className="w-4 h-4 mr-1" />
                We want to be able to build a lot of resources
              </li>
            </ul>{" "}
            <a href="/" className="underline underline-offset-8 text-blue-600">
              + Read More
            </a>
          </div>
          <div className="w-auto md:w-1/2 my-3 md:my-5">
            <div className="">
              <img src={heatmap} alt="" />
            </div>
          </div>
        </div>
        <div className="w-auto md:w-10/12 mx-auto my-3 md:my-5 flex flex-col md:flex-row  items-center md:items-start">
          <div className="w-auto md:w-1/2 mx-5 my-3 md:my-5">
            <img className="w-100 h-auto" src={website_builder} alt="" />
          </div>
          <div className="w-auto md:w-1/2 flex flex-col items-center md:items-start">
            <img className="w-8 md:w-16 md:h-16" src={squares} alt="" />
            <h3 className="text-md text-gray-300 text-center md:text-left mt-3">
              UI DESIGN
            </h3>
            <h2 className="text-3xl font-semibold text-center md:text-left mt-1">
              Elegant &amp; Modern Design
            </h2>
            <p className="text-gray-300 text-center md:text-left mt-4 border-5 border-blue-700">
              You want customer to your store. Easily publish your coupons and
              when a user has manage to catch one of your coupons.
            </p>
            <div className="flex flex-col md:flex-row my-4 ">
              <div className="w-auto md:w-1/2 mx-auto my-3 flex flex-col items-center">
                <span className="p-2 bg-blue-600 rounded-full w-8 h-8 flex items-center">
                  <DocumentDuplicateIcon className="w-6 h-6 text-white" />
                </span>
                <p className="text-gray-300 text-center my-3">
                  The standard of Ipsum used since
                </p>
              </div>
              <div className="w-auto md:w-1/2 mx-auto my-3 flex flex-col items-center">
                <span className="p-2 bg-blue-600 rounded-full w-8 h-8 flex items-center">
                  <PaperClipIcon className="w-6 h-6 text-white" />
                </span>
                <p className="text-gray-300 text-center my-3">
                  The standard of Ipsum used since
                </p>
              </div>
            </div>
            <a href="/" className="underline underline-offset-8 text-blue-600">
              + Read More
            </a>
          </div>
        </div>
      </article>{" "}
      <article className="w-100 bg-gradient-to-r from-blue-900 to-cyan-500 p-5">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-auto md:w-1/2 my-3 mr-auto">
            <img src={website_builder} alt="" />
          </div>
          <div className="w-auto md:w-1/3 mr-auto my-auto">
            <img className="w-8 md:w-16 md:h-16" src={dot_circle} alt="" />
            <h1 className="text-3xl text-center text-white mt-4">
              Key Features Of The Best Product
            </h1>
            <p className="text-gray-300 mt-4">
              We show only the best websites, portfolios and landing pages built
              completely with passion, simplicity &amp; creatvity !
            </p>
            <ul className="list-decimal list-inside text-white space-y-2 my-3">
              <li className="border border-slate-300 pl-2 py-2">
                {" "}
                Built with latest Tailwindcss
              </li>
              <li className="border border-slate-300 pl-2 py-2">
                {" "}
                Fully responsive
              </li>
              <li className="border border-slate-300 pl-2 py-2">
                {" "}
                Awesome support 24/7
              </li>
              <li className="border border-slate-300 pl-2 py-2">
                {" "}
                Well documented and structured code
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default FeaturesSection;
