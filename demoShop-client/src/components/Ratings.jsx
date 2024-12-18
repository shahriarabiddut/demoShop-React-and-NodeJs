import React from 'react'

const Ratings = ({rating}) => {
  return (
    <div className="rating text-xl items-center">
    <span className='font-semibold'>Ratings : </span> &nbsp;{rating} 
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((value) => (
                <input
                key={value}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 mx-2 bg-orange-400"
                defaultChecked={value <= rating}
                />
            ))}
        </div>
    </div>
  )
}

export default Ratings