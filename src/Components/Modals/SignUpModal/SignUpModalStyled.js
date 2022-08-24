import styled from 'styled-components';
import { ImCross } from 'react-icons/im';
import { RiKakaoTalkFill } from 'react-icons/ri';

export const SignModalBody = styled.div`
  display: ${(props) => (props.display == 'block' ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const SignupModalSection = styled.div`

width: 568px;
  background-color: white;
  margin: 200px auto 0px auto;
  border-radius: 20px;
  padding: 20px 30px;

`;

export const SignupModalHeader = styled.div`
padding: 20px;
text-align: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  font-family: 'AirbnbCereal_W_XBd';
  display: flex;
`;

export const TopText = styled.div`
  width: 100%;
text-align: center;
  font-size: 16px;

`;

export const SignupArea = styled.form`
  width: 100%;
  /* padding: 0 15px; */
  margin-left:30px;
`;

export const SignupInput = styled.input`
  background-color: #e2e2e2;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  &:focus {
    outline: 2px solid black;
  }
`;
export const EmailInputArea = styled.div`
display: flex;
width: 100%;

`;

export const E_NickInput = styled.input`
background-color: #e2e2e2;
width: 60%;
height: 40px;
border: none;
outline: none;
border-radius: 20px;
padding-left: 20px;
padding-right: 20px;
font-size: 16px;
&:focus {
  outline: 2px solid black;
}

`;

export const CheckButton = styled.button`
width: 30%;
height: 42px;
border-radius: 10px;
border: none;
outline: none;
margin-left: 20px;
&:hover{
  outline: 2px solid black;
}
&:focus{
  outline: 2px solid black;
}
`
export const EmailArea = styled.div`
display: flex;
margin: 80px 0 ;
width: 85%;

`

export const PwArea = styled.div`
margin: 80px 0 ;
width: 79%;
`

export const PwCheckArea = styled.div`
margin: 80px 0 ;
width: 79%;
`

export const NicknameArea = styled.div`
margin: 80px 0 ;
width: 85%;
`
export const SignupButton = styled.button`
width: 100%;
height: 60px;
border-radius: 10px;
border: none;
outline: none;
margin-left: 20px;
&:hover{
  outline: 2px solid black;
}
&:focus{
  outline: 2px solid black;
}
`

export const SignupButtonArea = styled.div`
width: 80%;
margin: 80px 0 100px 0;
`

