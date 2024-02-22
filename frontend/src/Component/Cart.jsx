import React from "react";

import { AiFillDelete } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import CartImage from "../asset/giphy.gif";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteCartItems,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/ProductSlices";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItemData = useSelector((state) => state.product.cartItem);

  //Finding Final price after adding multiple items
  const totalPrice = cartItemData.reduce((acc, item) => {
    const totalValue = parseInt(item.total, 10);
    if (!isNaN(totalValue)) {
      return acc + totalValue;
    } else {
      console.error(`Invalid total value for item: ${item.total}`);
      return acc; // Do not add an invalid value to the accumulator
    }
  }, 0);

  const totalQty = cartItemData.reduce((acc, item) => {
    const totalValue = parseInt(item.qty, 10);
    if (!isNaN(totalValue)) {
      return acc + totalValue;
    } else {
      console.error(`Invalid total value for item: ${item.qty}`);
      return acc; // Do not add an invalid value to the accumulator
    }
  }, 0);

  // console.log("FinalPrice:-", Number(totalQty));

  return (
    <>
      <div className=" sm:mx-3">
        <div className="w-[95%] m-auto mt-10 ">
          <h1 className="text-3xl font-bold ">Your Cart Item</h1>

          {cartItemData[0] ? (
            <div className=" flex justify-between w-[100%] gap-10 md:m-auto flex-wrap p-10 sm:p-0">
              <div className="left_Child w-[70%]">
                {cartItemData[0] &&
                  cartItemData.map((elem) => {
                    // console.log(elem._id)
                    const id = elem._id;
                    //console.log("cart",  id)
                    return (
                      <div className="left flex  flex-wrap  justify-between py-10 px-2 my-5 border-b-2 w-max bg-slate-50 rounded-md shadow-md sm:flex-col md:w-[100%]  ">
                        <div className="main_content flex gap-12 sm:flex-col sm:m-auto md:w-[100%] ">
                          <div className="image m-auto ">
                            <img
                              src={elem.image}
                              alt={elem.title}
                              className="aspect-square "
                              height="150px"
                              width="150px"
                            />
                          </div>
                          <div className="flex flex-col gap-3  text-left text-sm font-bold text-slate-600 md:w-[100%] md:px-10 ">
                            <p className="sm:text-balance  " >{elem.title} </p>

                            <p>{elem.category} </p>

                            <p>
                              Price:-{" "}
                              <span className=" line-through">
                                {" "}
                                {elem.price}{" "}
                              </span>{" "}
                            </p>

                            <p>
                              Discount Price:-{" "}
                              <span>{elem.discountedPrice} </span>
                            </p>

                            <div className="button flex gap-5 items-center">
                              <button
                                className="text-3xl"
                                onClick={() => dispatch(increaseQuantity(id))}
                              >
                                <span>
                                  <CiSquarePlus />{" "}
                                </span>
                              </button>
                              <p> {elem.qty} </p>
                              <button
                                className=" text-3xl "
                                onClick={() => dispatch(decreaseQuantity(id))}
                              >
                                <span>
                                  <CiSquareMinus />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between items-end py-5  sm:flex-row sm:mx-1  ">
                          <p>
                            <AiFillDelete
                              className="text-2xl"
                              onClick={() => dispatch(deleteCartItems(id))}
                            />
                          </p>
                          <p className="text-semibol sm:text-2xl">
                            Total:-{" "}
                            <span className="px-2"> &#x20B9;{elem.total} </span>{" "}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="right_child w-[30%] h-[50vh] my-5  flex flex-col gap-5 bg-slate-300 py-10 px-4 rounded-2xl sm:w-[100%] ">
                <p className="py-2 bg-blue-500 text-white px-3 ">Summary</p>
                <p className=" flex justify-between px-8">
                  total quantity <span> {totalQty} </span>{" "}
                </p>
                <p className="px-8 flex justify-between">
                  total price <span >{totalPrice} </span>{" "}
                </p>
                <button className=" py-2 bg-red-500  text-white px-3 text-center">
                  Payment
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-center mb-20">
                <img
                  src={CartImage}
                  alt=" empty Cart"
                  className="h-80 bg-transparent"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
