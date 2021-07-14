import React from "react";
import "./Intro.scss";
import RedLogo from "../../assets/RedLogo.png";
import React from 'react';
import './Intro.scss';

const Intro = () => {
  return (
    <div className="Intro">
      <span className="top">ODak9</span>
      <div className="Intro-Content">
        <span className="mid">
          ODak9는 가수(아이돌),배우 그리고 애니메이션 등을 덕질할 수 있게 만들어주는 웹
          사이트입니다.
        </span>{" "}
        <br />
        <span className="end">
          한 분야에 대해 덕질을 하는 덕후들에게 쉽고 간단하게 정보를 공유할 수 있게 하고, <br />{" "}
          수많은 덕후들이 거부감 없이 서로 공유 할 수 있게 노력하겠습니다.
        </span>
      </div>
      <img src={RedLogo} alt="subPic" className="IntroLogo" />
      <div className="Intro-Content">
        <span className="mid">ODak9에는 이러한 기능들을 제공합니다.</span> <br />
        <span className="end">
          - 총 8개의 카테고리(가수 / 배우 / 유튜버 / 애니메이션 / 모델 / 스포츠 / 동물 / 기타)를
          제공함으로서, <br />
          다양한 덕질을 소통과 함께 즐길 수 있습니다.
          <br /> - 각 카테고리마다 커뮤니티가 존재하고, 각 카테고리의 커뮤니티에서 같은 취향을
          공유하는 사람들과의
          <br /> 취향, 스케줄, 사진 등을 공유할 수 있습니다.
          <br /> - 평소 주변에 같은 주제를 좋아하는 사람이 없어 힘들었다면 이제는 OD9에서 같은
          취향의 사람들을 쉽게 만나고 소통해보세요!
        </span>
      </div>
    </div>
  );
};

export default Intro;
