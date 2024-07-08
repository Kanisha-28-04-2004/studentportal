// App.jsx
// import './App.css';
// import React, { useState } from 'react';
// import Header from './components/Header.jsx';
// import { ThemeContext } from './contexts/theme.js';
// import ToggleButton from './components/ToggleButton';
// import StudentMarksDisplay from './components/StudentsMarksDisplay';
// import StudentMarksForm from './components/StudentsMarksForm';
// import Products from './components/Products';
// function App() {
//   const [isOn, setIsOn] = useState(false);

//   function handleToggle() {
//     setIsOn(!isOn);
//   }

//   return (
//     <>
//     <ThemeContext.Provider value={{ isOn, handleToggle }}>
//       <div className="App">
//         <Header />
//         {/* <main className="App-body">
//           {isOn ? <StudentMarksDisplay /> : <StudentMarksForm />}
//         </main> */}
//       </div>
//     </ThemeContext.Provider>
//     <Products/>
//     </>
//   );
// }

// export default App;


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { ToggleContext } from './contexts/toggle'
import StudentDetails from './components/StudentDetails'
import StaffEntry from './components/StaffEntry'

function App() {
  // const [count, setCount] = useState(0)
  const [toggle,setToggle] = useState(false)

  function handleToggle(){
    setToggle(!toggle)
    // console.log(toggle,"valaue")
  }

  return (
    <><ToggleContext.Provider value={{toggle,handleToggle}}>
      <Header/>
      {toggle ? <StudentDetails/>:<StaffEntry/>}
      </ToggleContext.Provider>
    </>
  )
}

export default App


