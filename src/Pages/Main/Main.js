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
import LoginModal from '../../Components/Modals/LoginModal/LoginModal';
import SignUpModal from '../../Components/Modals/SignUpModal/SignUpModal';
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

import {
  ALLHOMES,
  FANCY,
  NATIONAL_PARK,
  SHACK,
  ISLE,
  OCEAN,
  COMPACT,
  DESIGNED,
  CAMPSITE,
  A_SHAPED,
  LAKE,
  ARCTIC,
} from '../../Components/main/Category';

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoding(true);
    dispatch(MainThunk());
    setIsLoding(false);
  }, []);

  const [Filter, setFilter] = useState(false);
  const [Login, setLogin] = useState(false);
  const [SignUp, setSignUp] = useState(false);
  const [isLoding, setIsLoding] = useState(true);
  const houseList = useSelector((state) => state.Main.Main);
  // console.log(categoryList);
  const [category, setCategory] = useState(0);
  // console.log(category);
  // const [pageNavi] = useState(0);
  // useState 하나 생성해서 카테고리 넘버를 설정
  // useState를 변경해주는 함수를 생성
  // 내가 생각하는 맵 함수에 일치되면 return되게끔

  const skeletonCount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <Fragment>
      <Header Filter={Filter} setFilter={setFilter} />
      <Category
        setCategory={setCategory}
        // pageNavi={pageNavi}
        category={category}
      />
      <MainBox category={category}>
        {isLoding
          ? skeletonCount.map((item) => <MainSkeleton />)
          : houseList.map((item) => <Card item={item} />)}
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
