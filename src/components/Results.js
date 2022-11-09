import React from 'react'
import PropertyCard from './PropertyCard'
import './Results.css'

function Results({data}) {
  return (
    <div className='resultContainer' >
        {
            data?.map((data) => {
                return(
                    <PropertyCard data={data}/>
                )})
        }
    </div>
  )
}

export default Results