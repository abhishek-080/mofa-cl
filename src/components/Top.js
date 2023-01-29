import React from 'react'
import book from './images/book.png';
import law from './images/balance.png';
import mail from './images/contact-mail.png';
import android from './images/android-logo.png';
import phone from './images/phone-call.png';





const Top = () => {
  return (
    <div>
      <div className='topcont flex flex-wrap justify-start pl-6 p-3 gap-3 border-solid border-2 sm:hidden '>

        <div className='p-2 text-blue-600 hover:text-red-600 flex flex-nowrap gap-2'>
          <div className='h-6'>
            <img src={book} alt="" className="h-5" />
          </div>

          <div className='cursor-pointer text-base border-r-2  pr-3'>
            Scholarship application
          </div>
        </div>

        <div className='p-2 text-blue-600 hover:text-red-600 flex flex-nowrap gap-2 '>
          <div className='h-6'>
            <img src={law} alt="" className="h-5" />
          </div>

          <div className='cursor-pointer text-base border-r-2  pr-3'>
            Model Law
          </div>
        </div>

        <div className='p-2 text-blue-600 hover:text-red-600 flex flex-nowrap gap-2'>
          <div className='h-6'>
            <img src={mail} alt="" className="h-5" />
          </div>

          <div className='cursor-pointer text-base border-r-2  pr-3'>
            Telephone Directory
          </div>
        </div>

        <div className='p-1 text-blue-600 hover:text-red-600 flex flex-nowrap gap-2'>
          <div className='h-6'>
            <img src={phone} alt="" className="h-5" />
          </div>

          <div className='cursor-pointer text-base border-r-2  pr-3'>
            Telephone Directory
          </div>
        </div>

        <div className='p-1 text-blue-600 hover:text-red-600 flex flex-nowrap gap-2'>
          <div className='h-6'>
            <img src={android} alt="" className="h-5" />
          </div>

          <div className='cursor-pointer text-base border-r-2  pr-3'>
            Telephone Directory
          </div>
        </div>

        <div className='p-1 text-blue-600 hover:text-red-600 flex flex-nowrap gap-2'>
          

          <div className='cursor-pointer text-base border-r-2  pr-3'>
         Local Budget
          </div>
        </div>

        <div className='p-1 text-blue-600 hover:text-red-600 flex flex-nowrap gap-2'>
          

          <div className='cursor-pointer text-base border-r-2  pr-3'>
         English
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top