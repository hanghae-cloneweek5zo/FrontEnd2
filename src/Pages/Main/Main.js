// React import
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { MainThunk } from '../../redux/Modules/PageModules/Main';

// components import
import Header from '../../Components/main/Header';
import Card from '../../Components/main/Card';
import MainSkeleton from '../../Components/skeleton/MainSkeleton';
import LoginModal from '../../Components/Modals/LoginModal/LoginModal';
import SignUpModal from '../../Components/Modals/SignUpModal/SignUpModal';
import FilterModal from '../../Components/Modals/FilterMordal/FilterMordal';

import {
  CategoryNavbar,
  CategoryBox,
  FilterButtonBox,
  FilterButton,
} from '../../Components/main/Category';

import {
  FANCY,
  AllHomes,
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
import {
  CardWrapper,
  CardItem,
  CardItemImg,
  CardItemIcon,
} from '../../Components/main/Card';

// Images import
import { ReactComponent as AFramesSVG } from '../../static/IconImages/AFrames.svg';
import { ReactComponent as AllHomesSVG } from '../../static/IconImages/AllHomes.svg';
import { ReactComponent as OMGSVG } from '../../static/IconImages/OMG.svg';
import { ReactComponent as NationalParksSVG } from '../../static/IconImages/NationalParks.svg';
import { ReactComponent as CabinsSVG } from '../../static/IconImages/Cabins.svg';
import { ReactComponent as IslandsSVG } from '../../static/IconImages/Islands.svg';
import { ReactComponent as BeachSVG } from '../../static/IconImages/Beach.svg';
import { ReactComponent as TinyHomesSVG } from '../../static/IconImages/TinyHomes.svg';
import { ReactComponent as DesignSVG } from '../../static/IconImages/Design.svg';
import { ReactComponent as CampingSVG } from '../../static/IconImages/Camping.svg';
import { ReactComponent as LakeFrontSVG } from '../../static/IconImages/LakeFront.svg';
import { ReactComponent as ArcticSVG } from '../../static/IconImages/Arctic.svg';
import { ReactComponent as FilterButtonSVG } from '../../static/IconImages/FilterButton.svg';
// style import
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch();
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

  const data = [];

  return (
    <Fragment>
      <Header Filter={Filter} setFilter={setFilter} />
      <CategoryNavbar>
        <CategoryBox>
          <AllHomes>
            <AllHomesSVG width="100" height="40" fill="blue" />
            전체보기
          </AllHomes>
          <FANCY>
            <OMGSVG width="100" height="40" />
            기상천외한 숙소
          </FANCY>
          <NATIONAL_PARK>
            <NationalParksSVG width="100" height="40" />
            국립공원
          </NATIONAL_PARK>
          <SHACK>
            <CabinsSVG width="100" height="40" />
            통나무집
          </SHACK>
          <ISLE>
            <IslandsSVG width="100" height="40" />섬
          </ISLE>
          <OCEAN>
            <BeachSVG width="100" height="40" />
            해변 근처
          </OCEAN>
          <COMPACT>
            <TinyHomesSVG width="100" height="40" />
            초소형 주택
          </COMPACT>
          <DESIGNED>
            <DesignSVG width="100" height="40" />
            디자인
          </DESIGNED>
          <CAMPSITE>
            <CampingSVG width="100" height="40" />
            캠핑장
          </CAMPSITE>
          <A_SHAPED>
            <AFramesSVG width="100" height="40" />
            A자형 주택
          </A_SHAPED>
          <LAKE>
            <LakeFrontSVG width="100" height="40" />
            호숫가
          </LAKE>
          <ARCTIC>
            <ArcticSVG width="100" height="40" fill="blue" />
            북극
          </ARCTIC>
          <FilterButton>
            <FilterButtonSVG />
            필터
          </FilterButton>
        </CategoryBox>
      </CategoryNavbar>
      <MainBox>
        {houseList.map((item) =>
          isLoding ? <MainSkeleton /> : <Card item={item} />
        )}
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
  padding-left: 130px;
  margin-top: 110px;
`;
