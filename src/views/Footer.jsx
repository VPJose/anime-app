import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <h3>About</h3>
        <p>Este es un proyecto de practica usando HTML, CSS, JAVASCRIPT y REACT con la API de jikan.moe</p>
      </div>
      <div className="footer-site">
        <h3>Site</h3>
        <div className="footer-icon">
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
