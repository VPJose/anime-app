import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../context/themeContext"

const Top = () => {

  const navigate = useNavigate()

  const { darkTheme } = useTheme()

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
        <h2 className={`${darkTheme ? 'color-dark' : ''}`}>TOP</h2>
        <ul className={`${darkTheme ? 'color-dark' : ''}`}>
          {
            tops.map((top, index) => (
              <li key={index}>
                <div
                  onClick={() => handleClick(top.id, '/anime')}
                  className={`${darkTheme ? 'color-dark' : ''}`} >{top.title}</div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Top
