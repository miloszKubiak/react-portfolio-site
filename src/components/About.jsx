import React from "react";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full p-8 flex flex-col justify-center items-center bg-gradient-to-br from-indigo-300 to-sky-400 text-slate-100"
    >
      {/* header container */}
      <div className="w-full max-w-[1000px] flex">
        <div className="pb-8 pl-4 sm:text-right">
          <p className="font-bold text-left text-4xl p-2 border-b-4 border-indigo-500">
            About
          </p>
        </div>
      </div>
      {/* info container */}
      <div className="w-full max-w-[1000px] mx-auto py-2 mt-2 px-4 grid sm:grid-cols-2 gap-2">
        <img src={avatar} alt="author image" />
        <div className="sm:text-left mt-4 ml-4">
          <p className="text-4xl font-bold">
            My name is Miłosz and i'm from Poland.
          </p>
          <br />
          <p className="text-lg">
            I am a computer science student and I am currently at the stage of
            writing an engineering thesis. I am mainly interested in the frontend, but I also had a little bit of work with the backend. I'm currently learning React and want to learn TypeScript in the near future.
            In my free time (of which there is very, very little🤣) I like playing video games, especially RPGs like the Witcher 3, Cyberpunk 2077 or World of Warcraft.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
