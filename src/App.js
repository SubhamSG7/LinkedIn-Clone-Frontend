import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Main } from './Components/Main/Main';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
