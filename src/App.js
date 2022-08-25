//React import
import React from 'react';

// Package import
import { Routes, Route } from 'react-router-dom';

// Page import
import Main from './Pages/Main/Main';
import Detail from './Pages/Detail/Detail';
import ManinSimpleMap from './Pages/MainGoogleMap/MainSimpleMap';

function App() {
  return (
    <Routes>
      <Route path="/" exact="true" element={<Main />} />
      <Route path="detail" element={<Detail />} />
      <Route path="detail/:id" element={<Detail />} />
      <Route path="ManinSimpleMap" element={<ManinSimpleMap />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
