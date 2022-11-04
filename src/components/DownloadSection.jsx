import React from "react";
import credit_card from "../assets/credit-card.svg";

const DownloadSection = () => {
  return (
    <section className="w-auto h-auto">
      <article className="flex flex-col w-9/12 mx-auto">
        <div className="w-auto md:w-7/12 flex flex-col items-center justify-center my-10 mx-auto">
          <img src={credit_card} className="w-8 md:w-16 md:h-16" alt="" />
          <h2 className="text-3xl text-center font-semibold">
            Start Your Free Trial No Credit Card Required
          </h2>
          <p className="text-gray-300 text-center my-4 leading-relaxed">
            We show only the best websites, portfolios and landing pages built
            completely with passion, simplicity & creativity !
          </p>
        </div>
        <div className="w-full md:w-9/12 mx-auto my-10">
          <div className="rounded bg-gray-100 shadow w-auto md:w-1/2 mx-auto">
            <form className="flex flex-col p-5">
              <input
                className="my-2 p-3 focus:border-green-300 rounded"
                type="text"
                placeholder="Your name..."
              />
              <input
                className="my-2 p-3 focus:border-green-300 rounded"
                type="email"
                placeholder="Your email..."
              />
              <textarea
                className="my-2 p-3 focus:border-green-300 rounded"
                type="text"
                rows="4"
                placeholder="Your message..."
              />
              <button
                className="my-2 p-3 bg-gradient-to-r from-blue-900 to-cyan-500 text-white hover:from-cyan-500 hover:to-blue-900 uppercase rounded"
                type="submit"
              >
                Sign up For Free
              </button>
              <label className="p-3 text-center">
                30 Day Trial.{" "}
                <span className="uppercase text-green-300">Free</span> Account
                Creation
              </label>
            </form>{" "}
          </div>
        </div>
      </article>
    </section>
  );
};

export default DownloadSection;
