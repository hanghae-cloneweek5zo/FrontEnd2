// React import
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

// style import
import {
  CardContents,
  CardArea,
  CardImgArea,
  CardIconArea,
  CardContentArea,
  CardWrap,
} from './Card.styled';

// Package import
import { useNavigate } from 'react-router-dom';

// Icon import
import { FaHeart } from 'react-icons/fa';
// import { FaHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const Card = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ClickHeart = () => {
    localStorage.Authorization
      ? alert('준비중 입니다.')
      : alert('로그인 후 이용해 주세요.');
  };

  return (
    <Fragment key={item}>
      <CardContents>
        <CardArea>
          <CardImgArea
            image_url={item.imgUrl}
            onClick={() => navigate(`/detail/${item.houseId}`)}
          ></CardImgArea>

          <CardIconArea onClick={ClickHeart}>
            <FaHeart style={{ color: 'rgba(0, 0, 0, .5)' }} />
          </CardIconArea>
          <CardContentArea onClick={() => navigate(`/detail/${item.houseId}`)}>
            <div style={{ width: '255px', overflow: 'hidden' }}>
              <span style={{ fontWeight: '600' }}>{item.title}</span>{' '}
            </div>
            <div>
              <AiFillStar />
              {item.starAvg}
            </div>
            <div>
              <span style={{ color: '#979a9e' }}>5,275km</span>
            </div>
            <div></div>
            <div></div>
          </CardContentArea>
        </CardArea>
      </CardContents>
    </Fragment>
  );
};

export default Card;
