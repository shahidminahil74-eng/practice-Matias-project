import React from "react";
 import can from "../../assets/can.png";
 import bottle from "../../assets/bottle.png"
 import ui from "../../assets/userInterface.png"
  import gift from "../../assets/giftCard.png"
 import app from "../../assets/MobileApp.png";
 import brand from "../../assets/brand.png";
 import someone from "../../assets/manRight.png"


 import "./works.css";

function Works() {
  return (
    <>
    <center className="direction">
    <i className="line">Complete Project</i>
    <h1 className="format">Look At My Portfolio And Give Me <br />Your Feedback</h1>
    </center>
    <section>
    <div className="looks">
    <div className="straight">
    <div className="col-way">
         <img src={brand} alt="" height={320} width={555}/> 
        <div className="row-way">
          <div>
        <p style={{color:"#c6ff32"}}>PRODUCT DESIGN</p>
        <h2>Brand Identity And Motion Design</h2>
        </div>
      <span className="symbol"><i class="fa-solid fa-square-up-right"></i></span>
    </div>
    </div>
    <div className="col-way">
           <img src={bottle} alt="" height={480} width={555} /> 
        <div className="row-way">
          <div>
        <p style={{color:"#c6ff32"}}>PRODUCT DESIGN</p>
        <h2>Brand Identity And Motion Design</h2>
        </div>
      <span className="symbol"><i class="fa-solid fa-square-up-right"></i></span>
    </div>
    </div>
    <div className="col-way">
           <img src={ui} alt="" height={320} width={555}/> 
        <div className="row-way">
          <div>
        <p style={{color:"#c6ff32"}}>PRODUCT DESIGN</p>
        <h2>Brand Identity And Motion Design</h2>
        </div>
      <span className="symbol"><i class="fa-solid fa-square-up-right"></i></span>
    </div>
    </div>
    </div>
    <div className="straight">
    <div className="col-way">
           <img src={gift} alt="" height={500} width={556}/> 
        <div className="row-way">
          <div>
        <p style={{color:"#c6ff32"}}>PRODUCT DESIGN</p>
        <h2>Brand Identity And Motion Design</h2>
        </div>
      <span className="symbol"><i class="fa-solid fa-square-up-right"></i></span>
    </div>
    </div>
    <div className="col-way">
           <img src={app} alt="" height={320} width={555}/> 
        <div className="row-way">
          <div>
        <p style={{color:"#c6ff32"}}>PRODUCT DESIGN</p>
        <h2>Brand Identity And Motion Design</h2>
        </div>
      <span className="symbol"><i class="fa-solid fa-square-up-right"></i></span>
    </div>
    </div>
    <div className="col-way">
                 <img src={can} alt="" height={420} width={555}/> 
        <div className="row-way">
          <div>
        <p style={{color:"#c6ff32"}}>PRODUCT DESIGN</p>
        <h2>Brand Identity And Motion Design</h2>
        </div>
      <span className="symbol"><i class="fa-solid fa-square-up-right"></i></span>
    </div>
    </div>
    </div>
    </div>
    </section>
      <div className="oval">
    <button className="extra">
      <span><i class="fa-solid fa-arrow-right"></i></span>
      <span>Click More Work</span>
      </button>
      </div>
      <section>
        <div className="final">
        <div className="formula">
        <i className="parallel">Need a Project?</i>
        <h1>Let's Work Together. <br />Fixed A Meeting</h1>
        <div className="frame">
          <div className="phone"><i class="fa-regular fa-envelope"></i></div>
          <div>
          <p>Email</p>
          <p>Davidmatias333@Gmail.Com</p>
          </div>
        </div>
        <div className="frame">
          <div className="phone"><i class="fa-solid fa-location-dot"></i></div>
          <div>
          <p>Location</p>
          <p>Victoria Street London, England</p>
          </div>
        </div>
        </div>
        <div className="img">
           <img src={someone} alt="" height={500} width={740}/> 
        </div>
      </div>

      </section>
      
    
    
    
    </>
  )
}
export default Works