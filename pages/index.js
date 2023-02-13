import { useSelector, useDispatch } from 'react-redux'
import { next, prev,goToStart } from '../slices/startSlice'
import PersonalInfo from '../components/PersonalInfo'
import Educations from '../components/Educations'
import Experiences from '../components/Experiences'
import Landing from '../components/Landing'
import Header from '../components/Header'
import Resume from'../components/cv/Resume'
import Footer from '../components/Footer'
import Restart from '../components/Restart'
import {BsXLg} from 'react-icons/bs'
import { useEffect, useState } from 'react'
const Home = () => {
  
  const pageNumber = useSelector((state) => state.cvlistener.value)
  const experiences =useSelector(state=>state.experiences.value)
  const educations = useSelector(state=>state.education.value)
  const personalInfo = useSelector(state=>state.personalInfo.value)
  const dispatch = useDispatch()
  const[popup,setPopup] =useState(true)
  const selectedPage=()=>{
    switch(pageNumber){
      case 0: return<Landing dispatch={dispatch} next={next}/>
      case 1: return<PersonalInfo personalInfo={personalInfo} dispatch={dispatch} next={next}/>
      case 2: return<Experiences experiences={experiences} dispatch={dispatch}/>
      case 3: return<Educations educations={educations} dispatch={dispatch}/>
      case 4: return<Resume educations={educations} experiences={experiences} personalInfo={personalInfo} />
      default: <Landing/>
    }
  }

    const selectedPageTitle=()=>{
      switch(pageNumber){
        case 1: return 'Personal Information'
        case 2: return 'Experience'
        case 3: return 'Education'
      
      }
    }
  return (
    <div className=' overflow-x-hidden ' id ='wrapper'>
    <div className='flex flex-row items-center justify-center w-screen lg:h-full relative'>
     {pageNumber== 0 && selectedPage(pageNumber)}
     {pageNumber== 4 && 
     <div className='flex flex-row w-screen  '>
       
       <div className='mt-11 ml-12 pl-10  static  ' >
       
        <Restart className='' dispatch={dispatch} goToStart={goToStart} />
      
      </div>
     <div className='w-full flex flex-row'>
     
     <div className=' flex justify-center relative'>
     <div className='flex  w-3/5 sticky border-black border mt-7 mb-20'>
      {selectedPage(pageNumber)}
     </div></div>
       <div className='w-450 h-20 mt-7 bg-white flex flex-row rounded-md mr-2' style={{boxShadow:'0px 1px 24px 1px rgba(0,0,0,0.57)',display:popup===false &&'none'  }}>
        <div className='m-3 font-medium leading-7 '>
                Resume was sent succesfuly
                </div>
         <div>
         <button onClick={()=>setPopup(false)}>
          <BsXLg className='mt-2 mr-2  w-3 '/>
          </button>
          </div>       
       </div>
     </div></div> }
     
    <div className="  w-5/10 lg:h-full bg-gray-100 pl-10 pr-10">
      <div className='flex items-center' id='header'>
         {(pageNumber!= 0 && pageNumber!=4) && <Restart dispatch={dispatch} goToStart={goToStart}/>}
         {(pageNumber != 0 && pageNumber !=4)&&(<Header 
         title={selectedPageTitle(pageNumber)} 
         pageNumber={pageNumber} 
         goToStart={goToStart}
         dispatch={dispatch}
      />
      )}
      </div>   
      {(pageNumber!=0 && pageNumber!=4) && selectedPage(pageNumber)}
      
       {Boolean(pageNumber!=0 && pageNumber !=4)&&(<Footer 
       dispatch={dispatch} 
       next={next} 
       prev={prev} 
       personalInfo={personalInfo}
       educations={educations}
       experiences={experiences}
       pageNumber={pageNumber}/>)
       }
    </div>
    {(pageNumber!= 0 && pageNumber!=4) && <div  className='  contain relative top-0 bottom-0 right-0 w-205'><Resume educations={educations} experiences={experiences} personalInfo={personalInfo} /></div>}
   

    </div>
    </div>
  )
}

export default Home
