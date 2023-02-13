import React, { useEffect } from 'react'
import Education from './Education'
import {addEducation,removeEducation,clearEducation} from '../slices/educationSlice'
import {clearEducationValidation,removeEducationValidation,
  addEducationValidation} from '../slices/validation/educationValidationSlice'
const Educations = ({educations,dispatch}) => {
  
     return (
      <div>
       {educations.map((education)=>(
        <div>
        <Education education={education} dispatch={dispatch}/>
        {Boolean(educations.length>1)&&(
       <button class="bg-red-500 hover:bg-red-400 text-white
        font-bold py-2 px-4 border-b-4 border-red-700 
        hover:border-red-500 rounded mt-5" onClick={()=>dispatch(removeEducation(education.id))}>
        Remove
        </button>
        
        )}
        <hr className='my-8 border'/>
        </div>
       ))}
       <div className=' flex justify-between items-center'>
           <button  class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 
           px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
           onClick={
            ()=>{dispatch(addEducation())
                dispatch(addEducationValidation())
           }}>
                Add Education
            </button>
            <button  class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 
               px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
               onClick={()=>{
                     dispatch(clearEducation())
                     dispatch(clearEducationValidation())
                     }}>
                    clear all
                    </button>
       </div>
</div>
  )
}

export default Educations