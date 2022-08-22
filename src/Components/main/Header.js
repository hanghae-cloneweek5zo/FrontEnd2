// React import
import React, { Fragment } from 'react';

// style import
import styled from 'styled-components';

// Package import
import { useNavigate } from 'react-router-dom';
import { FaAirbnb } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import imgPath from '../../static/IconImages/profile.png';

const Header = ({ isScrollTop, togglePopup, isLoggedIn, data }) => {
  // const { profileImg } = data;
  const navigate = useNavigate();

  return (
    <Fragment>
      <HeaderBox>
        <HeaderLogo>
          <FaAirbnb />
          <HeaderLogoTitle onClick={() => navigate('/')}>
            airbnb
          </HeaderLogoTitle>
        </HeaderLogo>
        <HeaderPageButton
          btnType="oval"
          isScrollTop={isScrollTop}
          onClick={togglePopup}
        >
          <FaBars />
          {/* {isLoggedIn && profileImg && <HeaderProfileImg src={profileImg} />}
          {isLoggedIn && !profileImg && <HeaderProfileImg src={imgPath} />}
          {!isLoggedIn && ( */}
            <HeaderProfileSvg
            style={{
              fill: '#717171',
              cursor: 'pointer',
            }}>
            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
          </HeaderProfileSvg>
          {/* )} */}
        </HeaderPageButton>
      </HeaderBox>
    </Fragment>
  );
};

export default Header;

export const HeaderBox = styled.header`
  position: fixed;
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
  padding: 20px 80px 15px 80px;
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