import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:[
        {id:0,position:'',employer:'',start_date:'', due_date:'',discription:''},
    ]
  }
export const experienceSlice=createSlice({
name:'experiences',
initialState,
reducers:{
    addExperience:(state)=>{
       state.value.push({id:state.value[state.value.length-1].id+1,
        position:'',employer:'',start_date:'', due_date:'',discription:''} )
    },
    removeExperience:(state,action)=>{
        if(state.value.length >1)
       // state.value=state.value.splice(action.payload,0)
       state.value=state.value.filter((experience)=>experience.id !== action.payload)
    },
    position:(state,action)=>{
       state.value.map((experience)=>{
        if(experience.id===action.payload.id){
            experience.position=action.payload.position
        }
       })
    },
    employer:(state,action)=>{
        state.value.map((experience)=>{
            if(experience.id===action.payload.id){
                experience.employer=action.payload.employer
            }
           })
    },
    startDate:(state,action)=>{
        state.value.map((experience)=>{
            if(experience.id===action.payload.id){
                experience.start_date=action.payload.start_date
            }
           })
    },
    finishDate:(state,action)=>{
        state.value.map((experience)=>{
            if(experience.id===action.payload.id){
                experience.due_date=action.payload.due_date
            }
           })
    },
    discription:(state,action)=>{
        state.value.map((experience)=>{
            if(experience.id===action.payload.id){
                experience.discription=action.payload.discription
            }
           })
    },
    clearExperience:(state)=>{
           state.value=[{id:0,position:'',employer:'',start_date:'', due_date:'',discription:''}]
    }
},
})
export const{clearExperience,addExperience,removeExperience,position,employer,startDate,finishDate,discription}=experienceSlice.actions
export default experienceSlice.reducer