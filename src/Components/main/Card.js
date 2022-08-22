import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
// import { FaHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const Card = () => {
  return (
    <Fragment>
      <CardContents>
        <CardArea>
          <CardImgArea
            image_url={
              'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720'
            }
          >
            <CardIconArea>
              <FaRegHeart style={{ color: '#fff' }} />
              {/* <FaHeart style={{color: "#fff"}}/> */}
            </CardIconArea>
          </CardImgArea>
          <CardContentArea>
            <div>
              <span style={{ fontWeight: '600' }}>Abiansemal, 인도네시아</span>
            </div>
            <div>
              <AiFillStar/>4.87
            </div>
          </CardContentArea>
          <CardContentArea>
            <div>
              <span style={{ color: '#979a9e' }}>5,275km</span>
            </div>
          </CardContentArea>
          <CardContentArea>
            <div>₩480,993 / 박</div>
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
