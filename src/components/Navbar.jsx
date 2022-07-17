import { useState } from "react";
import Logo from "../assets/logo.png";
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
    <div className="fixed w-full h-[6rem] flex justify-between items-center px-5 bg-rose-500 text-slate-100 text-lg z-10">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" className="cursor-pointer w-16" />
        </Link>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex mr-20">
        {links.map((link, index) => {
          return (
            <li key={index}>
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
        className="md:hidden z-10 text-2xl cursor-pointer"
      >
        {!navbar ? (
          <FaBars className="hover:text-teal-300 duration-300" />
        ) : (
          <FaTimes className="hover:text-teal-300 duration-300" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 h-screen w-full bg-rose-500 text-slate-100 flex flex-col justify-center items-center"
        }
      >
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className="py-5 text-4xl hover:text-teal-300 duration-300"
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
      <div className="hidden fixed lg:flex flex-col top-[40%] left-0">
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
      </div>
    </div>
  );
};

export default Navbar;
