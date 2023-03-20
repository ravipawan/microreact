import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Employees from './Employees';
import Message from './Message';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UpdateEmployee from './UpdateEmployee'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>
  <Routes>
    <Route path='/' element={<App />}></Route>
    <Route path='/Employees' element={<Employees />}></Route>
    <Route path='/Message' element={<Message />}></Route>
    <Route path="/updateemployee" element={<UpdateEmployee />}/>




  </Routes>
</Router>


    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
