import { useState, useEffect, useReducer } from "react"
import { FaSearch, FaAngleDown } from "react-icons/fa"
import Card from "../components/Card"
import { useLocation } from "react-router-dom"
import image from "../undraw_file_searching_re_3evy.svg"

const Search = () => {

  const [datas, setData] = useState([])
  const [search, setSearch] = useState("")
  const [show, setShow] = useState(false)
  const [state, dispatch] = useReducer(reducer, {
    type: '',
    status: '',
    order_by: '',
    sort: ''
  })

  function reducer(state, action) {
    switch (action.type) {
      case 'types':
        return { ...state, type: action.payload }
      case 'status':
        return { ...state, status: action.payload }
      case 'order':
        return { ...state, order_by: action.payload }
      case 'sort':
        return { ...state, sort: action.payload }
      default:
        return state
    }
  }

  const path = useLocation().pathname
  const name = useLocation()
  let data = []
  let params = ''


  const ctxtFilters = {
    types: path == '/anime' ? ["tv", "movie", "ova", "special", "ona", "music"] : ["manga", "novel", "lightnovel", "oneshot", "doujin", "manhwa", "manhua"],
    status: path == '/anime' ? ["airing", "complete", "upcoming"] : ["publishing", "complete", "hiatus", "discontinued", "upcoming"],
    order: ["mal_id", "title", "rating", "start_date", "end_date", "score", "scored_by", "rank", "popularity", "members", "favorites", path == '/anime' ? "episode" : "volumen"],
    sort: ["desc", "asc"]
  }

  useEffect(async () => {
    if (name.state) {
      await fetch(`https://api.jikan.moe/v4${path}?q=${name.state}&sfw`)
        .then(res => res.json())
        .then(json => json.data.map(dt => (
          data.push({
            id: dt.mal_id,
            title: dt.title,
            img: dt.images?.jpg.image_url
          })
        )))
      setData(data)
    } else {
      setData([])
      setSearch("")
    }
    document.title = `Search: ${name.state}`
  }, [path, name])

  const handleValue = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    document.title = `Search ${search}`

    Object.entries(state).forEach(([key, value]) => {
      if (!value == '')
        params += `&${key}=${value}`
    })

    await fetch(`https://api.jikan.moe/v4${path}?q=${search}&sfw${params}`)
      .then(res => res.json())
      .then(json => json.data.map(dt => (
        data.push({
          id: dt.mal_id,
          title: dt.title,
          img: dt.images?.jpg.image_url
        })
      )))
    setData(data)
    setShow(false)
  }

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit} >
        <div className="form-search">
          <div className="input">
            <input type="search" onChange={handleValue} value={search} placeholder="Search" />
            <button><FaSearch /></button>
          </div>
          <div className="Collapse-Filter">
            <div className="button-adv" onClick={handleClick}>
              <p>Filter</p>
              <FaAngleDown />
            </div>
            <div
              className={`${show ? 'dropdwon show' : 'dropdown'}`}>
              {
                Object.keys(ctxtFilters).map((ctfs, index) => (
                  <div className="card-filter" key={index}>
                    <div className="label-filter">
                      <label >{ctfs}</label>
                    </div>
                    <div className="collapse">
                      <select
                        name={ctfs}
                        className={ctfs == 'status' && state.type == 'movie' ? 'desactive' : ''}
                        onChange={(e) => dispatch({ state, type: e.target.name, payload: e.target.value })}
                      >
                        <option value="">Select</option>
                        {
                          ctxtFilters[ctfs].map((ctf, index) => (
                            <option value={ctf} key={index}>{ctf}</option>
                          ))
                        }
                      </select>
                    </div>
                  </div>
                ))

              }
            </div>
          </div>
        </div>
      </form >
      <div className="section">
        <div className="content-search">
          {
            !datas.length ? <img src={image} className="ct-img" /> : <Card datas={datas} path={path} />}
        </div>
      </div>
    </div >
  )
}

export default Search
