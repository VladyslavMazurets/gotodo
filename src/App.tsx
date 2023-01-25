import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Introduction from './pages/Introduction';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path='/home' element={<Sidebar />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
