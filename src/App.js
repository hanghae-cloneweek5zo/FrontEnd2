import FilterModal from './Components/Modals/FilterMordal/FilterMordal';
import LoginModal from './Components/Modals/LoginModal/LoginModal';
import ReviewModal from './Components/Modals/ReviewMordal/ReviewMordal';
import SignUpModal from './Components/Modals/SignUpModal/SignUpModal';
import FilterMordalSlider from './Components/Modals/FilterMordal/FilterMordalSlider';

//React import
import React from 'react';

// Package import
import { Routes, Route } from 'react-router-dom';

// Page import
import Main from './Pages/Main/Main';
import Detail from './Pages/Detail/Detail';


function App() {
  return (
    <>
    <Detail/>
    </>
    // <Routes>
    //   <Route path="/" exact="true" element={<Main />} />
    //   <Route path="Detail" exact="true" element={<Detail />} />
    // </Routes>
  );
}

export default App;
