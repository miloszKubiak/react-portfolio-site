import { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links = ["about", "projects", "contact"];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="fixed w-full h-[6rem] flex justify-between items-center px-5 bg-[#008080] text-gray-400 font-medium">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "4rem" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        {links.map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
      </ul>

      {/* Burger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 h-screen w-full bg-[#a52a2a] text-gray-400 flex flex-col justify-center items-center"
        }
      >
        {links.map((link, index) => {
          return (
            <li key={index} className="py-5 text-4xl">
              {link}
            </li>
          );
        })}
      </ul>

      {/* Social icons */}
      <div className="fixed flex flex-col top-[40%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Linkedin <FaLinkedin size={35} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
