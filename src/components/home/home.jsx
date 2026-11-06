import React from "react";
 import uncle from '../../assets/uncle.jpg'

import './home.css'
import About from "../about/about";
import Works from "../works/works";
import Services from "../services/services";
import Testimonial from "../testimonial/testimonial";
import Blog from "../blog/blog";
import Contact from "../contact/contact";

const Home  = ()=>{
    return (
     <>
     <div className="page">
     <aside className="side">
        <div className="rotate">+021-574-328-301</div>
        <div className="column">SCROLL DOWN <i class="fa-solid fa-arrow-left-long"></i>
</div>
      </aside>
      <main className="main-section" id="home">
        <section className="content">
          <p className="availability">
            Currently available for freelance
            <br />
            worldwide <span>↗</span>
          </p>
          <h1>
            Creative Visual
            <br />
            Designer
          </h1>
          <div className="sweet">
            <span className="curved-arrow">↝</span>
            <span className="play-button"><i class="fa-solid fa-play"></i></span>
            <span>
              Work
              <br />
              Process
            </span>
          </div>
        </section>
        <section className="image-area">
          <img className='image' src={uncle} alt="" />
        </section>

      </main>
    </div>
    <About/>
    <Works/>
    <Services/>
    <Testimonial/>
    <Blog/>
    <Contact/>
     </>
    )
}
export default Home