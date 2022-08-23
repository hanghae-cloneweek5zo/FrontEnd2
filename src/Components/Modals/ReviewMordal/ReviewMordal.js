//react import
import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
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

  // const []
  // 나중에 detail에서 받아온 isLoading 으로 조건문 걸어야함
  const writeReview = {
    writeReview: {
      descript: descript,
      star: star,
    },
    param: param.id,
  };
  console.log(writeReview)
  const review = [
    {
      accommodationId: 1,
      reviewId: 1,
      author: 'god1hyuk',
      descript: '깨끗하니 좋네요.',
      star: 5,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
    {
      accommodationId: 1,
      reviewId: 2,
      author: 'god1hyuk',
      descript: '깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
    {
      accommodationId: 1,
      reviewId: 2,
      author: 'god1hyuk',
      descript: '깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
    {
      accommodationId: 1,
      reviewId: 2,
      author: 'god1hyuk',
      descript: '깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
    {
      accommodationId: 1,
      reviewId: 2,
      author: 'god1hyuk',
      descript: '깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
    {
      accommodationId: 1,
      reviewId: 2,
      author: 'god1hyuk',
      descript: '깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
    {
      accommodationId: 1,
      reviewId: 2,
      author: 'god1hyuk',
      descript: '깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
    {
      accommodationId: 1,
      reviewId: 2,
      author: 'god1hyuk',
      descript: '깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
    {
      accommodationId: 1,
      reviewId: 2,
      author: 'god1hyuk',
      descript: '깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
    {
      accommodationId: 1,
      reviewId: 2,
      author: 'god1hyuk',
      descript: '깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
    {
      accommodationId: 1,
      reviewId: 2,
      author: 'god1hyuk',
      descript:
        '깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
  ];
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
            <InputArea>
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
            </InputArea>
            {/* 인풋창 */}
            <ReviewList>
              {/* 맵돌리는부분 */}

              {review.reverse().map((item) => {
                return isLoading ? (
                  <ReviewSkeleton />
                ) : (
                  <ReviewCard>
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
            <PostButtonArea>
              <PostButton onClick={()=>{dispatch(ReviewThunk())}} >작성하기</PostButton>
            </PostButtonArea>
          </ReviewArea>
        </ReviewBody>
      </ReviewModalSection>
    </ReviewModalBody>
  );
};

export default ReviewModal;
