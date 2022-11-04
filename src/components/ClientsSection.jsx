import React, { useState } from "react";
import three_dots from "../assets/three-dots.svg";
import brackets_angle_bold from "../assets/brackets-angle-bold.svg";
import paper from "../assets/paper.svg";
import dot_circle from "../assets/dot-circle.svg";
import chat from "../assets/chat.svg";
import stars from "../assets/stars.svg";
import users from "../assets/users.svg";
import design_components from "../assets/design-components.svg";
import scientist from "../assets/scientist.svg";
import progressive_app from "../assets/progressive-app.svg";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const ClientsSection = () => {
  const [accordion, setAccordion] = useState(0);

  const toggleState = (index) => {
    if (accordion !== index) {
      setAccordion(index);
    } else {
      setAccordion(false);
    }
    console.log("accordion", accordion, "index", index);
  };

  return (
    <section className="w-auto h-auto">
      <article className="flex flex-col md:w-9/12 mx-auto items-center my-3">
        <div className="w-11/12 mx-auto md:w-5/12 flex flex-col items-center my-10">
          <img src={three_dots} className="w-8 md:w-16 md:h-16" alt="" />
          <h2 className="text-3xl mt-3 text-center font-semibold">
            How does It Work?
          </h2>
          <p className="text-gray-300 text-center">
            We show only the best websites, portfolios and landing pages built
            completely with passion, simplicity & creativity !
          </p>
        </div>
        <div className="w-auto md:w-11/12 ">
          <div className="w-11/12 mx-auto flex flex-col md:flex-row">
            <div className="w-11/12 md:w-1/2 mx-auto border-l border-gray-200 md:border-l-0 ">
              <div className="w-11/12 mx-auto mt-3 p-4 flex flex-col items-center rounded border border-gray-200">
                <img
                  src={brackets_angle_bold}
                  alt=""
                  className="w-8 md:w-16 md:h-16"
                />
                <h2 className="text-3xl font-semibold text-center mt-3">
                  Design &amp; Developing
                </h2>
                <p className="text-gray-300 text-center mt-3">
                  Sollicitudin condimentum augue vitae rutrum odio pulvinar est
                  conubia vehicula. a in urna commodo. Fermentum luctus
                  parturient lacinia tempus porttitor.
                </p>
              </div>
            </div>
            <div className="w-11/12 md:w-1/2 mx-auto relative border-l border-gray-200">
              <img
                src={dot_circle}
                className="absolute w-4 h-4 mt-1.5 -left-2"
                alt=""
              />
              <div className="w-11/12 p-4 mx-auto flex flex-col items-center">
                <img src={design_components} alt="" className="" />
              </div>
            </div>
          </div>
          <div className="w-11/12 mx-auto flex flex-col md:flex-row">
            <div className="w-11/12 md:w-1/2 mx-auto">
              <div className="w-auto md:w-11/12 mt-3 p-4 flex flex-col items-center border-l border-gray-200 md:border-l-0">
                <img src={scientist} alt="" className="mx-h-fit" />
              </div>
            </div>
            <div className="w-11/12 md:w-1/2 mx-auto relative border-l border-gray-200">
              <img
                src={dot_circle}
                className="absolute w-4 h-4 mt-1.5 -left-2"
                alt=""
              />
              <div className="w-11/12 p-4 mx-auto flex flex-col items-center border border-gray-200">
                <img src={paper} alt="" className="w-8 md:w-16 md:h-16" />
                <h2 className="text-3xl font-semibold text-center mt-3">
                  Testing Project
                </h2>
                <p className="text-gray-300 text-center mt-3">
                  Ut pellentesque nisi cubilia nullam velit aenean Tristique
                  fusce suscipit metus gravida velit tempor pellentesque
                  eleifend primis suscipit cubilia magnis montes Mus non dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="w-11/12 mx-auto flex flex-col md:flex-row">
            <div className="w-11/12 md:w-1/2 mx-auto border-l border-gray-200 md:border-l-0">
              <div className="w-11/12 mt-3 p-4 mx-auto flex flex-col items-center rounded border border-gray-200">
                <img src={paper} alt="" className="w-8 md:w-16 md:h-16" />
                <h2 className="text-3xl font-semibold text-center mt-3">
                  Publish Project
                </h2>
                <p className="text-gray-300 text-center mt-3">
                  Ut pellentesque nisi cubilia nullam velit aenean Tristique
                  fusce suscipit metus gravida velit tempor pellentesque
                  eleifend primis suscipit cubilia magnis montes Mus non dolor.
                </p>
              </div>
            </div>
            <div className="w-11/12 md:w-1/2 mx-auto relative border-l border-gray-200">
              <img
                src={dot_circle}
                className="absolute w-4 h-4 mt-1.5 -left-2"
                alt=""
              />
              <div className="w-auto md:w-11/12 p-4 flex flex-col items-center">
                <img src={progressive_app} alt="" className="mx-h-fit" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="w-100 bg-gradient-to-r from-blue-900 to-cyan-500 p-5">
        <div className="w-11/12 mx-auto md:w-5/12 flex flex-col items-center my-10">
          <img src={users} className="w-8 md:w-16 md:h-16" alt="" />
          <h2 className="text-3xl mt-3 text-white text-center font-semibold">
            What our customers say?
          </h2>
          <p className="text-white mt-3 text-center">
            We show only the best websites, portfolios and landing pages built
            completely with passion, simplicity & creativity !
          </p>
        </div>
        <div className="w-11/12 mx-auto flex md:flex-row flex-col">
          <div className="w-full md:w-1/3 flex flex-col items-center mx-auto md:mx-4 my-4">
            <div className="w-auto rounded bg-white p-8">
              <p className="text-gray-300 text-center">
                " It is a long estblished fact that a reader will be Habitasse
                dictum natoque condimentum praesent."
              </p>
            </div>
            <div className="w-auto flex flex-col items-center">
              <div className="bg-green-400 rounded-full w-2 h-2 my-1"></div>
              <div className="bg-green-400 rounded-full w-4 h-4 my-1"></div>
              <div className="bg-white rounded-full w-16 h-16 p-1 my-1">
                <img
                  src="https://via.placeholder.com/100.png/000/fff"
                  className="max-w-content rounded-full"
                  alt=""
                />
              </div>
              <h3 className="text-lg text-white">Adorne Brenn</h3>
              <h5 className="text-md text-gray-300">- User</h5>
              <img src={stars} alt="" className="h-8" />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center mx-auto md:mx-4 my-4">
            <div className="w-auto rounded bg-white p-8">
              <p className="text-gray-300 text-center">
                " It is a long estblished fact that a reader will be Habitasse
                dictum natoque condimentum praesent."
              </p>
            </div>
            <div className="w-auto flex flex-col items-center">
              <div className="bg-green-400 rounded-full w-2 h-2 my-1"></div>
              <div className="bg-green-400 rounded-full w-4 h-4 my-1"></div>
              <div className="bg-white rounded-full w-16 h-16 p-1 my-1">
                <img
                  src="https://via.placeholder.com/100.png/000/fff"
                  className="max-w-content rounded-full"
                  alt=""
                />
              </div>
              <h3 className="text-lg text-white">Adorne Brenn</h3>
              <h5 className="text-md text-gray-300">- User</h5>
              <img src={stars} alt="" className="h-8" />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center mx-auto md:mx-4 my-4">
            <div className="w-auto rounded bg-white p-8">
              <p className="text-gray-300 text-center">
                " It is a long estblished fact that a reader will be Habitasse
                dictum natoque condimentum praesent."
              </p>
            </div>
            <div className="w-auto flex flex-col items-center">
              <div className="bg-green-400 rounded-full w-2 h-2 my-1"></div>
              <div className="bg-green-400 rounded-full w-4 h-4 my-1"></div>
              <div className="bg-white rounded-full w-16 h-16 p-1 my-1">
                <img
                  src="https://via.placeholder.com/100.png/000/fff"
                  className="max-w-content rounded-full"
                  alt=""
                />
              </div>
              <h3 className="text-lg text-white">Adorne Brenn</h3>
              <h5 className="text-md text-gray-300">- User</h5>
              <img src={stars} alt="" className="h-8" />
            </div>
          </div>
        </div>
      </article>
      <article className="flex flex-col md:w-9/12 mx-auto items-center my-3">
        <div className="w-11/12 mx-auto md:w-5/12 flex flex-col items-center my-10">
          <img src={chat} className="w-8 md:w-16 md:h-16" alt="" />
          <h2 className="text-3xl mt-3 text-center font-semibold">
            Popular FAQs
          </h2>
          <p className="text-gray-300 text-center">
            We show only the best websites, portfolios and landing pages built
            completely with passion, simplicity & creativity !
          </p>
        </div>
        <div className="w-11/12 md:w-8/12 mx-auto flex flex-col items-center my-2">
          <div className="w-full flex flex-col border border-gray-200 my-2 shadow-sm">
            <div
              className={
                "w-full flex bg-gray-200 p-3 items-center cursor-pointer" +
                (accordion === 0 ? " text-green-600" : "")
              }
              onClick={() => {
                toggleState(0);
              }}
            >
              <h4 className="mr-auto font-semibold">
                What does royalty free mean?
              </h4>
              {accordion === 0 ? (
                <PlusIcon className="w-4 h-4" />
              ) : (
                <MinusIcon className="w-4 h-4" />
              )}
            </div>
            <div className={"w-full p-3 " + (accordion === 0 ? "" : " hidden")}>
              <p className="text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col border border-gray-200 my-2 shadow-sm">
            <div
              className={
                "w-full flex bg-gray-200 p-3 items-center cursor-pointer" +
                (accordion === 1 ? " text-green-600" : "")
              }
              onClick={() => {
                toggleState(1);
              }}
            >
              <h4 className="mr-auto font-semibold">
                What do you mean by item and end product?
              </h4>
              {accordion === 1 ? (
                <PlusIcon className="w-4 h-4" />
              ) : (
                <MinusIcon className="w-4 h-4" />
              )}
            </div>
            <div className={"w-full p-3 " + (accordion === 1 ? "" : " hidden")}>
              <p className="text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col border border-gray-200 my-2 shadow-sm">
            <div
              className={
                "w-full flex bg-gray-200 p-3 items-center cursor-pointer" +
                (accordion === 2 ? " text-green-600" : "")
              }
              onClick={() => {
                toggleState(2);
              }}
            >
              <h4 className="mr-auto font-semibold">
                What are some examples of permitted end products?
              </h4>
              {accordion === 2 ? (
                <PlusIcon className="w-4 h-4" />
              ) : (
                <MinusIcon className="w-4 h-4" />
              )}
            </div>
            <div className={"w-full p-3 " + (accordion === 2 ? "" : " hidden")}>
              <p className="text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col border border-gray-200 my-2 shadow-sm">
            <div
              className={
                "w-full flex bg-gray-200 p-3 items-center cursor-pointer" +
                (accordion === 3 ? " text-green-600" : "")
              }
              onClick={() => {
                toggleState(3);
              }}
            >
              <h4 className="mr-auto font-semibold">
                Am I allowed to modify the item I have purchased?
              </h4>
              {accordion === 3 ? (
                <PlusIcon className="w-4 h-4" />
              ) : (
                <MinusIcon className="w-4 h-4" />
              )}
            </div>
            <div className={"w-full p-3 " + (accordion === 3 ? "" : " hidden")}>
              <p className="text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col border border-gray-200 my-2 shadow-sm">
            <div
              className={
                "w-full flex bg-gray-200 p-3 items-center cursor-pointer" +
                (accordion === 4 ? " text-green-600" : "")
              }
              onClick={() => {
                toggleState(4);
              }}
            >
              <h4 className="mr-auto font-semibold">
                I'm not sure my use is covered. What should I do?
              </h4>
              {accordion === 4 ? (
                <PlusIcon className="w-4 h-4" />
              ) : (
                <MinusIcon className="w-4 h-4" />
              )}
            </div>
            <div className={"w-full p-3 " + (accordion === 4 ? "" : " hidden")}>
              <p className="text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ClientsSection;
