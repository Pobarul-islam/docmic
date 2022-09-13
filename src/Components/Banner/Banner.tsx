import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
       <div className="banner">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='bannerCircle'>
     <img className='bannerImg' src="https://i.ibb.co/c24fqf7/pose-2.png" alt='banner'/>
   </div>
    <div>
      <h1 className="text-5xl font-bold">Your <span className='healthText'>Health</span> Is Our <br /> Top <span className='priorityText'>Priority</span></h1>
      <p className="py-6">There are many variations of passages of lpsum <br /> available, but the majority hae suffered.</p>
      <button className="btn meetBtn">Meet Our Specialist</button>
    </div>
  </div>
</div>
    );
};

export default Banner;