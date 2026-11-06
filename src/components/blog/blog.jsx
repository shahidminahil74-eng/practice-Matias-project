import React from "react";
import laptop from '../../assets/laptop1.png'
import laptop1 from '../../assets/laptop2.png'
import "./blog.css";

function Blog() {
  return (
    <>
    <section className="blogs">
  <div className="left-side">
    <p className="label">My Blogs</p>
    <h1 className="h1">Recent Posts</h1>

    <button className="more">
      <span><i class="fa-solid fa-arrow-right"></i></span>
      <span>Click More Work</span>
    </button>
  </div>

  <div className="right-side">
    <div className="post">
      <div className="details">
        <span className="date">October 19, 2023</span>
        <h2 className="h2">Brand Design That<br />Helps The Company<br />Grow</h2>
      </div>

      <img className="picture" src={laptop} alt="Brand design" />

      <button className="eye"><i class="fa-solid fa-eye"></i></button>
    </div>

    <div className="post">
      <div className="details">
        <span className="date">October 19, 2023</span>
        <h2 className="h2">Fresh Design Ideas &<br />Inspiration For 2023</h2>
      </div>

       <img src={laptop1} alt="Design inspiration" /> 

      <button className="eye"><i class="fa-solid fa-eye"></i></button>
    </div>
    <div className="post">
      <div className="details">
        <span className="date">October 19, 2023</span>
        <h2 className="h2">Fresh Design Ideas &<br />Inspiration For 2023</h2>
      </div>

       <img src={laptop} alt="Design inspiration" /> 

      <button className="eye"><i class="fa-solid fa-eye"></i></button>
    </div>
  </div>
  
</section>
    
    
    </>
  )
}
export default Blog