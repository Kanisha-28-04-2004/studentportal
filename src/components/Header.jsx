// // Header.jsx
// import React from "react";
// import ToggleButton from "./ToggleButton";

// function Header() {
//   return (
//     <header>
//       <div className="logo">KEC</div>
//       <div className="menu">
//         <div>Staff</div>
//         <ToggleButton />
//         <div>Student</div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import Togglebutton from "./Togglebutton"
import {Link} from 'react-router-dom'

function Header(){

    return(
        <>
        <header className="header">
            <div className="logo">
                <h1>KEC PORTAL</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li>Staff</li>
                    <li><Togglebutton/></li>
                    <li>Student</li>
                    <li><Link to='/course' className="nav-link"></Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header
