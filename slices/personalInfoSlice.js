import { createSlice } from '@reduxjs/toolkit'

//{firstname:'',lastname:'',image:'',mail:'',phoneNumber:'',discription:''}
const initialState = {
  value:{name:'',surname:'',image:'',email:'',phone_number:'',about_me:''},
}
export const personalInfoSlice=createSlice({
name:'personalInfo',
initialState,
reducers:{
    firstname:(state,action)=>{
        console.log('was here')
        state.value.name=action.payload
    },
    lastname:(state,action)=>{
        state.value.surname=action.payload
    },
    image:(state,action)=>{
        if(state.value.image !='')
        {
            state.value.image =''
        }
        state.value.image=action.payload
    },
    mail:(state,action)=>{
       state.value.email=action.payload
    },
    phoneNumber:(state,action)=>{
        state.value.phone_number=action.payload
     },
    discription:(state,action)=>{     
      state.value.about_me=action.payload;
    },
    removeImage:(state)=>{
        state.value.image=''
    },
    clearPersonalIfo:(state)=>{
        state.value={name:'',surname:'',image:'',email:'',phone_number:'',about_me:'',}
    },
},
})
export const{removeImage,clearPersonalIfo, firstname,lastname,image,mail,phoneNumber,discription}=personalInfoSlice.actions
export default personalInfoSlice.reducer