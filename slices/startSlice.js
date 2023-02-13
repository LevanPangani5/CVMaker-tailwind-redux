import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cvListenerSlice = createSlice({
  name: 'cvlistener',
  initialState,
  reducers: {
    next: (state) => {
      if(state.value <4)
      state.value +=1
    },
    prev: (state) => {
      if(state.value > 0)
      state.value -=1},
 
 goToStart: (state) => {
  state.value=0
  },
},
}
)

export const { next, prev ,goToStart} = cvListenerSlice.actions

export default cvListenerSlice.reducer