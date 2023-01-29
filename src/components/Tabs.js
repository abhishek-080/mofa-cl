import React from 'react'
import { useState } from 'react';

const Tabs = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";
    return (
      <div className='border border-solid-800'>
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active")}`}  
            onClick={() => handleClick(1)}
          >
           News/Notices
          </button>
          <button
            className={`tab ${checkActive(2, "active")}`}
            onClick={() => handleClick(2)}
          >
           Model Law
          </button>
        
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>

            <div>

            <div className='border text-left p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

            <div className='border text-left  p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

            <div className='border text-left p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

            
            <div className='border text-left p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

            
            <div className='border text-left p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

             
            <div className='border text-left p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

            </div>
          </div>
          <div className={`panel ${checkActive(2, "active")}`}>
<div>

            <div className='border text-left p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

            <div className='border text-left  p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

            <div className='border text-left p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

            
            <div className='border text-left p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

            
            <div className='border text-left p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

             
            <div className='border text-left p-2 text-base text-blue-600 hover:text-red-700' >
            <p className='cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing lacinia quam.</p>

            </div>

            </div>          </div>
         
        </div>
      </div>
    );
  };

  export default Tabs;