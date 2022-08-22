import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  SignModalBody,
  SignupModalSection,
  SignupModalHeader,
  TopText,
  SignupArea,
  SignupInput,
  EmailInputArea,
  E_NickInput,
  CheckButton,
  EmailArea,
  PwArea,
  PwCheckArea,
  NicknameArea,
  SignupButton,
  SignupButtonArea,
} from './SignUpModalStyled';
import { HeaderCancel } from '../../Icon/HeaderCancel/HeaderCancel';
import useInput from '../../../hook/hook';

const SignUpModal = () => {
  const [email, emailHandler] = useInput('');
  const [password, passwordHandler] = useInput('');
  const [checkPw, checkPwHandler] = useInput('');
  const [nickname, nicknameHandler] = useInput('');
  const [E_check, setE_check] = useState(false);
  const [P_check, setP_check] = useState(false);
  const [N_check, setN_check] = useState(false);
  const [signDis, setSignDis] = useState(false);
  const URL = process.env.REACT_APP_URL;
  const checkEmail = { email: email };
  const checkNickname = { nickname: nickname };
  const signUpData = {
    email: email,
    nickname: nickname,
    password: password,
    passwordConfirm: checkPw,
  };
  const SignClear = () => {
    alert('회원가입이 완료되었습니다.');
    setSignDis(true);
  };

  useEffect(() => {
    password === checkPw ? setP_check(true) : setP_check(false);
  }, [password, checkPw]);
  useEffect(() => {
    password === checkPw ? setP_check(true) : setP_check(false);
  }, [password, checkPw]);

  const signUpCheck = (event) => {
    event.preventDefault();

    if (N_check && E_check) {
      if (P_check) {
        axios
          .post('http://3.34.126.243/members/signup', signUpData)
          .then((res) => {
            res.data ? SignClear() : alert('잠시후 다시 시도해주세요');
          });
      }
    }
    if (E_check === false) {
      axios
        .post('http://3.34.126.243/members/isvalidate/email', checkEmail)
        .then((res) => {
          if (res.data) {
            alert('사용 가능한 이메일 입니다.');
            setE_check(res.data);
          } else {
            alert('이미 가입한 이메일 입니다.');
            setE_check(res.data);
          }
        });
    } else if (N_check === false) {
      axios
        .post('http://3.34.126.243/members/isvalidate/nickname', checkNickname)
        .then((res) => {
          if (res.data) {
            alert('사용 가능한 닉네임 입니다.');
            setN_check(res.data);
          } else {
            alert('이미 사용중인 닉네임 입니다.');
            setE_check(res.data);
          }
        });
    } else if (P_check === false) {
      alert('비밀번호를 다시 확인해주세요.');
    }
  };

  return (
    <SignModalBody display={true}>
      <SignupModalSection>
        <SignupModalHeader>
          <HeaderCancel />
          <TopText>로그인 또는 회원 가입</TopText>
        </SignupModalHeader>

        <SignupArea onSubmit={(event) => signUpCheck(event)}>

          <EmailArea>
            {' '}
            <EmailInputArea>
              <E_NickInput
                type="email"
                placeholder="Email"
                onChange={emailHandler}
                required
              />
              <CheckButton>중복 확인</CheckButton>
            </EmailInputArea>
            
          </EmailArea>

          <PwArea>
            <SignupInput
              placeholder="password"
              onChange={passwordHandler}
              type="password"
            />{' '}
          </PwArea>
          <PwCheckArea>
            <SignupInput
              placeholder="password"
              onChange={checkPwHandler}
              type="password"
            />{' '}
          </PwCheckArea>
          <NicknameArea>
            {' '}
            <EmailInputArea>
              <E_NickInput placeholder="Nickname" onChange={nicknameHandler} />
              <CheckButton>중복 확인</CheckButton>
            </EmailInputArea>
          </NicknameArea>
          <SignupButtonArea>
            <SignupButton>작성 완료</SignupButton>{' '}
          </SignupButtonArea>
        </SignupArea>
      </SignupModalSection>
    </SignModalBody>
  );
};

export default SignUpModal;
