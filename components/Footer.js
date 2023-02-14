import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Footer = ({dispatch, next,prev,pageNumber, }) => {

  const validPersonalInfo = useSelector(state => state.personalInfoValidation.value)
  const validExperiences = useSelector(state => state.experienceValidation.value)
  const validEducations= useSelector(state=>state.educationValidation.value)
  useEffect(()=>{
      console.log('footer validation')
      console.log(validExperiences)
    
  },[validExperiences])
  const selectedPageTitle=()=>{
    switch(pageNumber){
      case 1: return 'PersonalInfo'
      case 2: return 'Experiences'
      case 3: return 'Educations'
    
    }
  }
  const checkExperience=()=>{
    console.log('inside footer')
    console.log(validExperiences)
    let isValid=-1;
     validExperiences.map((exp)=>{
      if(!exp.position||!exp.employer||exp.start_date==false||exp.due_date==false){
        isValid=exp.id;
      }})
   console.log('herere')
   console.log(isValid)
    if(isValid ==-1){
      dispatch(next())
    }
  }
  
  const checkEducation=()=>{
    console.log('inside footer')
    console.log(validEducations)
    let isValid=-1;
    validEducations.map((edu)=>{
      if(!edu.institute||!edu.degree||edu.due_date==false){
        isValid=edu.id;
      }})
   console.log('herere')
   console.log(isValid)
    if(isValid ==-1){
      dispatch(next())
    }
  }
 /* const onFinish=async ()=>{
    const data={
      name:personalInfo.name,
      surname:personalInfo.surname,
      phone_number:personalInfo.phone_number,
      experiences:experiences,
      educations:educations,
      image:personalInfo.image,
      about_me:personalInfo.about_me,
    }

    const sendData= async()=>{
      axios.post('https://resume.redberryinternship.ge/api/cvs',data).then(res=>{data=res})
    }
    await sendData()

    dispatch(next())
   

  }*/
  return (
    <footer class="text-center  text-black mt-5 pt-10 pb-7 mb-1 ">
        <div>
           {pageNumber != 1?
           <div className="container px-6 pt-6">
             <div className="flex justify-between mb-6">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={()=>dispatch(prev())}>prev</button>
              <button  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
               onClick={()=>{
                if(pageNumber==2){
                checkExperience()}
                else{
                  checkEducation()
                }
                }}>
              {pageNumber == 3?'Finish':'Next'}
              </button>
             </div>
           </div>:
           <div className="container px-6 pt-6">
           <div className="flex justify-end mb-6">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 
              px-4 rounded" 
              onClick={()=>{
              if(validPersonalInfo.email && validPersonalInfo.surname&& 
              validPersonalInfo.name && validPersonalInfo.phone_number&&
              validPersonalInfo.image){dispatch(next())}}}>Next</button>
            </div>
          </div>}
        </div>
  </footer>
  )
}

export default Footer