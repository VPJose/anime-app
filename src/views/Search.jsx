import { useState } from "react"
import { useLocation } from "react-router-dom"
import Modal from "../components/Modal"

const Search = () => {
  const [datas, setData] = useState([{}])
  const [search, setSearch] = useState("")
  const [modal, setModal] = useState([{}])
  const path = useLocation().pathname

  const handleValue = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await fetch(`https://api.jikan.moe/v4${path}?q=${search}&sfw`)
      .then(res => res.json())
      .then(json => setData(json.data))
  }

  const handleClick = async (id) => {
    await fetch(`https://api.jikan.moe/v4${path}/${id}`)
      .then(res => res.json())
      .then(json => setModal(json.data))
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={handleValue} value={search} />
        <input type="submit" value="search" />
      </form>
      <div>{
        datas.map((data, index) => (
          <div key={index} onClick={() => handleClick(data.mal_id)}>
            <p>{data.title}</p>
            <img src={data.images?.jpg.image_url} />
          </div>
        ))}</div>
      <Modal datos={modal} />
    </div>
  )
}

export default Search
