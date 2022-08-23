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
  FilterButton
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
  // const data = {
  //   houseId,
  //   category,
  //   title,
  //   distance,
  //   price,
  //   starAvg,
  // };

  // const { houseId } = useParams();
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(MainThunk())
  },[])

  const [Filter,setFilter] = useState(false)
  const [Login,setLogin] = useState(false)
  const [SignUp,setSignUp] = useState(false)
  const houseList = useSelector((state)=>console.log(state.Main.Main))
  
  const data = [{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
    
  },{
    img: 'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720',
    local: 'Abansemal',
    price: '₩ 476379',
    Country: '인도네시아',
    star: '⭐ 4.87',
    distance : '1300km'
    
    
  }];

  // const [categories, setCategories] = useState(initialState);
  return (
    <Fragment>
      <Header Filter={Filter} setFilter={setFilter} />
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
          <FilterButton>
            <FilterButtonSVG />
            필터
          </FilterButton>
        </CategoryBox>
      </CategoryNavbar>
      <MainBox>
{data.map((item)=>item ? <Card item={item}/> : <MainSkeleton/> )}
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
