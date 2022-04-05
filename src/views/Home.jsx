import { useState } from "react"
import Section from "../components/Section"
import Modal from "../components/Modal"

const Home = () => {

  const [modal, setModal] = useState([{}])
  console.log(modal)

  return (
    <div>
      Home
      <Section type={"anime"} params={"/top/anime"} set={setModal} />
      <Section type={"manga"} params={"/top/manga"} set={setModal} />
      <Modal datos={modal} />
    </div>
  )
}

export default Home
