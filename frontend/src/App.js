import "./App.css";
import "./index.css";

// Some react and redux import
import {Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch} from 'react-redux';
import { setDataProduct } from "./Redux/ProductSlices";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//All Component 
import Navbar from "./Component/Navbar";
import Home from './Component/Home';
import Menu from './Component/Menu';
import About from './Component/About';
import ConatctUs from './Component/ConatctUs';
import Registration from './Component/Registration';
import Logout from './Component/Logout';
import Login from './Component/Login';
import NewProduxt from "./Component/MiniComponent/NewProduxt";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer";


function App() {
  const dispatch=useDispatch()
  //const state=useSelector((state)=> state.product)
  //console.log(state)
  useEffect(()=>{
    ( async ()=>{
      const resbackend= await fetch('/getproductdata')
      const resData= await resbackend.json(); // All product data stores in frontend Here
      //console.log(resData);
      dispatch(setDataProduct(resData)) // send data to the redux, so other component also use that data
    })();
    
  },[dispatch])


  
  return (
    <>

    
      <Navbar />
    
     <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/menu" element={<Menu />}></Route> */}
        <Route path="/menu/:filterby" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ConatctUs />}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/newproduct" element={<NewProduxt/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>

      <ToastContainer position="top-center" autoClose={1000} hideProgressBar={true} newestOnTop={true}  />
 
      
    </>
  );
}

export default App;
