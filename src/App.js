import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import { Main } from './Components/Main/Main';

 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/Main' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
