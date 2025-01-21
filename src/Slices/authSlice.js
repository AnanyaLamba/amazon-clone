// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//     name: "auth",
//     initialState:{
//         currentUser : "null"
//     },
//     reducers:{
//         setCurrentUser: (state, action) =>{

//         },
//         removeCurrentuser:(state , action) =>{

//         }
//     }
// });

// export const {setCurrentUser , removeCurrentuser} = authSlice.actions;

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const authSlice  = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
    },
    reducers: {
        setCurrentUser: (state, action)=>{
            const user = action.payload;
            state.currentUser = user;
        },
        removeCurrentUser: (state, action)=>{
            state.currentUser = null;
        },
    },
})

export const {setCurrentUser, removeCurrentUser} = authSlice.actions;

export default authSlice.reducer;