import { useNavigate } from "react-router-dom"
import { useTheme } from "../context/themeContext"
import noFound from '../noFound.png'

const Card = ({ datas, path }) => {

  const { darkTheme } = useTheme()

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate('/info', { state: { id: id, type: path } })
  }

  return (
    <>
      {datas.map((data, index) => (
        <div
          key={index}
          className={`card ${darkTheme && 'card-dark'}`}
          onClick={() => handleClick(data.id)}>
          <p>{data.title}</p>
          <img src={data.img ? data.img : noFound} />
        </div>
      ))}
    </>
  )
}

export default Card
