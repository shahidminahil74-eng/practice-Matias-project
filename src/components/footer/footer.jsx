import React from "react";

import './footer.css'

function Footer() {
  return (
    <>
    <section>
    <center>
        <h1 className="font">GET IN TOUCH</h1>
    </center>
    <div className="parent1">
    <div className="email">
        <p>Hello, I'm David Matias, Website & Uset <br />Interface Designer based in London</p>
        <u>Davidmatias33@Gmail.Com</u>
    </div>
    <div className="buttons">
        <div className="buttons-style">
            <button className="now">Facebook <i class="fa-solid fa-arrow-right"></i></button>
            <button className="now">Instagram  <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="buttons-style">
            <button className="now">Dribble  <i class="fa-solid fa-arrow-right"></i></button>
            <button className="now">Webflow <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
    </div>
    <footer className="footer">
        <p className="copyright">Copyright 2025 <b style={{color:"green"}}>Matias.</b> All rights reserved.</p>
        <div>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
        </div>
        <div className="arrow"><i class="fa-solid fa-arrow-up"></i></div>
    </footer>
    </section>
    </>
  )
}
export default Footer