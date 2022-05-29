import { useNavigate } from "react-router-dom"
import noFound from '../noFound.png'

const Card = ({ datas, path }) => {

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate('/info', { state: { id: id, type: path } })
  }

  return (
    <>
      {datas.map((data, index) => (
        <div
          key={index}
          className="card"
          onClick={() => handleClick(data.id)}>
          <p>{data.title}</p>
          <img src={data.img ? data.img : noFound} />
        </div>
      ))}
    </>
  )
}

export default Card
