import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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

export const CardContents = styled.div`
  isolation: isolate;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  padding-bottom: 10px;
`;

export const CardArea = styled.div`
  grid-area: 1/1/2/2;
  opacity: 1;
  position: relative;
`;

export const CardImgArea = styled.div`
  background-image: url('${(props) => props.image_url}');
  background-position: center;
  display: block;
  background-size: cover;
  width: 300px;
  height: 280px;
  border-radius: 12px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 10px;
  position: relative;
`;

const CardContentArea = styled.div`
  display: grid;
  grid-row-gap: 2px;
  grid-column-gap: 8px;
  grid-template-columns: minmax(0, 1fr) max-content;
  grid-template-rows: unset;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  justify-content: space-between;
`;

export const CardIconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 8px;
  right: 8px;
  color: #fff;
  z-index: 1;
  svg {
    display: block;
    height: 20px;
    width: 20px;
    stroke-width: 0.5;
    overflow: visible;
  }
`;

export const TitleSpan = styled.span`
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
