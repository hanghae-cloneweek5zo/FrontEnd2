// React import
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { MainThunk, FANCYThunk } from '../../redux/Modules/PageModules/Main';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// components import
import Header from '../../Components/main/header/Header';
import Card from '../../Components/main/card/Card';
import Category from '../../Components/main/category/Category';
import MainSkeleton from '../../Components/skeleton/MainSkeleton';
import FilterModal from '../../Components/Modals/FilterMordal/FilterMordal';

// style import
import styled from 'styled-components';

const Main = () => {
  // const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [isLoding, setIsLoding] = useState(true);
  const houseList = useSelector((state) => state.Main.Main);

  //   pageNum.map((item,index)=>{category===item ?
  //     Arr[index].map((item)=>{
  //       <Card
  //       item={item}
  //       key={item.title + item.starAvg}
  //       onClick={() => navigate(`/detail/${item.houseId}`)}
  //     />

  //     }) : null
  // })

  // const CategoryList = useSelector((state) => state.Main.Category);
  const [category, setCategory] = useState(0);
  const skeletonCount = [];
  var i = 0;
  for (i === 0; i < 20; i++) {
    skeletonCount.push(i);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(category);
  // useEffect(() => {
  //   if (inView && !isLoding) {
  //     setPage(page + 1);
  //   }
  // }, [inView, isLoding]);
  useEffect(() => {
    setIsLoding(true);
    dispatch(MainThunk(page));
    setIsLoding(false);
  }, [page]);

  const [Filter, setFilter] = useState('none');
  const FilterHandler = () => {
    Filter === 'none' ? setFilter('block') : setFilter('none');
  };

  return (
    <>
      <Header FilterHandler={FilterHandler} />
      <Category
        setCategory={setCategory}
        category={category}
        FilterHandler={FilterHandler}
        setPage={setPage}
        page={page}
        isLoding={isLoding}
        setIsLoding={setIsLoding}
      />

      <MainBox category={category}>
        {/* {
           houseList.map((item) => (
              <Card
                item={item}
                key={item.title + item.starAvg}
                onClick={() => navigate(`/detail/${item.houseId}`)}
              />
            ))
           } */}

        {isLoding
          ? skeletonCount.map((item) => <MainSkeleton key={item} />)
          : null}
      </MainBox>

      <FilterModal
        Filter={Filter}
        FilterHandler={FilterHandler}
        setFilter={setFilter}
        setCategory={setCategory}
        page={page}
        setPage={setPage}
      />
    </>
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

export const MainRefDiv = styled.div`
  background-color: yellow;
  width: 100%;
  height: 1px;
`;
