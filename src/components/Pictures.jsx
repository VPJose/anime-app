import { useEffect, useState } from "react"
import { FaRegWindowClose } from 'react-icons/fa'
import { useTheme } from "../context/themeContext"

const Pictures = ({ id, type }) => {

  const [images, setImage] = useState([])
  const [show, setShow] = useState(false)
  const { darkTheme } = useTheme()

  useEffect(async () => {
    await fetch(`https://api.jikan.moe/v4${type}/${id}/pictures`)
      .then(res => res.json())
      .then(json => setImage(json.data))
  }, [show == true])

  const handleClick = ({ target: { className } }) => {
    if (className == 'modal active')
      setShow(false)
  }

  return (
    <div className="pictures">
      <div className="button-pictures">
        <button onClick={() => setShow(!show)}>
          Prictures
        </button>
      </div>
      <div
        className={show ? 'modal active' : 'modal'}
        onClick={(e) => handleClick(e)}>
        <div className={darkTheme ? 'modal-panel dark' : 'modal-panel'}>
          <FaRegWindowClose
            className="close"
            onClick={() => setShow(false)} />
          <div className="images">
            {
              images.map((img, index) => (
                <img src={img?.jpg.image_url} key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default Pictures
