import { useEffect } from "react"

const Modal = ({ datos }) => {
  return (
    <div>
      <h1>{datos.title}</h1>
      <img src={datos.images?.jpg.image_url} />
      <h3>{datos.type}</h3>
      <p>{datos.synopsis}</p>
    </div>
  )
}

export default Modal
