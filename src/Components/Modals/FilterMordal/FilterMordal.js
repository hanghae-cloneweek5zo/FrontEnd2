import React, { useState } from 'react';
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
  RangeDiv,
  RightRange,
  LeftRange,
  PriceInputArea,
  LeftPrice,
  RightPrice,
  RangeArea,
  BedRoomTitle,
  BedRoomArea,
  CheckButtonArea,
  OptionDiv,
  CheckButtonLine,
  AnyButton,
  CheckButton,
  CheckBoxArea,
  CheckBox,
  CheckBoxText,
  CheckBoxContent,
  FooterButton
} from './FilterMordalStyled';
import { HeaderCancel } from '../../Icon/HeaderCancel/HeaderCancel';
import FilterMordalSlider from './FilterMordalSlider';
import useInput from '../../../hook/hook';
import CheckButtonListOut from './CheckButton';



const FilterModal = () => {
  const [Left, setLeft] = useInput(0);
  const [Right, setRight] = useInput(1500000);
  const [CheckList,setCheckList] = useState([])
  const CheckItem = ['무선인터넷','난방','건조기','세탁기','에어컨','주방','일산화탄소','화재경보기','업무 전용 공간','TV']
  const onChangeCheck = (e) => {
  e.target.checked ? setCheckList([...CheckList,e.target.value]) : setCheckList(CheckList.filter((item)=>item!==e.target.value))
  }
  console.log(CheckList)
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
              평균 가격범위는 {Math.floor((Number(Left) + Number(Right)) / 2)}원 입니다.
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

          <CheckButtonListOut/>
<CheckBoxArea>

{CheckItem.map((item)=><CheckBoxContent> <CheckBox name='facilities' key={item} id={item}  type='checkbox' value={item}  onChange={onChangeCheck} /><CheckBoxText>{item}</CheckBoxText> </CheckBoxContent>)}

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
