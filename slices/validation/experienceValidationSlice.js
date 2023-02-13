import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[
        {id:0,position:false, employer:false,start_date:false,due_date:false}
    ]
}

export const experienceValidationSlice = createSlice({
    name:'experienceValidation',
    initialState,
    reducers:{
        addExperienceValidation:(state)=>{
            state.value.push({id:state.value[state.value.length-1].id+1,
            position:false,employer:false,start_date:false, due_date:false})        
        },
        removeExperienceValidation:(state,action)=>{
            if(state.value.length >1)
            state.value=state.value.filter((experience)=>experience.id !== action.payload)
        },
        setPosition:(state,action)=>{
            state.value.map((experience)=>{
             if(experience.id===action.payload.id){
                experience.position=action.payload.position
             }
            })
         },
         setEmployer:(state,action)=>{
            state.value.map((experience)=>{
                if(experience.id===action.payload.id){
                    experience.employer=action.payload.employer
                }
               })
        },
        setStartDate:(state,action)=>{
            state.value.map((experience)=>{
                if(experience.id===action.payload.id){
                    experience.start_date=action.payload.start_date
                }
               })
        },
        setfinishDate:(state,action)=>{
            state.value.map((experience)=>{
                if(experience.id===action.payload.id){
                    experience.due_date=action.payload.due_date
                }
               })
        },
        clearExperienceValidation:(state)=>{
            state.value=[ {id:0,position:false, employer:false,start_date:false,due_date:false}]
     },
    },
})

export const{clearExperienceValidation,addExperienceValidation,removeExperienceValidation,setPosition,
    setEmployer,setStartDate,setfinishDate,}=experienceValidationSlice.actions
export default experienceValidationSlice.reducer