import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Top = () => {

  const [tops, setTop] = useState([{}])

  useEffect(async () => {
    await fetch(`https://api.jikan.moe/v4/top/anime`)
      .then(res => res.json())
      .then(json => setTop(json.data))
  }, [])

  return (
    <div className="articule">
      <div className="section">
        <h2>TOP</h2>
        <ul>
          {
            tops.map((top, index) => (
              <li key={index}>
                <Link to={`/anime/${top.mal_id}`}>{top.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Top
