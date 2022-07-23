import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-slate-100">
      <div className="max-w-[1000px] mx-auto px-10 h-full flex flex-col justify-center">
        <p className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-yellow-500">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-rose-600 to-yellow-300">
          Miłosz
        </h1>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-red-500">
          I'm a dupa a nie Frontend Developer
        </h2>
        <p className="py-6 max-w-[700px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-yellow-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          enim natus deserunt eius expedita quod iure, unde facere possimus cum!
        </p>
        <div className="flex items-center justify-center">
          <Link
            to="projects"
            className="group flex font-bold items-center rounded-md bg-gradient-to-br from-pink-400 to-red-600 text-slate-50 px-6 py-4 my-4 hover:scale-125 duration-300 text-xl cursor-pointer"
          >
            My projects
            <span className="group-hover:rotate-90 duration-500">
              <FaArrowRight className="ml-2 text-xl" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
