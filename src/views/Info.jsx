import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import noFound from '../noFound.png'

const Info = () => {

  const [data, setData] = useState({
    id: 0,
    title: " ",
    demographics: " ",
    genres: [],
    image: noFound,
    synopsis: " "
  })

  const { id, type } = useLocation().state

  useEffect(async () => {
    await fetch(`https://api.jikan.moe/v4${type}/${id}`)
      .then(res => res.json())
      .then(json => setData({
        id: json.data.mal_id,
        title: json.data.title,
        genres: json.data.genres,
        image: json.data.images?.jpg.large_image_url,
        synopsis: json.data.synopsis
      }))
  }, [])

  return (<div className="info"> <div className="image"> <img src={data.image}
    alt={data.title} /> </div> <div className="content"> <p
      className="title">{data.title}</p> <br /> <div className="genres">
        {data.genres.map((genre, index) => (<h4 key={index}>{genre.name}</h4>))}
      </div> <div className="synopsis"> <p className="sy-title">Synposis</p> <p
        className="text">{data.synopsis}</p> </div> </div> </div>)
}

export default Info
