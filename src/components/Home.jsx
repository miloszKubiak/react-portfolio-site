import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-br from-slate-100 to-gray-200"
    >
      <div className="max-w-[1000px] mx-auto px-10 h-full flex flex-col justify-center">
        <div className="mt-20 flex">
          <p className="font-bold mt-10 text-6xl text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-yellow-500">
            Hello
          </p>
          <span className="text-8xl animate-wave">👋</span>
        </div>
        <h1 className="mt-2 text-4xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-600 to-yellow-300">
          I'm Miłosz, nice to meet you.
        </h1>
        <h2 className="mt-2 text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-red-500">
          Please take look around.
        </h2>
        {/* <p className="py-6 max-w-[700px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-fuchsia-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          enim natus deserunt eius expedita quod iure, unde facere possimus cum!
        </p> */}
        <div className="flex items-center justify-center mt-6">
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
