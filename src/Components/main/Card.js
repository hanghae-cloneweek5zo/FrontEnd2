import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
// import { FaHeart } from 'react-icons/fa';

const Card = () => {
  return (
    <Fragment>
      <CardWrapper>
        <CardItem>
          <CardItemImg></CardItemImg>
          <CardItemIcon>
            <FaRegHeart style={{ color: '#fff' }} />
            {/* <FaHeart style={{color: "#fff"}}/> */}
          </CardItemIcon>
          <p>Abiansemal, 인도네시아</p>
          <p>5,275km</p>
          <p>₩480,993 /박</p>
        </CardItem>
      </CardWrapper>
    </Fragment>
  );
};

export default Card;

export const CardWrapper = styled.div`
  display: grid;
  grid-auto-rows: minmax(0, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 24px;
  isolation: isolate;
  box-sizing: border-box;
  width: 100%;
  margin-top: 25px;
  grid-template-columns: repeat(5, minmax(100px, auto));
  row-gap: 32px;
  border: 1px solid red;
  margin-block: 30px;
  object-fit: cover !important;
  vertical-align: bottom;
  &:hover {
    cursor: pointer;
  }
`;

export const CardItem = styled.div`
  grid-area: 1/1/2/2;
  position: relative;
  display: block;
  height: 400px;
  border-radius: 15px;
  border: 1px solid gray;
  width: 100%;
  top: 0;
  left: 0;
`;

export const CardItemImg = styled.div`
  display: block;
  background-image: url(https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  border-radius: 15px;
`;

export const CardItemIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  svg {
    display: block;
    height: 24px;
    width: 24px;
  }
`;
