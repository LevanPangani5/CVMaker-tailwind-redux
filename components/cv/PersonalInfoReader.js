import React, {useEffect, useState} from 'react'
import {BsTelephoneFill} from 'react-icons/bs'

const PersonalInfoReader = ({personalInfo}) => {
     const[imageObj,setImageObj] =useState({})
     const[phone, setPhone]=useState('')
    useEffect(()=>{
       setPhone(personalInfo.phone_number.slice(0,4) +'\xa0'+ personalInfo.phone_number.slice(4,7)+' '
       +personalInfo.phone_number.slice(7,9)+ ' '+personalInfo.phone_number.slice(9,11)+' '
       +personalInfo.phone_number.slice(11,13)
       )
      try{
        //setImageObj(URL.createObjectURL(personalInfo.image))
        // var arrayBufferView = new Uint8Array(personalInfo.image );
        // var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
       //var urlCreator = window.URL || window.webkitURL;
       //setImageObj(/*urlCreator.createObjectURL( blob )*/URL.createObjectURL(personalInfo.image));
        setImageObj(personalInfo.image)
       // console.log('url')
       // setImageObj(personalInfo.image.toString('base64'))
      // console.log('here too')

      }
      catch(error)
      {
        setImageObj('')
         console.log(error)
      }
       

        console.log('Personalinforeaader')
        console.log(personalInfo)
    },[personalInfo])

    
  return (
    <div className='w-full flex flex-col lg:grid ' id='wrapper'>
        <div className='flex flex-row justify-between lg:grid lg:grid-cols-10' id='top'>
            <div className='pt-10  pb-3  pr-0 lg:col-span-6' id='left'>
               <div className='text-4xl font-bold mb-3 text-orange-600'  id="titleContainer">
                 <h1>{personalInfo.name} {personalInfo.surname}</h1>
               </div>
               <div className='flex flex-col text-gray-700' id="Info">
               {Boolean(personalInfo.email !='')&&
                <div className='mb-2' id='phoneNumber'>
                <p> @ {personalInfo.email}</p>
             </div>
              }
               {Boolean(personalInfo.phone_number !='' )&&
                <div className='flex flex-row items-center' >
                <BsTelephoneFill className='mr-2'/>
                <p> {phone}</p>
             </div>
              }
                  {Boolean(personalInfo.about_me !='')&&
                   <div className='mt-3' id='discription'>
                   <div className='text-2xl font-bold mb-2 text-orange-600' id='subTitle'>
                      <h1> About myself</h1>
                  </div>
                  <div className='break-words' id='discription'>
                      <p>
                        {personalInfo.about_me}
                      </p>
                  </div>
                </div>
                  } 
                 
               </div>
            </div>
            <div  className='lg:col-span-4 mt-5 mr-5' id='right'>
              <img className=' w-50 h-60 rounded-full 
              lg:h-45 lg:w-60'  src={imageObj}  style={{display:imageObj==''&&'none'}}/>
           </div>
        </div>
        {Boolean(personalInfo.email !='' && personalInfo.phone_number !='' && personalInfo.name !='' && personalInfo.surname !='')&&
        <div className=' mb-5 mt-2' id='border'>
        <hr className=' border'/>
         </div>
        }
        
    </div>
  )
}

export default PersonalInfoReader