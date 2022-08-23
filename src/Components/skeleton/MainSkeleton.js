import React from 'react';
import styled from 'styled-components';

const SkeletonBody = styled.div``;

const SkeletonImgDiv = styled.div`
  background-color: #e2e2e2;
  width: 300px;
  height: 280px;
  border-radius: 20px;
`;
const NameArea = styled.div`
  display: flex;
  margin: 5px 0;
`;
const NameDiv = styled.div`
  height: 15px;
  background-color: #e2e2e2;
  width: 150px;
  border-radius: 5px;
`;
const StarDiv = styled.div`
  align-items: end;
  background-color: #e2e2e2;
  width: 40px;
  height: 15px;
  margin-left: 100px;
  border-radius: 5px;
`;
const PriceDiv = styled.div`
  height: 15px;
  background-color: #e2e2e2;
  width: 120px;
  border-radius: 5px;
`

const MainSkeleton = () => {
  return (
    <SkeletonBody>
      <SkeletonImgDiv />
      <NameArea>
      <NameDiv />
      <StarDiv />
      </NameArea>
      <NameArea>
        <PriceDiv/>
      </NameArea>
      <NameArea>
        <NameDiv/>
      </NameArea>
      
    </SkeletonBody>
  );
};

export default MainSkeleton;
