import { useNavigate } from "react-router-dom"
import { useTheme } from "../context/themeContext"
import noFound from '../noFound.png'

const Card = ({ datas, path }) => {

  const { darkTheme } = useTheme()

  const navigate = useNavigate()

  const handleClick = (id, title) => {
    navigate('/info', { state: { id: id, type: path, title: title } })
  }

  return (
    <>
      {datas.map((data, index) => (
        <div
          key={index}
          className={`card ${darkTheme && 'card-dark'}`}
          onClick={() => handleClick(data.id, data.title)}>
          <p>{data.title}</p>
          <img
            loading='lazy'
            src={data.img ? data.img : noFound} />
        </div>
      ))}
    </>
  )
}

export default Card
