// // StudentMarksForm.jsx
// import React, { useState } from 'react';

// const StudentMarksForm = ({ onSubmit }) => {
//     const [marks, setMarks] = useState('');

//     const handleInputChange = (event) => {
//         setMarks(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         onSubmit(marks);
//         setMarks(''); // Clear input after submission if needed
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="marks">Enter Student Marks:</label>
//             <input
//                 type="text"
//                 id="marks"
//                 value={marks}
//                 onChange={handleInputChange}
//             />
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default StudentMarksForm;

// StudentsMarksForm.jsx
// import React, { useContext, useState } from 'react';
// import { ThemeContext } from '../contexts/theme';

// const StudentMarksForm = () => {
//   const { onSubmit } = useContext(ThemeContext);
//   const [marks, setMarks] = useState('');

//   const handleInputChange = (event) => {
//     setMarks(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(marks);
//     setMarks('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="marks"> Student marks entry</label>
//       <input
//         type="text"
//         id="marks"
//         value={marks}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         id="maths"
//         value={marks}
//         onChange={handleInputChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default StudentMarksForm;

// import { useState } from 'react';

// function StaffEntry() {

//   const [num, setNum] = useState();
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [num3, setNum3] = useState(0);
//   const [num4, setNum4] = useState(0);
//   const [num5, setNum5] = useState(0);

//   function Update() {
//     console.log("Data has been Updated");
//   }

//   function setvalue1(e) {
//     setNum1(+e.target.value);
//   }

//   function setvalue(e) {
//     setNum(e.target.value);
//   }

//   function setvalue2(e) {
//     setNum2(+e.target.value);
//   }

//   function setvalue3(e) {
//     setNum3(+e.target.value);
//   }

//   function setvalue4(e) {
//     setNum4(+e.target.value);
//   }

//   function setvalue5(e) {
//     setNum5(+e.target.value);
//   }

//     const result = num1+num2+num3+num4+num5

//   return (
//     <>
//       <p>Roll Number : <input type="text" value={num} onChange={setvalue}></input></p>
//       <p>Mark1 : <input type="number" value={num1} onChange={setvalue1}></input></p>
//       <p>Mark2 : <input type="number" value={num2} onChange={setvalue2}></input></p>
//       <p>Mark3 : <input type="number" value={num3} onChange={setvalue3}></input></p>
//       <p>Mark4 : <input type="number" value={num4} onChange={setvalue4}></input></p>
//       <p>Mark5 : <input type="number" value={num5} onChange={setvalue5}></input></p>
//       <p>Result : {result}</p>
//       <button onClick={Update}>Update</button>
//     </>
//   );
// }

// export default StaffEntry;

// import { useState } from 'react';

// const studentsData = [
//   { sno: 1, rollNumber: '76', name: 'Kanisha' ,grade:'B',percentage:95},
//   { sno: 2, rollNumber: '96', name: 'Kowsika',grade:'C' ,percentage:97},
//   { sno: 3, rollNumber: '107', name: 'Malathi',grade:'D',percentage:99 },
//   { sno: 4, rollNumber: '69', name: 'Jeevasree',grade:'A',percentage:93 },
//   { sno: 5, rollNumber: '68', name: 'Jayavarshini' ,grade:'B',percentage:99},
//   { sno: 6, rollNumber: '65', name: 'Inika',grade:'C' ,percentage:98},
//   { sno: 7, rollNumber: '73', name: 'Kalaivani',grade:'D',percentage:92 },
//   { sno: 8, rollNumber: '74', name: 'Kalpana',grade:'A',percentage:94 }

// ];

// function StaffEntry() {

// const [num, setNum] = useState();
// const [num1, setNum1] = useState(0);
// const [num2, setNum2] = useState(0);
// const [num3, setNum3] = useState(0);
// const [num4, setNum4] = useState(0);
// const [num5, setNum5] = useState(0);

// function Update() {
//   console.log("Data has been Updated");
// }

// function setvalue1(e) {
//   setNum1(+e.target.value);
// }

// function setvalue(e) {
//   setNum(e.target.value);
// }

// function setvalue2(e) {
//   setNum2(+e.target.value);
// }

// function setvalue3(e) {
//   setNum3(+e.target.value);
// }

// function setvalue4(e) {
//   setNum4(+e.target.value);
// }

// function setvalue5(e) {
//   setNum5(+e.target.value);
// }

//   const result = num1+num2+num3+num4+num5



// import { useState } from 'react';

// const studentsData = [
//   { sno: 1, rollNumber: '76', name: 'Kanisha' ,grade:'B',percentage:95},
//   { sno: 2, rollNumber: '96', name: 'Kowsika',grade:'C' ,percentage:97},
//   { sno: 3, rollNumber: '107', name: 'Malathi',grade:'D',percentage:99 },
//   { sno: 4, rollNumber: '69', name: 'Jeevasree',grade:'A',percentage:93 },
//   { sno: 5, rollNumber: '68', name: 'Jayavarshini' ,grade:'B',percentage:99},
//   { sno: 6, rollNumber: '65', name: 'Inika',grade:'C' ,percentage:98},
//   { sno: 7, rollNumber: '73', name: 'Kalaivani',grade:'D',percentage:92 },
//   { sno: 8, rollNumber: '74', name: 'Kalpana',grade:'A',percentage:94 }

// ];

// function StaffEntry() {
//   const [filter, setFilter] = useState('');

//     const filteredData = studentsData.filter(student => 
//       student.rollNumber.includes(filter)
//     );
//     const [name, setName] = useState('');

//     const  nameEntered= studentsData.filter(student => 
//       student.name.includes(name)
//     );
//     const handleChange=(e)=>{

//     }



//   return (


//     <>
//     <div className="table-content">
//       <h1>Student Table</h1>
//       <div className="filter">
//         <label htmlFor="rollNumberFilter">Filter by roll no:</label>
//         <input 
//           type="text" 
//           id="rollNumberFilter" 
//           value={filter} 
//           onChange={(e) => setFilter(e.target.value)}

//         />
//         <div className="topbar">
//             Sort
//             <select onChange={handleChange}>
//                 <option value="ascending" >Ascending</option>
//                 <option value="descending">Descending</option>


//             </select>
//             </div>
//         {/* <label htmlFor="nameFilter">Filter by name:</label>
//         <input 
//           type="text" 
//           id="nameFilter" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)}/> */}
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Roll Number</th>
//             <th>Name</th>
//             <th>Grade</th>
//             <th>percentage</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((student) => (
//             <tr key={student.signNumber}>
//               <td>{student.sno}</td>
//               <td>{student.rollNumber}</td>
//               <td>{student.name}</td>
//               <td>{student.grade}</td>
//               <td>{student.percentage}</td>
//             </tr>
//           ))}

//         </tbody>
//       </table>
//     </div>
//       {/* <p>Roll Number : <input type="text" value={num} onChange={setvalue}></input></p>
//       <p>Mark1 : <input type="number" value={num1} onChange={setvalue1}></input></p>
//       <p>Mark2 : <input type="number" value={num2} onChange={setvalue2}></input></p>
//       <p>Mark3 : <input type="number" value={num3} onChange={setvalue3}></input></p>
//       <p>Mark4 : <input type="number" value={num4} onChange={setvalue4}></input></p>
//       <p>Mark5 : <input type="number" value={num5} onChange={setvalue5}></input></p>
//       <p>Result : {result}</p>
//       <button onClick={Update}>Update</button> */}
//     </>
//   );
// }

// export default StaffEntry;

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import {setFilter} from '../reducers/filterSlice'
// import {setSort} from '../reducers/sortSlice'
// const studentsData = [
//     { sno: 1, rollNumber: '76', name: 'Kanisha' ,grade:'B',percentage:95},
//     { sno: 2, rollNumber: '96', name: 'Kowsika',grade:'C' ,percentage:97},
//     { sno: 3, rollNumber: '107', name: 'Malathi',grade:'D',percentage:99 },
//     { sno: 4, rollNumber: '69', name: 'Jeevasree',grade:'A',percentage:93 },
//     { sno: 5, rollNumber: '68', name: 'Jayavarshini' ,grade:'B',percentage:99},
//     { sno: 6, rollNumber: '65', name: 'Inika',grade:'C' ,percentage:98},
//     { sno: 7, rollNumber: '73', name: 'Kalaivani',grade:'D',percentage:92 },
//     { sno: 8, rollNumber: '74', name: 'Kalpana',grade:'A',percentage:94 }
  
//   ];
// function StaffEntry() {
//   const dispatch = useDispatch()
//   const filteredData = useSelector((state) => state.filter.filtered)
//   const sortOrdered= useSelector((state) => state.sort.sorted)
//   const [isSearchClicked, setIsSearchClicked] = useState(false)
//   const [sortOrder,setSortOrder]=useState('ascending')
//   const handleFilterChange = (e) => {
//     setIsSearchClicked(true)
//     dispatch(setFilter(e.target.value))
//   }
//   const handleSortChange=(e)=>{
//     setIsSearchClicked(false)
//     setSortOrder(e.target.value)
//     dispatch(setSort(e.target.value))
//   }
//  const displayResults=isSearchClicked?filteredData:sortOrdered
//   return (


//     <>
//       <div className="table-content">
//         <h1>Student Table</h1>
//         <div className="filter">
//           <label htmlFor="rollNumberFilter">Filter by roll no:</label>
//           <input
//             type="text"
//             id="rollNumberFilter"
//             onChange={handleFilterChange}

//           />
//           <div className="topbar">
//             Sort
//             <select onChange={handleSortChange} value={sortOrder}>
//               <option value="ascending" >Ascending</option>
//               <option value="descending">Descending</option>

//             </select>
//           </div>
         
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Roll Number</th>
//               <th>Name</th>
//               <th>Grade</th>
//               <th>percentage</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayResults.map((student) => (
//               <tr key={student.signNumber}>
//                 <td>{student.sno}</td>
//                 <td>{student.rollNumber}</td>
//                 <td>{student.name}</td>
//                 <td>{student.grade}</td>
//                 <td>{student.percentage}</td>
//                 <button>Delete</button>
//               </tr>
//             ))}

//           </tbody>
//         </table>
//       </div>
    
//     </>
//   );
// }

// export default StaffEntry;


// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import {setFilter} from '../reducers/filterSlice'
// import {setSort} from '../reducers/sortSlice'
// const studentsData = [
//     { sno: 1, rollNumber: '76', name: 'Kanisha' ,grade:'B',percentage:95},
//     { sno: 2, rollNumber: '96', name: 'Kowsika',grade:'C' ,percentage:97},
//     { sno: 3, rollNumber: '107', name: 'Malathi',grade:'D',percentage:99 },
//     { sno: 4, rollNumber: '69', name: 'Jeevasree',grade:'A',percentage:93 },
//     { sno: 5, rollNumber: '68', name: 'Jayavarshini' ,grade:'B',percentage:99},
//     { sno: 6, rollNumber: '65', name: 'Inika',grade:'C' ,percentage:98},
//     { sno: 7, rollNumber: '73', name: 'Kalaivani',grade:'D',percentage:92 },
//     { sno: 8, rollNumber: '74', name: 'Kalpana',grade:'A',percentage:94 }
  
//   ];
// function StaffEntry() {
//   const dispatch = useDispatch()
//   const filteredData = useSelector((state) => state.filter.filtered)
//   const sortOrdered= useSelector((state) => state.sort.sorted)
//   const [isSearchClicked, setIsSearchClicked] = useState(false)
//   const [sortOrder,setSortOrder]=useState('ascending')
//   const [newStudent, setNewStudent] = useState({ sno: '', rollNumber: '', name: '', grade: '', percentage: '' });
//   const [editStudentData, setEditStudentData] = useState(null);

//   const handleFilterChange = (e) => {
//     setIsSearchClicked(true)
//     dispatch(setFilter(e.target.value))
//   }
//   const handleSortChange=(e)=>{
//     setIsSearchClicked(false)
//     dispatch(setSort(e.target.value))
//   }
  
//   // const handleEditStudent = () => {
//   //   if (editStudentData) {
//   //     const { sno, ...updatedStudent } = editStudentData;
//   //     dispatch(editStudent({ sno, updatedStudent }));
//   //     setEditStudentData(null);
//   //   }
//   // }
//   // const handleRemoveStudent = (sno) => {
//   //   dispatch(removeStudent(sno));
//   // }


//  const displayResults=isSearchClicked?filteredData:sortOrdered
//   return (


//     <>
//       <div className="table-content">
//         <h1>Student Table</h1>
//         <div className="filter">
//           <label htmlFor="rollNumberFilter">Filter by roll no:</label>
//           <input
//             type="text"
//             id="rollNumberFilter"
//             onChange={handleFilterChange}

//           />
//           <div className="topbar">
//             Sort
//             <select onChange={handleSortChange} value={sortOrder}>
//               <option value="ascending" >Ascending</option>
//               <option value="descending">Descending</option>

//             </select>
//           </div>
         
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Roll Number</th>
//               <th>Name</th>
//               <th>Grade</th>
//               <th>percentage</th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayResults.map((student) => (
//               <tr key={student.signNumber}>
//                 <td>{student.sno}</td>
//                 <td>{student.rollNumber}</td>
//                 <td>{student.name}</td>
//                 <td>{student.grade}</td>
//                 <td>{student.percentage}</td>
//                 {/* <td>
//                   <button onClick={() => setEditStudentData(student)}>Edit</button>
//                   <button onClick={() => handleRemoveStudent(student.sno)}>Remove</button>
//                 </td> */}
//               </tr>
//             ))}

//           </tbody>
//         </table>
//       </div>
    
//     </>
//   );
// }

// export default StaffEntry;




// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import {setFilter} from '../reducers/filterSlice'
// import {setSort} from '../reducers/sortSlice'
// const studentsData = [
//     { sno: 1, rollNumber: '76', name: 'Kanisha' ,grade:'B',percentage:95},
//     { sno: 2, rollNumber: '96', name: 'Kowsika',grade:'C' ,percentage:97},
//     { sno: 3, rollNumber: '107', name: 'Malathi',grade:'D',percentage:99 },
//     { sno: 4, rollNumber: '69', name: 'Jeevasree',grade:'A',percentage:93 },
//     { sno: 5, rollNumber: '68', name: 'Jayavarshini' ,grade:'B',percentage:99},
//     { sno: 6, rollNumber: '65', name: 'Inika',grade:'C' ,percentage:98},
//     { sno: 7, rollNumber: '73', name: 'Kalaivani',grade:'D',percentage:92 },
//     { sno: 8, rollNumber: '74', name: 'Kalpana',grade:'A',percentage:94 }
  
//   ];
// function StaffEntry() {
//   const dispatch = useDispatch()
//   const filteredData = useSelector((state) => state.filter.filtered)
//   const sortOrdered= useSelector((state) => state.sort.sorted)
//   const [isSearchClicked, setIsSearchClicked] = useState(false)
//   const [sortOrder,setSortOrder]=useState('ascending')
//   const handleFilterChange = (e) => {
//     setIsSearchClicked(true)
//     dispatch(setFilter(e.target.value))
//   }
//   const handleSortChange=(e)=>{
//     setIsSearchClicked(false)
//     setSortOrder(e.target.value)
//     dispatch(setSort(e.target.value))
//   }
//  const displayResults=isSearchClicked?filteredData:sortOrdered
//   return (


//     <>
//       <div className="table-content">
//         <h1>Student Table</h1>
//         <div className="filter">
//           <label htmlFor="rollNumberFilter">Filter by roll no:</label>
//           <input
//             type="text"
//             id="rollNumberFilter"
//             onChange={handleFilterChange}

//           />
//           <div className="topbar">
//             Sort
//             <select onChange={handleSortChange} value={sortOrder}>
//               <option value="ascending" >Ascending</option>
//               <option value="descending">Descending</option>

//             </select>
//           </div>
         
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Roll Number</th>
//               <th>Name</th>
//               <th>Grade</th>
//               <th>percentage</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayResults.map((student) => (
//               <tr key={student.signNumber}>
//                 <td>{student.sno}</td>
//                 <td>{student.rollNumber}</td>
//                 <td>{student.name}</td>
//                 <td>{student.grade}</td>
//                 <td>{student.percentage}</td>
//                 <button>Delete</button>
//               </tr>
//             ))}

//           </tbody>
//         </table>
//       </div>
    
//     </>
//   );
// }

// export default StaffEntry;

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import {setFilter} from '../reducers/filterSlice'
// import {setSort} from '../reducers/sortSlice'
// import { deleteStudent, editStudent } from '../reducers/studentsSlice';

// const studentsData = [
//     { sno: 1, rollNumber: '76', name: 'Kanisha' ,grade:'B',percentage:95},
//     { sno: 2, rollNumber: '96', name: 'Kowsika',grade:'C' ,percentage:97},
//     { sno: 3, rollNumber: '107', name: 'Malathi',grade:'D',percentage:99 },
//     { sno: 4, rollNumber: '69', name: 'Jeevasree',grade:'A',percentage:93 },
//     { sno: 5, rollNumber: '68', name: 'Jayavarshini' ,grade:'B',percentage:99},
//     { sno: 6, rollNumber: '65', name: 'Inika',grade:'C' ,percentage:98},
//     { sno: 7, rollNumber: '73', name: 'Kalaivani',grade:'D',percentage:92 },
//     { sno: 8, rollNumber: '74', name: 'Kalpana',grade:'A',percentage:94 }
  
//   ];
// function StaffEntry() {
//   const dispatch = useDispatch()
//   const filteredData = useSelector((state) => state.filter.filtered)
//   const sortOrdered= useSelector((state) => state.sort.sorted)
//   const [isSearchClicked, setIsSearchClicked] = useState(false)
//   const [sortOrder,setSortOrder]=useState('ascending')
//   const [editingStudent, setEditingStudent] = useState(null);
//   const [editForm, setEditForm] = useState({});

//   const handleFilterChange = (e) => {
//     setIsSearchClicked(true)
//     dispatch(setFilter(e.target.value))
//   }
//   const handleSortChange=(e)=>{
//     setIsSearchClicked(false)
//     setSortOrder(e.target.value)
//     dispatch(setSort(e.target.value))
//   }

//   const handleDelete = sno => {
//     dispatch(deleteStudent(sno));
//   };

//   const handleEdit = student => {
//     setEditingStudent(student.sno);
//     setEditForm(student);
//   };

//   const handleSaveEdit = () => {
//     dispatch(editStudent({ sno: editingStudent, updatedStudent: editForm }));
//     setEditingStudent(null);
//   };

//   const handleEditChange = e => {
//     const { name, value } = e.target;
//     setEditForm(prevForm => ({
//       ...prevForm,
//       [name]: value
//     }));
//   };
//  const displayResults=isSearchClicked?filteredData:sortOrdered
//   return (


//     <>
//       <div className="table-content">
//         <h1>Student Table</h1>
//         <div className="filter">
//           <label htmlFor="rollNumberFilter">Filter by roll no:</label>
//           <input
//             type="text"
//             id="rollNumberFilter"
//             onChange={handleFilterChange}

//           />
//           <div className="topbar">
//             Sort
//             <select onChange={handleSortChange} value={sortOrder}>
//               <option value="ascending" >Ascending</option>
//               <option value="descending">Descending</option>

//             </select>
//           </div>
         
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Roll Number</th>
//               <th>Name</th>
//               <th>Grade</th>
//               <th>percentage</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayResults.map(student => (
//               <tr key={student.sno}>
//                 {editingStudent === student.sno ? (
//                   <>
//                     <td>{student.sno}</td>
//                     <td>
//                       <input
//                         type="text"
//                         name="rollNumber"
//                         value={editForm.rollNumber}
//                         onChange={handleEditChange}
//                       />
//                     </td>
//                     <td>
//                       <input type="text" name="name" value={editForm.name} onChange={handleEditChange} />
//                     </td>
//                     <td>
//                       <input type="text" name="grade" value={editForm.grade} onChange={handleEditChange} />
//                     </td>
//                     <td>
//                       <input
//                         type="number"
//                         name="percentage"
//                         value={editForm.percentage}
//                         onChange={handleEditChange}
//                       />
//                     </td>
//                     <td>
//                       <button onClick={handleSaveEdit}>Save</button>
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td>{student.sno}</td>
//                     <td>{student.rollNumber}</td>
//                     <td>{student.name}</td>
//                     <td>{student.grade}</td>
//                     <td>{student.percentage}</td>
//                     <td>
//                       <button onClick={() => handleEdit(student)}>Edit</button>
//                       <button onClick={() => handleDelete(student.sno)}>Delete</button>
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
    
//     </>
//   );
// }

// export default StaffEntry;


import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {setFilter} from '../reducers/filterSlice'
import {setSort} from '../reducers/sortSlice'
import { deleteStudent, editStudent } from '../reducers/studentsSlice';

const studentsData = [
    { sno: 1, rollNumber: '76', name: 'Kanisha' ,grade:'B',percentage:95},
    { sno: 2, rollNumber: '96', name: 'Kowsika',grade:'C' ,percentage:97},
    { sno: 3, rollNumber: '107', name: 'Malathi',grade:'D',percentage:99 },
    { sno: 4, rollNumber: '69', name: 'Jeevasree',grade:'A',percentage:93 },
    { sno: 5, rollNumber: '68', name: 'Jayavarshini' ,grade:'B',percentage:99},
    { sno: 6, rollNumber: '65', name: 'Inika',grade:'C' ,percentage:98},
    { sno: 7, rollNumber: '73', name: 'Kalaivani',grade:'D',percentage:92 },
    { sno: 8, rollNumber: '74', name: 'Kalpana',grade:'A',percentage:94 }
  
  ];
function StaffEntry() {
  const dispatch = useDispatch()
  const filteredData = useSelector((state) => state.filter.filtered)
  const sortOrdered= useSelector((state) => state.sort.sorted)
  const [isSearchClicked, setIsSearchClicked] = useState(false)
  const [sortOrder,setSortOrder]=useState('ascending')
  const [editingStudent, setEditingStudent] = useState(null);
  const [editForm, setEditForm] = useState({});
  const deletedData=useSelector((state)=>state.students.initialStudents)


  const handleFilterChange = (e) => {
    setIsSearchClicked(true)
    dispatch(setFilter(e.target.value))
  }
  const handleSortChange=(e)=>{
    setIsSearchClicked(false)
    setSortOrder(e.target.value)
    dispatch(setSort(e.target.value))
  }

  const handleDelete = sno => {
    dispatch(deleteStudent(sno));
  };

  const handleEdit = student => {
    setEditingStudent(student.sno);
    setEditForm(student);
  };

  const handleSaveEdit = () => {
    dispatch(editStudent({ sno: editingStudent, updatedStudent: editForm }));
    setEditingStudent(null);
  };

  const handleEditChange = e => {
    const { name, value } = e.target;
    setEditForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };
 const displayResults=isSearchClicked?filteredData:sortOrdered
  return (


    <>
      <div className="table-content">
        <h1>Student Table</h1>
        <div className="filter">
          <label htmlFor="rollNumberFilter">Filter by roll no:</label>
          <input
            type="text"
            id="rollNumberFilter"
            onChange={handleFilterChange}

          />
          <div className="topbar">
            Sort
            <select onChange={handleSortChange} value={sortOrder}>
              <option value="ascending" >Ascending</option>
              <option value="descending">Descending</option>

            </select>
          </div>
         
        </div>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Roll Number</th>
              <th>Name</th>
              <th>Grade</th>
              <th>percentage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayResults.map(student => (
              <tr key={student.sno}>
                {editingStudent === student.sno ? (
                  <>
                    <td>{student.sno}</td>
                    <td>
                      <input
                        type="text"
                        name="rollNumber"
                        value={editForm.rollNumber}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input type="text" name="name" value={editForm.name} onChange={handleEditChange} />
                    </td>
                    <td>
                      <input type="text" name="grade" value={editForm.grade} onChange={handleEditChange} />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="percentage"
                        value={editForm.percentage}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <button onClick={handleSaveEdit}>Save</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{student.sno}</td>
                    <td>{student.rollNumber}</td>
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                    <td>{student.percentage}</td>
                    <td>
                      <button onClick={() => handleEdit(student)}>Edit</button>
                      <button onClick={() => handleDelete(student.sno)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </>
  );
}

export default StaffEntry;
