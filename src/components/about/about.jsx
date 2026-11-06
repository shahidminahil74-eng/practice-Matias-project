import React from "react";
import man from '../../assets/manLeft.png'
import Footer from "../footer/footer";

import './about.css'

const About  = ()=>{
    return (
     <>
     <section className="about">
    <center >
            <div className="system"><i class="fa-solid fa-asterisk"></i></div>
      <h3 className="text">
        I'm David Matias, I'm a Brand & Webflow Designer, currently residing <br/>
         in the lush Victoria Street London,Matia operates globally and is<br /> ready
        to take on any design challenge.
      </h3 >
      <div className="parent">
        <button className="tab-button">ABOUT</button>
        <button className="tab-button">EXPERIENCE</button>
        <button className="tab-button">EDUCATION</button>
        <button className="tab-button">SKILLS</button>
      </div>
    </center>
    <div className="align">
              <img className='laptop' src={man} alt="" />
  
       <div className="column"> 
        <h2>Personal Info</h2>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil</p>
      
        <div className="cards-direction">
        <div className="each-card">
          <p>Email</p>
        <p>Matias999@Gmail.com</p>
        </div>
      <div className="each-card">
          <p>Phone</p>
          <p>+(2) 871 382 023</p>
        </div>
      </div>
    
    <div className="cards-direction">
    <div className="each-card">
          <p>Address</p>
        <p>Victoria Street London,</p>
        </div>
      <div className="each-card">
          <p>Follow</p>
          <p className="icons"><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-linkedin"></i><i class="fa-brands fa-instagram"></i>
</p>
        </div>
      </div>
      </div>
      </div>
      <section className="awards">
        <div className="awards-heading">
          <h2>Our Awards</h2>
          <a href="">View My Work</a>
        </div>
        <table>
        <tbody>
          <tr>
            <td>Site Of The Day</td>
            <td>Css & Animation</td>
            <td>2018</td>
          </tr>

          <tr>
            <td>Best Business Model</td>
            <td>New Strategy</td>
            <td>2019</td>
          </tr>

          <tr>
            <td>Motion Graphic</td>
            <td>3D & Visual Effect</td>
            <td>2020</td>
          </tr>

          <tr>
            <td>Video Design</td>
            <td>Css & Animation</td>
            <td>2022</td>
          </tr>
        </tbody>
      </table>

      </section>
      
    </section>
     </>
    )
}
export default About