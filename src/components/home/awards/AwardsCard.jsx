import {awards} from "../../data/Data"
const AwardsCard = () => {
  return (
    <>
       <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span><i className={val.icon}></i></span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
    </>
  )
}

export default AwardsCard
