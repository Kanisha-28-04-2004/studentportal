import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './store'
import {Provider} from 'react-redux'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import StudentDetails from './components/StudentDetails.jsx'
import StaffEntry from './components/StaffEntry.jsx'
import  Course from './components/Course.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter><Routes>
      <Route path='/' element={<App/>}>
        <Route path='/staff' element={<StaffEntry/>}/>
      </Route>
      <Route path='/course' element={<Course/>}/> 
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
