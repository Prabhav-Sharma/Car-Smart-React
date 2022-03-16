import React from 'react'

function ArrivalCard({text, name, src}) {
  return (
    <a href="product/product.html">
            <div className="arrival-card flex-row">
                <img className="arrival-card-img" src={src}/>
                <div className="arrival-card-text flex-column">
                    <h5 className="text-gray">New Arrival</h5>
                    <div>
                        <h2>{name}</h2>
                        <p className="para-s gray-text">{text}</p>
                    </div>
                </div>
            </div>
        </a>
  )
}

export default ArrivalCard