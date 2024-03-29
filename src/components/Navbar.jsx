import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-scroll";

const links = ["about", "skills", "projects", "contact"];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="fixed z-50 w-full h-[6rem] flex justify-between items-center px-5 bg-gradient-to-br from-gray-200 to-slate-200">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-pink-700 cursor-pointer">{`<milosh />`}</h1>
        </Link>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex mr-20">
        {links.map((link, index) => {
          return (
            <li key={index} className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-amber-500 hover:scale-110 hover:text-rose-400 duration-300">
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Burger menu */}
      <div
        onClick={handleClick}
        className="md:hidden z-50 text-4xl cursor-pointer"
      >
        {!navbar ? (
          <FaBars className="text-rose-400 hover:text-rose-300 hover:scale-110 duration-300" />
        ) : (
          <FaTimes className="text-slate-100 hover:text-rose-200 hover:scale-110 duration-300" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 h-screen w-full bg-gradient-to-br from-pink-400 to-red-600 text-slate-100 flex flex-col justify-center items-center"
        }
      >
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className="py-5 text-4xl font-bold hover:scale-110 hover:text-rose-200 duration-300"
            >
              <Link
                onClick={handleClick}
                to={link}
                smooth={true}
                duration={500}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Social icons */}
      {/* <div className="hidden fixed lg:flex flex-col top-[40%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-slate-100"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={35} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-slate-100"
              href="https://github.com/miloszKubiak"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={35} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-300">
            <Link
              to="contact"
              offset={-80}
              className="flex justify-between items-center w-full text-slate-100"
            >
              E-mail <AiOutlineMail size={35} />
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
