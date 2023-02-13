import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:{
        name:false,
        surname:false,
        phone_number:false,
        image:false,
        email:false,
    }
}

export const personalInfoValidationSlice = createSlice({
    name:'personalInfoValidation',
    initialState,
    reducers:{
        setName:(state,action)=>{
            state.value.name=action.payload
        },
        setSurname:(state,action)=>{
            state.value.surname=action.payload
        },
        setPhoneNumber:(state,action)=>{
            state.value.phone_number=action.payload
        },
        setEmail:(state,action)=>{
            state.value.email=action.payload
        },
        clearPersonalValidation:(state)=>{
            state.value={
                name:false,
                surname:false,
                phone_number:false,
                image:false,
                email:false,
            }
        },
        setImage:(state,)=>{
            state.value.image=true;
        }
    },
})

export const{setImage,setName,setSurname,setPhoneNumber,setEmail,clearPersonalValidation}=personalInfoValidationSlice.actions
export default personalInfoValidationSlice.reducer