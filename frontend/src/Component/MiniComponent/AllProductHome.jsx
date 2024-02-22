import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addCartItems } from "../../Redux/ProductSlices";


const AllProductHome = ({ image, title, price, category, discountedPrice,id }) => {
  const dispatch=useDispatch();
 // const dispatch= useDispatch()

  const handleAddCartProduct = (event) => {
    dispatch(addCartItems({
      _id:id,
      title:title,
      price:price,
      category:category,
      image:image,
      discountedPrice:discountedPrice

    }))
  };
  return (
    <>

      <div className=" p-3 max-h-[470px] w-[200px] bg-slate-200 rounded-2xl sm:p-7 sm:w-[300px] ">
      <Link to={`menu/${id}`}>
        <div className="max-w-fit  m-auto shadow-xl">
          <div className="h-[80px] w-[80px] mb-3  m-auto bg-transparent sm:bg-blue-600 sm:w-[100%] sm:mb-10  ">
            <img className=" aspect-square sm:aspect-video sm:h-[120px]" src={image} alt={title} />
          </div>
        </div>
        <div className="content p-2 w-full sm:mt-3 ">
          <h1 className=" font-semibold text-slate-800  h-[50px] flex items-center">{title}</h1>
          <p className="font-medium py-1">{category} </p>
          <p className="font-medium line-through py-1">&#x20B9; {price} </p>
          <p className="font-semibold py-1">&#x20B9; {discountedPrice} </p>
         
        </div>
        </Link>

        <button className="bg-yellow-500 w-full mt-4 py-1 rounded-lg" onClick={  handleAddCartProduct }>
            Add Cart
          </button>

      </div>
   
    </>
  );
};

export default AllProductHome;
