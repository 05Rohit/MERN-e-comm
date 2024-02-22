import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloudUploadOutline } from "react-icons/io5";

import { ImagetoBase64 } from "../../Utility/ImageToBase64";

const NewProduxt = () => {
  const [stateData, setStateData] = useState({
    title: "",
    price: "",
    stock: "",
    category: "",
    discountedPrice: "",
   // thumbnail: "",
  });

  const getProductValue = (e) => {
    const {name,value}=e.target;

    setStateData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(stateData);
  };


  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
     console.log(data);

    setStateData((prev)=>{
        return{
            ...prev,
            image:data
        }
    })
  };
  




  const handleNewProduct = async (e) => {
    e.preventDefault();

    const { title,price,stock,category,discountedPrice } = stateData;

    if ( title && price && stock && category && discountedPrice ) {
      const fetchProductValues = await fetch('http://localhost:5000/uploadProduct', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stateData),
      });

      const fetchProductValuesRes = await fetchProductValues.json();
 
      toast("New Product is added");
      console.log(fetchProductValuesRes+'added product successful')

      setStateData(() => {
        return {
          title: "",
          price: "",
          stock: "",
          category: "",
          discountedPrice: "",
          //thumbnail: "",
        };
      });

   
      console.log(stateData);
      window.alert("Added successfully")
    } else {
      toast("Fill all data Completely");
    }
  };

  return (
    <>
      <div
        className=" mt-10 m-auto w-3/5 bg-slate-200 py-14
        "
      >
        <h1 className="text-2xl text-center">Add New Product to DataBase</h1>
        <form
          className="newproduct-container flex flex-col gap-1 text-[22px]  w-3/4 my-10  m-auto bg-slate-200 "
          onSubmit={handleNewProduct}
        >
          <label htmlFor="thumbnail" className="px-2 mt-2"> Image </label>
            <div className="h-40 w-full bg-slate-200 m-1 rounded-3xl flex items-center justify-center cursor-pointer " >
                {
                    stateData.thumbnail ?   <img src={stateData.thumbnail} className="h-full py-2 rounded-xl" alt=""/> : <span className="text-4xl "><IoCloudUploadOutline /></span>
                }
             
            
              <input
                type={"file"}
                accept="image/*"
                className="hidden "
                name="thumbnail"
                id="image"
                onChange={uploadImage}
              />
            </div>
         

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={stateData.title}
            placeholder="Enter Product Name"
            className="w-full mb-4 py-2 px-5 rounded-lg"
            onChange={getProductValue}
          />

          <label htmlFor="category">Ctaegory:</label>

          <select
            id="categorys"
            name="category"
            value={stateData.category}
            className="mb-4  py-2 px-5 rounded-lg"
            onChange={getProductValue}
          >
            <option value={"OTHERS"}>Allproduct</option>
            <option value={"Phone"}> smart Phones</option>
            <option value={"BeautyProduct"}>Beauty Product</option>
            <option value={"watch"}>Watch </option>
            <option value={"FrameGlass"}>Frame Glass</option>
            <option value={"Cloth"}>Cloth</option>
            <option value={"Electronic"}>Electronic</option>
            <option value={"Grocery"}>Grocery</option>
            <option value={"Laptop"}>Laptop</option>
          </select>

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            placeholder="price Of the product"
            value={stateData.price}
            className="mb-4  py-2 px-5 rounded-lg"
            onChange={getProductValue}
          />

          <label htmlFor="discountedPrice">Discounted Price:</label>
          <input
            rows={3}
            type="number"
            name="discountedPrice"
            placeholder="Discount Price"
            value={stateData.discountedPrice}
            className="mb-4  py-2 px-5 rounded-lg"
            onChange={getProductValue}
          />

          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            name="stock"
            placeholder="Stock available Of the product"
            value={stateData.stock}
            className="mb-10  py-2 px-5 rounded-lg"
            autoComplete="off"
            onChange={getProductValue}
          />

          <button className="bg-yellow-300 w-max m-auto rounded-3xl py-3 px-7 text-2xl hover:bg-slate-300">
            Add New Product
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={1100} />
    </>
  );
};

export default NewProduxt;
