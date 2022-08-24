// React import
import React, { Fragment, useState, useRef, useEffect } from 'react';

// style import
import styled from 'styled-components';
import { TbBrandAirbnb } from 'react-icons/tb';

// Package import
import { useNavigate } from 'react-router-dom';
import { FaAirbnb } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

// component & element import
import imgPath from '../../static/IconImages/profile.png';
import LoginModal from '../Modals/LoginModal/LoginModal';
import SignUpModal from '../Modals/SignUpModal/SignUpModal';

const Header = ({
  isScrollTop,
  togglePopup,
  isLoggedIn,
  data,
  Filter,
  setFilter,
}) => {
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
        <HeaderLogo>
          <FaAirbnb />
          <HeaderLogoTitle onClick={() => navigate('/')}>
            airbnb
          </HeaderLogoTitle>
        </HeaderLogo>
        <ProfileArea>
          <HeaderPageButton
            btnType="oval"
            isScrollTop={isScrollTop}
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
      </HeaderBox>
    </Fragment>
  );
};

export default Header;

export const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  border-bottom: 1px solid rgb(235, 235, 235);
  margin: -3px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  padding: 20px 82px 15px 61px;
  background-color: white;
`;

export const HeaderLogo = styled.div`
  height: 80px;
  width: 100%;
  padding-left: 80px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  & svg {
    width: 35px;
    height: 35px;
    margin-right: 7px;
    color: #ff385c;
  }
`;

export const HeaderLogoTitle = styled.div`
  font-size: 23px;
  font-weight: bolder;
  color: #ff385c;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const HeaderPageButton = styled.div`
  width: 77px;
  height: 42px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  display: flex;
  border-radius: 21px !important;
  padding: 5px 5px 5px 12px;
  margin-right: 80px;
  background: transparent;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  &svg {
    background-color: #222222;
  }
  &:hover {
    transition: box-shadow 0.2s ease;
    box-shadow: 2px 2px 4px 0px rgba(168, 168, 168, 0.5);
    cursor: pointer;
  }
`;

export const HeaderProfileSvg = styled.svg`
  width: 32px;
  height: 32px;
  margin-left: 8px;
`;

export const HeaderProfileImg = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 8px;
  border-radius: 50%;
`;

export const ProfileArea = styled.div``;

export const ProfileModal = styled.div`
  display: ${(props) => (props.display == 'block' ? 'block' : 'none')};
  width: 300px;
  position: fixed;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  right: 100px;
  top: 80px;
`;

export const LoginButton = styled.div`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  text-align: center;
  &:hover {
    cursor: pointer;
    font-size: 17px;
  }
`;
export const WishText = styled.div`
  margin: 15px 0;
`;
export const LoginText = styled.div`
  margin: 15px 0;
`;
export const SignUpText = styled.div`
  margin: 15px 0;
`;
export const SignUpButton = styled.div`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  text-align: center;
  border-radius: 0 0 20px 20px;
  &:hover {
    cursor: pointer;
    font-size: 17px;
  }
`;

export const BnbIcon = styled(TbBrandAirbnb)`
  width: 32px;
  height: 32px;
  color: #ff385c;
`;
