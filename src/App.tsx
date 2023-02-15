import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Completed from './pages/Completed';
import Entertainment from './pages/Entertainment';
import Family from './pages/Family';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Study from './pages/Study';
import Work from './pages/Work';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path='/' element={<Navbar />} >
          <Route path='/' element={<Sidebar />}>
            <Route path='/home' element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/study' element={<Study />} />
            <Route path='/entertainment' element={<Entertainment />} />
            <Route path='/family' element={<Family />} />
            <Route path='/completed' element={<Completed />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
