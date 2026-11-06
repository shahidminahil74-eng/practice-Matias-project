import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Blog from './components/blog/blog';
import Services from './components/services/services';
import Testimonial from './components/testimonial/testimonial';
import Works from './components/works/works';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    {/* <div className='content'>hello world</div> */}
    {/* <img src={image} alt="" height={200} width={200}/> */}
  
        <Navbar/>  
        <Routes>
   <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
            <Route path='/works' element={<Works/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/testimonial' element={<Testimonial/>} />
            <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />



        </Routes>
           <Footer/>

       
       
    </>
  );
}

export default App;
