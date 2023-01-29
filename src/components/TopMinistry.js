import React from 'react'
import logo from "./images/site_logo.png"
import flag from "./images/np_flag.gif"

const TopMinistry = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-items-center align-items-center gap-24 lg:pl-20 pt-5 pr-3 pb-8'>
        <div className='site-logo'>
          <img src={logo} alt='' className='h-24' />
        </div>

        <div className='text-center flex flex-col '>
          <div className='font-bold '>
            {/* नेपाल सरकार */}
            Government of Nepal
          </div>
          <div className='font-bold text-3xl text-red-700 mt-3'>

            {/* सङ्‍घीय मामिला तथा सामान्य प्रशासन मन्त्रालय */}
            Ministry of Federal Affairs & General Administration

          </div>
          <div className='font-bold mt-3'>

            {/* सिंहदरबार, काठमाडौँ */}
            Singhadarbar, Kathmandu

          </div>
        </div>

        <div className='flag'>
          <img src={flag} alt="" className='h-24' />
        </div>
      </div>
    </div>
  )
}

export default TopMinistry