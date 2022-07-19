import React from "react";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full p-8 flex flex-col justify-center items-center bg-teal-500 text-teal-100"
    >
      {/* header container */}
      <div className="w-full max-w-[1000px] grid grid-cols-2 gap-8">
        <div className="pb-8 pl-4 sm:text-right">
          <p className="inline font-bold text-4xl border-b-4 border-rose-500">
            About
          </p>
        </div>
      </div>
      {/* info container */}
      <div className="w-full max-w-[1000px] mx-auto py-2 mt-2 px-4 grid sm:grid-cols-2 gap-2">
        <img className="" src={avatar} alt="author image" />
        <div className="sm:text-left mt-4">
          <p className="text-4xl font-bold">
            Hi. I'm Miłosz, nice to meet you. Please take a look around.
          </p>
          <br />
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium laudantium excepturi, fuga, similique illum ad minima
            accusantium alias vero fugiat facere eos nam nisi necessitatibus.
            Quod nisi earum ratione dolores doloremque labore vel nam ipsum
            tempora cupiditate! In, harum mollitia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
