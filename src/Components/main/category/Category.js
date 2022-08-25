// React import
import React, { Fragment, useEffect } from 'react';

// style import
import {
  CategoryNavbar,
  CategoryBox,
  CategoryBtn,
  FilterButton,
  CategoryWrap,
} from './Category.styled';

// Redux import
import { useDispatch } from 'react-redux';

// Images import
import { ReactComponent as ALLHOMESSVG } from '../../../static/IconImages/ALLHOMES.svg';
import { ReactComponent as FANCYSVG } from '../../../static/IconImages/FANCY.svg';
import { ReactComponent as NATIONAL_PARKSVG } from '../../../static/IconImages/NATIONAL_PARK.svg';
import { ReactComponent as SHACKSVG } from '../../../static/IconImages/SHACK.svg';
import { ReactComponent as ISLESVG } from '../../../static/IconImages/ISLE.svg';
import { ReactComponent as OCEANSVG } from '../../../static/IconImages/OCEAN.svg';
import { ReactComponent as COMPACTSVG } from '../../../static/IconImages/COMPACT.svg';
import { ReactComponent as DESIGNEDSVG } from '../../../static/IconImages/DESIGNED.svg';
import { ReactComponent as CAMPSITESVG } from '../../../static/IconImages/CAMPSITE.svg';
import { ReactComponent as A_SHAPEDSVG } from '../../../static/IconImages/A_SHAPED.svg';
import { ReactComponent as LAKESVG } from '../../../static/IconImages/LAKE.svg';
import { ReactComponent as ARCTICSVG } from '../../../static/IconImages/ARCTIC.svg';
import {
  CategoryThunk,
  MainThunk
} from '../../../redux/Modules/PageModules/Main';
import { ReactComponent as FilterButtonSVG } from '../../../static/IconImages/FilterButton.svg';


const Category = ({ setCategory, category, FilterHandler }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    category === 0
      ? dispatch(MainThunk())
      : dispatch(CategoryThunk({ homeCategory: Category[category], category }));
  }, [category, dispatch]);



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
    <ALLHOMESSVG width="100%" height="40" />,
    <FANCYSVG width="100%" height="40" />,
    <NATIONAL_PARKSVG width="100%" height="40" />,
    <SHACKSVG width="100%" height="40" />,
    <ISLESVG width="100%" height="40" />,
    <OCEANSVG width="100%" height="40" />,
    <COMPACTSVG width="100%" height="40" />,
    <DESIGNEDSVG width="100%" height="40" />,
    <CAMPSITESVG width="100%" height="40" />,
    <A_SHAPEDSVG width="100%" height="40" />,
    <LAKESVG width="100%" height="40" />,
    <ARCTICSVG width="100%" height="40" />,
  ];

  return (
    <Fragment>
      <CategoryNavbar>
        <CategoryBox>
          <CategoryWrap>
            {categoryList.map((item, index) => (
              <CategoryBtn
                onClick={() => {
                  setCategory(index)
                }}
                key={CategoryNameList[index]}
                check={index}
                category={category}
              >
                {item}
                <span>{CategoryNameList[index]}</span>
              </CategoryBtn>
            ))}
          </CategoryWrap>
          <FilterButton onClick={FilterHandler}>
            <FilterButtonSVG />
            필터
          </FilterButton>
        </CategoryBox>
      </CategoryNavbar>
    </Fragment>
  );
};

export default Category;
