import styled from 'styled-components';

export const HeaderBox = styled.header`
  max-width: 1120px;
  width: auto;
  height: 90px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  border-bottom: 2px solid rgb(221, 221, 221);
  margin: -3px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

export const HeaderLogo = styled.div`
  height: 80px;
  width: 100%;

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
  width: 80px;
  height: 42px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  display: flex;
  border-radius: 21px !important;
  padding: 5px 5px 5px 12px;

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
