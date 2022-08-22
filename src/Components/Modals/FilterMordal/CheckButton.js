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

const CheckButtonListOut = ()=>{

    const [roomNum,setRoomNum] = useState(0)
    const [bedNum,setBedNum] = useState(0)
    const List = [1,2,3,4,5,6]
return(
    <BedRoomArea>

            <BedRoomTitle>
침실과 침대
            </BedRoomTitle>

            <CheckButtonArea>


            <OptionDiv>침실</OptionDiv>
          <CheckButtonLine> <AnyButton key='bedroom' onClick={()=>{roomNum===0 ? setRoomNum(7) : setRoomNum(0)}} check={0} num={roomNum}>상관없음</AnyButton>
           {List.map((item,index)=>{
            return(<CheckButton key={item+'room'} onClick={()=>{item===roomNum ? setRoomNum(7) : setRoomNum(item)}} check={item} num={roomNum} >{item===List.length ? item+'+' : item}</CheckButton>)})}  

             </CheckButtonLine>

<OptionDiv>침대</OptionDiv>
          <CheckButtonLine> <AnyButton key='bed' check={0} num={bedNum} onClick={()=>{bedNum===0 ? setBedNum(7) : setBedNum(0)}} >상관없음</AnyButton> 
          {List.map((item,index)=>{
            return(<CheckButton key={item} onClick={()=>{item===bedNum ? setBedNum(7) : setBedNum(item)}} check={item} num={bedNum}>{index===List.length ? item+'+' : item}</CheckButton>)})}  

             </CheckButtonLine>


            </CheckButtonArea>

          </BedRoomArea>
)}

export default CheckButtonListOut