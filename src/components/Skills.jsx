import React from "react";
import Css from "../assets/css.png";
import Git from "../assets/git.png";
import Html from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const images = [
  { id: 1, img: Html, title: "Html" },
  { id: 2, img: Css, title: "Css" },
  { id: 3, img: Tailwind, title: "Tailwind" },
  { id: 4, img: Git, title: "Git" },
  { id: 5, img: JavaScript, title: "JavaScript" },
  { id: 6, img: ReactImg, title: "React" },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-teal-100 text-teal-500">
      {/* main container */}
      <div className="w-full h-full max-w-[1000px] p-4 mx-auto flex flex-col justify-center">
        <div>
          <p className="inline text-4xl font-bold border-b-4 border-rose-500">
            Skills
          </p>
          <p className="py-4">These are the technologies I have worked with:</p>
        </div>
        {/* elements container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center">
          {images.map((item) => {
            const { id, img, title } = item;
            return (
              <div
                key={id}
                className="shadow-md shadow-teal-700 hover:scale-110 duration-500"
              >
                <img
                  className="w-20 my-4 mx-auto"
                  src={img}
                  alt={`${title} icon`}
                />
                <p className="my-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
