import { configureStore } from '@reduxjs/toolkit'
import PriceReducer from '../Slice/PriceSlice'



export const store=configureStore({
    reducer:{
        Products:PriceReducer
    }
})