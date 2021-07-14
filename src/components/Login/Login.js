import React from "react";
import "./Login.scss";
import { IoIosArrowForward } from "react-icons/io";
import MainPic from "../../assets/MainPic.png";

const Login = () => {
  return (
    <>
      <div>
        <img src={MainPic} alt="subPic" className="MainPic" />
        <div className="LoginForm">
          <div className="LoginInfo">
            <span className="LoginSpan">ID</span> <br />
            <input className="LoginId" type="text" /> <br />
            <span className="LoginSpan">Password</span> <br />
            <input className="LoginPw" type="password" /> <br />
            <input className="LoginCb" type="checkbox" />
            <span className="rememberSpan">로그인 기억하기</span> <br />
            <button className="LoginBtn">로그인</button> <br />
            <span className="noInfo">아직 계정이 없다면</span>
            <span className="loginIcon">
              <IoIosArrowForward />
            </span>
            <a className="registerBtn" href="/register">
              회원가입
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
