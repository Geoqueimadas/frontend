import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
    className="h-screen bg-hero flex justify-center items-center"
    id="home"
  >
    <section className="flex  text-white">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          <span className="text-red-main">Sistema</span> para o <br />{" "}
          <span className="text-red-main">controle</span>
          <br />
          de 
          <span className="text-red-main"> queimadas</span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-xl">
          Juntos, podemos mudar o mundo!
        </p>
        <div className="flex flex-wrap justify-center">
          <Link
            to="formulario"
            spy={true}
            smooth={true}
            offset={20}
            duration={700}
          >
            <button
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-red-main text-white hover:bg-black transition 
          ease-in duration-1000"
            >
              Vamos lá
            </button>
          </Link>
          <button className="px-8 py-3 m-2 text-lg border rounded text-white border-red-main">
            Leia mais
          </button>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home