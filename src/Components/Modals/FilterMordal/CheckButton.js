import React, { useState } from 'react';
import {
  BedRoomTitle,
  BedRoomArea,
  CheckButtonArea,
  OptionDiv,
  CheckButtonLine,
  AnyButton,
  CheckButton,
} from './FilterMordalStyled';

const CheckButtonListOut = ({
  List,
  roomNum,
  setRoomNum,
  bedNum,
  setBedNum,
}) => {
  return (
    <BedRoomArea>
      <BedRoomTitle>침실과 침대</BedRoomTitle>

      <CheckButtonArea>
        <OptionDiv>침실</OptionDiv>
        <CheckButtonLine>
          {' '}
          <AnyButton
            key="bedroom"
            onClick={() => {
             setRoomNum(0);
            }}
            check={0}
            num={roomNum}
          >
            상관없음
          </AnyButton>
          {List.map((item, index) => {
            return (
              <CheckButton
                key={item + 'room'}
                onClick={() => {
                 setRoomNum(item);
                }}
                check={item}
                num={roomNum}
              >
                {item === List.length ? item + '+' : item}
              </CheckButton>
            );
          })}
        </CheckButtonLine>

        <OptionDiv>침대</OptionDiv>
        <CheckButtonLine>
          {' '}
          <AnyButton
            key="bed"
            check={0}
            num={bedNum}
            onClick={() => {
             setBedNum(0);
            }}
          >
            상관없음
          </AnyButton>
          {List.map((item, index) => {
            return (
              <CheckButton
                key={item + 'bed'}
                onClick={() => {
                setBedNum(item);
                }}
                check={item}
                num={bedNum}
              >
                {item === List.length ? item + '+' : item}
              </CheckButton>
            );
          })}
        </CheckButtonLine>
      </CheckButtonArea>
    </BedRoomArea>
  );
};

export default CheckButtonListOut;
