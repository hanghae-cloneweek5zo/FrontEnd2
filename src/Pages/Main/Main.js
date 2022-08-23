// React import
import React, { Fragment, useState } from 'react';

// components import
import Header from '../../Components/main/Header';
import Card from '../../Components/main/Card';
import MainSkeleton from '../../Components/skeleton/MainSkeleton';

import {
  CategoryNavbar,
  CategoryBox,
  FilterButtonBox,
} from '../../Components/main/Category';

import {
  OMG,
  AllHomes,
  NationalPark,
  Cabins,
  Islands,
  Beach,
  TinyHomes,
  Design,
  Camping,
  AFrames,
  LakeFront,
  Arctic,
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
  const data = {
    // houseId,
    // category,
    // title,
    // distance,
    // price,
    // starAvg,
  };

  const { houseId } = useParams();
  // const [categories, setCategories] = useState(initialState);
  return (
    <Fragment>
      <Header />
      <CategoryNavbar>
        <CategoryBox>
          <AllHomes>
            <AllHomesSVG width="100" height="40" fill="blue" />
            전체보기
          </AllHomes>
          <OMG>
            <OMGSVG width="100" height="40" />
            {/* <button
              value="기상천외한숙소"
              onClick={() => {
                setCategories('기상천외한 숙소');
              }}
            > */}
            기상천외한 숙소
          </OMG>
          <NationalPark>
            <NationalParksSVG width="100" height="40" />
            국립공원
          </NationalPark>
          <Cabins>
            <CabinsSVG width="100" height="40" />
            통나무집
          </Cabins>
          <Islands>
            <IslandsSVG width="100" height="40" />섬
          </Islands>
          <Beach>
            <BeachSVG width="100" height="40" />
            해변 근처
          </Beach>
          <TinyHomes>
            <TinyHomesSVG width="100" height="40" />
            초소형 주택
          </TinyHomes>
          <Design>
            <DesignSVG width="100" height="40" />
            디자인
          </Design>
          <Camping>
            <CampingSVG width="100" height="40" />
            캠핑장
          </Camping>
          <AFrames>
            <AFramesSVG width="100" height="40" />
            A자형 주택
          </AFrames>
          <LakeFront>
            <LakeFrontSVG width="100" height="40" />
            호숫가
          </LakeFront>
          <Arctic>
            <ArcticSVG width="100" height="40" fill="blue" />
            북극
          </Arctic>
          <FilterButtonBox>
            <FilterButtonSVG />
            필터
          </FilterButtonBox>
        </CategoryBox>
      </CategoryNavbar>
      <MainBox>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </MainBox>
    </Fragment>
  );
};

export default Main;

export const MainBox = styled.div`
  position: relative;
  width: 84%;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  top: 120px;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: auto;
  gap: 26px;
`;
