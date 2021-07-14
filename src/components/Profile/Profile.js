import React from "react";
import "./Profile.scss";
import { GrLogout } from "react-icons/gr";
import MainPic from "../../assets/MainPic.png";
import RedLogo from "../../assets/RedLogo.png";

const Profile = () => {
  return (
    <>
      <div>
        <img src={MainPic} alt="subPic" className="MainPic" />
        <div className="ProfileForm">
          <img src={RedLogo} alt="subPic" className="RedLogo" />
          <span className="name">박지나</span>
          <span className="nickName">무병장수</span>
          <span className="logoutIcon">
            <GrLogout />
          </span>
          <button className="logoutBtn">로그아웃</button>
        </div>
        <div className="ProfileMenu">
          <ul className="ProfileUl">
            <li className="ProfileLi">
              <a className="ProfileA" href="">
                알림
              </a>
            </li>
            <li className="ProfileLi">
              <a className="ProfileA" href="">
                MY 구독
              </a>
            </li>
            <li className="ProfileLi">
              <a className="ProfileA" href="">
                캘린더
              </a>
            </li>
            <li className="ProfileLi">
              <a className="ProfileA" href="">
                내 게시물
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
