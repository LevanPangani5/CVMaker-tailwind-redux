import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:[
        {id:0,institute:'',degree:'', due_date:'',discription:''},
    ]
  }
export const educationSlice=createSlice({
name:'education',
initialState,
reducers:{
    addEducation:(state)=>{
       state.value.push({id:state.value[state.value.length-1].id+1,
        institute:'',degree:'', due_date:'',discription:''})
    },
    removeEducation:(state,action)=>{
        if(state.value.length >1)
       // state.value=state.value.splice(action.payload,0)
       state.value=state.value.filter((experience)=>experience.id !== action.payload)
    },
    educationCenter:(state,action)=>{
       state.value.map((education)=>{
        if(education.id===action.payload.id){
            education.institute=action.payload.institute
        }
       })
    },
    degreeQuality:(state,action)=>{
        state.value.map((education)=>{
            if(education.id===action.payload.id){
                education.degree=action.payload.degree
            }
           })
    },
    finishDate:(state,action)=>{
        state.value.map((education)=>{
            if(education.id===action.payload.id){
                education.due_date=action.payload.due_date
            }
           })
    },
    discription:(state,action)=>{
        state.value.map((education)=>{
            if(education.id===action.payload.id){
                education.discription=action.payload.discription
            }
           })
    },
    clearEducation:(state)=>{
           state.value=[ {id:0,institute:'',degree:'', due_date:'',discription:''},]
    }
},
})

export const{removeEducation,addEducation,clearEducation,educationCenter,degreeQuality,finishDate,discription}=educationSlice.actions
export default educationSlice.reducer