import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'


const initialState={
        ProductList:[...data],
        ProductArr:[],
        ProductTotalAmount:0
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

           let Total_ProductValueArr= state.ProductArr.map((item)=>item.Total_Amount)

            state.ProductTotalAmount=Total_ProductValueArr.reduce((a,b)=>a+b,0)


        }
    }
})


export const {UpdateAmount} = PriceSlice.actions;

export default PriceSlice.reducer;