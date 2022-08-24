// React import
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { MainThunk } from '../../redux/Modules/PageModules/Main';
import { CategoryThunk } from '../../redux/Modules/PageModules/Category';
import { useNavigate } from 'react-router-dom';

// components import
import Header from '../../Components/main/Header';
import Card from '../../Components/main/Card';
import Category from '../../Components/main/Category';
import MainSkeleton from '../../Components/skeleton/MainSkeleton';
import FilterModal from '../../Components/Modals/FilterMordal/FilterMordal';

import {
  CategoryNavbar,
  FilterButton,
  CategoryBox,
  CategoryGroup,
} from '../../Components/main/Category';

// style import
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
// import ImageSlider from '../../Components/main/ImageSlider';

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoding(true);
    dispatch(MainThunk());
    setIsLoding(false);
  }, []);

  const [Filter, setFilter] = useState('none');
  const [isLoding, setIsLoding] = useState(true);
  const houseList = useSelector((state) => state.Main.Main);
  const [category, setCategory] = useState(0);

  const FilterHandler = () => {
    Filter === 'block' ? setFilter('none') : setFilter('block');
  };
  const skeletonCount = [];
  var i = 0;
  for (i === 0; i < 20; i++) {
    skeletonCount.push(i);
  }
  return (
    <Fragment>
      <Header Filter={Filter} setFilter={setFilter} />
      <Category setCategory={setCategory} category={category} />
      <MainBox category={category}>
        {isLoding
          ? skeletonCount.map((item) => <MainSkeleton key={item} />)
          : houseList.map((item) => (
              <Card item={item} key={item.title + item.starAvg} />
            ))}
      </MainBox>
    </Fragment>
  );
};

export default Main;

export const MainBox = styled.div`
  position: grid !important;
  width: 100%;
  grid-template-rows: repeat(4, 1fr);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: auto;
  grid-row-gap: 40px;
  grid-column-gap: 24px;
  background-color: white;
  box-sizing: border-box;
  padding-left: 140px;
  margin-top: 110px;
`;
