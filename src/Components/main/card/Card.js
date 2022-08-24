// React import
import React, { Fragment } from 'react';

// style import
import {
  CardContents,
  CardArea,
  CardImgArea,
  CardIconArea,
  CardContentArea,
} from './Card.styled';

// Package import
import { useNavigate } from 'react-router-dom';

// Icon import
import { FaRegHeart } from 'react-icons/fa';
// import { FaHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const Card = ({ item }) => {
  const navigate = useNavigate();

  const ClickHeart = () => {
    localStorage.Authorization
      ? console.log('통신함수넣어야함')
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
            <FaRegHeart style={{ color: '#fff' }} />
            {/* <FaHeart style={{color: "#fff"}}/> */}
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
              <span style={{ color: '#979a9e' }}>
                5,275km
                {/* {item.distance} */}
              </span>
            </div>
            <div></div>
            <div>
              ₩{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} /박
            </div>
          </CardContentArea>
        </CardArea>
      </CardContents>
    </Fragment>
  );
};

export default Card;
