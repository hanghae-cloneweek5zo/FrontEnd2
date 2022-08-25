// React import
import React, { Fragment, useState, useRef, useEffect } from 'react';

// style import
import {
  HeaderBox,
  HeaderLogo,
  HeaderLogoTitle,
  ProfileArea,
  HeaderPageButton,
  BnbIcon,
  HeaderProfileSvg,
  ProfileModal,
  LoginButton,
  WishText,
  LoginText,
  SignUpButton,
  SignUpText,
  HeaderWrap,
} from './Header.styled';

// Package import
import { useNavigate } from 'react-router-dom';

// Icon import
import { FaAirbnb } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

// component & element import
import imgPath from '../../../static/IconImages/profile.png';
import LoginModal from '../../Modals/LoginModal/LoginModal';
import SignUpModal from '../../Modals/SignUpModal/SignUpModal';

const Header = ({ FilterHandler }) => {
  // const { profileImg } = data;
  const navigate = useNavigate();
  const [Login, setLogin] = useState('none');
  const [SignUp, setSignUp] = useState('none');
  const [Profile, setProfile] = useState('none');
  const el = useRef();
  const modalEl = useRef(); //
  const buttonEl = useRef();

  const handleClickOutside = (e) => {
    if (
      Profile === 'block' &&
      !modalEl.current.contains(e.target) &&
      !buttonEl.current.contains(e.target)
    )
      setProfile('none');
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [Profile]);

  const ProfileHandler = () => {
    Profile === 'none' ? setProfile('block') : setProfile('none');
  };
  const LoginHandler = () => {
    Login === 'none' ? setLogin('block') : setLogin('none');
  };
  const SignUpHandler = () => {
    SignUp === 'none' ? setSignUp('block') : setSignUp('none');
  };
  return (
    <Fragment>
      <HeaderBox>
        <HeaderWrap>
          <HeaderLogo>
            <FaAirbnb />
            <HeaderLogoTitle onClick={() => navigate('/')}>
              airbnb
            </HeaderLogoTitle>
          </HeaderLogo>
          <ProfileArea>
            <HeaderPageButton
              btnType="oval"
              onClick={ProfileHandler}
              ref={buttonEl}
              // onClick={openProfileModal}
            >
              <FaBars />
              {/* {isLoggedIn && profileImg && <HeaderProfileImg src={profileImg} />}
{isLoggedIn && !profileImg && <HeaderProfileImg src={imgPath} />} */}
              {localStorage.Authorization ? (
                <BnbIcon />
              ) : (
                <HeaderProfileSvg>
                  <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                </HeaderProfileSvg>
              )}
            </HeaderPageButton>
            <SignUpModal
              display={SignUp}
              SignUpHandler={SignUpHandler}
              LoginHandler={LoginHandler}
              setSignUp={setSignUp}
            />
            <LoginModal
              display={Login}
              LoginHandler={LoginHandler}
              SignUpHandler={SignUpHandler}
              el={el}
            />
            {Profile === 'block' && (
              <ProfileModal display={Profile} ref={modalEl}>
                <LoginButton>
                  <WishText>위시 리스트</WishText>
                </LoginButton>
                <LoginButton>
                  <LoginText onClick={LoginHandler}>로그인 하기</LoginText>
                </LoginButton>
                <SignUpButton>
                  <SignUpText onClick={SignUpHandler} ref={el}>
                    회원가입 하기
                  </SignUpText>
                </SignUpButton>
              </ProfileModal>
            )}
          </ProfileArea>
        </HeaderWrap>
      </HeaderBox>
    </Fragment>
  );
};

export default Header;
