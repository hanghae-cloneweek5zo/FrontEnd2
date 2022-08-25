//react import
import React, { useState } from 'react';
import useInput from '../../../hook/hook';
import { useDispatch } from 'react-redux';
import { FilterThunk } from '../../../redux/Modules/PageModules/Main';
//style import
import {
  FilterModalBody,
  FilterModalSection,
  FilterModalHeader,
  ModalBody,
  ModalFooter,
  TopText,
  PriceTextArea,
  PriceRangeText,
  PriceText,
  PriceInputArea,
  LeftPrice,
  RightPrice,
  CheckBoxArea,
  CheckBox,
  CheckBoxText,
  CheckBoxContent,
  FooterButton,
} from './FilterMordalStyled';
import { HeaderCancel } from '../../Icon/HeaderCancel/HeaderCancel';
import CheckButtonListOut from './CheckButton';

const FilterModal = ({ FilterHandler, Filter, setCategory, page, setPage }) => {
  const dispatch = useDispatch();
  const [Left, setLeft] = useInput(0);
  const [Right, setRight] = useInput(1500000);
  const [CheckList, setCheckList] = useState([]);
  const CheckItem = [
    'WIFI',
    'PARKING',
    'SWIMMING ',
    'BALCONY ',
    'AIR_CONDITIONAL ',
    'KITCHEN',
    'BACKYARD ',
    'BUSINESS_SITE',
    'CO_ALARM ',
    'FIRE_ALARM ',
  ];
  const RealCheckItem = [
    'WIFI',
    '주차징',
    '수영장',
    '발코니',
    '에어컨',
    '주방',
    '마당',
    '업무전용공간',
    '일산화탄소 경보기',
    '화재 경보기',
  ];
  const [roomNum, setRoomNum] = useState(0);
  const [bedNum, setBedNum] = useState(0);
  const List = [1, 2, 3, 4, 5, 6];
  const onChangeCheck = (e) => {
    e.target.checked
      ? setCheckList([...CheckList, e.target.value])
      : setCheckList(CheckList.filter((item) => item !== e.target.value));
  };
  const SearchPost = () => {
    FilterHandler();
    dispatch(FilterThunk(FilterData, page));
    setCategory(20);
    setPage(0);
  };
  const Search = () => {
    Number(Left) > Number(Right)
      ? alert('가격을 다시 확인해주세요')
      : SearchPost();
  };

  const FilterData = {
    minPrice: Number(Left),
    maxPrice: Number(Right),
    bedRoomCnt: roomNum === 7 ? 0 : roomNum,
    bedCnt: bedNum === 7 ? 0 : bedNum,
    facilities: CheckList,
  };
  return (
    <FilterModalBody display={Filter}>
      <FilterModalSection>
        <FilterModalHeader>
          <HeaderCancel onClick={FilterHandler} />
          <TopText>필터</TopText>
        </FilterModalHeader>

        {/* 헤더끝 */}
        <ModalBody>
          <PriceTextArea>
            <PriceRangeText>가격범위</PriceRangeText>
            <PriceText>
              평균 가격범위는 {Math.floor((Number(Left) + Number(Right)) / 2)}원
              입니다.
            </PriceText>
          </PriceTextArea>
          <PriceInputArea>
            <LeftPrice
              type="number"
              onChange={setLeft}
              min={0}
              max={1500000}
              placeholder="최소금액"
            ></LeftPrice>
            -
            <RightPrice
              type="number"
              onChange={setRight}
              min={0}
              max={1500000}
              placeholder="최대금액"
            ></RightPrice>
          </PriceInputArea>

          <CheckButtonListOut
            roomNum={roomNum}
            setRoomNum={setRoomNum}
            bedNum={bedNum}
            setBedNum={setBedNum}
            List={List}
          />

          <CheckBoxArea>
            {CheckItem.map((item, index) => (
              <CheckBoxContent key={RealCheckItem[index]}>
                {' '}
                <CheckBox
                  name="facilities"
                  id={item}
                  type="checkbox"
                  value={item}
                  onChange={onChangeCheck}
                />
                <CheckBoxText>{RealCheckItem[index]}</CheckBoxText>{' '}
              </CheckBoxContent>
            ))}
          </CheckBoxArea>

          <ModalFooter>
            <FooterButton onClick={Search}>조회</FooterButton>
          </ModalFooter>
        </ModalBody>
      </FilterModalSection>
    </FilterModalBody>
  );
};

export default FilterModal;
