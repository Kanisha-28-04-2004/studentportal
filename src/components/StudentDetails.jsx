// // StudentsMarksDisplay.jsx
// import React, { useContext } from 'react';
// import { ThemeContext } from '../contexts/theme';
// const StudentMarksDisplay = () => {
//   //const { marks } = useContext(ThemeContext);

//   return (
//     <div>
//       <h2>Student Marks</h2>
//       <p>Roll no:21CSR001</p>
//       <p>Maths:98</p>
//       <p>English:100</p>
//       <p>Total:298</p>
//     </div>
//   );
// };

// export default StudentMarksDisplay;

function StudentDetails(){
  return (
      <>
      <p>Name : KANISHA</p>
      <p>Department : CSE</p>
      <p>Age : 20</p>
      <p>D.O.B : 28-March-2004</p>
      {/* <p className="list"><ul>Skillset and tools : <li>C</li><li>Java</li><li>Python</li></ul></p> */}
      {/* <p>Hobbies : Listening to music</p> */}
      </>
  )
}
export default StudentDetails