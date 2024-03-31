import { createSlice } from "@reduxjs/toolkit";

const nameslice=createSlice({
    name:"naam",
    initialState:[],
    reducers:{

        addname(state,action){
            state.push(action.payload)
            console.log('what',action)
        },
        removename(state,action){
            return state.filter((item,index)=>index+1 !== action.payload)
        },
        editName: (state, action) => {
            const { id, updatedData } = action.payload;
            state[id - 1] = { ...state[id - 1], ...updatedData };
        }
    }
})

export const{addname,removename,editName} = nameslice.actions
export default nameslice.reducer