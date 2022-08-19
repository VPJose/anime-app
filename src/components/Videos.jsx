import { useEffect, useState } from "react"
import { useTheme } from "../context/themeContext"

const Videos = ({ id, type }) => {

  const [episodes, setEpisode] = useState([])
  const [show, setShow] = useState(false)
  const { darkTheme } = useTheme()

  useEffect(async () => {
    const path = `https://api.jikan.moe/v4${type}/${id}/videos`
    await fetch(path)
      .then(res => res.json())
      .then(json => setEpisode(json.data?.episodes))
  }, [])

  return (
    <div className="episode">
      <div className="button-episode">
        {episodes.length > 0 && <button className={darkTheme ? 'button button-dark' : 'button'} onClick={() => setShow(!show)}> Episodes </button>}
      </div>
      <div className={!show ? 'dropdown' : !darkTheme ? 'dropdwon active' : 'dropdown active a-dark'}>
        <div className="episodes">
          {
            episodes.map((episode, index) => (
              <a
                key={index}
                href={episode.url}>
                <p>{episode.mal_id}:</p>
                <p>{!episode.title ? `episode ${episode.mal_id}` : episode.title}</p>
              </a>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Videos
