import styled from 'styled-components';
import '../../../static/fonts/fonts.css';
import { ImCross } from 'react-icons/im';

export const FilterModalBody = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const FilterModalSection = styled.div`
  width: 568px;
  background-color: white;
  margin: 100px auto 0px auto;
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

  position: absolute;
  accent-color: #e2e2e2;

  border: none;
  outline: none;
  z-index: 1;
  /* margin-left: 50px; */
`;
export const RightRange = styled.input`
  width: 45%;

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
  height: 30px;
  border-radius: 20px;
  border: 0.5px solid #e2e2e2;
  margin-right: 10px;
  -webkit-appearance: none;
  padding-left: 10px;
`;
export const RightPrice = styled.input`
  width: 40%;
  height: 30px;
  border-radius: 20px;
  border: 0.5px solid #e2e2e2;
  margin-left: 10px;
  -webkit-appearance: none;
  padding-left: 10px;

`;
export const BedRoomArea = styled.div`
width: 100%;
`
export const BedRoomTitle = styled.h2`
width: 100%;
`
