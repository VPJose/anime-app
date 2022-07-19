import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaSearch, FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "../context/themeContext"
import { useState, useEffect } from "react"

const Nav = () => {

  const { setLocalStorage, darkTheme } = useTheme()
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const path = useLocation().pathname

  const handleClick = () => {
    setLocalStorage(!darkTheme)
  }

  const handleValue = ({ target: { value } }) => {
    setSearch(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    navigate('/anime', { state: search })
  }

  useEffect(() => setSearch(''), [path])

  return (
    <nav >
      <div className="title">
        <Link
          className={`${darkTheme ? 'color-dark' : ''}`}
          to="/">Home</Link>
      </div>
      <div className="link">
        <Link
          className={`${darkTheme ? 'color-dark' : ''}`}
          to="/anime">Anime</Link>
        <Link
          className={`${darkTheme ? 'color-dark' : ''}`}
          to="/manga">Manga</Link>
        <Link
          className={`${darkTheme ? 'color-dark' : ''}`}
          to="/about">About</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="search"
            placeholder="Search"
            onChange={handleValue}
            value={search} />
          <FaSearch className="icon" />
        </div>
      </form>
      <div className={`${darkTheme ? 'mode mode-dark' : 'mode'}`}
        onClick={() => handleClick(darkTheme)} >
        <FaSun className={`${darkTheme ? 'sun active' : 'sun'}`} />
        <FaMoon className={`${!darkTheme ? 'moon active' : 'moon'}`} />
      </div>
    </nav >
  )
}

export default Nav
