import React from "react";
import right from '../../assets/topRight.png'
import side from '../../assets/topLeftMan.png'
import left from '../../assets/bottomLeft.png'


import './testimonial.css'

function Testimonial() {
  return (
    <>
    <center className="exist">
    <i className="effect">Testimonial</i>
    <h1 className="language">Happy Words From Happy <br />Customer</h1>
    </center>
    <div className="potrait">
    <div className="mid">
        <img src={side} alt=""  height={230} width={230} />
        <img src={left} alt=""  height={200} width={200} />
    </div>
    <div className="mid-section">
        <span className="main-style"><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i></span>
        <i>There are many variations of passages of lorem ipsum available, by injected <br />humour, or randomizes words which don't look even slightly believeable. If you are <br />going to use a passage of alaoremIpsum, you need to be hidden in middle oftext. All the Lorem Ipsum generators</i>
    </div>
    <div className="middle">
        <img src={right} alt=""  height={220} width={240} />
    </div>
    </div>
    </>
  )
}
export default Testimonial