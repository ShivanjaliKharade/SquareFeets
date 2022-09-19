import React from 'react'
import Home from './Home';

function Header() {
  return (
    <div className='header'>
        <Home/>
        <div className='intro'>
            <p>Looking fora Property !</p>
            <h1><span>Buy</span>and<span>Sell</span>Properties</h1>
            <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur asperiores quas et ipsum ullam, provident repellendus laboriosam 
            accusantium voluptatum minima recusandae ut praesentium deserunt sit debitis itaque iusto. Voluptate, quos.</p>
            <a href='#' className='header-btn'>Details</a>
        </div>
    </div>
  )
}

export default Header;
