import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Introduction from './pages/Introduction';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Introduction />} />
      </Routes>
    </>
  )
}

export default App;
