import SocialMedia from "../../../components/Layout/Contato/Social_Media";
import Btn_Footer from "../../../components/Layout/Form/BtnSubmit";
import Li from "../../Navbar/LiNavbar";
import logo from "../../../public/img/logo.svg"
import LinkNext from "next/link";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>

<footer className="bg-white mt-32">
        <div className="py-16 lg:px-32 px-10 lg:py-24">
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="flex-col ">
            <LinkNext href="/">
        <img
          className="md:w-60 w-40 ml-0 cursor-pointer  "
          src={logo.src}
          alt="GeoQueimadas"
        />
      </LinkNext>

              <SocialMedia customClass="text-red-main mb-8" />

              <h1 className="text-red-main font-bold text-2xl mb-5">
              GeoQueimadas | Solução para queimadas{" "}
              </h1>
              <p className="text-red-main text-sm w-8/12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique natus praesentium nobis doloribus fugit ducimus beatae
                sint distinctio numquam, quia, minima vel neque totam iste
                temporibus voluptates, optio consequatur perferendis!
              </p>

              <h1 className="mt-10 font-bold text-red-main text-lg mb-5">
                | Navegação
              </h1>
              <ul className="border-l-2 border-solid border-red-main pl-4">
           
            <li className="md:mr-8 md:mb-0 mb-4 cursor-pointer text-white md:text-black"> 
            <Link className="md:hover:text-red-main transition 
            ease-out duration-500"
            to="home"
            spy={true}
            smooth={true}
            offset={-120}
            duration={700}
          >
            Home
             </Link>
            </li>
           

            <li className="md:mr-8 md:mb-0 mb-4 cursor-pointer text-white md:text-black"> 
            <Link className="md:hover:text-red-main transition 
            ease-out duration-500"
            to="formulario"
            spy={true}
            smooth={true}
            offset={-120}
            duration={700}
          >
            Formulário
             </Link>
            </li>
           

            <li className="md:mr-8 md:mb-0 mb-4 cursor-pointer text-white md:text-black"> 
            <Link className="md:hover:text-red-main transition 
            ease-out duration-500"
            to="contato"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Contato
             </Link>
            </li>
           
              </ul>
              <h2 className="mt-12 lg:mb-0 mb-6 text-red-main text-md font-bold">
                Segunda a Sexta: 08h às 18h
              </h2>
            </div>

            <div className="flex-col w-full">
              <Btn_Footer
                name="Cadastre-se"
                href=""
                customClass="text-white mt-0"
                type="submit"
              />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.801729730726!2d-47.40299878549656!3d-20.51435256204209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a650b08ae237%3A0x968952e186d11097!2sR.%20Ir%C3%AAnio%20Greco%2C%204607%20-%20Parque%20Sao%20Jorge%2C%20Franca%20-%20SP%2C%2014405-191!5e0!3m2!1spt-BR!2sbr!4v1664740075111!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg h-3/4 w-full mt-14"
            ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-16  bg-red-main text-white">
          <div className="p-12 flex justify-between">
            <h1>
              <span className="uppercase font-bold text-xl">
                Equipe GeoQueimadas&nbsp;
              </span>
              &#169; 2022. Todos os direitos reservados
            </h1>
           
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer