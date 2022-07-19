import Section from "../components/Section"
import Top from "../components/Top"

const Home = () => {

  return (
    <div className="home">
      <main className="main" >
        <Section type={"News"} params={"/watch/episodes"} />
      </main>
      <Top />
    </div>
  )
}

export default Home
