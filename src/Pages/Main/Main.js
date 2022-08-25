// React import
import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { MainThunk } from "../../redux/Modules/PageModules/Main";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// components import
import Header from "../../Components/main/header/Header";
import Card from "../../Components/main/card/Card";
import Category from "../../Components/main/category/Category";
import MainSkeleton from "../../Components/skeleton/MainSkeleton";
import FilterModal from "../../Components/Modals/FilterMordal/FilterMordal";

// style import
import styled from "styled-components";
// react icon
import { BsFillMapFill } from "react-icons/bs";
const Main = () => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [isLoding, setIsLoding] = useState(true);
  const houseList = useSelector((state) => state.Main.Main);
  const CategoryList = useSelector((state) => state.Main.Category);
  const [category, setCategory] = useState(0);
  const skeletonCount = [];
  var i = 0;
  for (i === 0; i < 20; i++) {
    skeletonCount.push(i);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoding(true);
    dispatch(MainThunk());
    setIsLoding(false);
  }, [page]);

  useEffect(() => {
    if (inView && !isLoding && category === 0) {
      setPage(page + 1);
    }
  }, [inView, isLoding]);

  const [Filter, setFilter] = useState("none");
  const FilterHandler = () => {
    Filter === "none" ? setFilter("block") : setFilter("none");
  };

  return (
    <Fragment>
      <Wrap>
        <Header FilterHandler={FilterHandler} />
        <Category
          setCategory={setCategory}
          category={category}
          FilterHandler={FilterHandler}
        />
      </Wrap>
      <MainWrap>
        <MainBox category={category}>
          {category === 0
            ? houseList.map((item) => (
                <Card
                  item={item}
                  key={item.title + item.starAvg}
                  onClick={() => navigate(`/detail/${item.houseId}`)}
                />
              ))
            : CategoryList.map((item) => (
                <Card
                  item={item}
                  key={item.title + item.starAvg}
                  onClick={() => navigate(`/detail/${item.houseId}`)}
                />
              ))}
          {isLoding
            ? skeletonCount.map((item) => <MainSkeleton key={item} />)
            : null}
        </MainBox>
      </MainWrap>
      {category === 0 ? <MainRefDiv ref={ref} /> : null}

      <FilterModal
        Filter={Filter}
        FilterHandler={FilterHandler}
        setFilter={setFilter}
        setCategory={setCategory}
      />
      <MainMapOutDiv>
        <MainMapBTM onClick={() => navigate("/MainMap")}>
          <MainMaoSapn>
            <span> 지도 표시하기 </span>{" "}
            <MainMapOutDivBtm>
              <span>
                <BsFillMapFill color="rgb(255, 255, 255)" />{" "}
              </span>
            </MainMapOutDivBtm>
          </MainMaoSapn>
        </MainMapBTM>
      </MainMapOutDiv>
    </Fragment>
  )
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

export const MainMapOutDiv = styled.div`
  width: 151.65px;
  height: 48px;
  display: flex;
  position: fixed;
  bottom: 10%;
  left: 45%;
  z-index: 200;
`;

export const MainMapBTM = styled.button`
  background-color: #222222;
  color: #ffffff;
  width: 151.65px;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 15px 24px;
  display: inline-flex;
`;

export const MainMaoSapn = styled.span`
  display: flex;
  font-size: 14px;
  font-weight: 600;
`;

export const MainMapOutDivBtm = styled.div`
  margin-left: 8px;
`;
export const MainRefDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 1px;
`;
