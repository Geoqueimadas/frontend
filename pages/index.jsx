import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Formulario from "../components/Formulario/Formulario"
import Grafico from "../components/Grafico/Grafico"
import TextContent from "../components/TextContent/TextContent"
import Contato from "../components/Contato/Contato"
import Footer from "../components/Layout/Footer/Footer"

function HomePage() {
  return (
    
  <>
  <Navbar/>
  <Home/>
  <Formulario/>
  <Grafico/>
  <TextContent/>
  <Contato/>
  <Footer/>
  </>

  )
}

export default HomePage