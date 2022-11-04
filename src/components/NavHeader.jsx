import React, { useState, useEffect } from "react";

import logo from "../logo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";

const NavHeader = () => {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const listenScrollHeader = () => {
    if (window.scrollY === 0) {
      setScroll(false);
    } else {
      setScroll(true);
    }
    console.log("scroll", scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollHeader);

    return () => {
      window.removeEventListener("scroll", listenScrollHeader);
    };
  });

  return (
    <header
      className={
        "sticky z-10 left-0 top-0 py-2 flex flex-wrap md:flex-nowrap w-full w-full border-b" +
        (scroll
          ? " bg-white border-gray-600 shadow"
          : " bg-gradient-to-r from-blue-900 to-cyan-500 border-white")
      }
    >
      <img
        src={logo}
        alt="logo"
        className={
          "mr-auto" +
          (scroll ? " w-8 sm:w-16 lg:w-32" : " w-16 sm:w-32 lg:w-48")
        }
      />
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className={
          "rounded-full w-18 md:hidden border" +
          (scroll ? " border-gray-600" : " border-white")
        }
        onClick={() => toggleMenu()}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon
          className={"w-8 h-8" + (scroll ? " text-black" : " text-white")}
        />
      </button>
      {/* TODO: Add code to handle toggle of menu in mobile view */}
      <nav
        id="navbar-default"
        className={
          "md:flex flex-col md:flex-row mt-auto w-full sm:my-auto sm:w-11/12" +
          (!menu ? " hidden" : "")
        }
      >
        <div className="text-center lg:mr-auto">
          <a
            href="/"
            className={
              "block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-opacity-40" +
              (scroll
                ? " text-gray-500 hover:bg-green-500"
                : " text-white hover:bg-white")
            }
          >
            Home
          </a>
          <a
            href="/services"
            className={
              "block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-opacity-40" +
              (scroll
                ? " text-gray-500 hover:bg-green-500"
                : " text-white hover:bg-white")
            }
          >
            Services
          </a>
          <a
            href="/features"
            className={
              "block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-opacity-40" +
              (scroll
                ? " text-gray-500 hover:bg-green-500"
                : " text-white hover:bg-white")
            }
          >
            Features
          </a>
          <a
            href="/client"
            className={
              "block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-opacity-40" +
              (scroll
                ? " text-gray-500 hover:bg-green-500"
                : " text-white hover:bg-white")
            }
          >
            Client
          </a>
          <a
            href="/price"
            className={
              "block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-opacity-40" +
              (scroll
                ? " text-gray-500 hover:bg-green-500"
                : " text-white hover:bg-white")
            }
          >
            Price
          </a>
          <a
            href="/download"
            className={
              "block md:inline sm:px-5 sm:py-2 sm:mx-2 hover:rounded-full hover:bg-opacity-40" +
              (scroll
                ? " text-gray-500 hover:bg-green-500"
                : " text-white hover:bg-white")
            }
          >
            Download
          </a>
        </div>
        <div className="text-center lg:mx-5">
          <a
            href="/login"
            className={
              "block md:inline sm:px-3 lg:px-5 sm:py-2 xl:mx-2 sm:rounded-full" +
              (scroll ? " text-gray-500" : " text-white")
            }
          >
            Log In
          </a>
          <a
            href="/signup"
            className={
              "block md:inline sm:px-1 md:px-3 lg:px-5 md:py-2 xl:mx-2 sm:rounded-full sm:bg-opacity-40" +
              (scroll
                ? " text-gray-500 sm:bg-green-500"
                : " text-white sm:bg-white")
            }
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavHeader;
