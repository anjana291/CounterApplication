import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    //name the slice component
    name:'counterApplication',
    //initial value of the state(here is object, we can assign it as string,number anything)
    initialState : {
        value:0
    },
    reducers:{
        //actions are created inside reducer key
        //in action each logic is give as key:value pair

        //increment count
        increment:(state,action)=>{
            state.value+=action.payload
        },

        //decrement count
        decrement:(state,action)=>{
            state.value-=action.payload
        },

        //reset count
        reset:(state)=>{
            state.value=0
        }
    }
})

//slice returns actions as well as reducer
//action are called by components
//reducer is for store

export const {increment,decrement,reset} = counterSlice.actions

//export reducer
export default counterSlice.reducer
