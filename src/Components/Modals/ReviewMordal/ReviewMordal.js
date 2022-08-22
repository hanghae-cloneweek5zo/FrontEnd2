import React, { useState } from 'react';
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
const ReviewModal = () => {
  const starEver = 0;
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
      descript: '깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요깨끗하니 좋네요.',
      star: 4,
      createdAt: '2022-08-19T20:46:32.032281',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmicYEwINyqEyM0SzoypDtJPFD1QPzjAkeBg&usqp=CAU',
    },
  ];
  return (
    <ReviewModalBody display={true}>
      <ReviewModalSection>
        <ReviewModalHeader>
          <HeaderCancel />
        </ReviewModalHeader>
        {/* 헤더끝 */}
        <ReviewBody>
          <BodyHeader>
            <StarandReview>★ 4.87 후기 47개</StarandReview>
          </BodyHeader>

          <ReviewArea>
            {/* 인풋창 */}
            <InputArea>
              <StarSelectBox>
                <option value={1}>★</option>
                <option value={2}>★2</option>
                <option value={3}>★3</option>
                <option value={4}>★4</option>
                <option value={5}>★5</option>
              </StarSelectBox>
              <ReviewInput maxLength={40} />
            </InputArea>
            {/* 인풋창 */}
            <ReviewList>
              {/* 맵돌리는부분 */}

              {review.reverse().map((item) => {
                return (
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
              <PostButton>작성하기</PostButton>
            </PostButtonArea>
          </ReviewArea>
        </ReviewBody>
      </ReviewModalSection>
    </ReviewModalBody>
  );
};

export default ReviewModal;
