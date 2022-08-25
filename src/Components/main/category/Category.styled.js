import styled from 'styled-components';

export const CategoryNavbar = styled.div`
  margin: 0 auto;
  display: block;
  padding-top: 10px;
  width: 100%;
  z-index: 1;
  background-color: white;
  scroll-margin-inline-start: 0;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  box-sizing: border-box;
`;

export const CategoryBox = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  color: #717171;
  z-index: -1;
  text-align: center;
  font-size: 12px;
  box-shadow: 0.2s;
`;

export const CategoryBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  /* box-sizing: border-box; */
  transition: all 0.13s;
  svg {
    margin-bottom: 5px;
  }
  span {
    padding: 10px 0;
  }
  &:hover {
    cursor: pointer;

    font-weight: bold;
    span {
      box-shadow: inset 0 -2px 0 rgb(34, 34, 34);
    }
    svg path {
      fill: rgb(34, 34, 34);
    }
  }
  &.active {
    color: rgb(34, 34, 34);
    font-weight: bold;
    span {
      box-shadow: inset 0 -2px 0 rgb(34, 34, 34);
    }
    svg path {
      fill: rgb(34, 34, 34);
    }
  }
`;

export const ALLHOMES = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const NATIONAL_PARK = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const SHACK = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const ISLE = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const OCEAN = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const COMPACT = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const DESIGNED = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const CAMPSITE = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const A_SHAPED = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const LAKE = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const ARCTIC = styled.div`
  z-index: 1;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const FilterButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  border: 1px solid #dddddd;
  border-radius: 12px;
  width: 80px;
  height: 48px;
  z-index: 1;
  font-size: 14px;
  flex-direction: row;
  &:hover {
    cursor: pointer;
    border: 2px solid #dddddd;
  }
  font-size: 15px;
`;

export const CategoryWrap = styled.div`
  display: flex;
  width: 1400px;
  justify-content: space-between;
`;
