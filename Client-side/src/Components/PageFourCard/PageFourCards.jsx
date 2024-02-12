import React from 'react'

export default function PageFourCard(props) {
  return (
    <>
      <div className="page4-cards">
        <img src={props.img} alt="" />
        <h2>{props.head}</h2>
        <p>{props.para}</p>
      </div>
    </>
  )
}
