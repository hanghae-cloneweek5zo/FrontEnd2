import styled from "styled-components";

export const DetailBody = styled.div`
  max-width: 1980px;
  width: 100%;
  height: 100%;
  color: #222222;
  font-size: 16px;
  font-weight: 400;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const TitleSection = styled.section`
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
`;

export const TitleUnderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StarSpan = styled.span`
  margin-right: 4px;
  min-width: 14px;
  margin-top: 1%;
  color: #222222;
  display: inline-flex;
`;

export const NumStarSpan = styled.span`
  line-height: 20px;
  color: rgb(34, 34, 34);
  min-width: 14px;
  margin-right: 4px;
  margin-bottom: 2px;
`;
export const LinkSapn = styled.span`
  line-height: 20px;
  color: rgb(34, 34, 34);
  min-width: 14px;
  margin-right: 20px;
  margin-bottom: 2px;
`;

export const ImgSection = styled.section`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: 559px;
`;

export const ImgDiv = styled.div`
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 24px;
`;
export const ImgDivBox = styled.div`
  width: auto;
  padding: 0px;
`;

export const ImgDivLeftBox = styled.div`
  padding: 0px;
  width: 50%;
  float: left;
`;

export const ImgDivRightBox = styled.div`
  padding: 0px;
  max-width: 700px;
  width: 50%;
  height: 524px;
  float: right;
`;

export const SmImgDivleftBox = styled.div`
  width: 50%;
  height: 523px;
  float: left;
`;

export const SmImgDivRightBox = styled.div`
  width: 50%;
  height: 523px;
  float: right;
`;

export const ImgDivBoxs = styled.div`
  margin-left: 4.5%;
  height: 250px;
  margin-bottom: 4.5%;
`;

export const ImgOne = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  width: 560px;
  height: 513px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background: transparent;
`;

export const ImgrestanteTOP = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  max-width: 272px;
  width: 100%;
  max-height: 260px;
  height: 100%;
  border-top-right-radius: 12px;
  background: transparent;
  margin-left: 1%;
  margin-bottom: 2%;
`;

export const ImgrestanteBTM = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  max-width: 272px;
  width: 100%;
  max-height: 260px;
  height: 100%;
  border-bottom-right-radius: 12px;
  background: transparent;
  margin-left: 1%;
  margin-bottom: 2%;
`;

export const ImgRightrestante = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  max-width: 272px;
  width: 100%;
  max-height: 260px;
  height: 100%;
  background: transparent;
  margin-left: 1%;
  margin-bottom: 1%;
`;

export const HostSection = styled.section`
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: 2143px;
`;

export const HostSectionLeftDiv = styled.div`
    width: 58.333333%;
    height: 2143px;
    float: left;
    margin-left: 0%;
    margin-right: 0%;
`;
export const HostSectionRightDiv = styled.div`
    width: 33.3333333%;
    height: 2073px;
    float: right;
    display: flex;
    margin-left: 0%;
    margin-right: 0%;
`;
// 움직이는 박스
export const MovingBox = styled.div`
    width: 372.33px;
    height : 400.03px;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 24px;
    box-shadow: rgba(0,0,0,0.12) 0px 6px 16px;
    margin-top: 40px;
    position: sticky;
    top: 45px;
    bottom: 580px;
    
`;

export const MovingBoxPadding = styled.div`
    width: auto;
    height : 282.03px;
    padding: 24px;
    border-bottom: 1px solid rgb(211, 211, 211);
`;

export const MovingBoxPrice = styled.div`
    width: 322.35px;
    height : 237.09px;
    display: flex;
    flex-direction: column;
`;

export const MovingBoxPriceDiv = styled.div`
    width: 322.35px;
    height : 27.12px;
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
`;

export const MovingBoxPriceSapn = styled.span`
    font-size: 22px;
    font-weight: 600;
`;
export const MovingBoxPriceBagSapn = styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-top: 6px;
    margin-left: 2px;
`;

export const MovingBoxPriceReDiv = styled.div`
    width: 115.73px;
    height : 18px;
    margin-top: 6px;
    margin-left: 45px;
`;

export const StarBoxSpan = styled.span`
  margin-right: 4px;
  min-width: 14px;
  margin-top: 1%;
  color: #222222;
  display: inline-flex;
`;

export const ReviewStarBoxSpan = styled.span`
  color: rgb(34, 34, 34);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 3px;
`;

export const ReviewStarBoxSpanSapn = styled.span`

  font-weight: 600;
  color: rgb(113,113,113);
  font-size: 12px;
  margin-bottom: 2px;
  margin-left: 10px;
`;

export const PriceDayBox = styled.div`
  width: 322.49px;
  height: 111.99px;
  border: 2px solid rgb(221, 221, 221);
  border-radius: 8px;
  margin-bottom: 24px;

`;
export const PriceDayBoxTopRow = styled.div`
  width: 322.35px;
  height: 56px;
  display: flex;
  flex-direction: row;
`;

export const PriceDayBoxTopRowLeft = styled.div`
  width: 50%;
  height: 56px;
  float: left;
  border-bottom: 2px solid rgb(221, 221, 221);
  border-right: 2px solid rgb(221, 221, 221);


`;

export const PriceDayBoxTopRowRight = styled.div`
  width: 50%;
  height: 56px;
  float: right;
  border-bottom: 2px solid rgb(221, 221, 221);

`;

export const PriceDayBoxSml = styled.div`
margin-top: 10px;
margin-left: 15px;
font-size: 10px;
font-weight: 800;

`;
export const PriceDayBoxSmlDay = styled.div`
margin-top: 5px;
margin-left: 15px;
font-size: 14px;
`;

export const PriceDayBoxBtm = styled.div`
  width: 322.35px;
  height: 56px;

`;

export const PriceDayBoxBUM = styled.button`
  width: 323.35px;
  height: 100%;
  font-size: 16px;
  border-radius: 8px;
  color: #FFFFFF;
  background-color: rgb(220,15,98);
  outline: 0;
  border: 0;
`;
export const PriceDaySapn = styled.span`
  width: 323.35px;
  height: 26px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(40,40,40);
`;
export const PriceDaySpanDiv = styled.div`
  width: 322.35px;
  height: 26px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  text-align : center;
  margin-top: 22px;
`;
export const PriceDiv = styled.div`
  width: 322.35px;
  height: 61px;
  margin-left: auto;
  margin-right: auto;
  
`;
export const PriceDivPadding = styled.div`
display: flex;
  justify-content: space-between;
    padding: 20px;
`;

export const PriceDayHamSapn = styled.span`
  font-size: 16px;
  font-weight: 600;

`;

//여기까지 움직이는 박스 끝
export const HostDiv = styled.div`
  width: 653.33px;
  height: 138px;
  border-bottom: 2px solid rgb(221, 221, 221);
  
`;

export const HostPaddingDiv = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: row;
  min-width: 653.33px;
`;

export const HostdisplayDiv = styled.div`
  flex: 0 1 100%;
`;

export const HostPDiv = styled.div`
  margin: 0;
  padding: 0;
`;
export const HostHDiv = styled.div`
  width: 600px;
`;

export const HostImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  vertical-align: bottom;
`;

export const HostImgDiv = styled.div`
  margin-top: 4%;
`;

export const SuperHost = styled.div`
  width: 653.33px;
  height: 174.95px;
  border-bottom: 2px solid rgb(221, 221, 221);
`;

export const SuperHostCitaDiv = styled.div`
  width: 623.33px;
  height: 43.3px;
  display: flex;
  margin-top: 30px;
`;

export const SuperHostLengthDiv = styled.div`
  width: 440.33px;
`;
export const AirCover = styled.div`
  width: 653.33px;
  height: 144.95px;
  border-bottom: 2px solid rgb(221, 221, 221);
  margin-top: 3%;
`;
export const AirCoverImg = styled.img`
  width: 97.48px;
  height: 26px;
`;
export const Alojamiento = styled.div`
  width: 653.33px;
  height: 336.2px;
  border-bottom: 2px solid rgb(221, 221, 221);
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const BadRoom = styled.div`
  width: 653.33px;
  height: 258.2px;
  border-bottom: 2px solid rgb(221, 221, 221);
`;

export const BadRoomDiv = styled.div`
  width: 653.33px;
  height: 162.2px;
  display: flex;
  flex-direction: row;
`;

export const BadRoomBox = styled.div`
  width: 253.66px;
  height: 162.2px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 16px;
  margin-right: auto;
  margin-top: 5px;
`;
export const BadRoomPadiing = styled.div`
  width: 226.33px;
  height: 102.2px;
  padding: 28px;
`;
export const BedRoomSpan = styled.span`
  margin-bottom: 14px;
`;

export const BedRoomFT = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 6px;
`;

export const AccommodationDiv = styled.div`
  width: 653.33px;
  height: 362.92px;
  border-bottom: 2px solid rgb(221, 221, 221);
`;

export const AccDiv = styled.div`
  width: 653.33px;
  height: 312.92px;
  padding-top: 26px;
  padding-bottom: 26px;
`;

export const Acc = styled.div`
  width: 669.33px;
  height: 199.5px;
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
  flex-wrap: wrap;
`;

export const AccSmDiv = styled.div`
  width: 318.66px;
  height: 49px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FtDiv = styled.div`
  padding: 10px;
`;
export const FtDivEx = styled.div`
  padding: 10px;
  text-decoration:line-through 
`;

export const Calendar = styled.div`
  width: 653.33px;
  height: 517.99px;
`;
export const CalendarPadiing = styled.div`
  width: 653.33px;
  height: 421.99px;
  padding-top: 48px;
  padding-bottom: 48px;
`;
export const CalendarDiv = styled.div`
  width: 653.33px;
  height: 69.99px;
`;
export const CalendarSapn = styled.span`
  font-size: 24px;
`;
export const Review = styled.div`
  width: 1120px;
  height: 800px;
  border-bottom: 2px solid rgb(221, 221, 221);
  border-top: 2px solid rgb(221, 221, 221);
  margin-left: auto;
  margin-right: auto;
`;
export const ReviewPadding = styled.div`
  width: 1120px;
  height: 784px;
  padding-top: 48px;
  padding-bottom: 48px;
`;

export const ReviewStarSpan = styled.span`
  line-height: 26px;
  color: rgb(34, 34, 34);
  font-size: 22px;
  font-weight: 600;
  margin-right: 7px;
  margin-bottom: 2px;
`;
export const ReviewStarSpanSapn = styled.span`
  line-height: 26px;
  font-weight: 600;
  color: rgb(34, 34, 34);
  font-size: 22px;
  margin-right: 4px;
  margin-bottom: 2px;
`;

export const Reviewer = styled.div`
  width: 1120px;
  height: 587.93px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const ReviewerDiv = styled.div`
  width: 473.33px;
  height: 195.98px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const PropileDiv = styled.div`
  width: 457.33px;
  height: 40px;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  vertical-align: bottom;
`;
export const ProfileNickSapn = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
export const ProfileNickDiv = styled.div`
  margin-left: 10px;
`;
export const ProfileDayWeek = styled.div`
  color: rgb(113, 113, 113);
  font-size: 14px;
  font-weight: 400;
`;

export const ProfileComment = styled.div`
  width: 457.33px;
`;

export const GoogleMap = styled.section`
  width: 1120px;
  height: 700px;
  border-bottom: 2px solid rgb(221, 221, 221);
  margin-left: auto;
  margin-right: auto;
`;

export const GoogleMapPadding = styled.div`
  width: 1120px;
  height: 604px;
  padding-top: 48px;
  padding-bottom: 48px;
`;

export const GoogleMapSapn = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const GoogleMapSanDiv = styled.div`
  width: 1120px;
  height: 50px;
`;

export const GoogleMapCover = styled.div`
  width: 1120px;
  height: 480px;
  border-radius: 8px;
  margin-bottom: 32px;
`;

export const GoogleMapCoverDiv = styled.div`
  width: 1120px;
  height: 60px;
  margin-left: -8px;
  margin-right: -8px;
`;

export const GoogleMapCoverSpan = styled.span`
  font-size: 22px;
  font-weight: 600;
  margin-left: 8px;
`;

export const ThingsKeep = styled.div`
  width: 1120px;
  height: 318.07px;
  border-bottom: 2px solid rgb(221, 221, 221);
  margin-bottom: 3%;
  margin-left: auto;
  margin-right: auto;
`;

export const ThingsKeepPadding = styled.div`
  width: 1120px;
  height: 262.07px;
  padding-top: 48px;
  padding-bottom: 48px;
`;

export const ThingsKeepDiv = styled.div`
  width: 1120px;
  height: 49.99px;
  margin-left: auto;
  margin-right: auto;
`;

export const ThingsKeepSpan = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const AccommodationRules = styled.div`
  width: 1136px;
  height: 211.08px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
`;

export const AccommodationRulesDiv = styled.div`
  width: 378.66px;
  height: 211.08px;
`;

export const AccommodationRulesDivDiv = styled.div`
  width: 330.66px;
  height: 211.08px;
`;

export const AccommodationRulesDivDivSpanDiv = styled.div`
  width: 330.66px;
  height: 20px;
  margin-bottom: 14px;
`;

export const AccomDetailDiv = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const TimeDiv = styled.div`
    margin-right: 12px;
`;


export const AccomDetailDivDiv = styled.div`
  width: 330.66px;
  height: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

export const AccomDetailDiClin = styled.div`
  width: 330.66px;
  height: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
`;
export const ModalButton = styled.button`
width: 200px;
height: 50px;
border-radius:10px;
border: 1px solid black;
background-color: white;
&:hover{
  cursor: pointer;
  border: 2px solid black;
}
`
//구글맵
