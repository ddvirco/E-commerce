import logo from './logo.svg';
import './App.css';
import ProductList from './Components/ProductsArea/ProductList/ProductList';
import { createContext, useEffect, useState } from 'react';
import MyContext from './MyContext';
import CartComp from './Components/Cart/Cart';
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom';
import ProductDetailsComp from './Components/ProductsArea/ProductDetails/ProductDetails';
import axios from 'axios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import NavbarComp from './Components/Layout/NavbarArea/Navbar';
import HomeComp from './Components/Layout/HomeArea/Home';
import LoginComp from './Components/Auth/Login/Login';
import RegisterComp from './Components/Auth/Register/Register';
import AboutArea from './Components/Layout/AboutAre/About';
import ContactComp from './Components/Layout/Content/Contact';

function App() {
    const [allData, setAllData] = useState([])

    return (
    <BrowserRouter>  
      <MyContext.Provider value={[allData, setAllData]} >
                <div className="App">
                    <NavbarComp />
                    <Routes>
                        <Route  path='/' element={<HomeComp/>}></Route>
                        <Route path='/home' element={<HomeComp/>}></Route>
                        <Route path='/products' element={<ProductList />}></Route>
                        <Route path='/cart' element={<CartComp />}></Route>
                        <Route path='/products/:id' element={<ProductDetailsComp />}></Route>
                        <Route path='/login' element={<LoginComp/>}></Route>
                        <Route path='/register' element={<RegisterComp/>}></Route>
                        <Route path='/about' element={<AboutArea/>}></Route>
                        <Route path='/contact' element={<ContactComp/>}></Route>
                    </Routes>
                </div>
       </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
