import React from "react";

import logo from "../logo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";

const NavHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-cyan-500 fixed left-0 top-0 flex flex-col sm:flex-row w-full border-b border-white w-full">
      <img src={logo} alt="logo" className="w-16 sm:w-32 lg:w-48" />
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="border border-white hover:bg-gray-600 rounded-full w-18 md:hidden"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="w-16 h-16 text-white" />
      </button>
      {/* TODO: Add code to handle toggle of menu in mobile view */}
      <nav
        id="navbar-default"
        className="hidden md:flex flex-col md:flex-row mt-auto sm:my-auto sm:w-11/12"
      >
        <div className="text-center lg:mr-auto">
          <a
            href="/"
            className="text-white block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-white hover:bg-opacity-40"
          >
            Home
          </a>
          <a
            href="/services"
            className="text-white block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-white hover:bg-opacity-40"
          >
            Services
          </a>
          <a
            href="/features"
            className="text-white block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-white hover:bg-opacity-40"
          >
            Features
          </a>
          <a
            href="/client"
            className="text-white block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-white hover:bg-opacity-40"
          >
            Client
          </a>
          <a
            href="/price"
            className="text-white block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-white hover:bg-opacity-40"
          >
            Price
          </a>
          <a
            href="/download"
            className="text-white block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-white hover:bg-opacity-40"
          >
            Download
          </a>
        </div>
        <div className="text-center lg:mx-5">
          <a
            href="/login"
            className="text-white block md:inline sm:px-3 lg:px-5 sm:py-2 xl:mx-2 sm:rounded-full"
          >
            Log In
          </a>
          <a
            href="/signup"
            className="text-white block md:inline sm:px-1 md:px-3 lg:px-5 md:py-2 xl:mx-2 sm:rounded-full sm:bg-white sm:bg-opacity-40"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavHeader;
