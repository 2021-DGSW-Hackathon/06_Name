import React from "react";
import "./Profile.scss";
import MainPic from "../../assets/MainPic.png";

const Profile = () => {
  return (
    <>
      <img src={MainPic} alt="subPic" className="MainPic" />
      <div>
        <ul>
          <li>
            <a href="">알림</a>
          </li>
          <li>
            <a href="">MY 구독</a>
          </li>
          <li>
            <a href="">캘린더</a>
          </li>
          <li>
            <a href="">내 게시물</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
