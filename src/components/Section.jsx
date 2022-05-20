import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Setcion = ({ type, params }) => {

  const [datas, setData] = useState([{}])

  useEffect(async () => {
    await fetch(`https://api.jikan.moe/v4${params}`)
      .then(res => res.json())
      .then(json => setData(json.data))
  }, [])

  return (
    <div className="section">
      <h2>
        {type}
      </h2>
      <br />
      <div className="content">
        {datas.map((data, index) => (
          <Link to={`/anime/${data.entry?.mal_id}`} key={index} className="card" onClick={() => handleClick(type, data.entry?.mal_id)}>
            <img src={data.entry?.images?.webp.image_url} />
            <p>{data.entry?.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Setcion
