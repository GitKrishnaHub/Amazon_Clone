import React from 'react';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header'
 import { createBrowserRouter,Outlet,Route,RouterProvider , createRoutesFromElements,ScrollRestoration} from 'react-router-dom';
import Home from './pages/Home'
import { ProductData } from './api/api';
import Login from './pages/Login'
import Register from './pages/Register';
import Cart from './pages/Cart';




const Layout=()=>{
  return (
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
  
      <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} loader={ProductData}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/Register' element={<Register />}></Route>
      </Route>
      
    )
  );
  return (
    <div className='font-bodyFont'>
     <RouterProvider router = {router}></RouterProvider>
     
    </div>
  )
}

export default App
