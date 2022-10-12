import Link from "next/link";

import logo from "../../public/img/logo.svg"

import { FaBars } from "react-icons/fa";

import { useRef } from "react";

import LiNavbar from "./LiNavbar";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="w-full flex justify-between items-center h-auto bg-white px-6 py-3 sticky top-0 border-b border-gray-200 ">
      <Link href="/">
        <img
          className="md:w-44 w-40 cursor-pointer "
          src={logo.src}
          alt="GeoQueimadas"
        />
      </Link>

      <nav className=" md:bg-white bg-red-main" ref={navRef}>
        <ul className="md:flex inline list-none items-center">
          <LiNavbar name="Home" to="home" />
          <LiNavbar name="Formulário" to="formulario" />
          <LiNavbar name="Contato" to="contato" />
          <LiNavbar name="Entrar" to="login" />
          <li className="md:mr-8 cursor-pointer">
            <Link
              className="md:hover:text-red-main transition 
            ease-out duration-500"
              href="contato"
            >
              <button
                className="md:px-5 md:py-2 md:m-2 md:text-lg md:font-semibold md:rounded md:bg-red-main text-white md:hover:bg-black transition 
            ease-in duration-1000"
              >
                Cadastrar-se
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="nav_btn text-red-main transition 
            ease-out duration-500"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
