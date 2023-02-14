import React, {useEffect, useState} from 'react'
import {setName,setSurname,setPhoneNumber,setEmail,setImage} from '../slices/validation/personalInfoValidationSlice'
import {removeImage,clearPersonalIfo,firstname,lastname,image,mail,phoneNumber,discription} from '../slices/personalInfoSlice'
import { useSelector } from 'react-redux'


const FULLNAME_REGEX= /[ა-ჰ]{2,}$/

const PersonalInfo = ({personalInfo,dispatch}) => {
  const validPersonalInfo = useSelector(state => state.personalInfoValidation.value)
  const[focusedName,setFocusedName]=useState(false);
  const[focusedSurname,setFocusedSurname]=useState(false);
  const[focusedEmail,setFocusedEmail]=useState(false);
  const[focusedPhoneNumber,setFocusedPhoneNumber]=useState(false);
  const[focusedImage,setFocusedImage]=useState(false);

  useEffect(()=>{
    console.log('prsonalInfo')
    console.log(personalInfo)},[personalInfo])

  const onNameChange=(e)=>{
    dispatch(firstname(e.target.value))
    dispatch(setName(FULLNAME_REGEX.test(e.target.value)))
  }

  const onSurnameChange=(e)=>{
    dispatch(lastname(e.target.value))
    dispatch(setSurname(FULLNAME_REGEX.test(e.target.value)))
  }

  const onEmailChange=(e)=>{
    dispatch(mail(e.target.value))
    if(e.target.value.length>12){
      let temp = e.target.value.slice(-12)
      console.log(temp)
      dispatch(setEmail(temp=='@redberry.ge'))
   }
   else{
    dispatch(setEmail(false))
   }

  }
  const onPhonenumberChange=(e)=>{
    dispatch(phoneNumber(e.target.value))
    
    console.log('target')
    console.log(e.target.value)
    if(e.target.value.length>4 && e.target.value.slice(0,4) =='+995'){
    if(e.target.value.length == 13)
     {   
         console.log(e.target.value.slice(4-e.target.value.length))
         let tempArr= Array.from(e.target.value.slice(4-e.target.value.length));
         let result= tempArr.findIndex(el=> el<'0' || el>'9')
         
         dispatch(setPhoneNumber(result<0))
       }
       else{
        dispatch(setPhoneNumber(false))
       }
    }
    else{
      dispatch(setPhoneNumber(false))
    } 
    //dispatch(setPhoneNumber(PHONE_NUMBER_REGEX.test(personalInfo.phone_number)))
  }

    const onImageChage=(e)=>{
    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.addEventListener('load',()=>{
      dispatch(image(reader.result))
      dispatch(setImage(true))
    })   
  }

  useEffect(()=>{
    console.log('personal info')
    console.log(personalInfo)
    console.log('validation')
    console.log(validPersonalInfo)
    
  },[personalInfo,validPersonalInfo])
 
  return (   
<form  id='personalInfo'>
   <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 
      border  border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white" id="grid-first-name" type="text" 
      placeholder="ჯოუ" pattern='[ა-ჰ]{2,}$' value={personalInfo.name} 
      onChange={e=>onNameChange(e)} 
      onBlur={()=>setFocusedName(true)} focused={focusedName.toString()} required/>
      <span className="text-gray-600 text-xs italic pt-3">
        Minimum of 2 symbols  no special charecters use Georgian alphabet
      </span>
    </div>
    <div className="w-full md:w-1/2 px-3">
       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Last Name
       </label>
       <input className="appearance-none block w-full bg-gray-100 text-gray-700 
       border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
     focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" 
       placeholder="დოუ" pattern='[ა-ჰ]{2,}$' value={personalInfo.surname} 
       onChange={e=>onSurnameChange(e)} onBlur={()=>setFocusedSurname(true)} focused={focusedSurname.toString()} required/>
      <span className="text-gray-600 text-xs italic pt-3">
        Minimum of 2 symbols no special charecters use Georgian alphabet
      </span>
    </div>
  </div>
  <div className="flex flex-wrap flex-row -mx-3 mb-2  ">
    <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0 flex flex-row items-center ">
        <h1 className="font-bold text-gray-600"  accept="image/png, image/jpeg ,image/webp">Upload Profile Picture</h1>
        <input type="file" id="files" class="hidden" onChange={e=>onImageChage(e)} 
        onBlur={()=>setFocusedImage(true)} focused={focusedImage.toString()} required/>
        <label for="files" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 m-5 border-b-4 
        border-blue-700 hover:border-blue-500 rounded ">
          Upload
        </label>
        
    </div>
   
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
        About myself(optional)
      </label>
      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 font-mono font-semibold
   bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 
     dark:placeholder-gray-40dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     placeholder="Write about yourself..." style={{resize:'none',color:'black'}} value={personalInfo.about_me} 
     onChange={e=>dispatch(discription(e.target.value))}></textarea>
    </div>
    </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold 
        mb-2" for="email">
        e-mail
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 
      border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none 
    focus:bg-white focus:border-gray-500" id="grid-password" type="email" 
      placeholder="JoeDoe@redberry.ge" pattern='^[\w.+\-]+@redberry\.ge$' value={personalInfo.email} 
      onChange={e=>onEmailChange(e)}  onBlur={()=>setFocusedEmail(true)} focused={focusedEmail.toString()} required/>
      <span className="text-gray-600 text-xs italic pt-3">
        e-mail must be finished with @redberry.ge
      </span>
      </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="phone">
        Phone Number
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 
      border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none
    focus:bg-white focus:border-gray-500" id="phone" type="tel" 
      pattern='^\+995[]?\d{3}[]?\d{2}[]?\d{2}[]?\d{2}' placeholder="+995 558-25-60-60" 
      value={personalInfo.phone_number} onChange={e=>onPhonenumberChange(e)}  
      onBlur={()=>setFocusedPhoneNumber(true)} focused={focusedPhoneNumber.toString()} 
      onfocus={()=>setFocusedPhoneNumber(true)} required/>
      <span className="text-gray-600 text-xs italic pt-3">
        Phone Number needs to fit in Georgian Phone Number formatting
      </span>
    </div>
  </div>
  <div className="container px-6 pt-6">
      <div className="flex justify-start mb-6">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold 
          py-2 px-4 rounded" onClick={()=>dispatch(clearPersonalIfo())}>clear</button>
      </div>
  </div>
  <img id="photo"/>
</form>

  )
}

export default PersonalInfo