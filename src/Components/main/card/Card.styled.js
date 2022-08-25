import styled from 'styled-components';

export const CardContents = styled.div`
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  padding-bottom: 10px;
`;

export const CardArea = styled.div`
  opacity: 1;
  position: relative;
`;

export const CardImgArea = styled.div`
  background-image: url('${(props) => props.image_url}');
  background-position: center;
  display: block;
  background-size: cover;
  /* width: 300px; */
  height: 280px;
  border-radius: 12px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 10px;
  position: relative;
`;

export const CardContentArea = styled.div`
  display: grid;
  grid-row-gap: 2px;
  grid-column-gap: 8px;
  grid-template-columns: minmax(0, 1fr) max-content;
  grid-template-rows: unset;
  /* width: 300px; */
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
