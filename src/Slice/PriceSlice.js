import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'


const initialState={
        ProductList:[...data],
        ProductArr:[],
        ProductTotalAmount:[]
}

const PriceSlice=createSlice({
    
    name:'Products',

    initialState,
    reducers:{
        UpdateAmount:(state,actions)=>{

            let filteredObj=state.ProductArr.filter(item=>item.Index != actions.payload.Index);



            state.ProductArr=[
                ...filteredObj,
                actions.payload
            ]
            
            console.log(actions.payload);
            console.log(state.ProductArr);

        }
    }
})


export const {UpdateAmount} = PriceSlice.actions;

export default PriceSlice.reducer;