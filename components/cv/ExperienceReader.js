import React from 'react'

const ExperienceReader = ({experience}) => {
  return (
    <div className='' id='wrapper'>
       <div className='flex flex-col' id='job info'>
       {Boolean(experience.position !='' || experience.employer !='')&&
       <div className='font-semibold' id='jobPosition'>
         <p> {experience.position} , {experience.employer}</p>
        </div>
       }
        
        {Boolean(experience.start_date !='' || experience.due_date !='')&&
        <div id='date'>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
         {experience.start_date} - {experience.due_date}
        </label>
        </div>}
        
       </div>
       <div className='mt-1' id='discription'>  
         <div className='break-words' id='discription'>
            <p>
                {experience.discription}
            </p>
           </div>
        </div>
        {Boolean(experience.position !=0 && experience.employer!='' && experience.start_date !='' && experience.due_date !='' && experience.discription !='')&&
        <div className=' my-3 ' id='border'>
           <hr className=' border'/>
            </div>
       }
       
    </div>
       
  
  )
}

export default ExperienceReader