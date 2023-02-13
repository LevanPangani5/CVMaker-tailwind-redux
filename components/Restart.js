import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { clearEducation } from '../slices/educationSlice'
import { clearExperience } from '../slices/experienceSlice'
import { clearPersonalIfo } from '../slices/personalInfoSlice'
import { clearEducationValidation } from '../slices/validation/educationValidationSlice'

const Restart = ({dispatch, goToStart}) => {
  return (
    <div className='px-4 py-2 text-xs lg:px-5 lg:py-3 lg:text-base bg-gray-50 rounded-full w-5 h-10
       flex items-center justify-center mr-5 '>
        <button onClick={()=>{dispatch(goToStart())
       dispatch(clearEducation())
        dispatch(clearEducationValidation())
        dispatch(clearPersonalIfo())
        dispatch(clearEducationValidation())
        dispatch(clearExperience())
        dispatch(clearEducationValidation())
        }}>
          <IoIosArrowBack className='h-5 w-5'/>
        </button>
      </div>
  )
}

export default Restart