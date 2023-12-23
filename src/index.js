import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes,} from "react-router-dom";
 import Accueil from './Pages/Accueil';
import NavBar from './Pages/componnent/NavBar';
import Footer from './Pages/componnent/Footer';
import Login from './Pages/LoginPage';


function App(){


  return(
    <><NavBar />
    <BrowserRouter>
     <Routes>
    {/* <Route path='./' element={<Login/>} /> */}
    <Route path='/Pages/Accueil' element={<Accueil/>}/>
   </Routes>
  </BrowserRouter>
    
    <Footer /></>
    
 
  )
}








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


