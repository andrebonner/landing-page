import React from "react";
import logo from "../logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import google_plus from "../assets/google-plus.svg";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
const SiteFooter = () => {
  return (
    <footer className="w-auto h-auto bg-gray-100 py-10">
      <div className="flex flex-col md:flex-row w-11/12 mx-auto">
        <div className="w-auto md:w-1/3 my-3">
          <img src={logo} alt="" className="w-16 sm:w-32 lg:w-48" />
          <p className="text-gray-300">
            We show only the best websites, portfolios and landing pages Built
            Completely With Passion, Simplicity & Creativity !
          </p>
          <p className="text-gray-300">
            2022 &copy;{" "}
            <span className="text-black font-semibold">TechZenth.</span> Design
            by Andre.
          </p>
        </div>
        <div className="w-auto md:w-1/3 flex my-3">
          <div className="w-1/2">
            <h3 className="text-lg">About</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Client</a>
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-lg">Support</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>
                <a href="/">Help &amp; Support</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-auto md:w-1/3 my-3">
          <h3 className="text-xl">Subscribe to Get Updates</h3>
          <div className="relative mt-3">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <ChevronRightIcon className=" w-4 h-4" />
            </div>
            <input
              type="email"
              className="rounded-full p-3 block w-full"
              placeholder="Email"
            />
          </div>
          <h3 className="text-xl mt-3">Follow Us</h3>
          <div className="flex space-x-3 mt-3">
            <a href="/" className="w-auto rounded-full p-2 bg-green-300">
              <img src={facebook} alt="" className="w-4 h-4" />
            </a>
            <a href="/" className="w-auto rounded-full p-2 bg-green-300">
              <img src={twitter} alt="" className="w-4 h-4" />
            </a>{" "}
            <a href="/" className="w-auto rounded-full p-2 bg-green-300">
              <img src={linkedin} alt="" className="w-4 h-4" />
            </a>{" "}
            <a href="/" className="w-auto rounded-full p-2 bg-green-300">
              <img src={google_plus} alt="" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
