import React, { Fragment } from 'react';
import styled from 'styled-components';

const Category = () => {
  return;
};

export default Category;

export const CategoryNavbar = styled.div`
  top: 10%;
  position: sticky;
  margin: auto;
  right: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 1600px;
  height: 70px;
  z-index: -1;
  /* border: 1px solid orange; */
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
  &:before {
    content: '';
    box-sizing: border-box;
    display: flex;
  }
`;

export const CategoryBox = styled.div`
  position: relative;
  /* border: 1px solid green; */
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  color: #717171;
  &:hover {
    cursor: pointer;
  }
  text-align: center;
  font-size: 12px;
  box-shadow: 0.2s;
  &:after {
    content: '';
    display: block;
    visibility: hidden;
    clear: both;
  }
  &:before {
    content: '';
    position: absolute;
    width: 0%;
    height: 2.5px;
    bottom: -10px;
    left: 3%;
    transform: translateX(-50%);
    background-color: rgb(34, 34, 34);
    transition: all 0.3s ease-in-out;
    ${(props) => (props.idx === props.clickCategory ? `width: 5%;` : '')}
  }
`;

export const FANCY = styled.div`
  width: 100px;
  height: 60px;
`;

export const AllHomes = styled.div`
  width: 100px;
  height: 60px;
`;

export const NATIONAL_PARK  = styled.div`
  width: 100px;
  height: 60px;
`;

export const SHACK = styled.div`
  width: 100px;
  height: 60px;
`;

export const ISLE = styled.div`
  width: 100px;
  height: 60px;
`;

export const OCEAN = styled.div`
  width: 100px;
  height: 60px;
`;

export const COMPACT = styled.div`
  width: 100px;
  height: 60px;
`;

export const DESIGNED = styled.div`
  width: 100px;
  height: 60px;
`;

export const CAMPSITE = styled.div`
  width: 100px;
  height: 60px;
`;

export const A_SHAPED = styled.div`
  width: 100px;
  height: 60px;
`;

export const LAKE = styled.div`
  width: 100px;
  height: 60px;
`;

export const ARCTIC = styled.div`
  width: 100px;
  height: 60px;
`;

export const FilterButtonBox = styled.div`
  position: relative;
  left: 30px;
  width: 80px;
  height: 48px;
  background-color: transparent;
  color: black;
  border: 1px solid #dddddd;
  border-radius: 12px;
  margin: 0px;
  padding: 7px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-auto-columns: column;
  align-items: center;
  /* box-sizing: border-box; */
  gap: 5px;
  font-size: 12px;
  &:hover{
    cursor: pointer;
    border: 2px solid #dddddd;
  }
`;

export const FilterButton = styled.div`
align-items: center;
 display: flex;
 border: 1px solid #dddddd;
  border-radius: 12px;
  left: 30px;
  width: 60px;
  height: 48px;
  padding-left: 20px;
  z-index: 1;
  &:hover{
    cursor: pointer;
    border: 2px solid #dddddd;
  }
`