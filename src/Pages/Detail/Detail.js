import { AiOutlineHeart, AiFillStar, AiOutlineWifi } from "react-icons/ai";
import {
  RiMedalLine,
  RiParkingBoxLine,
  RiTimeFill,
  RiRefund2Fill,
} from "react-icons/ri";
//구글 맵
import SimpleMap from '../GoogleMap/SimpleMap'


import {
  MdSingleBed,
  MdOutlineBed,
  MdBalcony,
  MdSmokeFree,
  MdAccessTimeFilled,
  MdPets,
  MdCleaningServices,
} from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiDesk, GiIceCube, GiPartyHat } from "react-icons/gi";
import { BiSwim } from "react-icons/bi";
import { BsFlower2, BsQuestionCircleFill } from "react-icons/bs";
import React from "react";
//스타일 컴퍼넌트
import {
  Acc,
  AccDiv,
  AccomDetailDiClin,
  AccomDetailDiv,
  AccomDetailDivDiv,
  AccommodationDiv,
  AccommodationRules,
  AccommodationRulesDiv,
  AccommodationRulesDivDiv,
  AccommodationRulesDivDivSpanDiv,
  AccSmDiv,
  AirCover,
  AirCoverImg,
  Alojamiento,
  BadRoom,
  BadRoomBox,
  BadRoomDiv,
  BadRoomPadiing,
  BedRoomFT,
  BedRoomSpan,
  Calendar,
  CalendarDiv,
  CalendarPadiing,
  CalendarSapn,
  DetailBody,
  FtDiv,
  GoogleMap,
  GoogleMapCover,
  GoogleMapCoverDiv,
  GoogleMapCoverSpan,
  GoogleMapPadding,
  GoogleMapSanDiv,
  GoogleMapSapn,
  HostDiv,
  HostHDiv,
  HostImg,
  HostImgDiv,
  HostPaddingDiv,
  HostPDiv,
  HostSection,
  HostSectionLeftDiv,
  HostSectionRightDiv,
  ImgDiv,
  ImgDivBox,
  ImgDivBoxs,
  ImgDivLeftBox,
  ImgDivRightBox,
  ImgOne,
  ImgrestanteBTM,
  ImgrestanteTOP,
  ImgRightrestante,
  ImgSection,
  LinkSapn,
  MovingBox,
  MovingBoxPadding,
  MovingBoxPrice,
  MovingBoxPriceBagSapn,
  MovingBoxPriceDiv,
  MovingBoxPriceReDiv,
  MovingBoxPriceSapn,
  NumStarSpan,
  PriceDayBox,
  PriceDayBoxBtm,
  PriceDayBoxBUM,
  PriceDayBoxSml,
  PriceDayBoxSmlDay,
  PriceDayBoxTopRow,
  PriceDayBoxTopRowLeft,
  PriceDayBoxTopRowRight,
  PriceDayHamSapn,
  PriceDaySapn,
  PriceDaySpanDiv,
  PriceDiv,
  PriceDivPadding,
  ProfileComment,
  ProfileDayWeek,
  ProfileImg,
  ProfileNickDiv,
  ProfileNickSapn,
  PropileDiv,
  Review,
  Reviewer,
  ReviewerDiv,
  ReviewPadding,
  ReviewStarBoxSpan,
  ReviewStarBoxSpanSapn,
  ReviewStarSpan,
  ReviewStarSpanSapn,
  SmImgDivleftBox,
  SmImgDivRightBox,
  StarBoxSpan,
  StarSpan,
  SuperHost,
  SuperHostCitaDiv,
  SuperHostLengthDiv,
  ThingsKeep,
  ThingsKeepDiv,
  ThingsKeepPadding,
  ThingsKeepSpan,
  TimeDiv,
  TitleSection,
  TitleUnderDiv,
} from "../Detail/DetailStyled";

function Detail() {
  
  return (
    <DetailBody>
      {/* Title */}
      <TitleSection>
        <span>
          <h1>아우라 하우스 2 비즈 에코 대나무 하우스 ,리버뷰</h1>
        </span>
        <TitleUnderDiv>
          <div>
            <StarSpan>
              <AiFillStar />
            </StarSpan>
            <NumStarSpan>4.87</NumStarSpan>
            <span> </span>
            <span>후기141개</span>
            <span> </span>
            <span>
              <RiMedalLine /> 슈퍼호스트
            </span>
            <span> </span>
            <span> Abiansemal, 발리, 인도네시아</span>
          </div>
          <div>
            <div>
              <LinkSapn>링크저장</LinkSapn>
              <span>
                <AiOutlineHeart /> 저장
              </span>
            </div>
          </div>
        </TitleUnderDiv>
      </TitleSection>

      {/* 이미지 */}
      <ImgSection>
        <ImgDiv>
          <ImgDiv>
            <ImgDivBox>
              <ImgDivLeftBox>
                <ImgOne
                  src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=1200"
                  alt="첫 이미지"
                />
              </ImgDivLeftBox>
              <ImgDivRightBox>
                <SmImgDivleftBox>
                  <ImgDivBoxs>
                    <ImgRightrestante
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/f4f7b242-db33-46fc-9080-c3d6a6fd55ec.jpeg?im_w=720"
                      alt="두 번째이미지"
                    ></ImgRightrestante>
                  </ImgDivBoxs>
                  <ImgDivBoxs>
                    <ImgRightrestante
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=720"
                      alt="네 번째이미지"
                    ></ImgRightrestante>
                  </ImgDivBoxs>
                </SmImgDivleftBox>
                <SmImgDivRightBox>
                  <ImgDivBoxs>
                    <ImgrestanteTOP
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/4756e699-f474-4ca7-8b77-06b12715a6cb.jpeg?im_w=720"
                      alt="세 번째이미지"
                    ></ImgrestanteTOP>
                  </ImgDivBoxs>

                  <ImgDivBoxs>
                    <ImgrestanteBTM
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/fca892a4-3481-4ad1-9f92-404feaa42e9f.jpeg?im_w=720"
                      alt="다섯 번째이미지"
                    ></ImgrestanteBTM>
                  </ImgDivBoxs>
                </SmImgDivRightBox>
              </ImgDivRightBox>
            </ImgDivBox>
          </ImgDiv>
        </ImgDiv>
      </ImgSection>

      {/* 전체 들어갈자리 */}
      <HostSection>
        <HostSectionLeftDiv>
          <HostDiv>
            <HostPaddingDiv>
              <HostHDiv>
                <HostPDiv>
                  <h2 tabIndex="-1">Wayan님이 호스팅하는 저택 전체</h2>
                  <p>최대 인원 4명 침실 2개침대 2개</p>
                </HostPDiv>
              </HostHDiv>
              <HostImgDiv>
                <HostImg
                  src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240"
                  alt="호스트 이미지"
                ></HostImg>
              </HostImgDiv>
            </HostPaddingDiv>
          </HostDiv>
          <SuperHost>
            <SuperHostCitaDiv>
              <StarSpan>
                <span>
                  <AiFillStar />
                </span>
                <span>후기 418개</span>

                <span> </span>
                <span>
                  <RiMedalLine />
                </span>
                <span> </span>
                <span>슈퍼 호스트</span>
              </StarSpan>
            </SuperHostCitaDiv>

            <div>
              <h3>Wayan님은 슈퍼호스트입니다.</h3>
            </div>
            <SuperHostLengthDiv>
              <span>
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가
                숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
              </span>
            </SuperHostLengthDiv>
          </SuperHost>
          <AirCover>
            <h2 tabIndex="-1">
              <AirCoverImg
                src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg"
                alt="에어커버"
              ></AirCoverImg>
            </h2>
            <div>
              모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
              경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
              포함됩니다.
            </div>
          </AirCover>
          <Alojamiento>
            <span>
              <h2>숙소 설명</h2>
              "아우라 하우스는 일출을 감상하기 위해 동쪽으로 향하는 아융강 서쪽
              둑에 지어진 아름답고 독특한 생태 대나무 집입니다. 아우라 하우스는
              우붓에서 25분, 캉구에서 35분 거리에 있습니다. "
              <br />
              <br />
              "예약이 완료된 경우, 에어비앤비 프로필 (프로필 사진 클릭) 을
              확인하여 아름다운 대나무 집 10채를 더 찾아보세요. 모두 같은 지역에
              있습니다."
              <br />
              <br />
              "디자이너 회사 이부쿠가 지은 유명한 계란 모양의 문 중 하나인
              아우라 하우스에 머무르게 되어 매우 자랑스럽습니다. 두 번째 침실의
              입구입니다. "
              <br />
              <br />
              "아우라 하우스의 분위기는 바쁜 도시 생활 및/또는 자연 애호가들과
              단절하고 싶은 사람들에게 안성맞춤입니다. 방을 엿보는 햇살과 아래의
              강물 소리에 깨어날 준비를 하세요."
            </span>
          </Alojamiento>
          <BadRoom>
            <div>
              <h2>숙박 정보</h2>
            </div>
            <BadRoomDiv>
              <BadRoomBox>
                <BadRoomPadiing>
                  <BedRoomSpan>
                    <MdSingleBed size="36" />
                    <BedRoomFT>침실 1</BedRoomFT>
                    <div>더블 침대 1개</div>
                  </BedRoomSpan>
                </BadRoomPadiing>
              </BadRoomBox>
              <BadRoomBox>
                <BadRoomPadiing>
                  <BedRoomSpan>
                    <MdOutlineBed size="36" />
                    <BedRoomFT>침실 2</BedRoomFT>
                    <div>더블 침대 1개</div>
                  </BedRoomSpan>
                </BadRoomPadiing>
              </BadRoomBox>
            </BadRoomDiv>
          </BadRoom>
          <AccommodationDiv>
            <AccDiv>
              <div>
                <h2>숙소 편의시설 </h2>
              </div>
              <Acc>
                <AccSmDiv>
                  <div>
                    <TbToolsKitchen2 size="24" />
                  </div>
                  <FtDiv>주방</FtDiv>
                </AccSmDiv>
                <AccSmDiv>
                  <div>
                    <AiOutlineWifi size="24" />
                  </div>
                  <FtDiv>무선인터넷</FtDiv>
                </AccSmDiv>
                <AccSmDiv>
                  <div>
                    <GiDesk size="24" />
                  </div>
                  <FtDiv>작업 공간</FtDiv>
                </AccSmDiv>
                <AccSmDiv>
                  <div>
                    <RiParkingBoxLine size="24" />
                  </div>
                  <FtDiv>주차 공간</FtDiv>
                </AccSmDiv>
                <AccSmDiv>
                  <div>
                    <BiSwim size="24" />
                  </div>
                  <FtDiv>전용 수영장</FtDiv>
                </AccSmDiv>
                <AccSmDiv>
                  <div>
                    <GiIceCube size="24" />
                  </div>
                  <FtDiv>에어컨</FtDiv>
                </AccSmDiv>
                <AccSmDiv>
                  <div>
                    <MdBalcony size="24" />
                  </div>
                  <FtDiv>전용 발코니</FtDiv>
                </AccSmDiv>
                <AccSmDiv>
                  <div>
                    <BsFlower2 size="24" />
                  </div>
                  <FtDiv>뒷마당 보유</FtDiv>
                </AccSmDiv>
              </Acc>
            </AccDiv>
          </AccommodationDiv>


          <Calendar>
            <CalendarPadiing>
              <CalendarDiv>
                <CalendarSapn>
                  에어비 엔비 클론 코딩을 시작해주세요.
                </CalendarSapn>
                <div>2022년 8월 19일 - 2023년 8월 25일</div>
              </CalendarDiv>
            </CalendarPadiing>
          </Calendar>


        </HostSectionLeftDiv>
        <HostSectionRightDiv>
          <MovingBox>
            <MovingBoxPadding>
              <MovingBoxPrice>
                <MovingBoxPriceDiv>
                  <MovingBoxPriceSapn>₩404,040</MovingBoxPriceSapn>
                  <MovingBoxPriceBagSapn> / 박</MovingBoxPriceBagSapn>
                  <MovingBoxPriceReDiv>
                    <StarBoxSpan>
                      <AiFillStar size="13" />
                    </StarBoxSpan>
                    <ReviewStarBoxSpan>4.87</ReviewStarBoxSpan>
                    <ReviewStarBoxSpanSapn>후기 141개</ReviewStarBoxSpanSapn>
                  </MovingBoxPriceReDiv>
                </MovingBoxPriceDiv>
                <PriceDayBox>
                  <PriceDayBoxTopRow>
                    <PriceDayBoxTopRowLeft>
                      <PriceDayBoxSml>체크인</PriceDayBoxSml>
                      <PriceDayBoxSmlDay>2022. 8. 19.</PriceDayBoxSmlDay>
                    </PriceDayBoxTopRowLeft>
                    <PriceDayBoxTopRowRight>
                      <PriceDayBoxSml>체크아웃</PriceDayBoxSml>
                      <PriceDayBoxSmlDay>2022. 8. 25</PriceDayBoxSmlDay>
                    </PriceDayBoxTopRowRight>
                  </PriceDayBoxTopRow>
                  <PriceDayBoxBtm>
                    <PriceDayBoxSml>인원</PriceDayBoxSml>
                    <PriceDayBoxSmlDay>게스트 6명</PriceDayBoxSmlDay>
                  </PriceDayBoxBtm>
                </PriceDayBox>
                <PriceDayBoxBUM>예약하기</PriceDayBoxBUM>
              </MovingBoxPrice>
              <PriceDaySpanDiv>
                <PriceDaySapn>
                  향해 확정 전에는 요금이 청구되지 않습니다.
                </PriceDaySapn>
              </PriceDaySpanDiv>
            </MovingBoxPadding>
            <PriceDiv>
              <PriceDivPadding>
                  <PriceDayHamSapn>총 합계</PriceDayHamSapn>
                  <PriceDayHamSapn>₩16,969,680</PriceDayHamSapn>
              </PriceDivPadding>
            </PriceDiv>
          </MovingBox>
        </HostSectionRightDiv>
      </HostSection>
      
      {/* 전체 들어갈자리 */}

      <Review>
        <ReviewPadding>
          <div>
            <StarSpan>
              <AiFillStar size="16" />
            </StarSpan>
            <ReviewStarSpan>4.87</ReviewStarSpan>
            <span> </span>
            <ReviewStarSpanSapn>후기 141개</ReviewStarSpanSapn>
          </div>
          <Reviewer>
            <ReviewerDiv>
              <PropileDiv>
                <ProfileImg
                  src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240"
                  alt="호스트 이미지"
                ></ProfileImg>
                <ProfileNickDiv>
                  <ProfileNickSapn>NICKNAME</ProfileNickSapn>
                  <ProfileDayWeek>2022년 8월</ProfileDayWeek>
                </ProfileNickDiv>
              </PropileDiv>
              <ProfileComment>
                <span>
                  열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다
                  직원들의 친절한 응대가 좋았습니다
                </span>
              </ProfileComment>
            </ReviewerDiv>
            <ReviewerDiv>
              <PropileDiv>
                <ProfileImg
                  src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240"
                  alt="호스트 이미지"
                ></ProfileImg>
                <ProfileNickDiv>
                  <ProfileNickSapn>NICKNAME</ProfileNickSapn>
                  <ProfileDayWeek>2022년 8월</ProfileDayWeek>
                </ProfileNickDiv>
              </PropileDiv>
              <ProfileComment>
                <span>
                  열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다
                  직원들의 친절한 응대가 좋았습니다
                </span>
              </ProfileComment>
            </ReviewerDiv>
            <ReviewerDiv>
              <PropileDiv>
                <ProfileImg
                  src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240"
                  alt="호스트 이미지"
                ></ProfileImg>
                <ProfileNickDiv>
                  <ProfileNickSapn>NICKNAME</ProfileNickSapn>
                  <ProfileDayWeek>2022년 8월</ProfileDayWeek>
                </ProfileNickDiv>
              </PropileDiv>
              <ProfileComment>
                <span>
                  Aura House는 기대 이상의 공간이었습니다. 말그대로 정글속의
                  대나무집이었습니다. 호스트인 Wayan님을 비롯하여, Febri님
                  그리고 나머지 스텝분들, 막바지 예약임에도 불구하고 신속하고
                  유연하게
                </span>
              </ProfileComment>
            </ReviewerDiv>
            <ReviewerDiv>
              <PropileDiv>
                <ProfileImg
                  src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240"
                  alt="호스트 이미지"
                ></ProfileImg>
                <ProfileNickDiv>
                  <ProfileNickSapn>NICKNAME</ProfileNickSapn>
                  <ProfileDayWeek>2022년 8월</ProfileDayWeek>
                </ProfileNickDiv>
              </PropileDiv>
              <ProfileComment>
                <span>
                  열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다
                  직원들의 친절한 응대가 좋았습니다
                </span>
              </ProfileComment>
            </ReviewerDiv>
            <ReviewerDiv>
              <PropileDiv>
                <ProfileImg
                  src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240"
                  alt="호스트 이미지"
                ></ProfileImg>
                <ProfileNickDiv>
                  <ProfileNickSapn>NICKNAME</ProfileNickSapn>
                  <ProfileDayWeek>2022년 8월</ProfileDayWeek>
                </ProfileNickDiv>
              </PropileDiv>
              <ProfileComment>
                <span>
                  열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다
                  직원들의 친절한 응대가 좋았습니다
                </span>
              </ProfileComment>
            </ReviewerDiv>
            <ReviewerDiv>
              <PropileDiv>
                <ProfileImg
                  src="https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240"
                  alt="호스트 이미지"
                ></ProfileImg>
                <ProfileNickDiv>
                  <ProfileNickSapn>NICKNAME</ProfileNickSapn>
                  <ProfileDayWeek>2022년 8월</ProfileDayWeek>
                </ProfileNickDiv>
              </PropileDiv>
              <ProfileComment>
                <span>
                  열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다
                  직원들의 친절한 응대가 좋았습니다
                </span>
              </ProfileComment>
            </ReviewerDiv>
            {/* 버튼들어갈 자리 */}
          </Reviewer>
        </ReviewPadding>
      </Review>
      <GoogleMap>
        <GoogleMapPadding>
          <GoogleMapSanDiv>
            <GoogleMapSapn>호스트 지역</GoogleMapSapn>
          </GoogleMapSanDiv>
          

          <GoogleMapCover>
            <SimpleMap/>
          </GoogleMapCover>



          <GoogleMapCoverDiv>
            <span></span>
            <GoogleMapCoverSpan>
              Abiansemal, 발리, 인도네시아
            </GoogleMapCoverSpan>
          </GoogleMapCoverDiv>
        </GoogleMapPadding>
      </GoogleMap>
      <ThingsKeep>
        <ThingsKeepPadding>
          <ThingsKeepDiv>
            <ThingsKeepSpan>알아두어야 할 사항</ThingsKeepSpan>
          </ThingsKeepDiv>
          <AccommodationRules>
            <AccommodationRulesDiv>
              <AccommodationRulesDivDiv>
                <AccommodationRulesDivDivSpanDiv>
                  <AccomDetailDiv>숙소 이용규칙</AccomDetailDiv>
                </AccommodationRulesDivDivSpanDiv>
                <AccomDetailDivDiv>
                  <TimeDiv>
                    <RiTimeFill size="18" />
                  </TimeDiv>
                  <span>체크인: 오후 3:00 - 오후 5:00</span>
                </AccomDetailDivDiv>
                <AccomDetailDivDiv>
                  <TimeDiv>
                    <MdAccessTimeFilled size="18" />
                  </TimeDiv>
                  <span>체크아웃 시간: 오전 11:00</span>
                </AccomDetailDivDiv>
                <AccomDetailDivDiv>
                  <TimeDiv>
                    <MdSmokeFree size="18" />
                  </TimeDiv>
                  <span>흠연 금지</span>
                </AccomDetailDivDiv>
                <AccomDetailDivDiv>
                  <TimeDiv>
                    <MdPets size="18" />
                  </TimeDiv>
                  <span>반려 동물 가능</span>
                </AccomDetailDivDiv>
                <AccomDetailDivDiv>
                  <TimeDiv>
                    <GiPartyHat size="18" />
                  </TimeDiv>
                  <span>파티 가능</span>
                </AccomDetailDivDiv>
              </AccommodationRulesDivDiv>
            </AccommodationRulesDiv>

            <AccommodationRulesDiv>
              <AccommodationRulesDivDiv>
                <AccommodationRulesDivDivSpanDiv>
                  <AccomDetailDiv>건강과 안전</AccomDetailDiv>
                </AccommodationRulesDivDivSpanDiv>
                <AccomDetailDiClin>
                  <TimeDiv>
                    <MdCleaningServices size="18" />
                  </TimeDiv>
                  <span>
                    에어비앤비 코로나19 방역 수칙을 준수하셔야 합니다.
                  </span>
                </AccomDetailDiClin>
                <AccomDetailDivDiv>
                  <TimeDiv>
                    <BsQuestionCircleFill size="18" />
                  </TimeDiv>
                  <span>일산화탄소 경보기 설치 여부 정보 없음</span>
                </AccomDetailDivDiv>
                <AccomDetailDivDiv>
                  <TimeDiv>
                    <BsQuestionCircleFill size="18" />
                  </TimeDiv>
                  <span>화재경보기 설치 여부 정보 없음</span>
                </AccomDetailDivDiv>
              </AccommodationRulesDivDiv>
            </AccommodationRulesDiv>

            <AccommodationRulesDiv>
              <AccommodationRulesDivDiv>
                <AccommodationRulesDivDivSpanDiv>
                  <AccomDetailDiv>환불 정책</AccomDetailDiv>
                </AccommodationRulesDivDivSpanDiv>
                <AccomDetailDivDiv>
                  <TimeDiv>
                    <RiRefund2Fill size="18" />
                  </TimeDiv>
                  <span>8월 25일 전까지 무료로 취소하실 없습니다.</span>
                </AccomDetailDivDiv>
              </AccommodationRulesDivDiv>
            </AccommodationRulesDiv>
          </AccommodationRules>
        </ThingsKeepPadding>
      </ThingsKeep>
    </DetailBody>
  );
}

export default Detail;
