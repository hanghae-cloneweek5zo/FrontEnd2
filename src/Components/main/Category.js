import React, { Fragment } from 'react';
import styled from 'styled-components';

const Category = () => {
  return;
};

export default Category;

export const CategoryNavbar = styled.div`
  position: sticky;
  margin: auto;
  gap: 16px;
  width: 100%;
  max-width: 1600px;
  height: 70px;
  z-index: 2;
  /* border: 1px solid orange; */
  top: 20;
  padding: 10px;
  box-sizing: border-box;
  left: 5%;
  margin-bottom: 10px;
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
    bottom: -6px;
    left: 20%;
    transform: translateX(-50%);
    background-color: rgb(34, 34, 34);
    transition: all 0.3s ease-in-out;
    ${(props) => (props.idx === props.clickCategory ? `width: 5%;` : '')}
  }
`;

export const OMG = styled.div`
  width: 100px;
  height: 60px;
`;

export const AllHomes = styled.div`
  width: 100px;
  height: 60px;
`;

export const NationalPark = styled.div`
  width: 100px;
  height: 60px;
`;

export const Cabins = styled.div`
  width: 100px;
  height: 60px;
`;

export const Islands = styled.div`
  width: 100px;
  height: 60px;
`;

export const Beach = styled.div`
  width: 100px;
  height: 60px;
`;

export const TinyHomes = styled.div`
  width: 100px;
  height: 60px;
`;

export const Design = styled.div`
  width: 100px;
  height: 60px;
`;

export const Camping = styled.div`
  width: 100px;
  height: 60px;
`;

export const AFrames = styled.div`
  width: 100px;
  height: 60px;
`;

export const LakeFront = styled.div`
  width: 100px;
  height: 60px;
`;

export const Arctic = styled.div`
  width: 100px;
  height: 60px;
`;
