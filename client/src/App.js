import React from 'react';
import Home from './componets/home/home.js';
import OurShop from './componets/ourShop/ourShop.js';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    {<Home />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/OurShop' element={<OurShop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
