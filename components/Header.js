import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'

const Header = ({title,pageNumber ,dispatch,goToStart}) => {
  return (
    <div className='flex flex-1 flex-col p-5 lg:col-span-6' >
    {/*Header*/}
    <header className='flex items-center justify-between'>
    
        <h1 className='w-52 cursor-pointer text-xl 
        font-extralight sm:w-88'>
          
          {title}
          
        </h1>
        <h1 className='w-52 cursor-pointer text-xl 
        font-extralight sm:w-88'>
          
           Making CVs never have been so fun right ;)
        </h1>
        <div className='rounded-full bg-rose-400 text-white
        px-4 py-2 text-xs lg:px-5 lg:py-3 lg:text-base'>{pageNumber}/3</div>
    </header>
    <hr className='my-3 border'/>
    </div>
  )
}

export default Header