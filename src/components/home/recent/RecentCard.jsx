import { list } from "../../data/Data"
import { useState } from "react"
const RecentCard = () => {
  const [like, setLike] = useState(false)
  
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className="fa fa-heart" style={{color : like ? "red" : "grey"}} onClick={() => setLike(!like)}></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot ' ></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div className="btnPrice">
                  <button className='btn2'>{price}</button> <label htmlFor=''></label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard