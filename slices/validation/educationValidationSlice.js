import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[
        {id:0, institute:false, degree:false, due_date:false,},
    ]
}

export const educationValidationSlice = createSlice({
    name:'educationValidation',
    initialState,
    reducers:{
        addEducationValidation:(state)=>{
            state.value.push({id:state.value[state.value.length-1].id+1,
             institute:false,degree:false, due_date:false,discription:false})
         },
         removeEducationValidation:(state,action)=>{
             if(state.value.length >1)
            // state.value=state.value.splice(action.payload,0)
            state.value=state.value.filter((experience)=>experience.id !== action.payload)
         },
         setInstitute:(state,action)=>{
            state.value.map((education)=>{
             if(education.id===action.payload.id){
                 education.institute=action.payload.institute
             }
            })
         },
         setDegree:(state,action)=>{
             state.value.map((education)=>{
                 if(education.id===action.payload.id){
                     education.degree=action.payload.degree
                 }
                })
         },
         setFinishDate:(state,action)=>{
             state.value.map((education)=>{
                 if(education.id===action.payload.id){
                     education.due_date=action.payload.due_date
                 }
                })
         },
         
         clearEducationValidation:(state)=>{
                state.value=[ {id:0,institute:false,degree:false, due_date:false,},]
         }
    }
})

export const{clearEducationValidation,setFinishDate,setDegree,setInstitute,removeEducationValidation,
addEducationValidation}=educationValidationSlice.actions
export default educationValidationSlice.reducer