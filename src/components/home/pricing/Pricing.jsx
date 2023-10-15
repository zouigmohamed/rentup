import Back from "../../common/Back"
import PriceCard from "../price/PricingCard"
import img from "../../../assets/images/list/p-1.png"

const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing