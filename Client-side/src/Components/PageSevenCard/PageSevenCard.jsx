import React from 'react'

export default function PageSevenCard(props) {
    return (
        <>
            <div className="page7cardData">
                <img src={props.img} alt="" />
                <h1>{props.head}</h1>
                <p>{props.para}</p>
            </div>
        </>
    )
}
