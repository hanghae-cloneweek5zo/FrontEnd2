//react import
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../../hook/hook';
import { ReviewThunk } from '../../../redux/Modules/PageModules/Review';

//styled import
import {
  ReviewModalBody,
  ReviewModalSection,
  ReviewModalHeader,
  ReviewBody,
  BodyHeader,
  StarandReview,
  ReviewArea,
  ReviewList,
  ReviewCard,
  ProfileInfo,
  ProfileImg,
  ProfileTextArea,
  ProfileName,
  ProfileData,
  ProfileContent,
  ContentText,
} from './ReviewMordalStyled';
import { HeaderCancel } from '../../Icon/HeaderCancel/HeaderCancel';
import ReviewSkeleton from '../../skeleton/ReviewSkeleton';
const ReviewModal = ({ display, param, isLoading, DisplayHandler }) => {
  const dispatch = useDispatch();
  const [star, setStar] = useState(0);
  const [descript, setDescript] = useInput('');
  const StarValue = (e) => {
    setStar(e.target.value);
  };

  const SendReview = () => {
    dispatch(ReviewThunk());
  };
  const review = [
    {
      img: 'https://a0.muscache.com/im/pictures/user/11b3caa5-2ea4-4d90-bbfb-3a15f98a053b.jpg?im_w=240',
      descript:
        '정글을 그대로 느낄수 있는 숙소입니다. 숙소 이곳저곳디테일이 훌륭하며 개인 pool의 온도도 적절합니다. 다만음식과 와이파이는 조금 아쉬워요. 저녁엔 반려견 hoki가지키고 있어 든든합니다. 즐거운 여행이었습니다.',
      createdAt: '2022-7',
      author: 'Ashley',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/0e32126b-40d0-4b25-b25e-92470808b24b.jpg?im_w=240',
      descript:
        ' 발리 여행과 신혼여행의 일부로 이곳에 머물렀습니다! 정말놀라웠습니다. 이전에 머물렀던 숙소와는 너무 달랐습니다.다들 너무 친절하고 다정합니다. 상주하는 반려견도 매우귀엽고 친절합니다. 다시 머물고',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/f651e480-dfbc-4e4c-a3ee-f53e42d22872.jpg?im_w=240',
      descript: '최고의 장소입니다!',
      createdAt: '2022-7',
      author: 'Julie',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/3b7a893c-3318-483e-aace-8a0b031cdb94.jpg?im_w=240',
      descript:
        ' 하이드아웃에 머무르는 것은 발리 여행의 하이라이트 중하나였습니다! 청소년과 어른으로 이루어진 가족 여행은 모두감탄했습니다. 유익하고 친절한 직원과 매우 좋은 음식은 추가보너스였습니다.',
      createdAt: '2022-7',
      author: 'Vivian',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/cdf13d03-6b19-46dc-9c78-7db946bf8bd1.jpg?im_w=240',
      descript:
        '발리의 정말 천국. 매우 마음에 들지만 이런 숙소를선택하시면 몇 가지 어려움이 있습니다. 정글의 산악 지역에있습니다. 따라서 많은 곤충과 모기를 기대하실 수 있습니다.호라이즌은 특히 정말 개방된 대나무...',
      createdAt: '2022-7',
      author: 'Malay',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        ' 유일한 불만은 저희가 더 오래 머물지 못한다는 점에 전적으로동의합니다. 하이드아웃은 실망시키지 않았습니다. 음식,서비스, 온수 욕조... 에버린은 정말 놀라웠습니다. 이 숙소에대한 애정이 정말 많아요. 욕실은 그저',
      createdAt: '2022-7',
      author: 'Mansi',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
  ];

  const writeReview = {
    writeReview: {
      descript: descript,
      star: star,
    },
    param: param.id,
  };
  const skeletonCount = [];
  var i = 0;
  for (i === 0; i < 20; i++) {
    skeletonCount.push(i);
  }

  return (
    <ReviewModalBody display={display}>
      <ReviewModalSection>
        <ReviewModalHeader>
          <HeaderCancel onClick={DisplayHandler} />
        </ReviewModalHeader>

        <ReviewBody>
          <BodyHeader>
            <StarandReview>★ 4.87 후기 47개</StarandReview>
          </BodyHeader>

          <ReviewArea>
            <ReviewList>
              {review.map((item, i) => {
                return isLoading ? (
                  <ReviewSkeleton />
                ) : (
                  <ReviewCard key={item.author + i}>
                    <ProfileInfo>
                      <ProfileImg src={item.img} />
                      <ProfileTextArea>
                        <ProfileName>{item.author}</ProfileName>
                        <ProfileData>
                          {item.createdAt.split('-')[0]}년{' '}
                          {item.createdAt.split('-')[1]}월
                        </ProfileData>
                      </ProfileTextArea>
                    </ProfileInfo>
                    <ProfileContent>
                      <ContentText> {item.descript}</ContentText>{' '}
                    </ProfileContent>
                  </ReviewCard>
                );
              })}

              {/* 맵돌리는부분 */}
            </ReviewList>
          </ReviewArea>
        </ReviewBody>
      </ReviewModalSection>
    </ReviewModalBody>
  );
};

export default ReviewModal;
