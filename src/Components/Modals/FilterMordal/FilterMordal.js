//react import
import React, { useState } from 'react';
import useInput from '../../../hook/hook';
import { useDispatch } from 'react-redux';
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

const FilterModal = () => {
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
    'WIFI','주차징','수영장','발코니','에어컨','주방','마당',"업무전용공간",'일산화탄소 경보기','화재 경보기'
  ]
  const [roomNum,setRoomNum] = useState(0)
  const [bedNum,setBedNum] = useState(0)
  const List = [1,2,3,4,5,6]
  const onChangeCheck = (e) => {
    e.target.checked
      ? setCheckList([...CheckList, e.target.value])
      : setCheckList(CheckList.filter((item) => item !== e.target.value));
  };
  console.log(roomNum);
  return (
    <FilterModalBody display={true}>
      <FilterModalSection>
        <FilterModalHeader>
          <HeaderCancel />
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

          {/* <RangeArea>
      <RangeDiv>
        <LeftRange type='range' value={Left} onChange={setLeft} min={750000} max={1499999} /><RightRange type='range' value={Right} onChange={setRight} min={13001} max={1500000}/>
      </RangeDiv>
      </RangeArea> */}

          <PriceInputArea>
            <LeftPrice
              type="number"
              value={Left}
              onChange={setLeft}
              min={0}
              max={750000}
            ></LeftPrice>
            -
            <RightPrice
              type="number"
              value={Right}
              onChange={setRight}
              min={1}
              max={1500000}
            ></RightPrice>
          </PriceInputArea>

          <CheckButtonListOut roomNum={roomNum} setRoomNum={setRoomNum} bedNum={bedNum} setBedNum={setBedNum} List={List} />


          <CheckBoxArea>
            {CheckItem.map((item,index) => (
              <CheckBoxContent>
                {' '}
                <CheckBox
                  name="facilities"
                  key={item}
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
            <FooterButton>조회</FooterButton>
          </ModalFooter>
        </ModalBody>
      </FilterModalSection>
    </FilterModalBody>
  );
};

export default FilterModal;
