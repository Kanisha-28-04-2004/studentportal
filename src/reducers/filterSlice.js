// import { createSlice } from "@reduxjs/toolkit";
// const students=[
//         { sno: 1, rollNumber: '76', name: 'Kanisha' ,grade:'B',percentage:95},
//         { sno: 2, rollNumber: '96', name: 'Kowsika',grade:'C' ,percentage:97},
//         { sno: 3, rollNumber: '107', name: 'Malathi',grade:'D',percentage:99 },
//         { sno: 4, rollNumber: '69', name: 'Jeevasree',grade:'A',percentage:93 },
//         { sno: 5, rollNumber: '68', name: 'Jayavarshini' ,grade:'B',percentage:99},
//         { sno: 6, rollNumber: '65', name: 'Inika',grade:'C' ,percentage:98},
//         { sno: 7, rollNumber: '73', name: 'Kalaivani',grade:'D',percentage:92 },
//         { sno: 8, rollNumber: '74', name: 'Kalpana',grade:'A',percentage:94 }
      
// ]
// const filterSlice=createSlice(
//     {
//         name:'filter',
//         initialState:{
//             filtered:students,
//             filter:''
//         },
//         reducers:{
//             setFilter:(state,action)=>{
//                 const filteredItem=action.payload
//                 state.filtered=students.filter(obj=>obj.rollNumber.includes(filteredItem))
//             },
//         },
//     }
// )
// export const {setFilter}=filterSlice.actions
// export default filterSlice.reducer

import { createSlice } from '@reduxjs/toolkit';
import { initialStudents } from './studentsSlice';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filtered: [...initialStudents]
  },
  reducers: {
    setFilter: (state, action) => {
      const filteredItem = action.payload;
      state.filtered =[...initialStudents].filter(obj => obj.rollNumber.includes(filteredItem));
    }
  }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
