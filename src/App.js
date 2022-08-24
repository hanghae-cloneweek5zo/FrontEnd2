import FilterModal from './Components/Modals/FilterMordal/FilterMordal';
import LoginModal from './Components/Modals/LoginModal/LoginModal';
import ReviewModal from './Components/Modals/ReviewMordal/ReviewMordal';
import SignUpModal from './Components/Modals/SignUpModal/SignUpModal';
import FilterMordalSlider from './Components/Modals/FilterMordal/FilterMordalSlider';
import Calendar from './Components/Calendar'
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
