import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./views/Home"
import Search from "./views/Search"
import About from "./views/About"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Search />} />
        <Route path="/manga" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
