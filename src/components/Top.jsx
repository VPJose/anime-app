import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Top = () => {

  const navigate = useNavigate()

  const [tops, setTop] = useState([])
  const datas = []

  useEffect(async () => {
    await fetch(`https://api.jikan.moe/v4/top/anime`)
      .then(res => res.json())
      .then(json => json.data.map(dt => (
        datas.push({
          id: dt.mal_id,
          title: dt.title
        })
      )))
    setTop(datas)
  }, [])

  const handleClick = (id, type) => {
    navigate('/info', { state: { id: id, type: type } })
  }

  return (
    <div className="articule">
      <div className="section">
        <h2>TOP</h2>
        <ul>
          {
            tops.map((top, index) => (
              <li key={index}>
                <div onClick={() => handleClick(top.id, '/anime')}>{top.title}</div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Top
