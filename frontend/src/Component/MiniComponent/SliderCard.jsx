import React from "react";
import { Link } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import { addCartItems } from "../../Redux/ProductSlices";


const SliderCard = ({ image, price, discountedPrice, title, id,category }) => {

  const dispatch=useDispatch();

  const handleAddCartProduct = (event) => {
    dispatch(addCartItems({
      id,
      title,
      price,
      category,
      image,
      discountedPrice,
    }))
  };

  

  


  return (
    <>
      
        <div className="shadow-sm border-1 rounded-lg ">
         <Link to={`menu/${id}`}>
          <div className=" ">
            <div className="aspect-squre h-[350px]  p-1 card ">
              <div className="h-[180px] w-[180px]  m-auto ">
                <img
                  className="p-1 my-3 aspect-square"
                  src={image}
                  alt={title}
                />
              </div>
              <div className="content p-2 w-full">
                <h1 className="my-2 h-[75px] flex items-center">{title}</h1>
                <p className="font-medium line-through">&#x20B9; {price} </p>
                <p className="font-semibold">&#x20B9; {discountedPrice} </p>
              </div>
            </div>
          </div>
          </Link>
          <div className="my-4 flex justify-center">
          <button className="bg-yellow-500 w-[90%]  py-1 rounded-lg" onClick={  handleAddCartProduct } >
            Add Cart
          </button>

          </div>

         
        </div>
   
    </>
  );
};

export default SliderCard;
