import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Product({cart,setCart,data}) {
    const [showMore, setShowMore] = useState(false);
    let [toggle,setToggle] = useState(true)
    const [rating, setRating] = useState(0)
    const text = data.Description
    const handleRating = (rate) => {
        setRating(rate)
    }
  return <>
  <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={data.image} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{data.Name}</h5>
                        <h6> {showMore ? text : `${text.substring(0, 50)}`}
                        <button className="btn" onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show less" : "Show more"}
                        </button>
                        </h6>
                        ₹{data.Price} <br/>
                        <Rating onClick={handleRating} initialValue={rating} size={25}/>
                    </div>
                    
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {
                    toggle?<div className="text-center"><button className="btn btn-outline-dark mt-auto"
                    onClick={()=>{
                        setCart(cart+1)
                        setToggle(prev=>!prev)
                    }}>Add To Cart</button></div>:

                <div className="text-center"><button className="btn btn-dark mt-auto"
                    onClick={()=>{
                        setCart(cart-1)
                        setToggle(prev=>!prev)
                    }}>Remove To Cart</button></div>
                    }
                </div>
            </div>
    </div>
  </>
}