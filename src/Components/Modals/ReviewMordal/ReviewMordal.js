//react import
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hook/hook';
import { ReviewThunk } from '../../../redux/Modules/PageModules/Review';
import { MainThunk } from '../../../redux/Modules/PageModules/Main';

//styled import
import {
  ReviewModalBody,
  ReviewModalSection,
  ReviewModalHeader,
  ReviewBody,
  BodyHeader,
  StarandReview,
  ReviewArea,
  InputArea,
  ReviewInput,
  ReviewList,
  ReviewCard,
  ProfileInfo,
  ProfileImg,
  ProfileTextArea,
  ProfileName,
  ProfileData,
  ProfileContent,
  ContentText,
  StarSelectBox,
  PostButton,
  PostButtonArea,
} from './ReviewMordalStyled';
import { HeaderCancel } from '../../Icon/HeaderCancel/HeaderCancel';
import ReviewSkeleton from '../../skeleton/ReviewSkeleton';
const ReviewModal = ({
  display,
  setDisplay,
  param,
  isLoading,
  setIsLoading,
}) => {
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
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
    {
      img: 'https://a0.muscache.com/im/pictures/user/237512e2-5c40-40e9-86de-6a7c84e6882b.jpg?im_w=240',
      descript:
        '열대우림에 있는 만큼 벌레가 많으므로 창문을 잘 닫아야합니다 직원들의 친절한 응대가 좋았습니다',
      createdAt: '2022-8',
      author: 'NICKNAME',
    },
  ];

  // const []
  // 나중에 detail에서 받아온 isLoading 으로 조건문 걸어야함
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
          <HeaderCancel onClick={() => setDisplay(!display)} />
        </ReviewModalHeader>
        {/* 헤더끝 */}
        <ReviewBody>
          <BodyHeader>
            <StarandReview>★ 4.87 후기 47개</StarandReview>
          </BodyHeader>

          <ReviewArea>
            {/* 인풋창 */}
            {/* <InputArea>
              <StarSelectBox value={star} onChange={StarValue}>
                <option value={1}>★</option>
                <option value={2}>★2</option>
                <option value={3}>★3</option>
                <option value={4}>★4</option>
                <option value={5}>★5</option>
              </StarSelectBox>
              <ReviewInput
                maxLength={40}
                value={descript}
                onChange={setDescript}
              />
            </InputArea> */}
            {/* 인풋창 */}
            <ReviewList>
              {/* 맵돌리는부분 */}

              {review.reverse().map((item, i) => {
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
