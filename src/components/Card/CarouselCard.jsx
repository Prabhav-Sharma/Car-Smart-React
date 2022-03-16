import React from 'react'

function CarouselCard({src, text}) {
  return (
    <a href="/product/product.html" className="midtext-card">
            <div className="card-midtext">
                <div className="img-container">
                    <img src={src}/></div>
                <p className="overlay-text">{text}</p>
            </div>
        </a>
  )
}

export default CarouselCard;