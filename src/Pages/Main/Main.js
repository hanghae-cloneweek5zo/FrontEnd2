// React import
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { MainThunk } from '../../redux/Modules/PageModules/Main';
import { useNavigate } from 'react-router-dom';

// components import
import Header from '../../Components/main/header/Header';
import Card from '../../Components/main/card/Card';
import Category from '../../Components/main/category/Category';
import MainSkeleton from '../../Components/skeleton/MainSkeleton';
import FilterModal from '../../Components/Modals/FilterMordal/FilterMordal';

import {
  CategoryNavbar,
  FilterButton,
  CategoryBox,
  CategoryGroup,
} from '../../Components/main/category/Category';

// style import
import styled from 'styled-components';

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
      <Wrap>
        <Header Filter={Filter} setFilter={setFilter} />
        <Category setCategory={setCategory} category={category} />
      </Wrap>
      <MainWrap>
        <MainBox category={category}>
          {isLoding
            ? skeletonCount.map((item) => <MainSkeleton key={item} />)
            : houseList.map((item) => (
                <Card item={item} key={item.title + item.starAvg} />
              ))}
        </MainBox>
      </MainWrap>
    </Fragment>
  );
};

export default Main;

export const Wrap = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 90;
`;

export const MainWrap = styled.div`
  width: 100%;
`;

export const MainBox = styled.div`
  display: grid;
  width: 100%;
  max-width: 1600px;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 24px;
  margin: 0 auto;
  background-color: white;
  box-sizing: border-box;
  margin-top: 200px;
`;
