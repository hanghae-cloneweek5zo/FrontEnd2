//react import
import React, { useState } from 'react';
import useInput from '../../../hook/hook';
import axios from 'axios'
//style import
import {
  LoginModalBody,
  LoginModalSection,
  LoginModalHeader,
  TopText,
  SectionBody,
  BodyText,
  LoginButton,
  KakaoIcon,
  ButtonText,
  ButtonArea,
  TopBody,
  BottomBody,
  LoginInput,
  EmailInputArea,
  PasswordInputArea,
  ClearButton,
  ClearButtonArea,
  GoogleIcon,
  GoogleButtonArea,
  IconButtonArea
} from './LoginModalStyled';
import { HeaderCancel } from '../../Icon/HeaderCancel/HeaderCancel';


const LoginModal = () => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const LoginInfomation = {
    email: email,
    password: password,
  };
  console.log(LoginInfomation)
  const LoginCheck = (event) => {
    event.preventDefault();
    axios.post('http://3.34.126.243/members/login',LoginInfomation).then((res)=>{
    const token = res.headers.authorization;
    localStorage.setItem('Authorization', token);
    //**모달닫는 함수 추가하기**
    console.log(res)})
  }
  const notice = () =>{
    alert("준비중입니다")
  }
  return (
    <LoginModalBody display={true}>
      <LoginModalSection>
        <LoginModalHeader>
          <HeaderCancel />
          <TopText>로그인 또는 회원 가입</TopText>
        </LoginModalHeader>

        <SectionBody>
          <TopBody onSubmit={(event) => LoginCheck(event)}>
            <BodyText>에어비엔비에 오신 것을 환영합니다.</BodyText>


            <EmailInputArea>
              <LoginInput type="email" onChange={setEmail} required/>{' '}
            </EmailInputArea>

            <PasswordInputArea>
              {' '}
              <LoginInput type="password" onChange={setPassword} required />{' '}
            </PasswordInputArea>
            <ClearButtonArea> 
              {' '}
              <ClearButton>로그인</ClearButton>{' '}
            </ClearButtonArea>
          </TopBody>

          <BottomBody>
            <IconButtonArea>
             <ButtonArea>
              {' '}
              <LoginButton
                onClick={notice}
              >
                <KakaoIcon />
                <ButtonText>Kakao 계정으로 로그인하기</ButtonText>
              </LoginButton>
            </ButtonArea>

            <GoogleButtonArea>
              {' '}
              <LoginButton
                onClick={notice}
              >
                <GoogleIcon />
                <ButtonText>Google 계정으로 로그인하기</ButtonText>
              </LoginButton>
            </GoogleButtonArea> 
            </IconButtonArea>
          </BottomBody>
        </SectionBody>
      </LoginModalSection>
    </LoginModalBody>
  );
};

export default LoginModal;
