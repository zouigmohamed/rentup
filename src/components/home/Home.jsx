import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Team from "./team/Team"
import Recent from "./recent/Recent"
import Price from "./price/Price"
import Footer from "../common/footer/Footer"
const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
      <Footer/>
 
    </div>
  )
}

export default Home
