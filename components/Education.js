import React, { useEffect, useState } from 'react'
import {removeData,educationCenter,degreeQuality,finishDate,discription} from '../slices/educationSlice'
import {setFinishDate,setDegree,setInstitute} from '../slices/validation/educationValidationSlice'
import { setfinishDate } from '../slices/validation/experienceValidationSlice'

const TEXT_REGEX= /[ა-ჰa-zA-Z0-9_.& ]{2,}$/
const DATE_REGEX= /\d{3}-\d{2}-\d{2}$/

function Education({education,dispatch}) {

  const[degrees, setDegree]=useState([])
  const[focusedInstitute,setFocusedInstitute]=useState(false);
  const[focusedDegree,setFocusedDegree]=useState(false);
  const[focusedDueDate,setFocusedDueDate]=useState(false);
  useEffect(()=>{
    const getDegrees=async()=>{
        const data = await fetch("https://resume.redberryinternship.ge/api/degrees")
         const tempDegrees=await data.json()
         setDegree(tempDegrees)
    }
    getDegrees();
  },[])
  useEffect(()=>{
    console.log('education.js')
    console.log(education)
  },[education])

  const onInstituteCHange=(e)=>{
    dispatch(educationCenter({id:education.id, institute:e.target.value}))
    console.log('oninstitue change')
    console.log(TEXT_REGEX.test(e.target.value))
    dispatch(setInstitute({id:education.id,institute:TEXT_REGEX.test(e.target.value)}))
  }
  const onDegreeChange=(e)=>{
    dispatch(degreeQuality({id:education.id, degree:e.target.value}))
    dispatch(setDegree({id:education.id,degree:true}))
  }

  const onDueDateChange=(e)=>{
    dispatch(finishDate({id:education.id ,due_date:e.target.value}))
    console.log('on due date change')
    console.log(DATE_REGEX.test(e.target.value))
    dispatch(setfinishDate({id:education.id,due_date:DATE_REGEX.test(e.target.value)}))
  }    
  return (
    <div>
     <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 
        text-xs font-bold mb-2">   
            Academy/University/College...
        </label>
        <input className="appearance-none block w-full bg-gray-200 
        text-gray-700 border border-gray-200 rounded py-3 px-4  
        leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" id="Posion" type="text" 
        placeholder="ჯავახიშვილი ..." value={education.institute} 
        onChange={e=>onInstituteCHange(e)}
        onBlur={()=>setFocusedInstitute(true)} focused={focusedInstitute.toString()}
        pattern='[ა-ჰa-zA-Z0-9_.& ]{2,}$'
        required/>
        <span className="text-gray-600 text-xs italic pt-3">Minimum 2 symbols</span>
      </div>
    </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs 
      font-bold mb-2" for="grid-first-name">
        Degree quality
      </label>
      <select className="block appearance-none w-full bg-gray-200 border border-gray-200
       text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white 
       focus:border-gray-500" id="grid-state" value={education.degree} 
       onChange={e=>onDegreeChange(e)}
       onBlur={()=>setFocusedDegree(true)} focused={focusedDegree.toString()}
       required>
       {degrees.map(obj=>(
        <option className=" bg-gray-200 font-semibold "  value={obj.title} >
           {obj.title}
        </option>
        
        ))}
        </select>
      </div>  
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs 
      font-bold mb-2" for="grid-first-name">
      Due Date
      </label>
      <input className="appearance-none block w-full bg-gray-200
       text-gray-700 border border-gray-200 rounded py-3 px-4 
       leading-tight focus:outline-none focus:bg-white 
       focus:border-gray-500" id="start-date" 
       type="date" value={education.due_date} 
       onChange={e=>onDueDateChange(e)}
       onBlur={()=>setFocusedDueDate(true)} focused={focusedDueDate.toString()}
       pattern='\d{3}-\d{2}-\d{2}$'
       required/>
      </div> 
    </div>  
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs 
      font-bold mb-2">
          Discription
        </label>
  <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 font-mono font-semibold
  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
  focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 
  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  placeholder="Education discription..." style={{resize:'none',color:'black'}}
   value={education.discription} onChange={e=>dispatch(discription({id:education.id , discription:e.target.value}))} required></textarea>
      </div>
    </div>  
    <div className="container  pt-6">
            <div className="flex justify-start mb-6">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(removeData())}>clear</button>
            </div>
          </div>
    </div>
  )
}

export default Education