import React from 'react'


export default function ProcessCard(props) {
    return (
        <>
            <div className="processCard">
                <div className="main">
                    <img src={props.img} alt="" />
                    <h2>{props.heading}</h2>
                    <p>{props.para}</p>
                </div>
            </div>
        </>
    )
}
