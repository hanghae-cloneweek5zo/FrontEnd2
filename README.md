# 프로젝트 소개
![image](https://user-images.githubusercontent.com/107654769/186507477-6a6108f7-359f-4cda-8d96-c7085106ad79.png)
<h2>에어비엔비 클론코딩</h2>
<li>개발 인원 : 프론트엔드 3명, 백엔드 3명</li>
<li>개발 기간 : 8/19 ~ 8/25</li>
<li>기술 스택: React, Redux(Redux Toolkit), Styled-components, Axios, Javascript, React-router-dom, Moment, React-password-strength-bar, React-icons, Json-server react-intersection-observer, google map,   </li>
<li>배포 환경 : Front - ec2</li>
<li>협업 도구 : Git organizations, Slack, Notion, GatherTown, Kakao Talk</li>


---


<h2><a href=https://www.notion.so/SA-5-b42691a27f1048768da8880bae9727c2>팀 노션</a></h2>

## 👨‍👧‍👦 Front 구성원

|   Name    |            Github             |                                   Role                                    |
| :-------: | :---------------------------: | :-----------------------------------------------------------------------: |
| 👦 서동욱 |  https://github.com/SeoNaRu   |               상세 페이지 및 구글맵              |
| 👦 강인호 | https://github.com/duck9-papa |                       로그인,회원가입모달,리뷰모달,필터모달                        |
| 👦 신범수 | https://github.com/BUMSUSHN | 메인페이지 및 디자인 |


## 주요기능 및 소개



![KakaoTalk_20220825_044705361](https://user-images.githubusercontent.com/107654769/186510040-3e50383a-f246-455a-8445-e3c078d28435.png)


처음 접속하면 나오는 메인페이지입니다.
맨 위 헤더부분, 카테고리부분 바디부분으로 크게 3등분 하였고 하우스를 출력하는 부분은 카테고리별로 서버에 요청을해서 해당 카테고리에 속하는 집들의 데이터를 서버로부터 받아와서 map으로 컴포넌트를 반복생성 하였습니다. 


![image](https://user-images.githubusercontent.com/107654769/186510767-9533e611-68db-4e2d-b183-bab2eb189208.png)
![image](https://user-images.githubusercontent.com/107654769/186510891-ac9d7e04-c633-412c-871c-e8ba4ca27c50.png)


헤더부분은 로고와 프로필버튼으로 이루어져있으며 로그인을 하면 프로필버튼의 이미지가 에어비앤비의 로고로 바뀌게끔 설정했습니다.


![KakaoTalk_20220825_045342665](https://user-images.githubusercontent.com/107654769/186511780-04e9098f-29c4-4d77-bac6-6db90c39181c.png)


프로필버튼을 누르면 로그인창과 회원가입창으로 갈수있는 모달이 출력되고 해당 모달은 ref값을 지정해서 모달 영역외의 지점을 클릭하면 자동으로 닫히게 설정했습니다.


![KakaoTalk_20220825_050334537](https://user-images.githubusercontent.com/107654769/186512702-4419d837-4d85-43e7-af5d-566af579766f.png)


서버에서 하우스의 데이터를 가져오는 동안에는 스켈레톤효과를 추가해 표시될 위치를 사전에 나타내었습니다.


![image](https://user-images.githubusercontent.com/107654769/186513508-83a26311-e853-45c6-91d6-6f17d9da18b3.png)


로그인 모달입니다. 아이디와 비밀번호를 입력하여 로그인 할 수 있고, 회원가입 모달로 이동할 수 있습니다.
소셜로그인은 처음에는 기획했으나 여러가지 사정으로 구현하지 못했습니다. 디자인적으로 예쁜것같아서 해당 버튼을 누르면 준비중입니다 라는 alert이 뜨게끔 설정하고 버튼은 남겨놓았습니다.


![image](https://user-images.githubusercontent.com/107654769/186513910-e316b233-c197-4c4d-941d-9e002f887c14.png)


회원가입 모달창 입니다. 로그인창에서 airbnb 회원가입을 누르거나 프로필모달에서 접근할 수 있습니다. 이메일과 닉네임은 버튼을 누르면 서버에서 중복여부를 판단해서 불린값을 받아 온 후 2가지의 중복여부와 비밀번호가 둘 다 일치할경우 서버로 회원가입 요청이 보내집니다. 서버로 요청이 보내지면 바로 로그인 모달로 이동하게끔 설정했습니다.



![image](https://user-images.githubusercontent.com/107654769/186514839-32101937-c63d-4110-8625-a9d6db000a7a.png)


react-intersection-observer 의 useInview 기능을 사용했습니다. 해당ref를 준 컴포넌트가 사용자의 화면에 보이면 inView의 값이 true가 됩니다.


![image](https://user-images.githubusercontent.com/107654769/186515229-5a55aab6-d316-4cef-8900-afb56467449f.png)

useEffect로 inView의 값이 변하고 로딩중이 아닐때 페이지값을 1씩 증가시킨 후


![image](https://user-images.githubusercontent.com/107654769/186515355-8467d12b-4c94-4846-8b96-4412a9dbf4b3.png)


페이지값이 변할때마다 서버에 요청을 보내와서 정해진 양만큼의 데이터를 받아오게끔 구현했습니다.


![image](https://user-images.githubusercontent.com/107654769/186514586-2390c32c-b52d-4040-839a-f479eec875dc.png)


{저희는 일단 전체보기 카테고리에만 무한스크롤을 적용하였습니다. 전체보기를 카테고리값 0 부터 하나씩 증가할때마다 카테고리가 변하는 형식으로 구현하려고 했고
전체보기에서만 지원을 하므로 카테고리가 0일때(전체보기상태일때)에만 MainRefDiv가 보이게끔 구현해서 다른 카테고리에서 불필요한 렌더링이 일어나지않게 구현하려고 했습니다.}



![KakaoTalk_20220825_053024396](https://user-images.githubusercontent.com/107654769/186517592-ed65419b-cf75-4fad-9c86-af90217b7b06.png)


메인페이지에서 하우스를 클릭하면 해당 하우스의 상세페이지로 이동합니다 하우스아이디를 param값으로 받아서 서버에서 해당 집에대한 값만 받아온 후 페이지에서 출력합니다.


![KakaoTalk_20220825_053407760](https://user-images.githubusercontent.com/107654769/186518079-1083a672-bceb-4936-8900-30a777179bd9.png)


리뷰 부분입니다. 해당 하우스에대한 리뷰값들을 받아와서 일정한 갯수만큼 출력합니다. 모두 보기 버튼을 누르면 리뷰 모달이 나와서 리뷰를 전부 볼 수 있습니다


![image](https://user-images.githubusercontent.com/107654769/186520146-e8fba13c-45b6-4356-a178-cb5e3466d48d.png)


리뷰 모달입니다. 디테일 페이지에서 받아온 하우스의 리뷰데이터를 프롭스로 내려받아서 출력합니다.


![image](https://user-images.githubusercontent.com/107654769/186527609-b132152f-2f5b-413e-ae40-b47dac83b5fd.png)


필터 모달입니다. 조건을 설정하고 조회버튼을 누르면 해당 조건에 맞는 집들을 서버에서 보내준 후 페이지에 출력합니다.



![image](https://user-images.githubusercontent.com/107654769/186625054-318830e4-b631-40c4-95ba-f8ed51cdcf59.png)



상세페이지에서는 구글맵을 지원하여 서버로부터 받은 위도와 경도값으로 마커를 찍습니다.





##  트러블슈팅


<li>지도에 마커를 여러개 찍고 싶었는데 막혔었다. 마커 자체가 지도위에 올라가는 하나의 컴포넌트인걸 찾아내서 반복해서 마커를 여러개 찍었다.</li> 

<li> SVG컴포넌트를 여러개 만들어야 하는 상황이 생겼었는데 맵함수를 이용해서 할수있는 방법이 없을까 하다가 배열자체에 컴포넌트를 넣어서 시도했더니 성공하였다. </li>


![image](https://user-images.githubusercontent.com/107654769/186630944-7b68b7d9-8bf1-4b1a-bf76-393978db49bc.png)

