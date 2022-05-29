import { useState, useEffect } from "react"
import Card from "../components/Card"

const Setcion = ({ type, params }) => {

  const [datas, setData] = useState([])
  let data = []
  const path = '/anime'

  useEffect(async () => {
    await fetch(`https://api.jikan.moe/v4${params}`)
      .then(res => res.json())
      .then(json => json.data.map(dt => (
        data.push({
          id: dt.entry?.mal_id,
          title: dt.entry?.title,
          img: dt.entry?.images?.jpg.image_url
        })
      )))
    setData(data)
  }, [])

  return (
    <div className="section">
      <h2>
        {type}
      </h2>
      <br />
      <div className="content">
        <Card datas={datas} path={path} />
      </div>
    </div>
  )
}

export default Setcion
