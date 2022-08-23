import styled from 'styled-components';
import { ImCross } from 'react-icons/im';

export const ReviewModalBody = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ReviewModalSection = styled.div`
  width: 568px;
  background-color: white;
  border-radius: 20px;
  margin: 100px auto 0px auto;
  padding: 30px 30px;
`;

export const ReviewModalHeader = styled.div`
  border-bottom: 1px solid rgb(235, 235, 235);
  font-family: 'AirbnbCereal_W_XBd';
  display: flex;
  padding-bottom: 30px;
`;

export const ReviewBody = styled.div`
width: 100%;
`
export const BodyHeader = styled.div`
margin: 15px 0;
`
export const StarandReview = styled.h1`
margin-left: 30px;
`
export const ReviewArea = styled.div`
width: 100%;
max-height: 700px;
padding-bottom: 100px;
`
export const InputArea = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
width: 90%;
justify-content: center;
margin-left: 15px;
`
export const ReviewInput = styled.input`
background-color: #e2e2e2;
width: 100%;
border: none;
outline: none;
border-radius: 20px;
padding-left: 20px;
padding-right: 20px;
font-size: 16px;
&:focus{
  outline: 2px solid black;
}
`
export const ReviewList = styled.div`
overflow: scroll;
overflow-x:hidden;
width: 100%;
max-height: 700px;
`
export const ReviewCard = styled.div`
width: 100%;
margin-top: 20px;
`

export const ProfileInfo = styled.div`
width: 100%;
display: flex;
margin-top: 10px;
`
export const ProfileImg = styled.img`
width: 40px;
height: 40px;
border-radius: 20px;
margin-left: 8%;
`
export const ProfileTextArea = styled.div`
margin-left: 10px;
font-size: 13px;
`

export const ProfileName = styled.div`
`
export const ProfileData = styled.div`
`
export const ProfileContent = styled.div`
font-size: 13px;

`
export const ContentText = styled.div`
margin-left: 8%;
margin-top: 10px;
padding-right: 30px;
`

export const StarSelectBox = styled.select`
width: 10%;
border-radius: 10px;
margin-right: 5px;
&:focus{
  outline: 1.5px solid black;
}
`

export const PostButton = styled.button`
width: 100%;
height: 50px;
border-radius: 20px;
border: none;
outline: none;
/* color: #e2e2e2; */
&:hover{
outline: 2px solid black;
cursor: pointer;
}
`

export const PostButtonArea = styled.div`
width: 25%;
margin-left: 37.5%;
margin-top: 4%;
color: black;
`

