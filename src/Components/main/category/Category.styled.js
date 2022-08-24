import styled from 'styled-components';

export const CategoryNavbar = styled.div`
  position: sticky;
  margin: auto;
  right: 0;
  left: 0;
  top: 75px;
  display: block;
  width: 100%;
  height: 90px;
  z-index: 1;
  background-color: white;
  padding: 20px;
  scroll-margin-inline-start: 0;
  box-shadow: rgb(0 0 0 / 16%) 0 0 6px;
  box-sizing: border-box;
  &:before {
    content: '';
    box-sizing: border-box;
    display: flex;
  }
`;

export const CategoryBox = styled.div`
  position: grid !important;
  grid-template-columns: 100%;
  width: 87%;
  margin: auto;
  height: 60px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  color: #717171;
  /* &:hover {
    cursor: pointer;
  } */
  z-index: -1;
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
    bottom: 0;
    left: 5%;
    transform: translateX(50%);
    background-color: rgb(34, 34, 34);
    transition: all 0.3s ease-in-out;
    ${(props) => (props.idx === props.clickCategory ? `width: 5%;` : '')}
  }
`;

export const CategoryGroup = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  /* border: 1px solid blue; */
  gap: 26px;
`;

export const FANCY = styled.div`
  z-index: 1;
  margin: auto;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const ALLHOMES = styled.div`
  z-index: 1;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const NATIONAL_PARK = styled.div`
  z-index: 1;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const SHACK = styled.div`
  z-index: 1;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const ISLE = styled.div`
  z-index: 1;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const OCEAN = styled.div`
  z-index: 1;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const COMPACT = styled.div`
  z-index: 1;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const DESIGNED = styled.div`
  z-index: 1;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const CAMPSITE = styled.div`
  z-index: 1;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const A_SHAPED = styled.div`
  z-index: 1;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const LAKE = styled.div`
  z-index: 1;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const ARCTIC = styled.div`
  z-index: 1;
  width: 100px;
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
