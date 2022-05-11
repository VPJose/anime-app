import { Link } from "react-router-dom"
import { FaSearch, FaMoon, FaSun } from "react-icons/fa"

const Nav = () => {
  return (
    <nav>
      <div className="title">
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="/anime">Anime</Link>
        <Link to="/manga">Manga</Link>
        <Link to="/about">About</Link>
      </div>
      <form>
        <div>
          <input type="text" placeholder="Search" />
          <FaSearch className="icon" />
        </div>
      </form>
      <div className="mode">
        <FaSun className="sun" />
        <FaMoon className="moon" />
      </div>
    </nav>
  )
}

export default Nav
