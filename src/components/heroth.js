import React from 'react'
import img2 from "./images/1.jpg";


const Heroth = () => {
    return (
        <div className='flex-wrap text-center justify-center flex flex-col p-5'>

            <div className='title text-center text-blue-800 font-bold'>
                Rt. Hon'ble Minister
            </div>

            <div>

                <img scr={img2} alt="" className='h-[100px] w-[100px]' />
            </div>


            <div className='text-center '>
                Amanlal Modi
            </div>
        </div>
    )
}

export default Heroth