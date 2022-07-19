import { Route, Routes } from "react-router-dom"
import { useTheme } from "./context/themeContext"
import Nav from "./components/Nav"
import Home from "./views/Home"
import Search from "./views/Search"
import About from "./views/About"
import Info from "./views/Info"
import Footer from "./views/Footer"
import "./App.css"

function App() {

  const { darkTheme } = useTheme()

  console.log(darkTheme)

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
