import React, { useState } from 'react';
import {
  FilterModalBody,
  FilterModalSection,
  FilterModalHeader,
  ModalBody,
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
} from './FilterMordalStyled';
import { HeaderCancel } from '../../Icon/HeaderCancel/HeaderCancel';
import FilterMordalSlider from './FilterMordalSlider';
import useInput from '../../../hook/hook';

const FilterModal = () => {
  const [Left, setLeft] = useInput(0);
  const [Right, setRight] = useInput(1500000);
  console.log();
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
              평균 가격범위는 {(Number(Left) + Number(Right)) / 2}원 입니다.
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

          <BedRoomArea>
            <BedRoomTitle>

            </BedRoomTitle>
          </BedRoomArea>
          
        </ModalBody>
      </FilterModalSection>
    </FilterModalBody>
  );
};

export default FilterModal;
