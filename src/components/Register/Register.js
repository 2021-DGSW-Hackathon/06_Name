import React from "react";
import WhiteLogo from "../../assets/WhiteLogo.png";
import SubPic from "../../assets/SubPic.png";
import "./Register.scss";

const Register = () => {
  return (
    <>
      <div className="SignUp">
        <img src={WhiteLogo} alt="WhiteLogo" />
        <div className="menu">
          <span className="reg">회원가입</span>
          <a className="home" href="/">
            홈(로그인)
          </a>
        </div>
      </div>
      <img src={SubPic} alt="subPic" className="subPic" />
      <div className="signUp">
        <div className="signUpForm">
          <span className="signUpSpan">회원가입</span>
          <div className="signUpInfo">
            <span className="infoSpan">이름(본명)</span> <br />
            <input className="infoInput" type="text" placeholder="ex)홍길동" /> <br />
            <span className="infoSpan">닉네임</span> <br />
            <input className="infoInput" type="text" placeholder="ex)아잉" /> <br />
            <span className="infoSpan">아이디</span> <br />
            <input className="idInput" type="text" placeholder="아이디" />
            <button className="checkBtn">중복확인</button> <br />
            <span className="infoSpan">비밀번호</span> <br />
            <input className="password" type="password" placeholder="비밀번호" /> <br />
            <input className="checkPassword" type="password" placeholder="비밀번호 클릭" /> <br />
            <button className="signUpBtn">가입하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
