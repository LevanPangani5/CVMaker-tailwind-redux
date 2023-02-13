import React from 'react'

const EducationReader = ({education , index,last}) => {
  return (
    <div className='' id='wrapper'>
    <div className='flex flex-col' id='job info'>
      {Boolean(education.institute !='' || education.degree !='') &&
      <div className='font-semibold' id='jobPosition'>
      <p> {education.institute} , {education.degree}</p>
     </div>
      }
     
     <div id='date'>
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      {education.due_date} 
     </label>
     </div>
    </div>
    <div className='mt-1' id='discription'>  
      <div id='discription'>
         <p>
             {education.discription}
         </p>
        </div>
     </div>
     {Boolean(index != last) && 
     <div className=' my-7 ' id='border'>
        <hr className=' border'/>
         </div>
      }
     
 </div>
    
  )
}

export default EducationReader