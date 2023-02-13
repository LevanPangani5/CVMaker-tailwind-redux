import React, { useEffect } from 'react'
import Experience from './Experience'
import {addExperience,removeExperience,clearExperience} from '../slices/experienceSlice'
import {addExperienceValidation,removeExperienceValidation,clearExperienceValidation} from '../slices/validation/experienceValidationSlice'
import { useSelector } from 'react-redux'

const Experiences = ({experiences,dispatch}) => {
  const validExperience = useSelector(state => state.experienceValidation.value)
    useEffect(()=>{
        console.log('experiences.js')
        console.log(experiences)
        console.log(validExperience)
    },[experiences])
  return (
    <div>
           {experiences.map((experience)=>(
            <div>
            <Experience experience={experience} dispatch={dispatch}/>
            {Boolean(experiences.length>1)&&(
           <button class="bg-red-500 hover:bg-red-400 text-white
            font-bold py-2 px-4 border-b-4 border-red-700 
            hover:border-red-500 rounded mt-5" onClick={()=>{
              dispatch(removeExperience(experience.id))
              dispatch(removeExperienceValidation(experience.id))
              }}>
            Remove
            </button>
            
            )}
            <hr className='my-8 border'/>
            </div>
           ))}
           <div className=' flex justify-between  items-center'>
               <button  class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 
               px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
               onClick={
                ()=>{dispatch(addExperience())
                     dispatch(addExperienceValidation())
                     }}>
                    Add Experience
                </button>
               {/* <button  class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 
               px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
               onClick={()=>{
                     dispatch(clearExperience())
                     dispatch(clearExperienceValidation())
                     }}>
                    clear all
                    </button>*/}
           </div>
    </div>
    
  )
}

export default Experiences