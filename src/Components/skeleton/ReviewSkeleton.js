import React from 'react';
import styled from 'styled-components';

const ReviewSkeleton = () => {
  return (
    <SkeletonCard>
      <SkeletonInfo>
        <ProfileImg />
        <SkeletonTextArea>
          <SkeletonName></SkeletonName>
          <SkeletonDate></SkeletonDate>
        </SkeletonTextArea>
      </SkeletonInfo>
      <SkeletonContent></SkeletonContent>
    </SkeletonCard>
  );
};

export const SkeletonCard = styled.div`
  width: 100%;
  margin-top: 20px;
`;
export const SkeletonInfo = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;
export const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 8%;
  background-color: #e2e2e2;
`;

export const SkeletonTextArea = styled.div`
  margin-left: 10px;
`;
export const SkeletonName = styled.div`
  width: 70px;
  height: 17px;
  background-color: #e2e2e2;
  margin: 5px 0;
  border-radius: 10px;
`;

export const SkeletonDate = styled.div`
  width: 70px;
  height: 17px;
  background-color: #e2e2e2;
  margin: 5px 0;
  border-radius: 10px;
`;
export const SkeletonContent = styled.div`
  width: 500px;
  height: 35px;
  background-color: #e2e2e2;
  margin: 5px 20px;
  border-radius: 10px;
`;

export default ReviewSkeleton;
