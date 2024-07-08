// 

// 
// ToggleButton.jsx
// import React, { useContext } from "react";
// import { ThemeContext } from "../contexts/theme";
// import StudentMarksDisplay from "./StudentsMarksDisplay";
// import StudentMarksForm from "./StudentsMarksForm";

// function ToggleButton() {
//   const { isOn, handleToggle } = useContext(ThemeContext);

//   return (
//     <div className="toggle-switch">
//       <input
//         type="checkbox"
//         id="toggle"
//         className="toggle-switch-checkbox"
//         checked={isOn}
//         onChange={handleToggle}
//       />
//       <label className="toggle-switch-label" htmlFor="toggle">
//         <span className="toggle-switch-inner" />
//         <span className="toggle-switch-switch" />
//       </label>
//     </div>
//   );
// }

// export default ToggleButton;


import { useContext } from "react"
import { ToggleContext } from "../contexts/toggle"

function Togglebutton(){
    const {toggle, handleToggle } = useContext(ToggleContext);
    return (
        <>
        <div className='toggle' onClick={handleToggle}>
            {toggle?<div className='toggle-right'></div>:
            <div className='toggle-left'></div>}
        </div>
        </>
    )
}
export default Togglebutton