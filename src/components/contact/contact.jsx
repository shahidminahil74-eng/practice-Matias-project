import React from "react";
import "./contact.css";
// import Footer from "../footer/footer";

function Contact() {
  return (
    <>
    <section>
    <center>
        <h1 className="heading1">Let's Start Something</h1>
        <i className="text1">Home / <b style={{color:"#c6ff32"}}>Let's Start Something</b></i>
    </center>
        <div className="arrangement">
        <div className="left">
    <h1>Leave A Reply</h1>
    <p className="paragraph1">Your email address will not be published. Required fields are marked*</p>
    <form action="" className="form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Write Comments" rows={6} required></textarea>
        <button className="button" type="submit">Submit Comment <i class="fa-solid fa-arrow-right"></i></button>
    </form>
    </div>
    <aside className="right">
      <h2 className="contact-heading">Feel Free To Contact Me <br /> Anytime</h2>
      <div className="cards">
        <p>Email</p>
        <p style={{color:"white",fontSize:"22px"}}>Davidmatias333@Gmail.Com</p>
      </div>
      <div className="cards">
        <p>Phone</p>
        <p style={{color:"white",fontSize:"22px"}}>+(2) 871 382 032</p>
      </div>
      <div className="cards">
        <p>Address</p>
        <p style={{color:"white",fontSize:"22px"}}>Victoria Street London</p>
      </div>
    </aside>
    </div>
    </section>
    {/* <Footer/> */}
    
    </>
  )
}
export default Contact