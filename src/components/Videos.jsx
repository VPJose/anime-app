import { useEffect, useState } from "react"

const Videos = ({ id, type }) => {

  const [episodes, setEpisode] = useState([])
  const [show, setShow] = useState(false)

  useEffect(async () => {
    const path = `https://api.jikan.moe/v4${type}/${id}/videos`
    await fetch(path)
      .then(res => res.json())
      .then(json => setEpisode(json.data.episodes))
  }, [show == true])

  return (
    <div className="episode">
      <div className="button-episode">
        <button
          className="button"
          onClick={() => setShow(!show)}>
          Episodes
        </button>
      </div>
      <div className={show ? 'dropdwon active' : 'dropdown'}>
        <div className="episodes">
          {
            episodes.map((episode, index) => (
              <a
                key={index}
                href={episode.url}>
                <p>{episode.mal_id}:</p>
                <p>{episode.title}</p>
              </a>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Videos
