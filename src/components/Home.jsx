import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-teal-100">
      <div className="max-w-[1000px] mx-auto px-10 h-full flex flex-col justify-center">
        <p className="text-rose-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl text-teal-700 font-bold">Miłosz</h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-teal-500">
          I'm a dupa a nie Frontend Developer
        </h2>
        <p className="py-4 max-w-[700px] text-teal-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          enim natus deserunt eius expedita quod iure, unde facere possimus cum!
        </p>
        <div className="flex items-center justify-center">
          <button className="group flex items-center rounded-md bg-rose-500 text-rose-100 px-6 py-4 my-4 hover:text-teal-100 hover:bg-teal-500 hover:scale-125 duration-300 text-xl">
            My projects
            <span className="group-hover:rotate-90 duration-300">
              <FaArrowRight className="ml-2 text-xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
