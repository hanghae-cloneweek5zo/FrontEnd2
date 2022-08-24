import styled from 'styled-components';
import '../../../static/fonts/fonts.css';
import { ImCross } from 'react-icons/im';

export const FilterModalBody = styled.div`
  display:  ${(props) => (props.display == 'block' ? 'block' : 'none')}; 
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const FilterModalSection = styled.div`
  width: 568px;
  background-color: white;
  margin: 200px auto 0px auto;
  border-radius: 20px;
  padding: 0 15px;
`;
export const FilterModalHeader = styled.div`
  border-bottom: 1px solid rgb(235, 235, 235);
  font-family: 'AirbnbCereal_W_XBd';
  display: flex;
  text-align: center;
  padding: 15px 20px 15px 10px;
`;

export const ModalBody = styled.div`
  width: 100%;

  padding-right: 20px;
`;

export const TopText = styled.div`
  width: 100%;
`;

export const PriceTextArea = styled.div`
  width: 100%;
`;

export const PriceRangeText = styled.h2`
  width: 100%;
  margin-left: 20px;
`;
export const PriceText = styled.div`
  width: 100%;
  margin-left: 20px;
`;
//보류
export const RangeArea = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e2e2e2;
  display: flex;
  margin: 30px 15px;
  position: relative;
`;
export const RangeDiv = styled.div`
  width: 100%;
  height: 5px;
  background-color: red;
`;
export const LeftRange = styled.input`
  width: 45%;
  height: 30px;
  position: absolute;
  accent-color: #e2e2e2;

  border: none;
  outline: none;
  z-index: 1;
  /* margin-left: 50px; */
`;
export const RightRange = styled.input`
  width: 45%;
  height: 30px;
  position: absolute;
  left: 42%;
  accent-color: #e2e2e2;
  /* -webkit-appearance: none; */
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  /* margin-right: 50px; */
`;
//보류
export const PriceInputArea = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid rgb(235, 235, 235);
  justify-content: center;

`;

export const LeftPrice = styled.input`
  width: 40%;
  height: 40px;
  border-radius: 20px;
  border: 0.5px solid #e2e2e2;
  margin-right: 10px;
  -webkit-appearance: none;
  padding-left: 10px;
`;
export const RightPrice = styled.input`
  width: 40%;
  height: 40px;
  border-radius: 20px;
  border: 0.5px solid #e2e2e2;
  margin-left: 10px;
  -webkit-appearance: none;
  padding-left: 10px;

`;
export const BedRoomArea = styled.div`
width: 100%;
margin: 20px 0;
border-bottom: 1px solid rgb(235, 235, 235);

`
export const BedRoomTitle = styled.h2`
width: 100%;
margin: 0 15px;
`
export const ModalFooter = styled.div`
  border-top: 1px solid rgb(235, 235, 235);
  font-family: 'AirbnbCereal_W_XBd';
  display: flex;
  text-align: center;
  padding: 15px 20px 15px 10px;
  justify-content: center;
`;

export const CheckButtonArea = styled.div`
width: 100%;
margin: 20px 15px;
`

export const OptionDiv = styled.div`
width: 100%;
color: #e2e2e2;

`
export const InputInside = styled.div`

`
export const CheckButtonLine = styled.div`
display: flex;
width: 100%;
margin: 20px 0;

`
export const AnyButton = styled.button`
width: 110px;
height: 40px;
border: 1px solid #e2e2e2;
border-radius: 20px;
color: ${(props)=>props.check===props.num ? 'white' : 'black' };
background-color: ${(props)=>props.check===props.num? 'black' : 'white' };
margin: 0 5px;
transition: all 0.5s;
&:hover{
cursor: pointer;
outline: 1.5px solid black;
}
`

export const CheckButton = styled.button`
width: 60px;
height: 40px;
border: 1px solid #e2e2e2;
border-radius: 20px;
transition: all 0.5s;
color: black;
background-color: white;
color: ${(props)=>props.check===props.num ? 'white' : 'black' };
background-color: ${(props)=>props.check===props.num? 'black' : 'white' };
margin: 0 5px;
&:hover{
cursor: pointer;
outline: 1.5px solid black;
}
`

export const CheckBoxArea = styled.div`
width: 100%;
display: flex;
flex-wrap:wrap;
margin: 20px 10px;
flex-direction: column;
max-height: 250px;

`
export const CheckBox = styled.input`
width: 20px;
height: 20px;
accent-color: black;
border-radius: 10px;
transition: all 0.5s;
`
export const  CheckBoxText = styled.div`
font-size: 14px;

`
export const CheckBoxContent = styled.div`
display: flex;
flex-wrap:wrap;
margin: 10px;
`

export const FooterButton = styled.button`
width: 100px;
height: 60px;
border-radius:15px ;
border: 0.5px solid ;
outline: none;

&:hover{
cursor: pointer;
outline: 1.5px solid black;
}

`