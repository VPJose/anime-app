import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <h3>About</h3>
        <p>Tumangaonline no realiza las traducciones aquí realizadas y solo es un repositorio con visor propio para que distintos grupos de traducción puedan compartir sus propios proyectos de forma pública y organizada para el disfrute de todos</p>
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
