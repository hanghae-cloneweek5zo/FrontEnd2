import styled from 'styled-components';
import { TbBrandAirbnb } from 'react-icons/tb';

export const HeaderBox = styled.header`
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid rgb(235, 235, 235);
  box-sizing: border-box;
  background-color: white;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
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
  width: 77px;
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
    cursor: pointer;
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

export const ProfileArea = styled.div``;

export const ProfileModal = styled.div`
  display: ${(props) => (props.display == 'block' ? 'block' : 'none')};
  width: 300px;
  position: fixed;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  right: 100px;
  top: 80px;
`;

export const LoginButton = styled.div`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  text-align: center;
  &:hover {
    cursor: pointer;
    font-size: 17px;
  }
`;
export const WishText = styled.div`
  margin: 15px 0;
`;
export const LoginText = styled.div`
  margin: 15px 0;
`;
export const SignUpText = styled.div`
  margin: 15px 0;
`;
export const SignUpButton = styled.div`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  text-align: center;
  border-radius: 0 0 20px 20px;
  &:hover {
    cursor: pointer;
    font-size: 17px;
  }
`;

export const BnbIcon = styled(TbBrandAirbnb)`
  width: 32px;
  height: 32px;
  color: #ff385c;
`;
