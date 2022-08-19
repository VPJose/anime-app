import { Route, Routes, useLocation } from "react-router-dom"
import { useTheme } from "./context/themeContext"
import { useEffect } from "react"
import Nav from "./components/Nav"
import Home from "./views/Home"
import Search from "./views/Search"
import About from "./views/About"
import Info from "./views/Info"
import Footer from "./views/Footer"
import "./App.css"

function App() {

  const { darkTheme } = useTheme()

  const path = useLocation().pathname

  const title = path == "/anime" || path == '/manga' ? 'Search' : 'Anime'

  useEffect(() => {
    document.title = title
  }, [path])

  return (
    <div className={`${darkTheme ? "App dark" : 'App'}`}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":type" element={<Search />} />
        <Route path="/info" element={<Info />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
