import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa"
import { useLocation } from "react-router-dom"

const Footer = () => {
  const path = useLocation().pathname
  const style = path !== "/about" ? "footer" : "about"

  return (
    <div className={`${style}`}>
      <div className="cont">
        <h3>About</h3>
        <p>Este es un proyecto de practica usando HTML, CSS, JAVASCRIPT y REACT con la API de jikan.moe</p>
      </div>
      <div className="site">
        <h3>Sites</h3>
        <div className="icon">
          <FaFacebook />
          <FaInstagram />
          <FaWhatsapp />
          <FaGithub />
        </div>
      </div>
    </div>
  )
}


export default Footer
