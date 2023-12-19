import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Main } from './Components/Main/Main';

 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
