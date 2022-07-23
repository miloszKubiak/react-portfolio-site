import React from "react";
import Css from "../assets/css.png";
import Git from "../assets/git.png";
import Html from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const images = [
  {
    id: 1,
    img: Html,
    title: "Html",
    color: "bg-orange-200",
    text: "text-orange-600",
    shadow: "shadow-orange-600",
  },
  {
    id: 2,
    img: Css,
    title: "Css",
    color: "bg-sky-200",
    text: "text-sky-600",
    shadow: "shadow-sky-600",
  },
  {
    id: 3,
    img: Tailwind,
    title: "Tailwind",
    color: "bg-teal-200",
    text: "text-teal-600",
    shadow: "shadow-teal-600",
  },
  {
    id: 4,
    img: Git,
    title: "Git",
    color: "bg-red-200",
    text: "text-red-600",
    shadow: "shadow-red-600",
  },
  {
    id: 5,
    img: JavaScript,
    title: "JavaScript",
    color: "bg-yellow-200",
    text: "text-yellow-600",
    shadow: "shadow-yellow-600",
  },
  {
    id: 6,
    img: ReactImg,
    title: "React",
    color: "bg-cyan-200",
    text: "text-cyan-600",
    shadow: "shadow-cyan-600",
  },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-gradient-to-br from-sky-300 to-emerald-400 text-slate-100">
      {/* main container */}
      <div className="w-full h-full max-w-[1000px] p-8 mx-auto flex flex-col justify-center">
        <div>
          <p className="inline text-4xl font-bold border-b-4 border-sky-500">
            Skills
          </p>
          <p className="py-6 text-lg">These are the technologies I work with the most :</p>
        </div>
        {/* elements container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-center">
          {images.map((item) => {
            const { id, img, title, color, text, shadow } = item;
            return (
              <div
                key={id}
                className={`shadow-md ${color} ${text} ${shadow} hover:scale-110 duration-500`}
              >
                <img
                  className="w-10 my-4 mx-auto"
                  src={img}
                  alt={`${title} icon`}
                />
                <p className="my-4 font-bold">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
