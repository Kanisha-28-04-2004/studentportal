// import { createSlice } from '@reduxjs/toolkit';

// const initialStudents = [
//   { sno: 1, rollNumber: '76', name: 'Kanisha', grade: 'B', percentage: 95 },
//   { sno: 2, rollNumber: '96', name: 'Kowsika', grade: 'C', percentage: 97 },
//   { sno: 3, rollNumber: '107', name: 'Malathi', grade: 'D', percentage: 99 },
//   { sno: 4, rollNumber: '69', name: 'Jeevasree', grade: 'A', percentage: 93 },
//   { sno: 5, rollNumber: '68', name: 'Jayavarshini', grade: 'B', percentage: 99 },
//   { sno: 6, rollNumber: '65', name: 'Inika', grade: 'C', percentage: 98 },
//   { sno: 7, rollNumber: '73', name: 'Kalaivani', grade: 'D', percentage: 92 },
//   { sno: 8, rollNumber: '74', name: 'Kalpana', grade: 'A', percentage: 94 }
// ];

// const studentsSlice = createSlice({
//   name: 'students',
//   initialState: initialStudents,
//   reducers: {
//     deleteStudent: (state, action) => {
//       return state.filter(student => student.sno !== action.payload);
//     },
//     editStudent: (state, action) => {
//       const { sno, updatedStudent } = action.payload;
//       const index = state.findIndex(student => student.sno === sno);
//       if (index !== -1) {
//         state[index] = { ...state[index], ...updatedStudent };
//       }
//     }
//   }
// });

// export const { deleteStudent, editStudent } = studentsSlice.actions;
// export default studentsSlice.reducer;
// export {initialStudents}



import { createSlice } from '@reduxjs/toolkit';

const initialStudents = [
  { sno: 1, rollNumber: '76', name: 'Kanisha', grade: 'B', percentage: 95 },
  { sno: 2, rollNumber: '96', name: 'Kowsika', grade: 'C', percentage: 97 },
  { sno: 3, rollNumber: '107', name: 'Malathi', grade: 'D', percentage: 99 },
  { sno: 4, rollNumber: '69', name: 'Jeevasree', grade: 'A', percentage: 93 },
  { sno: 5, rollNumber: '68', name: 'Jayavarshini', grade: 'B', percentage: 99 },
  { sno: 6, rollNumber: '65', name: 'Inika', grade: 'C', percentage: 98 },
  { sno: 7, rollNumber: '73', name: 'Kalaivani', grade: 'D', percentage: 92 },
  { sno: 8, rollNumber: '74', name: 'Kalpana', grade: 'A', percentage: 94 }
];

const studentsSlice = createSlice({
  name: 'students',
  initialState: initialStudents,
  reducers: {
    deleteStudent: (state, action) => {
      const deleted=action.payload;
      state.initialStudents= state.filter(student => student.sno !== deleted);
    },
    editStudent: (state, action) => {
      const { sno, updatedStudent } = action.payload;
      const index = state.findIndex(student => student.sno === sno);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedStudent };
      }
    }
  }
});

export const { deleteStudent, editStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
export {initialStudents}