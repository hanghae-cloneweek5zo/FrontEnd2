import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// Images import
import { ReactComponent as ALLHOMESSVG } from '../../static/IconImages/ALLHOMES.svg';
import { ReactComponent as FANCYSVG } from '../../static/IconImages/FANCY.svg';
import { ReactComponent as NATIONAL_PARKSVG } from '../../static/IconImages/NATIONAL_PARK.svg';
import { ReactComponent as SHACKSVG } from '../../static/IconImages/SHACK.svg';
import { ReactComponent as ISLESVG } from '../../static/IconImages/ISLE.svg';
import { ReactComponent as OCEANSVG } from '../../static/IconImages/OCEAN.svg';
import { ReactComponent as COMPACTSVG } from '../../static/IconImages/COMPACT.svg';
import { ReactComponent as DESIGNEDSVG } from '../../static/IconImages/DESIGNED.svg';
import { ReactComponent as CAMPSITESVG } from '../../static/IconImages/CAMPSITE.svg';
import { ReactComponent as A_SHAPEDSVG } from '../../static/IconImages/A_SHAPED.svg';
import { ReactComponent as LAKESVG } from '../../static/IconImages/LAKE.svg';
import { ReactComponent as ARCTICSVG } from '../../static/IconImages/ARCTIC.svg';
import { CategoryThunk } from '../../redux/Modules/PageModules/Category';
import { ReactComponent as FilterButtonSVG } from '../../static/IconImages/FilterButton.svg';

const Category = ({ setCategory, category }) => {
  const dispatch = useDispatch();
  // const categoryList = useSelector((state) => state);

  const CategoryClick = (index) => {
    setCategory(index);
    dispatch(CategoryThunk(Category[category]));
  };

  const Category = [
    'ALLHOMES',
    'FANCY',
    'NATIONAL_PARK',
    'SHACK',
    'ISLE',
    'OCEAN',
    'COMPACT',
    'DESIGNED',
    'CAMPSITE',
    'A_SHAPED',
    'LAKE',
    'ARCTIC',
  ];

  const CategoryNameList = [
    '전체보기',
    '기상천외한 숙소',
    '국립공원',
    '통나무집',
    '섬',
    '해변근처',
    '초소형 주택',
    '디자인',
    '캠핑장',
    'A자형주택',
    '호숫가',
    '북극',
  ];

  const categoryList = [
    <ALLHOMESSVG width="100" height="40" />,
    <FANCYSVG width="100" height="40" />,
    <NATIONAL_PARKSVG width="100" height="40" />,
    <SHACKSVG width="100" height="40" />,
    <ISLESVG width="100" height="40" />,
    <OCEANSVG width="100" height="40" />,
    <COMPACTSVG width="100" height="40" />,
    <DESIGNEDSVG width="100" height="40" />,
    <CAMPSITESVG width="100" height="40" />,
    <A_SHAPEDSVG width="100" height="40" />,
    <LAKESVG width="100" height="40" />,
    <ARCTICSVG width="100" height="40" />,
  ];
  console.log(category);

  return (
    <Fragment>
      <CategoryNavbar>
        <CategoryBox>
          <CategoryGroup>
            {categoryList.map((item, index) => (
              <FANCY
                onClick={() => {
                  CategoryClick(index);
                }}
              >
                {item}
                {CategoryNameList[index]}
              </FANCY>
            ))}
          </CategoryGroup>
          <FilterButton>
            <FilterButtonSVG />
            필터
          </FilterButton>
        </CategoryBox>
      </CategoryNavbar>
    </Fragment>
  );
};

export default Category;

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
  border-spacing: 32px;
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
  display: flex;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  border: 1px solid blue;
  gap: 24px;
`;

export const FANCY = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const ALLHOMES = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const NATIONAL_PARK = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const SHACK = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const ISLE = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const OCEAN = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const COMPACT = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const DESIGNED = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const CAMPSITE = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const A_SHAPED = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const LAKE = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

export const ARCTIC = styled.div`
  z-index: 1;
  border: 1px solid orange;
  width: 100px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
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
  gap: 5px;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    border: 2px solid #dddddd;
  }
`;

export const FilterButton = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid #dddddd;
  border-radius: 12px;
  left: 40px;
  width: 70px;
  height: 48px;
  padding-left: 20px;
  z-index: 1;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    border: 2px solid #dddddd;
  }
  font-size: 15px;
`;
