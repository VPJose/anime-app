import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useTheme } from "../context/themeContext"
import noFound from '../noFound.png'
import Pictures from '../components/Pictures'
import Characters from '../components/Characters'
import Videos from '../components/Videos'

const Info = () => {

  const { darkTheme } = useTheme()

  const [data, setData] = useState({
    id: " ",
    title: " ",
    demographics: " ",
    genres: [],
    image: noFound,
    synopsis: " "
  })

  const { id, type, title } = useLocation().state

  document.title = title

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

  return (
    <div className="info">
      <div className="image">
        <img
          loading="lazy"
          src={data.image}
          alt={data.title}
          className={`${darkTheme ? 'card-dark' : ''}`}
        />
      </div>
      <div className="content">
        <p
          className={`title ${darkTheme ? 'color-dark' : ''}`}>{data.title}
        </p>
        <br />
        <div className="genres">
          {
            data.genres.map((genre, index) => (
              <h4
                key={index}
                className={`${darkTheme ? 'genres-dark' : ''}`}>
                {genre.name}
              </h4>)
            )
          }
        </div>
        <div className='synopsis'>
          <p className={`sy-title ${darkTheme ? 'color-dark' : ''} `}>Synposis</p>
          <p className={`text ${darkTheme ? 'text-dark' : ''}`}>{data.synopsis}</p>
        </div>
        <div className="buttons">
          <Characters
            id={id}
            type={type}
          />
          <Pictures
            id={id}
            type={type}
          />
        </div>
        {
          type == "/anime" && (
            <Videos
              id={id}
              type={type}
            />)
        }
      </div>
    </div>
  )
}

export default Info
