//react import
import React, { useState } from 'react';
import useInput from '../../../hook/hook';
import axios from 'axios';
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
  BnbIcon,
  ButtonText,
  ButtonArea,
  TopBody,
  BottomBody,
  LoginInput,
  EmailInputArea,
  PasswordInputArea,
  ClearButton,
  ClearButtonArea,
  BnbButtonArea,
  GoogleIcon,
  GoogleButtonArea,
  IconButtonArea,
} from './LoginModalStyled';
import { HeaderCancel } from '../../Icon/HeaderCancel/HeaderCancel';

const LoginModal = ({ display, LoginHandler, SignUpHandler }) => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const LoginInfomation = {
    email: email,
    password: password,
  };
  const GoSignUp = () => {
    LoginHandler();
    SignUpHandler();
  };
  const URL = process.env.REACT_APP_URL;
  const LoginCheck = (event) => {
    event.preventDefault();
    axios.post(`${URL}/members/login`, LoginInfomation).then((res) => {
      const token = res.headers.authorization;
      localStorage.setItem('authorization', token);
      setEmail('');
      setPassword('');
      LoginHandler();
    });
  };
  const notice = () => {
    alert('준비중입니다');
  };
  return (
    <LoginModalBody display={display}>
      <LoginModalSection>
        <LoginModalHeader>
          <HeaderCancel onClick={LoginHandler} />
          <TopText>로그인 또는 회원 가입</TopText>
        </LoginModalHeader>

        <SectionBody>
          <TopBody onSubmit={(event) => LoginCheck(event)}>
            <BodyText>에어비엔비에 오신 것을 환영합니다.</BodyText>

            <EmailInputArea>
              <LoginInput type="email" onChange={setEmail} required />{' '}
            </EmailInputArea>

            <PasswordInputArea>
              {' '}
              <LoginInput
                type="password"
                onChange={setPassword}
                required
              />{' '}
            </PasswordInputArea>
            <ClearButtonArea>
              {' '}
              <ClearButton>로그인</ClearButton>{' '}
            </ClearButtonArea>
          </TopBody>

          <BottomBody>
            <IconButtonArea>
              <BnbButtonArea>
                <LoginButton onClick={GoSignUp}>
                  <BnbIcon />
                  <ButtonText>airbnb 회원가입</ButtonText>
                </LoginButton>
              </BnbButtonArea>
              <ButtonArea>
                {' '}
                <LoginButton onClick={notice}>
                  <KakaoIcon />
                  <ButtonText>Kakao 계정으로 로그인하기</ButtonText>
                </LoginButton>
              </ButtonArea>

              <GoogleButtonArea>
                {' '}
                <LoginButton onClick={notice}>
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
