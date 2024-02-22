import React, { useEffect, useState } from "react";

import HomeSliderProduct from "./MiniComponent/HomeSliderProduct";

import { useSelector } from "react-redux";
import AllProductHome from "./MiniComponent/AllProductHome";
import watchImage from "../asset/watch.png";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  //console.log( typeof productData);

  // if (Array.isArray(productData)) {
  //   console.log("The given data is an array.");
  // } else {
  //   console.log("The given data is not an array.");
  // }

  //Getting the unique/distict category only .i.e dublicate data dont't added
  let allCategoryOption = [
    ...new Set(productData.map((item) => item.category)),
  ];
  //console.log(allCategoryOption);

  //Display The data on the basis of category
 
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    setDataFiltered(productData);
  }, [productData]);

  const HandleFilterPrductByCategory = (category) => {
    const filterCategory = productData.filter((el) => el.category === category);

    setDataFiltered(() => {
      return [...filterCategory];
    });
  };

  return (
    <>
    <div className="w-full ">
      <div className="flex gap-10 items-center bg-[#F0F0F2]  ">
        

        <div className="Home_heading w-[55vw] ml-16 sm:w-[100%] sm:m-5">
          
          <h1 className="home_heading text-center">Select Your New </h1>
          <h1 className="home_heading text-center">Perfect Style</h1>
       
          <p className=" mt-10 text-xl text-slate-700 md:pl-10">
            At YourShop, we believe that every purchase should be a delight.
            Uncover a world of possibilities as you browse through our diverse
            range of high-quality products. From fashion essentials to home
            decor must-haves, we've got everything you need to enhance your
            lifestyle
          </p>
          <button className="bg-slate-700 text-white text-xl px-7 py-2 mt-10 rounded-sm md:ml-10">
            {" "}
            Shop Now{" "}
          </button>
        </div>
        <div className="sm:hidden ">
          <img src={watchImage} alt="watchImage" height="100%" width="350px" />
        </div>
      </div>

      {/*  Home Slider Component*/}

      <div className="">
        <HomeSliderProduct />
      </div>

      {/* Get Product based On the Category */}
      <div className="w-[90%] m-auto mt-10 ">
        <h1 className="text-3xl font-bold">All Product</h1>
        <div className="flex justify-start gap-8 mt-10 mx-10 flex-wrap sm:w-[100%] sm:m-auto sm:my-5 sm:gap-4 ">
          {allCategoryOption[0] &&
            allCategoryOption.map((elem) => {
              return (
                
                <div
                  className="bg-yellow-400 rounded-2xl shadow-slate shadow-md cursor-pointer  hover:bg-yellow-600 sm:w-[150px]  "
                  onClick={() => HandleFilterPrductByCategory(elem)}
                >
                  <p className="py-1 px-4 sm:px-4 sm:text-center ">{elem} </p>
                </div>
              );
            })}
        </div>
      </div>

      {/* All Product list container */}

        <div className=" m-10  flex gap-10 flex-wrap justify-center sm:w-[100%] sm:m-auto">
          {dataFiltered[0] &&
            dataFiltered.map((elem) => {
              return (
                <AllProductHome
                  key={elem.id}
                  id={elem._id}
                  image={elem.thumbnail}
                  title={elem.title.toUpperCase()}
                  price={elem.price}
                  category={elem.category}
                  discountedPrice={elem.discountedPrice}
                />
              );
            })}
        </div>
        </div>
     
    </>
  );
};

export default Home;
