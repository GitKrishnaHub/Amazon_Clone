import {createSlice} from '@reduxjs/toolkit';



const initialState={
    product:[],
    userInfo:[],
 
}
export const amazonSlice = createSlice({
    name:'amazon',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=state.product.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity +=action.payload.quantity;
            }else(

                state.product.push(action.payload)
            )
        },
        incQuantity:(state,action)=>{
            const item=state.product.find((item)=>item.id === action.payload)
            item.quantity++
        },
        decQuantity:(state,action)=>{
            const item=state.product.find((item)=>item.id === action.payload)
            if(item.quantity ===1){
                item.quantity = 1
            }else{
                item.quantity--
            }
        },
        deleteItem:(state,action)=>{
            state.product = state.product.filter((item) =>item.id !== action.payload)
        },
        resetCart:(state)=>{
            state.product = []
        },
        
    }
})
export const{addToCart,deleteItem,resetCart,incQuantity,decQuantity} = amazonSlice.actions;
export default amazonSlice.reducer;