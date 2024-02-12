import React from 'react'

export default function Services(props) {
  return (
    <>
    <div className="servicesCards">
      <div className="main">
        <div className="left">
          <h1>{props.head}</h1>
          <p>{props.para}</p>
          <button>Get Started</button>
        </div>
        <div className="right">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}
