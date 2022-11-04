import React from "react";
import stars_shine from "../assets/stars-shine.svg";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const PriceSection = () => {
  return (
    <section className="w-auto h-auto bg-gray-100">
      <article className="flex flex-col w-9/12 mx-auto py-5 h-auto">
        <div className="w-auto md:w-7/12 flex flex-col items-center justify-center my-10 mx-auto">
          <img src={stars_shine} className="w-8 md:w-16 md:h-16" alt="" />
          <h2 className="text-3xl text-center font-semibold">
            Choose Your Pricing Plan. No Hidden Fees.
          </h2>
          <p className="text-gray-300 text-center my-4 leading-relaxed">
            We show only the best websites, portfolios and landing pages built
            completely with passion, simplicity & creativity !
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row mx-auto my-3 md:space-x-6">
          <div className="w-full md:w-1/3 py-3 my-3 flex flex-col bg-white border border-gray-200 rounded shadow">
            <div className="mx-auto my-8 py-2 px-1 border rounded-full border-gray-300">
              <h3 className="text-lg uppercase font-semibold px-3">Starter</h3>
            </div>
            <div className="mx-auto my-2">
              <span className="text-5xl">$ 19</span>
              <span className="text-gray-400"> /Per Month</span>
            </div>
            <div className="mx-auto my-2">
              <p className="text-green-400">Nam libero tempore amet.</p>
            </div>
            <div className="my-4">
              <div className="border border-gray-300 rounded p-3 w-2/3 mx-auto">
                <ul className="list-inside space-y-3 max-w-md text-gray-400">
                  <li className="flex items-center">
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />{" "}
                    Project:{" "}
                    <span className="text-black font-semibold">&nbsp; 10</span>
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />
                    Wordpress Theme
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />
                    Support:{" "}
                    <span className="text-black font-semibold">&nbsp;No</span>
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />
                    10 Domain
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto my-5">
              <button className="rounded-full py-2 px-5 bg-gradient-to-r from-blue-900 to-cyan-500 hover:from-cyan-500 hover:to-blue-900 text-white">
                Download Now
              </button>
            </div>
          </div>{" "}
          <div className="w-full md:w-1/3 py-3 my-3 relative overflow-hidden flex flex-col bg-white border border-gray-200 rounded shadow">
            <div className="bg-green-300 w-full text-center absolute origin-center rotate-45 top-7 -right-36">
              <h3 className="text-white text-md uppercase">Best Plan</h3>
            </div>
            <div className="mx-auto my-8 px-1 py-2 border rounded-full border-gray-300">
              <h3 className="text-lg uppercase font-semibold px-3">
                Professional
              </h3>
            </div>
            <div className="mx-auto my-2">
              <span className="text-5xl">$ 29</span>
              <span className="text-gray-400"> /Per Month</span>
            </div>
            <div className="mx-auto my-2">
              <p className="text-green-400">Nam libero tempore amet.</p>
            </div>
            <div className="my-4">
              <div className="border border-gray-300 rounded p-3 w-2/3 mx-auto">
                <ul className="list-inside space-y-3 max-w-md text-gray-400">
                  <li className="flex items-center">
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />{" "}
                    Project:{" "}
                    <span className="text-black font-semibold">&nbsp; 20</span>
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />
                    Wordpress Theme
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />
                    Support:{" "}
                    <span className="text-black font-semibold">&nbsp;Yes</span>
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />
                    20 Domain
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto my-5">
              <button className="rounded-full py-2 px-5 bg-gradient-to-r from-blue-900 to-cyan-500 hover:from-cyan-500 hover:to-blue-900 text-white">
                Download Now
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 py-3 my-3 flex flex-col bg-white border border-gray-200 rounded shadow">
            <div className="mx-auto my-8 py-2 px-1 border rounded-full border-gray-300">
              <h3 className="text-lg uppercase font-semibold px-3">
                Enterprise
              </h3>
            </div>
            <div className="mx-auto my-2">
              <span className="text-5xl">$ 39</span>
              <span className="text-gray-400"> /Per Month</span>
            </div>
            <div className="mx-auto my-2">
              <p className="text-green-400">Nam libero tempore amet.</p>
            </div>
            <div className="my-4">
              <div className="border border-gray-300 rounded p-3 w-2/3 mx-auto">
                <ul className="list-inside space-y-3 max-w-md text-gray-400">
                  <li className="flex items-center">
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />{" "}
                    Project:{" "}
                    <span className="text-black font-semibold">&nbsp; 30</span>
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />
                    Wordpress Theme
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />
                    Support:{" "}
                    <span className="text-black font-semibold">&nbsp;Yes</span>
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <CheckBadgeIcon className="w-4 h-4 mr-2 text-green-300" />
                    <span className="font-semibold text-black">Unlimited</span>
                    &nbsp; Domain
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto my-5">
              <button className="rounded-full py-2 px-5 bg-gradient-to-r from-blue-900 to-cyan-500 hover:from-cyan-500 hover:to-blue-900 text-white">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PriceSection;
