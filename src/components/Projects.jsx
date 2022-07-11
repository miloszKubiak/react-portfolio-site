import React from "react";
import Project1Img from "../assets/project1.jpg";
import Project2Img from "../assets/project2.jpg";
import Project3Img from "../assets/project3.jpg";

const projects = [
  {
    id: 1,
    img: Project1Img,
    title: "React app",
    url: "https://www.google.pl/",
    githubLink: "https://github.com/",
  },
  {
    id: 2,
    img: Project2Img,
    title: "Vue app",
    url: "https://www.google.pl/",
    githubLink: "https://github.com/",
  },
  {
    id: 3,
    img: Project3Img,
    title: "Angular app",
    url: "https://www.google.pl/",
    githubLink: "https://github.com/",
  },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-teal-500 text-teal-100"
    >
      <div className="w-full h-full mx-auto p-8 max-w-[1000px] flex flex-col justify-center">
        <div className="pb-8">
          <p className="inline font-bold text-4xl border-b-4 border-rose-500 text-teal-100">
            Projects
          </p>
          <p className="py-6">Check out some of my projects:</p>
        </div>
        {/* card container */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* card item */}
          {projects.map((project) => {
            const { id, img, title, url, githubLink } = project;
            return (
              <div
                key={id}
                className="card-item group container shadow-md rounded-md shadow-rose-500 mx-auto flex justify-center items-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="h-full w-full flex flex-col justify-center text-center opacity-0 hover:opacity-100 duration-300">
                  <span className="font-bold text-2xl text-slate-100 tracking-wider">
                    {title}
                  </span>
                  <div className="text-center pt-6">
                    <a href={`${url}`} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-md px-2 py-2 m-2 w-[30%] text-lg font-bold text-slate-100 bg-teal-500 ">
                        Demo
                      </button>
                    </a>
                    <a href={`${githubLink}`} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-md px-2 py-2 m-2 w-[30%] text-lg font-bold text-slate-100 bg-teal-500 ">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
