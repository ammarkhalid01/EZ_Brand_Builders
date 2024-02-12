import React from 'react'
import ProcessCard from '../../Components/ProcessCard/ProcessCard'
import SERVICES_PAGE2_DATA from './SERVICES_PAGE2_DATA'
import ServicesCard from '../../Components/ServicesCard/ServicesCard'
import SERVICES_CARD_DATA from '../../Components/ServicesCard/SERVICES_CARD_DATA.JS'

export default function Services() {
  return (
    <>
      <div className="services">
        <div className="page1">
          <h1> <span> Traffic.</span><span> Engagement.</span> <br /> <span> Conversion.</span></h1>
          <p>Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt ius ex. Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt ius ex. </p>
        </div>
        <div className="page2">
          <div className="head">
            <h1>What You’re Looking For?</h1>
          </div>
          <div className="services-cards">
            {
              SERVICES_PAGE2_DATA.map((val)=>{
                return(
                   <ProcessCard
                   heading={val.heading}
                   img={val.img}
                   para={val.para}
                   />
                )
              })
            }
          </div>
        </div>
        <div className="page3">
          <div className="main">
            {
              SERVICES_CARD_DATA.map((val)=>{
                return(
                  <ServicesCard
                  head={val.heading}
                  para={val.para}
                  img={val.img}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
