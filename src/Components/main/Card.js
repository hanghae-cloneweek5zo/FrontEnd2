import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
// import { FaHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const Card = ({item}) => {
  return (
    <Fragment>
      <CardContents>
        <CardArea>
          <CardImgArea
            image_url={
              item.img
            }
          >
            <CardIconArea>
              <FaRegHeart style={{ color: '#fff' }} />
              {/* <FaHeart style={{color: "#fff"}}/> */}
            </CardIconArea>
          </CardImgArea>
          <CardContentArea>
            <div>
              <span style={{ fontWeight: '600' }}>{item.local},{item.Country} </span>
            </div>
            <div>
              {item.star}
            </div>
          </CardContentArea>
          <CardContentArea>
            <div>
              <span style={{ color: '#979a9e' }}>{item.distance}</span>
            </div>
          </CardContentArea>
          <CardContentArea>
            <div>{item.price} / 박</div>
          </CardContentArea>
        </CardArea>
      </CardContents>
    </Fragment>
  );
};


export default Card;

export const CardContents = styled.div`
  display: grid !important;
  grid-template-columns: 100%;
  isolation: isolate;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
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
  -webkit-box-pack: justify;
  display: flex;
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
  svg {
    display: block;
    height: 20px;
    width: 20px;
    stroke-width: 0.5;
    overflow: visible;
  }
`;
