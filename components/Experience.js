import React, { useEffect,useState } from 'react'
import {position,employer,startDate,finishDate,discription} from '../slices/experienceSlice'
import {setPosition,setEmployer,setStartDate,setfinishDate} from '../slices/validation/experienceValidationSlice'


const TEXT_REGEX= /[ა-ჰa-zA-Z0-9_.& ]{2,}$/
const DATE_REGEX= /\d{3}-\d{2}-\d{2}$/
const Experience = ({experience,dispatch, expereiceValidation}) => {

//const validPersonalInfo = useSelector(state => state.personalInfoValidation.value)
  const[focusedPosition,setFocusedPosition]=useState(false);
  const[focusedEmployer,setFocusedEmployer]=useState(false);
  const[focusedStartDate,setFocusedStartDate]=useState(false);
  const[focusedDueDate,setFocusedDueDate]=useState(false);

  const onPositionChange=(e)=>{
    dispatch(position({id:experience.id, position:e.target.value}))
    console.log('is position')
    console.log(TEXT_REGEX.test(e.target.value))
    dispatch(setPosition({id:experience.id ,position:TEXT_REGEX.test(e.target.value)}))
  }

  const onEmployerChange=(e)=>{
    dispatch(employer({id:experience.id,employer:e.target.value}))
    console.log('is employer')
    console.log(TEXT_REGEX.test(e.target.value))
    dispatch(setEmployer({id:experience.id, employer:TEXT_REGEX.test(e.target.value)}))
  }

  const onStartDateChange=(e)=>{
    dispatch(startDate({id:experience.id,start_date:e.target.value}))
    console.log('is start date')
    console.log(DATE_REGEX.test(e.target.value))
    dispatch(setStartDate({id:experience.id ,start_date:DATE_REGEX.test(e.target.value)}))
  }

  const onDueDateChange=(e)=>{
    dispatch(finishDate({id:experience.id ,due_date:e.target.value}))
    console.log('is due date')
    console.log(DATE_REGEX.test(e.target.value))
    dispatch(setfinishDate({id:experience.id ,due_date:DATE_REGEX.test(e.target.value)}))
  }

  
  useEffect(()=>{
    console.log('experience')
    console.log(experience)
  },[experience])
  return (
    <div className='text-neutral-900' >
     <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 
        text-xs font-bold mb-2">
          Position
        </label>
        <input className="appearance-none block w-full bg-gray-200 
        text-gray-700 border border-gray-200 rounded py-3 px-4  
        leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" value={experience.position} 
        onChange={(e)=>onPositionChange(e)} 
        id="Posion" type="text" placeholder="ოქროს ხელება ყველაფერჩიკი" pattern='[ა-ჰa-zA-Z0-9_.& ]{2,}$'
        onBlur={()=>setFocusedPosition(true)} focused={focusedPosition.toString()}
        required/>
        <span className="text-gray-600 text-xs italic pt-3">Minimum 2 symbols</span>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 
        text-xs font-bold mb-2" >
          Employer
        </label>
        <input className="appearance-none block w-full bg-gray-200 
        text-gray-700 border border-gray-200 rounded py-3 px-4  
        leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" id="Posion" type="text" 
        placeholder="რედბერი ;)" value={experience.employer} 
        onChange={e=>onEmployerChange(e)} 
        onBlur={()=>setFocusedEmployer(true)} focused={focusedEmployer.toString()}
        pattern='[ა-ჰa-zA-Z0-9_.& ]{2,}$'
        required/>
        <span className="text-gray-600 text-xs italic pt-3">Minimum 2 symbols</span>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs 
      font-bold mb-2" for="grid-first-name">
       Start Date
      </label>
      <input className="appearance-none block w-full bg-gray-200 
      text-gray-700 border border-gray-200 rounded py-3 px-4 
      leading-tight focus:outline-none focus:bg-white 
      focus:border-gray-500" id="start-date" type="date" value={experience.start_date} 
      onChange={e=>onStartDateChange(e)}
      onBlur={()=>setFocusedStartDate(true)} focused={focusedStartDate.toString()}
      pattern='\d{3}-\d{2}-\d{2}$'
      required/>
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
       type="date" value={experience.due_date} 
       onChange={e=>onDueDateChange(e)}
       onBlur={()=>setFocusedDueDate(true)} focused={focusedDueDate.toString()}
       onfocus={()=>setFocusedDueDate(true)}
       pattern='\d{3}-\d{2}-\d{2}$'
       required/>
      </div> 
    </div>  
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3 text-neutral-900">
      <label className="block uppercase tracking-wide text-gray-700 text-xs 
      font-bold mb-2" for="email">
          Discription
        </label>
  <textarea id="message" rows="4" className="block p-2.5 w-full text-sm  font-mono font-semibold
  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
  focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 
  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  placeholder="Role position and general dicription..." style={{resize:'none',color:'black'}}
  value={experience.discription} onChange={(e)=>dispatch(discription({id:experience.id, discription:e.target.value}))} required></textarea>
    </div>
    </div>  
    </div>
  )
}

export default Experience