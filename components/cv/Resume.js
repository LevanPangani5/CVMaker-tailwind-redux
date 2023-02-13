import React from 'react'
import EducationReader from './EducationReader'
import ExperienceReader from './ExperienceReader'
import PersonalInfoReader from './PersonalInfoReader'
import {BsPersonCircle} from 'react-icons/bs'

const Resume = ({personalInfo, educations, experiences}) => {
  return (
    <div className='pl-10 pb-10 pr-10  h-full '>
       <PersonalInfoReader personalInfo={personalInfo}/>
       {Boolean(experiences[0].position !=0 ||experiences[0].employer!='' || experiences[0].start_date !='' ||experiences[0].due_date !='' || experiences[0].discription !='')&&
       <div className='text-2xl font-bold mb-3 text-orange-600' id='subTitle'>
          <h1>Experience</h1>
       </div>
       }
       
       {
        experiences.map(experience=>(
          <ExperienceReader experience={experience}/>
        ))
       }
       {Boolean(educations[0].institute !='' || educations[0].degree !='' || educations[0].due_date !='' || educations[0].discription !='')&&
       <div className='text-2xl font-bold mb-3 text-orange-600 ' id='subTitle'>
          <h1>Education</h1>
       </div>
       }
       
       {
        educations.map((education,index)=>(
          
          <EducationReader education={education} index={index} last ={educations.length-1}/>
          
          
          
      )
       )}

      
        <BsPersonCircle className=' h-10 w-10 mt-40  text-orange-700 bottom-0'/>
       

    </div>   
  )
}

export default Resume