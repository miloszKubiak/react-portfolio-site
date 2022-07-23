import React from "react";
import cocktails from "../assets/cocktails.jpg";
import hackerNews from "../assets/hackerNews.jpg";
import movieDb from "../assets/movieDb.jpg";
import quizzly from "../assets/quizzly.jpg";
import reactPhotos from "../assets/reactPhotos.jpg";
import shoppingList from "../assets/shoppingList.jpg";

const projects = [
  {
    id: 1,
    img: cocktails,
    title: "Cocktails App",
    url: "https://www.google.pl/",
    githubLink: "https://github.com/miloszKubiak/cocktails-finder",
  },
  {
    id: 2,
    img: hackerNews,
    title: "Hacker News Clone",
    url: "https://www.google.pl/",
    githubLink: "https://github.com/miloszKubiak/hacker-news-clone",
  },
  {
    id: 3,
    img: movieDb,
    title: "Movie DB",
    url: "https://www.google.pl/",
    githubLink: "https://github.com/miloszKubiak/movie-db",
  },
  {
    id: 4,
    img: quizzly,
    title: "Quizzly",
    url: "https://www.google.pl/",
    githubLink: "https://github.com/miloszKubiak/quizzly",
  },
  {
    id: 5,
    img: reactPhotos,
    title: "React Photos",
    url: "https://www.google.pl/",
    githubLink: "https://github.com/miloszKubiak/react-photos",
  },
  {
    id: 6,
    img: shoppingList,
    title: "Shopping List",
    url: "https://www.google.pl/",
    githubLink: "https://github.com/miloszKubiak/shopping-list-app",
  },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen py-8 bg-gradient-to-br from-teal-500 to-amber-200 text-slate-100"
    >
      <div className="w-full h-full mx-auto p-8 max-w-[1000px] flex flex-col justify-center">
        <div className="pb-8">
          <p className="inline font-bold text-4xl border-b-4 border-teal-700 text-teal-100">
            Projects
          </p>
          <p className="py-6 text-lg">Check out some of my projects:</p>
        </div>
        {/* card container */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* card item */}
          {projects.map((project) => {
            const { id, img, title, url, githubLink } = project;
            return (
              <div
                key={id}
                className="card-item group container shadow-md rounded-md shadow-emerald-500 mx-auto flex justify-center items-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="h-full w-full flex flex-col justify-center text-center opacity-0 hover:opacity-100 duration-300">
                  <span className="font-bold text-lg mt-2 text-slate-50 tracking-wider">
                    {title}
                  </span>
                  <div className="text-center pt-6 mb-2">
                    <a href={`${url}`} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-md px-2 py-2 m-2 w-[30%] text-lg font-bold text-slate-100 bg-emerald-700 hover:bg-emerald-500 hover:scale-110 duration-300">
                        Demo
                      </button>
                    </a>
                    <a href={`${githubLink}`} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-md px-2 py-2 m-2 w-[30%] text-lg font-bold text-slate-100 bg-emerald-700 hover:bg-emerald-500 hover:scale-110 duration-300">
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
