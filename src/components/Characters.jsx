import { useEffect, useState } from "react"
import { useTheme } from "../context/themeContext"
import { FaRegWindowClose } from 'react-icons/fa'

const Characters = ({ id, type }) => {

  const { darkTheme } = useTheme()
  const [characters, setCharacter] = useState({
    main: [],
    supporting: []
  })
  const [show, setShow] = useState(false)

  useEffect(async () => {
    await fetch(`https://api.jikan.moe/v4${type}/${id}/characters`)
      .then(res => res.json())
      .then(json => setCharacter({
        main: json.data.filter(dt => dt.role == 'Main'),
        supporting: json.data.filter(dt => dt.role == 'Supporting')
      }))
  }, [show == true])

  const handleClick = ({ target: { className } }) => {
    if (className == 'modal active')
      setShow(false)
  }

  return (
    <div className="characters">
      <div className="button-character">
        <button
          className="button"
          onClick={() => setShow(!show)}>
          Charaters
        </button>
      </div>
      <div
        className={show ? 'modal active' : 'modal'}
        onClick={(e) => handleClick(e)}>
        <div className={darkTheme ? 'modal-panel dark' : 'modal-panel'}>
          <FaRegWindowClose
            className="close"
            onClick={() => setShow(false)} />
          <h4>Main</h4>
          <div className="character">
            {
              characters.main.map((chrc, index) => (
                <div
                  key={index}
                  className={darkTheme ? 'card card-dark' : 'card'}
                >
                  <p>{chrc.character.name}</p>
                  <img src={chrc.character.images?.jpg.image_url} />
                </div>
              ))
            }
          </div>
          <br />
          <h4>Supporting</h4>
          <div className="character">
            {
              characters.supporting.map((chrc, index) => (
                <div
                  key={index}
                  className={`card ${darkTheme && 'card-dark'}`}
                >
                  <p>{chrc.character.name}</p>
                  <img src={chrc.character.images?.jpg.image_url} />
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div >
  )
}

export default Characters
