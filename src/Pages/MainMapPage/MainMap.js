// React import
import React from 'react';

// components import
import Header from '../../Components/main/header/Header';

// style import
import styled from 'styled-components';
// react icon
import { AiOutlineUnorderedList } from 'react-icons/ai';
// MainMapApi
import ManinSimpleMap from '../MainGoogleMap/MainSimpleMap';
import { useNavigate } from 'react-router-dom';

const MainMap = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <MainMapOutDiv>
        <MainMapBTM onClick={() => navigate('/Main')}>
          <MainMaoSapn>
            <span> 목록 보기 </span>{' '}
            <MainMapOutDivBtm>
              <span>
                <AiOutlineUnorderedList color="rgb(255, 255, 255)" />{' '}
              </span>
            </MainMapOutDivBtm>
          </MainMaoSapn>
        </MainMapBTM>
      </MainMapOutDiv>
      <ManinSimpleMap />
    </>
  );
};

export default MainMap;

export const MainMapOutDiv = styled.div`
  width: auto;
  height: 48px;
  display: flex;
  position: fixed;
  bottom: 10%;
  left: 45%;
  z-index: 200;
`;

export const MainMapBTM = styled.button`
  background-color: #222222;
  color: #ffffff;
  max-width: 138.65px;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 15px 24px;
  display: inline-flex;
  &:hover {
    background-color: #717171;
    cursor: pointer;
  }
`;

export const MainMaoSapn = styled.span`
  display: flex;
  font-size: 14px;
  font-weight: 600;
`;

export const MainMapOutDivBtm = styled.div`
  margin-left: 8px;
`;
