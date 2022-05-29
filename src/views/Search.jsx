import { useState, useEffect } from "react"
import { FaSearch, FaAngleDown } from "react-icons/fa"
import Card from "../components/Card"
import { useLocation } from "react-router-dom"
import image from "../undraw_file_searching_re_3evy.svg"

const Search = () => {

  const [datas, setData] = useState([])
  const [search, setSearch] = useState("")
  const path = useLocation().pathname
  let data = []

  useEffect(() => {
    setData([])
    setSearch("")
  }, [path])

  const handleValue = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await fetch(`https://api.jikan.moe/v4${path}?q=${search}&sfw`)
      .then(res => res.json())
      .then(json => json.data.map(dt => (
        data.push({
          id: dt.mal_id,
          title: dt.title,
          img: dt.images?.jpg.image_url
        })
      )))
    setData(data)
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit} >
        <div className="form-search">
          <div className="input">
            <input type="search" onChange={handleValue} value={search} placeholder="Search" />
            <button><FaSearch /></button>
          </div>
          <div className="button-adv">
            <p>Filter</p>
            <FaAngleDown />
          </div>
          <div className="dropdown">
          </div>
        </div>
      </form>
      <div className="section">
        <div className="content">
          {!datas.length ? <img src={image} className="ct-img" /> : <Card datas={datas} path={path} />}
        </div>
      </div>
    </div>
  )
}

export default Search
