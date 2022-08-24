// React import
import React, { Fragment } from 'react';

// Style import
import {
  HeaderBox,
  HeaderLogo,
  HeaderLogoTitle,
  HeaderPageButton,
  HeaderProfileSvg,
} from '../header/Header.styled';
import { BnbIcon } from '../header/Header.styled';
// Package import
import { useNavigate } from 'react-router-dom';

// Icon import
import { FaAirbnb } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

const DetailHeader = ({
  isScrollTop,
  togglePopup,
  isLoggedIn,
  data,
  Filter,
  setFilter,
}) => {
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
      </HeaderBox>
    </Fragment>
  );
};

export default DetailHeader;
