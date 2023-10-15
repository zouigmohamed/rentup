import Heading from '../../common/Heading'
import FeaturedCard from './FeaturedCard'
import './featured.css'
const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container"></div>
        <Heading title="Featured Property types" subtitle="Find All Types of properties" />
        <FeaturedCard/>
      </section>

 
    </>
  )
}

export default Featured
