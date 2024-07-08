import {configureStore} from "@reduxjs/toolkit"
import filterSlice from "./reducers/filterSlice"
import sortSlice from "./reducers/sortSlice"
import studentReducer from "./reducers/studentsSlice"
export const store=configureStore({
    reducer:{
        filter:filterSlice,
        sort:sortSlice,
        students:studentReducer
    },
})