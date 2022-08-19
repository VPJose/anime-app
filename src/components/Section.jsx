import { useState, useEffect } from "react"
import Card from "../components/Card"
import { useTheme } from "../context/themeContext"

const Setcion = ({ type, params }) => {

  const { darkTheme } = useTheme()
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
          img: dt.entry?.images?.webp.image_url
        })
      ))
      )
    setData(data)
  }, [])

  return (
    <div className="section">
      <h2 className={`${darkTheme ? 'color-dark' : ''}`}>
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
