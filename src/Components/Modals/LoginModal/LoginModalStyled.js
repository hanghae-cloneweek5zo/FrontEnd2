import styled from 'styled-components';
import { ImCross } from 'react-icons/im';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

export const LoginModalBody = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const LoginModalSection = styled.div`
  width: 568px;
  background-color: white;
  margin: 100px auto 0px auto;
  border-radius: 20px;
  padding: 0 15px 15px;
`;

export const LoginModalHeader = styled.div`
  border-bottom: 1px solid rgb(235, 235, 235);
  font-family: 'AirbnbCereal_W_XBd';
  display: flex;
  text-align: center;
  padding: 20px 0;
`;

export const TopText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

export const SectionBody = styled.div`
  width: 100%;
`;

export const BodyText = styled.h3`
  text-align: center;
  font-size: 22px;
  line-height: 26px;
  color: gray;
`;
export const LoginButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  outline: none;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  &:hover {
    background-color: #2222;
    cursor: pointer;
  }
`;
export const KakaoIcon = styled(RiKakaoTalkFill)`
  color: black;
  width: 25px;
  height: 25px;
  background-color: yellow;
  border-radius: 5px;
`;
export const GoogleIcon = styled(FcGoogle)`
  width: 25px;
  height: 25px;
`;
export const ButtonText = styled.div`
width: 100%;
text-align: center;
`;
export const ButtonArea = styled.div`
  width: 90%;
  margin: 30px 5%;
`;
export const GoogleButtonArea = styled.div`
  width: 90%;
  margin: 30px 5%;
`;
export const IconButtonArea = styled.div`
  width: 100%;
  margin: 50px 0 20px 0;
`;
export const TopBody = styled.form`
  width: 100%;
`;

export const BottomBody = styled.div`
  width: 100%;
`;
export const LoginInput = styled.input`
  background-color: #e2e2e2;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 20px;
  /* padding-left: 20px;
  padding-right: 20px; */
  font-size: 16px;

  &:focus {
    outline: 2px solid black;
  }
`;
export const EmailInputArea = styled.div`
  width: 90%;
  margin: 50px 5%;
`;
export const PasswordInputArea = styled.div`
  width: 90%;
  margin: 50px 5%;
`;

export const ClearButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 16px;

  &:hover {
    outline: 2px solid black;
  }
  &:focus {
    outline: 2px solid black;
  }
`;
export const ClearButtonArea = styled.div`
  width: 90%;
  margin: 0 5%;
`;
