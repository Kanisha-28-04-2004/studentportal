import { createSlice } from '@reduxjs/toolkit';
import { initialStudents } from './studentsSlice';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    sorted: [...initialStudents],
    sortOrder: 'ascending'
  },
  reducers: {
    setSort: (state, action) => {
      const sortOrder = action.payload;
      state.sortOrder = sortOrder;
      state.sorted = [...state.sorted].sort((a, b) =>
        sortOrder === 'descending' ? b.percentage - a.percentage : a.percentage - b.percentage
      );
    }
  }
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;








// import { createSlice } from "@reduxjs/toolkit"
// const students=[
//     { sno: 1, rollNumber: '76', name: 'Kanisha' ,grade:'B',percentage:95},
//     { sno: 2, rollNumber: '96', name: 'Kowsika',grade:'C' ,percentage:97},
//     { sno: 3, rollNumber: '107', name: 'Malathi',grade:'D',percentage:99 },
//     { sno: 4, rollNumber: '69', name: 'Jeevasree',grade:'A',percentage:93 },
//     { sno: 5, rollNumber: '68', name: 'Jayavarshini' ,grade:'B',percentage:99},
//     { sno: 6, rollNumber: '65', name: 'Inika',grade:'C' ,percentage:98},
//     { sno: 7, rollNumber: '73', name: 'Kalaivani',grade:'D',percentage:92 },
//     { sno: 8, rollNumber: '74', name: 'Kalpana',grade:'A',percentage:94 }
  
// ]
// const sortSlice=createSlice({
//     name:'sort',
//     initialState:{
//         sorted:[...students],
//         sortOrder:'ascending'
//     },
//     reducers:{
//         setSort:(state,action)=>{
//             const sortOrder=action.payload
//             state.sortOrder=sortOrder
//             state.sorted = [...students].sort((a, b) =>
//             sortOrder === 'ascending' ? a.percentage - b.percentage : b.percentage - a.percentage
//           )
//             }

//         }
// })
// export const { setSort } = sortSlice.actions;
// export default sortSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit"
// const student=state=>state.students
// const sortSlice=createSlice({
//     name:'sort',
//     initialState:{
//         sorted:student,
//         sortOrder:'ascending'
//     },
//     reducers:{
//         setSort:(state,action)=>{
//             const sortOrder=action.payload
//             state.sortOrder=sortOrder
//             state.sorted = [...student].sort((a, b) =>
//             sortOrder === 'descending' ? b.percentage - a.percentage : a.percentage - b.percentage
//           )
//             }

//         }
// })
// export const { setSort } = sortSlice.actions;
// export default sortSlice.reducer;