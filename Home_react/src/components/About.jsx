import React from 'react';
import aboutimage from '../images/hero.png';

function About() {
  return (
    <div className='about'>
        <div className='about-model'>
            <img src={aboutimage} alt='about image'/>
        </div>
        <div className='about-text'>
            <h2>We Are SquareFeets <br/>The Best Property Portal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Atque adipisci molestiae quidem quod neque nam libero praesentium reiciendis? 
                Animi neque ipsa eaque accusamus natus atque enim totam corrupti placeat vitae!</p>
             <button>View More Details</button>   
        </div>
      
    </div>
  )
}

export default About
