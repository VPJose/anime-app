import { useState, useEffect } from "react"

const Setcion = ({ type, params, set }) => {

  const [datas, setData] = useState([{}])

  useEffect(async () => {
    await fetch(`https://api.jikan.moe/v4${params}`)
      .then(res => res.json())
      .then(json => setData(json.data))
  }, [])

  const handleClick = async (type, id) => {
    await fetch(`https://api.jikan.moe/v4/${type}/${id}`)
      .then(res => res.json())
      .then(json => set(json.data))
  }

  return (
    <div>
      Section {type}
      {datas.map((data, index) => (
        <div key={index} onClick={() => handleClick(type, data.mal_id)}>
          <h1>{data.title}</h1>
          <img src={data.images?.webp.image_url} />
        </div>
      ))}
    </div>
  )
}

export default Setcion
