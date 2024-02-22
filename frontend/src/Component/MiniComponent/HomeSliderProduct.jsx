import React from "react";

import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useRef } from "react";
import SliderCard from './SliderCard';


const HomeSliderProduct = () => {
  const productData = useSelector((state) => state.product.productList);

  //Filter the product on Cloth category only
  let clothCategoryProductData = productData.filter((elem) => {
    return elem.category === "Cloth";
  });
  //console.log(clothCategoryProductData);

  // for scroll of Cloth product

  const slideProductRef = useRef();

  const previousProduct = () => {
    slideProductRef.current.scrollLeft -= 400;
  };

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 400;
  };

  return (
    <>
      <div className="w-[95%] mt-10 p-10 m-auto rounded-lg">
        <h1 style={{ fontSize: "30px", fontWeight: 600 , textDecoration:"underline" }}
        >
          Cloths
        </h1> 
        <div className="scroll_icon text-xl flex gap-5 justify-end mx-5">
          <button
            className="shadow-lg py-1 px-2 rounded"
            onClick={previousProduct}
          >
            <FaLessThan />
          </button>
          <button className="py-1 px-2 rounded shadow-lg" onClick={nextProduct}>
            <FaGreaterThan />
          </button>
        </div>
        <div
          className="mt-2 p-5  flex gap-10 overflow-scroll scrollbar-none scroll-smooth rounded-3xl "
          ref={slideProductRef}
        >
          {clothCategoryProductData[0] &&
            clothCategoryProductData.map((elem) => {
              return (
                <SliderCard
                  key={elem.id}
                  id={elem._id}
                  image={elem.thumbnail}
                  title={elem.title.toUpperCase()}
                  price={elem.price}
                  discountedPrice={elem.discountedPrice}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default HomeSliderProduct;
