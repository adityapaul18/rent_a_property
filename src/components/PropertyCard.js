import React from 'react'
import houseImg from '../imgs/index.jpeg'
import './PropertyCard.css'

function PropertyCard({data}) {
  return (
    <div className='propertyCardContainer'>
        <div>
            <img className='houseImg' src={houseImg} alt="" />
        </div>
        <div className='propertyDetails'>
            <p><b>INR {data.price}</b>/month</p>
            <h3>{data.name}</h3>
            <div>{data.address}</div>
            <hr/>
            <div className='PropSpecs'><span> {data.beds} beds</span><span>{data.bath} bathrooms</span></div>
        </div>
    </div>
  )
}

export default PropertyCard