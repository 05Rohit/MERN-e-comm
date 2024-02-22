import React from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addCartItems } from "../Redux/ProductSlices";


const Menu = ({ image, price, discountedPrice, title, id,category }) => {
  //stored the id which goes on the URL section
  const { filterby } = useParams();

 // console.log(filterby)

  const productData = useSelector((state) => state.product.productList);
  const dispatch=useDispatch();

  const handleAddCartProduct = (event) => {
    dispatch(addCartItems({
      _id:filterby,
      title,
      price,
      category,
      image,
      discountedPrice,
    }))
  };

  const menuProductDisplayList = productData.filter(el => el._id === filterby)
  const menuList = menuProductDisplayList[0]
   //console.log(menuList);

  return (
    <>
    {
        menuList ?  <div className="body w-[80%] h-[70vh] m-auto  flex items-center">
        <div className="container  bg-slate-200 flex gap-16 p-5 items-center pl-16">
            <div className="images  ">
                <img src={menuList.thumbnail} alt="images" className="p-2 h-80"/>
            </div>
            <div className="heading text-2xl flex flex-col gap-3">
                <h1 className="text-3xl">{menuList.title}</h1> 
                <p className="">Category:- {menuList.category} </p>
                <p className="font-semibold  "> Price: &#x20B9; <span className="line-through font-medium"> {menuList.price}  </span>  </p>
                <p className="font-semibold"> discountedPrice: &#x20B9; {menuList.discountedPrice} </p>

                <div className="flex gap-6 my-5 text-2xl ">   
                <button className="bg-yellow-500 w-max py-2 px-10 rounded-3xl hover:bg-yellow-300" onClick={ handleAddCartProduct }>Add cart</button>
               </div>

              
            </div>
        </div>
      </div>  : <h1> Not Comming</h1>
    }

   
   
    </>
  );
};

export default Menu;
